const { getDb } = require("../utils/dbConnect");



module.exports.getAllGenders = async(req, res, next) =>{


    try{
        const db = getDb();
        const gender = req.body;
        const result = await db.collection("gender").insertOne(gender);
        console.log(result);
        res.send("Successful")
    } catch(error) {
        next(error);
    } 
   
}

module.exports.saveAGenders = async(req, res) =>{
    const gender = await genderCollection.find().toArray();
    res.send(gender)
}