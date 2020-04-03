import { MongoClient } from "mongodb";
import { MONGO_URL } from "@config";
import _values from "lodash/values";
import { countries } from "./Data/countries";
import { CITIES_OF_PUNJAB } from "./Data/Cities/punjab";
import { CITIES_OF_SINDH } from "./Data/Cities/sindh";
import { CITIES_OF_KPK } from "./Data/Cities/kpk";
import { CITIES_OF_GB } from "./Data/Cities/gb";
import { CITIES_OF_AJK } from "./Data/Cities/ajk";
import { CITIES_OF_BALOCHISTAN } from "./Data/Cities/balochistan";
import { CITIES_OF_ISLAMABAD } from "./Data/Cities/islamabad";

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

    await db.dropCollection("countries");
    await db.dropCollection("states");
    await db.dropCollection("cities");

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
