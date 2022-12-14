


module.exports.getAllGenders = async(req, res) =>{
    const gender = req.body;
    if(!gender.gender){
        return res.send({success: false, error: "Please Provide all information"})
    }
    const result = await genderCollection.insertOne(gender);
    res.send({success: true, message: `Successfully inserted ${gender.religion}!` });
}

module.exports.saveAGenders = async(req, res) =>{
    const gender = await genderCollection.find().toArray();
    res.send(gender)
}