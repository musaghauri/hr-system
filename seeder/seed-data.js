
const MongoClient = require('mongodb').MongoClient;
// import MONGO_URL from '@config';
const Config = require('../config');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

MongoClient.connect(Config.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    async (err, client) => {
        if (err) {
            console.log('error while connecting mongoDB atlas ..\n', err);
            return;
        }
        const db = client.db('test');

        await db.collection("permissions").remove();
        await db.collection("roles").remove();
        await db.collection("users").remove();

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
        let permissionIdsArray = [];
        Object.keys(savedPermissions.insertedIds).map((key) => {
            permissionIdsArray.push(savedPermissions.insertedIds[key])
        })

        let roles = []
        createRole = (name, description, permissions) => {
            return {
                name,
                description,
                permissions,
            }
        }
        roles.push(createRole('ADMIN', '', permissionIdsArray));
        roles.push(createRole('EMPLOYEE', '', permissionIdsArray));

        // create roles
        const savedRoles = await db.collection("roles").insertMany(roles);

        let users = [];
        createAdmin = (email, role, name, password, isActive, isVerified) => {
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
        users.push(createAdmin('super@gmail.com', adminRole._id, 'Super', 'testing', true, true));

        // create users
        await db.collection("users").insertMany(users, (err, res) => {
            if (err) throw err;
        });

        // client.close();
    });