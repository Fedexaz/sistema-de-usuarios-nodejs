const { writeFileSync, readFileSync } = require('fs');

const getUserService = (data) => {
    const user = data.replaceAll(' ', '_').toLowerCase();
    const resp = readFileSync(`./users/${user}.json`, 'utf-8');
    const datosListos = JSON.parse(resp);
    return datosListos;
};

const addUserService = (data) => {
    const datos = JSON.stringify(data);
    writeFileSync(`./users/${data.user.replaceAll(' ', '_').toLowerCase()}.json`, datos, 'utf-8');
    return true;
};

module.exports = {
    addUserService,
    getUserService
};