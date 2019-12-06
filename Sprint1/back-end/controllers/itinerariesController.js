const Intinerary = require("../models/ItineraryModel");

const IntineraryController = {
    traerIntinerary: async (req, res) => {
        let cityRequested = req.params.name;
        const data = await Intinerary.findOne({ciudad: cityRequested})
        .then(city=>{
          res.json(city)
        }).catch(err => console.log(err)); //con el .find trae ya todo del DB, si le agrego un id puede traer uno puntual
        //res.json({ respuesta: data });
      },

      crearIntinerary: async (req, res) => {
        //Lo hago async ya que al grabar tarda tiempo
        //como la peticion viene del cuerpo (req.body) y url (req.params)
        var uno = req.body.titulo;
        var dos = req.body.ciudad;
        var tres = req.body.picURL;
        var cuatro = req.body.rating;
        var cinco = req.body.duration;
        var seis = req.body.hashtags;
    
        const nuevoIntinerario = new Intinerary({
            titulo: uno,
            ciudad:dos,
            picURL:tres,
            rating:cuatro,
            duration:cinco,
            hashtags:seis
        });
        await nuevoIntinerario.save(); //await hace que espere a que termine y ejecuta lo de abajo
        res.send("respuesta " + "OK");
      },
}

