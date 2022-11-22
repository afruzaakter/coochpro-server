
const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.m8gbcys.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log(uri)

async function run(){
    try{
        // ---------------MongoDB Data Collection -------------------
        await client.connect();
        const genderCollection = client.db('genderList').collection('gender');
        const religionCollection = client.db('religionList').collection('religion');

        // --------------Gender all method start--------------
        // --------------Gender post method--------------
        app.post('/gender', async(req, res) =>{
            const gender = req.body;
            if(!gender.gender){
                return res.send({success: false, error: "Please Provide all information"})
            }
            const result = await genderCollection.insertOne(gender);
            res.send({success: true, message: `Successfully inserted ${gender.religion}!` });
        })
        // ---------------Gender get method--------------------
        app.get('/gender', async(req, res)=> {
            const query = {};
            const cursor = genderCollection.find(query);
            const genders = await cursor.toArray();
            res.send(genders)
        })
        // --------------------Gender  Update method-----------------------
        app.put('/gender/:id', async(req, res) =>{
            const id = req.params.id;
            const filter = {_id: ObjectId(id)};
            const options = {upsert: true};
            const updateDoc = {
                $set: {
                    gender: data.gender,
                }
            }
            const result = await genderCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        })

        // --------------------Gender Delete method ------------------
          app.delete('/gender/:id', async(req, res) =>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await genderCollection.deleteOne(query)
            res.send(result);
          })       
         // --------------Gender all method End--------------



        // ------------------Religion post method -------------
        // app.post('/religion', async(req, res)=>{
        //     const religion = req.body;
        //     if(!religion.religion){
        //         return res.send({success: false, error: "Please Provide all information"})
        //     }
        //     const result = await religionCollection.insertOne(religion);
        //     res.send({success: true, message: `Successfully inserted ${religion.religion}`});

        // })
        app.post('/religion', async(req, res) =>{
            const newReligion = req.body;
            const result = await religionCollection.insertOne(newReligion);
            res.send(result);
        })
        // ----------------Religion get method----------------
       app.get('/religion', async(req, res) =>{
        const query = {};
        const cursor = religionCollection.find(query);
        const religions = await cursor.toArray();
        res.send(religions)
       })


    }
    finally{

    }
}

run().catch(console.dir);

app.get('/', (req, res) =>{
    res.send('Server is Running')
});
app.listen(port, () => {
    console.log('Listening to port', port);
})





