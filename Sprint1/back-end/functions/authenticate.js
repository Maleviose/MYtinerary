require("dotenv").config();
const jwt = require('jasonwebtoken');

function authenticate(req, res, next){
    const token = req 
    if(!token){
        res.status(401).json({ success: false, message: "No token, authorization denied" });
        
        try{
            const decoded = jwt.verify(token, process.env.Key);
            req.usuario = decoded;
            next();
        }catch(e){
            res.status(400).json({msg:'Token is not valid'})
        }
        
    }
}
module.export = authenticate;