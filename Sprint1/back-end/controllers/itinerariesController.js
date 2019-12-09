const Itinerary = require("../models/ItinerariesModel");

const ItineraryController = {
    traer: async(req, res) => {
        const data = await Itinerary.find(); //con el .find trae ya todo del DB, si le agrego un id puede traer uno puntual
        res.json({ respuesta: data });
    },
    // traer: async(req, res) => {
    //     let itineraryRequested = req.params.name;
    //     const data = await Itinerary.findOne({ intinerario: itineraryRequested })
    //         .then(city => {
    //             res.json(city)
    //         }).catch(err => console.log(err)); //con el .find trae ya todo del DB, si le agrego un id puede traer uno puntual
    //     //res.json({ respuesta: data });
    // },

    crear: async(req, res) => {
        //Lo hago async ya que al grabar tarda tiempo
        //como la peticion viene del cuerpo (req.body) y url (req.params)
        var uno = req.body.titulo;
        var tres = req.body.picURL;
        var cuatro = req.body.rating;
        var cinco = req.body.duration;
        var seis = req.body.hashtags;

        const nuevoIntinerario = new Itinerary({
            titulo: uno,
            picURL: tres,
            rating: cuatro,
            duration: cinco,
            hashtags: seis
        });
        await nuevoIntinerario.save(); //await hace que espere a que termine y ejecuta lo de abajo
        res.send("respuesta " + "OK");
    },
    borrar: async(req, res) => {
        var id = req.params.id;
        await Itinerary.findOneAndDelete({ _id: id }),
            res.json({ respuesta: "Intinerario Borrada" });
    },
    modificar: async(req, res) => {
        //Hay que mandar todos los campos de vuelta, si le falta uno le pone null

        var id = req.params.id;
        var titulo1 = req.body.titulo;
        var picURL1 = req.body.picURL;
        var rating1 = req.body.rating;
        var duration1 = req.body.duration;
        var hashtags1 = req.body.hashtags;

        await Itinerary.findOneAndUpdate({ _id: id }, { titulo: titulo1, picURL: picURL1, rating: rating1, duration: duration1, hashtags: hashtags1 });
        //si quiero modificar un solo parametro hay un metodo patch
        res.json({ respuesta: "Ciudad modificada" });
    }
};
module.exports = ItineraryController;