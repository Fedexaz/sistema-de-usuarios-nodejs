const { existsSync, readdir, appendFileSync, appendFile } = require("fs");

// const obtenerID = ()=>{
//     readdir("../users", (err, files) => {
//         if(err) console.log(err)
//         return files.length + 1
//     });
// }

module.exports = {
    addUser: function(name, lastname, email){
        if(existsSync(`../users/${name}.ini`)){
            return {
                msg: "El usuario ya existe!"
            }
        }else{
            if(name && lastname && email){
                const newUser = `Nombre: ${name}\nApellido: ${lastname}\nEmail: ${email}\nID:${name.length * 192 * lastname.length}`

                try{
                    appendFile(`../users/${name}.ini`, newUser, ()=>{
                        console.log("ok")
                    })
                }                
                catch(e){
                    return {
                        msg: "Error: " + e
                    }
                }
            }
            else{
                return {
                    msg: "Faltan campos para agregar el usuario"
                }
            }
        }
    },
    listUsers: function(){

    },
    deleteUser: function(){

    }
}