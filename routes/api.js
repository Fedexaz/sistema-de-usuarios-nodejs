const express = require("express")

const { addUser } = require("../models/api")

const api = express.Router()

api.get("/", (req, res) => {
    res.send("Hola! -------> Usa /adduser -> agregar nuevo usuario (eombre, apellido, email)")
})

api.post("/adduser", (req, res) => {
    const { name, lastname, email } = req.body
    if(addUser(name, lastname, email).msg){
        return res.status(400).json(addUser(name, lastname, email))
    }
    else{
        return res.json(addUser(name, lastname, email))
    }
})

module.exports = api;