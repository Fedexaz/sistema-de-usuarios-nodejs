const {
    addUserService,
    getUserService
} = require('../services/api.services.js');

const getUserController = (req, res) => {
    const { user } = req.params;
    if(!user) {
        return res.status(400).json({ status: 400, message: 'No se ha especificado el usuario.' });
    }

    try {
        const usuario = getUserService(user);
        if(usuario) {
            return res.status(200).json({ status: 200, message: 'Usuario encontrado!', data: usuario });
        }
        else {
            return res.status(401).json({ status: 401, message: 'Ocurrió un error durante la obtención del usuario.'});
        }
    } catch (error) {
        console.log(error);
        return res.status(404).json({ status: 404, message: 'Error al obtener usuario.' });
    }
};

const addUserController = (req, res) => {
    const { user, pass, email } = req.body;

    if(!user || !pass || !email) {
        return res.status(400).json({ status: 400, message: 'No se han proporcionado los datos necesarios para el registro.' });
    }

    try {
        const usuario = addUserService(req.body);
        if(usuario) {
            return res.status(201).json({ status: 201, message: 'Usuario creado correctamente.' });
        }
        else {
            return res.status(401).json({ status: 401, message: 'Ocurrió un error durante la creación del usuario.'});
        }
    } catch (error) {
        console.log(error);
        return res.status(404).json({ status: 404, message: 'Error al registrar usuario.' });
    }

};

module.exports = {
    addUserController,
    getUserController
};