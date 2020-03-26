
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// const Permission = require('../server/models/permission');
// const Role = require('../server/models/role');
// const User = require('../server/models/user');

const TEST_MONGO_URL = 'mongodb+srv://bitbytes:bitbytes123@hr-system-5a8n4.mongodb.net/development?retryWrites=true&w=majority';

MongoClient.connect(TEST_MONGO_URL,
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

        var permissionArray = [{
            name: "create",
            description: "create permission description",
            createdBy: null,
        }, {
            name: "delete",
            description: "delete permission description",
            createdBy: null,
        }, {
            name: "view",
            description: "view permission description",
            createdBy: null,
        }]
        await db.collection("permissions").insertMany(permissionArray, function (err, res) {
            if (err) throw err;
        });

        // create roles
        var rolesArray = [
            {
                name: 'admin',
                description: '',
                permissions: [],
            },
            {
                name: 'employee',
                description: '',
                permissions: [],
            },
        ]
        await db.collection("roles").insertMany(rolesArray, function (err, res) {
            if (err) throw err;
        });

        //  create users
        var users = [{
            email: "admin@gmail.com",
            role: 'admin',
            name: "seed1",
            password: bcrypt.hashSync('testing', 10),
            isActive: true,
            isVerified: true,
        }, {
            email: "test@hotmail.com",
            role: 'admin',
            name: "seed1",
            password: bcrypt.hashSync('testing', 10),
            isActive: true,
            isVerified: true,
        }, {
            email: "superadmin@hotmail.com",
            role: 'admin',
            name: "seed1",
            password: bcrypt.hashSync('testing', 10),
            isActive: true,
            isVerified: true,
        }];
        await db.collection("users").insertMany(users, function (err, res) {
            if (err) throw err;
            // client.close();
        });

    });