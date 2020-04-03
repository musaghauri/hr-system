import { MongoClient } from "mongodb";
import { MONGO_URL } from "@config";
import _values from "lodash/values";
import bcrypt from "bcrypt";
import { countries } from "./countries";
import { CITIES_OF_PUNJAB } from "./punjab";
import { CITIES_OF_SINDH } from "./sindh";
import { CITIES_OF_KPK } from "./kpk";
import { CITIES_OF_GB } from "./gb";
import { CITIES_OF_AJK } from "./ajk";
import { CITIES_OF_BALOCHISTAN } from "./balochistan";
import { CITIES_OF_ISLAMABAD } from "./islamabad";

MongoClient.connect(
  MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  async (err, client) => {
    if (err) {
      console.log("error while connecting mongoDB atlas ..\n", err);
      return;
    }
    const db = client.db("development");

    await db.dropCollection("permissions");
    await db.dropCollection("roles");
    await db.dropCollection("users");
    await db.dropCollection("countries");
    await db.dropCollection("states");
    await db.dropCollection("cities");

    const permissions = [
      {
        name: "CREATE",
        description: "create permission description",
        createdBy: null
      },
      {
        name: "DELETE",
        description: "delete permission description",
        createdBy: null
      },
      {
        name: "VIEW",
        description: "view permission description",
        createdBy: null
      }
    ];

    // create permissions
    const savedPermissions = await db
      .collection("permissions")
      .insertMany(permissions);
    const permissionIds = _values(savedPermissions.insertedIds);

    const roles = [];
    const createRole = (name, description, rolePermissions) => ({
      name,
      description,
      permissions: rolePermissions
    });
    roles.push(createRole("ADMIN", "", permissionIds));
    roles.push(createRole("EMPLOYEE", "", permissionIds));

    // create roles
    await db.collection("roles").insertMany(roles);

    const users = [];
    const createAdmin = (
      email,
      role,
      name,
      password,
      isActive,
      isVerified
    ) => ({
      email,
      role,
      name,
      password: bcrypt.hashSync(password, 10),
      isActive,
      isVerified
    });
    const adminRole = await db.collection("roles").findOne({ name: "ADMIN" });

    users.push(
      createAdmin(
        "admin@gmail.com",
        adminRole._id,
        "Admin",
        "testing",
        true,
        true
      )
    );
    users.push(
      createAdmin(
        "test@gmail.com",
        adminRole._id,
        "Test",
        "testing",
        true,
        true
      )
    );
    users.push(
      createAdmin(
        "super@gmail.com",
        adminRole._id,
        "Super Admin",
        "testing",
        true,
        true
      )
    );

    // create users
    await db.collection("users").insertMany(users, (err, res) => {
      if (err) throw err;
    });

    //countries
    await db.collection("countries").insertMany(countries);

    //States
    const pakistan = await db
      .collection("countries")
      .findOne({ name: "Pakistan" });
    const states = [
      {
        name: "Azad Jammu and Kashmir",
        country: pakistan._id,
        createdBy: null
      },
      { name: "Balochistan", country: pakistan._id, createdBy: null },
      { name: "Gilgit Baltistan", country: pakistan._id, createdBy: null },
      {
        name: "Islamabad Capital Territory",
        country: pakistan._id,
        createdBy: null
      },
      { name: "Khyber Pakhtunkhwa", country: pakistan._id, createdBy: null },
      { name: "Punjab", country: pakistan._id, createdBy: null },
      { name: "Sindh", country: pakistan._id, createdBy: null }
    ];

    await db.collection("states").insertMany(states, (err, res) => {
      if (err) throw err;
    });

    //cities
    const cities = [];

    const Punjab = await db.collection("states").findOne({ name: "Punjab" });
    const Sindh = await db.collection("states").findOne({ name: "Sindh" });
    const KPK = await db
      .collection("states")
      .findOne({ name: "Khyber Pakhtunkhwa" });
    const Islamabad = await db
      .collection("states")
      .findOne({ name: "Islamabad Capital Territory" });
    const GB = await db
      .collection("states")
      .findOne({ name: "Gilgit Baltistan" });
    const Balochistan = await db
      .collection("states")
      .findOne({ name: "Balochistan" });
    const AJK = await db
      .collection("states")
      .findOne({ name: "Azad Jammu and Kashmir" });

    cities.push(
      ...CITIES_OF_PUNJAB.map(city => ({
        city,
        state: Punjab._id,
        createBy: null
      }))
    );
    cities.push(
      ...CITIES_OF_SINDH.map(city => ({
        city,
        state: Sindh._id,
        createBy: null
      }))
    );
    cities.push(
      ...CITIES_OF_KPK.map(city => ({ city, state: KPK._id, createBy: null }))
    );
    cities.push(
      ...CITIES_OF_ISLAMABAD.map(city => ({
        city,
        state: Islamabad._id,
        createBy: null
      }))
    );
    cities.push(
      ...CITIES_OF_GB.map(city => ({ city, state: GB._id, createBy: null }))
    );
    cities.push(
      ...CITIES_OF_BALOCHISTAN.map(city => ({
        city,
        state: Balochistan._id,
        createBy: null
      }))
    );
    cities.push(
      ...CITIES_OF_AJK.map(city => ({ city, state: AJK._id, createBy: null }))
    );

    await db.collection("cities").insertMany(cities, (err, res) => {
      if (err) throw err;
      console.log("seeding completed");
    });

    client.close();
  }
);
