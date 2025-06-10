const express = require('express')
const rout = express.Router();


rout.use(express.json());
rout.use(express.urlencoded({ extended: true }));
rout.use(express.static('views'))