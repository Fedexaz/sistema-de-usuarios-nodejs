const express = require("express")

const {
    getUserController,
    addUserController
} = require("../controllers/api.controllers");

const api = express.Router();

api.get('/:user', getUserController);
api.post('/', addUserController);

module.exports = api;