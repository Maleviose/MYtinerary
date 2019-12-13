const Activity = require("../models/activitiesModel");

const ActivityController = {
    traer: async(req, res) => {
        const data = await Activity.find(); //con el .find trae ya todo del DB, si le agrego un id puede traer uno puntual
        res.json({ respuesta: data });
    },

    crear: async(req, res) => {
        //Lo hago async ya que al grabar tarda tiempo
        //como la peticion viene del cuerpo (req.body) y url (req.params)
        var uno = req.body.titulo;
        var dos = req.body.itineraryId;

        const nuevaActividad = new Activity({
            titulo: uno,
            itineraryId: dos,
        });
        await nuevaActividad.save(); //await hace que espere a que termine y ejecuta lo de abajo
        res.send("respuesta " + "OK");
    },

};
module.exports = ActivityController;