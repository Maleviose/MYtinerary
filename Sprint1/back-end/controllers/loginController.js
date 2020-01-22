const User = require("../models/createUsersModel");
const bcrypt = require('bcrypt');
require("dotenv").config();
const jwt = require("jsonwebtoken");

const loginController = {
    ingresar: async(req, res, next) => {
        var storeEmail = req.body.mail;
        var storePassword = req.body.password;

        //encriptando contraseña
        // const saltRounds = 10;
        // var salt = bcrypt.genSaltSync(saltRounds);
        // var hashedPass = bcrypt.hashSync(storePassword, salt);

        //Validando datos
        if (!storePassword || !storeEmail) {
            res.json({ success: false, message: "Please enter all fields" });
        }
        const emailRepetido = await User.findOne({ mail: storeEmail });
        if (emailRepetido == null) {
            res.json({ success: false, message: "User Does not exists" });
        } else {
            //console.log(emailRepetido.password)
            const contraseñaValida = bcrypt.compareSync(storePassword, emailRepetido.password);
            if (!contraseñaValida) {
                res.json({ success: false, message: "Invalid password" });
            } else {
                jwt.sign({ mail: storeEmail },
                    process.env.Key, { expiresIn: 3600 }, (err, token) => {
                        res.json({ success: true, usuario: { username: storeEmail, password: storePassword }, token })
                            // console.log("token")
                            // console.log(token)
                    })
            }
        }
        //await nuevoUsuario.save();
        //res.json({ success: true, message: "Usuario cargado intento de logeo con "  });
    }
}

module.exports = loginController;