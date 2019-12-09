const City = require("../models/citiesModel");

const citiesController = {
    listarCities: async(req, res) => {
        const data = await City.find(); //con el .find trae ya todo del DB, si le agrego un id puede traer uno puntual
        res.json({ respuesta: data });
    },
    cargarCities: async(req, res) => {
        //Lo hago async ya que al grabar tarda tiempo
        //como la peticion viene del cuerpo (req.body) y url (req.params)
        var uno = req.body.ciudad;
        var dos = req.body.pais;

        const nuevaCiudad = new City({
            ciudad: uno,
            pais: dos
        });
        await nuevaCiudad.save(); //await hace que espere a que termine y ejecuta lo de abajo
        res.send("respuesta " + "OK");
    },
    borrarCities: async(req, res) => {
        var id = req.params.id;
        await City.findOneAndDelete({ _id: id }),
            res.json({ respuesta: "Ciudad Borrada" });
    },
    modificarCities: async(req, res) => {
        //Hay que mandar todos los campos de vuelta, si le falta uno le pone null

        var id = req.params.id;
        var ciudad1 = req.body.ciudad;
        var pais1 = req.body.pais;

        await City.findOneAndUpdate({ _id: id }, { ciudad: ciudad1, pais: pais1 });
        //si quiero modificar un solo parametro hay un metodo patch
        res.json({ respuesta: "Ciudad modificada" });
    }

};
module.exports = citiesController;