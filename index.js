'use strict';
require('dotenv').config();

let PORT = process.env.PORT || 3000;

const server=require("./src/server");

const {sequelize}=require("./src/module/index");

sequelize.sync().then(() => {
        // start();
        server.start(PORT);
    }).catch(console.error);