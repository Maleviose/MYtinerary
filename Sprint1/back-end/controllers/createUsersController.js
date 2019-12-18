const User = require("../models/createUsersModel");
const bcrypt = require('bcrypt');

const usersController = {
    traerTodos: async(req, res) => {
        const data = await User.find(); //con el .find trae ya todo del DB, si le agrego un id puede traer uno puntual
        console.log(data);
        res.json({ respuesta: data });
    },
    registrar: async(req, res) => {
        //Lo hago async ya que al grabar tarda tiempo
        //como la peticion viene del cuerpo (req.body) y url (req.params)
        var storeUsername = req.body.username;
        var storeEmail = req.body.mail;
        var storePassword = req.body.password;
        var storePic = req.body.userPic;

        //encriptando contraseña
        const saltRounds = 10;
        var salt = bcrypt.genSaltSync(saltRounds);
        var hashedPass = bcrypt.hashSync(storePassword, salt);

        //validando datos de entrada!
        if (storeUsername.length < 5) {
            res.json({ success: false, message: "Username less than 5 letters" });
        } 
        
        const emailRepetido = await User.findOne({mail:storeEmail});
        if(emailRepetido!=null){
            res.json({ success: false, message: "Invalid mail, already exists account" });
        }

            const nuevoUsuario = new User({
                username: storeUsername,
                mail: storeEmail,
                password: hashedPass,
                userPic: storePic
            });

        await nuevoUsuario.save(); 
        res.json({ success: true, message: "Usuario cargado" });
    }
};
module.exports = usersController;