const User = require("../models/usersModel");

const usersController = {
    traerTodos: async(req, res) => {
        const data = await User.find(); //con el .find trae ya todo del DB, si le agrego un id puede traer uno puntual
        console.log(data)
        res.json({ respuesta: data });
    },
    registrar: async(req, res) => {
        //Lo hago async ya que al grabar tarda tiempo
        //como la peticion viene del cuerpo (req.body) y url (req.params)
        var uno = req.body.username;
        var dos = req.body.mail;
        var tres = req.body.password;
        var cuatro = req.body.userPic

        const nuevoUsuario = new User({
            username: uno,
            mail: dos,
            password: tres,
            userPic: cuatro
        });
        await nuevoUsuario.save(); //await hace que espere a que termine y ejecuta lo de abajo
        res.send("respuesta " + "OK");
    },

};
module.exports = usersController;