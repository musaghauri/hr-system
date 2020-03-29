
import { MongoClient } from 'mongodb';
import { MONGO_URL } from '@config';
import _values from 'lodash/values';
import bcrypt from 'bcrypt';

MongoClient.connect(MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    async (err, client) => {
        if (err) {
            console.log('error while connecting mongoDB atlas ..\n', err);
            return;
        }
        const db = client.db('development');

        await db.dropCollection("permissions");
        await db.dropCollection("roles");
        await db.dropCollection("users");

        let permissions = [
            {
                name: "CREATE",
                description: "create permission description",
                createdBy: null,
            },
            {
                name: "DELETE",
                description: "delete permission description",
                createdBy: null,
            },
            {
                name: "VIEW",
                description: "view permission description",
                createdBy: null,
            }
        ]

        // create permissions
        let savedPermissions = await db.collection("permissions").insertMany(permissions);
        let permissionIds = _values(savedPermissions.insertedIds);

        let roles = []
        const createRole = (name, description, permissions) => {
            return {
                name,
                description,
                permissions,
            }
        }
        roles.push(createRole('ADMIN', '', permissionIds));
        roles.push(createRole('EMPLOYEE', '', permissionIds));

        // create roles
        await db.collection("roles").insertMany(roles);

        let users = [];
        const createAdmin = (email, role, name, password, isActive, isVerified) => {
            return {
                email,
                role,
                name,
                password: bcrypt.hashSync(password, 10),
                isActive,
                isVerified,
            }
        }
        let adminRole = await db.collection("roles").findOne({ name: 'ADMIN' });

        users.push(createAdmin('admin@gmail.com', adminRole._id, 'Admin', 'testing', true, true));
        users.push(createAdmin('test@gmail.com', adminRole._id, 'Test', 'testing', true, true));
        users.push(createAdmin('super@gmail.com', adminRole._id, 'Super Admin', 'testing', true, true));

        // create users
        await db.collection("users").insertMany(users, (err, res) => {
            if (err) throw err;
            console.log('seeding completed');
        });

        client.close();
    });