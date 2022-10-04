var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

const JWT_SECRET = "helloworld";


const fetchmentor = async (req, res, next) => {
   
    try {
       
        const token=req.header('_id')
        req.id = token.id;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}


module.exports = fetchmentor;