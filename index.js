
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
        const maritalStatusCollection = client.db('maritalList').collection('marital');
        const bloodGroupCollection = client.db('bloodGroupList').collection('blood');
        const locationCollection = client.db('locationList').collection('location');
        const divisionCollection = client.db('divisionList').collection('division');
        const districtCollection = client.db('districtList').collection('district');
        const departmentCollection = client.db('departmentList').collection('department');
        const designationCollection = client.db('designationList').collection('designation');
        const userCollection = client.db('userList').collection('users');

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
        app.get("/gender", async(req, res)=>{
            const gender = await genderCollection.find().toArray();
            res.send(gender)
           })
        // --------------------Gender  Update method-----------------------
        app.put('/gender/:id', async(req, res) =>{
            const id = req.params.id;
            console.log(id);
            const gender = req.body;
            const filter = {_id: ObjectId(id)};
            const options = {upsert: true};
            const updateDoc = {
                $set: {
                    gender: gender.gender,
                   
                }
            };     
            const result = await genderCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        });

        // --------------------Gender Delete method ------------------
          app.delete('/gender/:id', async(req, res) =>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await genderCollection.deleteOne(query)
            res.send(result);
          })       
         // --------------Gender all method End-------------- 

        // --------------Religion  all method start--------------
        // ------------------Religion post method -------------
        app.post('/religion', async(req, res) =>{
            const newReligion = req.body;
            const result = await religionCollection.insertOne(newReligion);
            res.send(result);
        })
        // ----------------Religion get method---------------- 
       app.get("/religion", async(req, res)=>{
        const religion = await religionCollection.find().toArray();
        res.send(religion)
       })
        // --------------------Religion Delete method ------------------
        app.delete('/religion/:id', async(req, res) =>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await religionCollection.deleteOne(query)
            res.send(result);
          }) 
        // --------------------Religion  Update method-----------------------
        app.put('/religion/:id', async(req, res) =>{
            const id = req.params.id;
            const religion = req.body;
            const filter = {_id: ObjectId(id)};
            const options = {upsert: true};
            const updateDoc = {
                $set: {
                    religion: religion.religion,
                   
                }
            };     
            const result = await religionCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        });

     // --------------Religion  all method end--------------

     // --------------Marital Statas all method start--------------
        // ------------------Marital Statas post method -------------
        app.post('/marital', async(req, res) =>{
            const newReligion = req.body;
            const result = await maritalStatusCollection.insertOne(newReligion);
            res.send(result);
        })
        // ----------------Marital Statas get method----------------
       app.get("/marital", async(req, res)=>{
        const marital = await maritalStatusCollection.find().toArray();
        res.send(marital)
       })
        // -------------------Marital Statas Delete method ------------------
        app.delete('/marital/:id', async(req, res) =>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await maritalStatusCollection.deleteOne(query)
            res.send(result);
          }) 
        // --------------------Marital Statas  Update method-----------------------
        app.put('/marital/:id', async(req, res) =>{
            const id = req.params.id;
            const marital = req.body;
            const filter = {_id: ObjectId(id)};
            const options = {upsert: true};
            const updateDoc = {
                $set: {
                    marital: marital.marital,
                   
                }
            };     
            const result = await maritalStatusCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        });

     // --------------Marital Statas all method end--------------


      // --------------Blood Group all method start--------------
        // ------------------Blood Group post method -------------
        app.post('/bloodgroup', async(req, res) =>{
            const newBloodGroup = req.body;
            const result = await bloodGroupCollection.insertOne(newBloodGroup);
            res.send(result);
        })
        // ----------------Blood Group get method----------------
       app.get("/bloodgroup", async(req, res)=>{
        const bloodgroup = await bloodGroupCollection.find().toArray();
        res.send(bloodgroup)
       })
        // -------------------Blood Group Delete method ------------------
        app.delete('/bloodgroup/:id', async(req, res) =>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await bloodGroupCollection.deleteOne(query)
            res.send(result);
          }) 
        // --------------------Blood Group  Update method-----------------------
        app.put('/bloodgroup/:id', async(req, res) =>{
            const id = req.params.id;
            const bloodgroup = req.body;
            const filter = {_id: ObjectId(id)};
            const options = {upsert: true};
            const updateDoc = {
                $set: {
                    bloodgroup: bloodgroup.bloodgroup,
                   
                }
            };     
            const result = await bloodGroupCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        });

     // --------------Blood Group all method end--------------

    
      // --------------Location all method start--------------
        // ------------------Location post method -------------
        app.post('/location', async(req, res) =>{
            const newLocation = req.body;
            const result = await locationCollection.insertOne(newLocation);
            res.send(result);
        }) 
        // ----------------Location get method----------------
       app.get("/location", async(req, res)=>{
        const location = await locationCollection.find().toArray();
        res.send(location)
       })
        // -------------------Location Delete method ------------------
        app.delete('/location/:id', async(req, res) =>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await locationCollection.deleteOne(query)
            res.send(result);
          }) 
        // --------------------Location  Update method-----------------------
        app.put('/location/:id', async(req, res) =>{
            const id = req.params.id;
            const location = req.body;
            const filter = {_id: ObjectId(id)};
            const options = {upsert: true};
            const updateDoc = {
                $set: {
                    location: location.location,
                   
                }
            };     
            const result = await locationCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        });

     // --------------Location all method end--------------
         
      // --------------Division all method start--------------
        // ------------------Division post method -------------
        app.post('/division', async(req, res) =>{
            const newDivision = req.body;
            const result = await divisionCollection.insertOne(newDivision);
            res.send(result);
        }) 
        // ----------------Division get method----------------
       app.get("/division", async(req, res)=>{
        const division = await divisionCollection.find().toArray();
        res.send(division)
       })
        // -------------------Division Delete method ------------------
        app.delete('/division/:id', async(req, res) =>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await divisionCollection.deleteOne(query)
            res.send(result);
          }) 
        // --------------------Division  Update method-----------------------
        app.put('/division/:id', async(req, res) =>{
            const id = req.params.id;
            const division = req.body;
            const filter = {_id: ObjectId(id)};
            const options = {upsert: true};
            const updateDoc = {
                $set: {
                    division: division.division,
                   
                }
            };     
            const result = await divisionCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        });

     // --------------Division all method end--------------
   
         
      // --------------District all method start--------------
        // ------------------District post method -------------
        app.post('/district', async(req, res) =>{
            const newDistrict = req.body;
            const result = await districtCollection.insertOne(newDistrict);
            res.send(result);
        }) 
        // ----------------District get method----------------

       app.get("/district", async(req, res)=>{
        const district = await districtCollection.find().toArray();
        res.send(district)
       })
        // -------------------District Delete method ------------------
        app.delete('/district/:id', async(req, res) =>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await districtCollection.deleteOne(query)
            res.send(result);
          }) 
        // --------------------District  Update method-----------------------
        app.put('/district/:id', async(req, res) =>{
            const id = req.params.id;
            const district = req.body;
            const filter = {_id: ObjectId(id)};
            const options = {upsert: true};
            const updateDoc = {
                $set: {
                    district: district.district,
                   
                }
            };     
            const result = await districtCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        });

         // --------------Distict all method end--------------

         // --------------Department all method start--------------
         // ------------------Department post method -------------
        app.post('/department', async(req, res) =>{
            const newDepartment = req.body;
            const result = await departmentCollection.insertOne(newDepartment);
            res.send(result);
        }) 
        // ----------------Department get method----------------
       app.get("/department", async(req, res)=>{
        const department = await departmentCollection.find().toArray();
        res.send(department)
       })
        // -------------------Department Delete method ------------------
        app.delete('/department/:id', async(req, res) =>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await departmentCollection.deleteOne(query)
            res.send(result);
          }) 
        // --------------------Department  Update method-----------------------
        app.put('/department/:id', async(req, res) =>{
            const id = req.params.id;
            const department = req.body;
            const filter = {_id: ObjectId(id)};
            const options = {upsert: true};
            const updateDoc = {
                $set: {
                    department: department.department,
                   
                }
            };     
            const result = await departmentCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        });

     // --------------Department all method end--------------
        // --------------Designation all method start--------------
         // ------------------Designation post method -------------
         app.post('/designation', async(req, res) =>{
            const newDesignation = req.body;
            const result = await designationCollection.insertOne(newDesignation);
            res.send(result);
        }) 
        // ----------------Designation get method----------------

       app.get("/designation", async(req, res)=>{
        const designation = await designationCollection.find().toArray();
        res.send(designation)
       })
        // -------------------Designation Delete method ------------------
        app.delete('/designation/:id', async(req, res) =>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await designationCollection.deleteOne(query)
            res.send(result);
          }) 
        // --------------------Designation  Update method-----------------------
        app.put('/designation/:id', async(req, res) =>{
            const id = req.params.id;
            const designation = req.body;
            const filter = {_id: ObjectId(id)};
            const options = {upsert: true};
            const updateDoc = {
                $set: {
                    designation: designation.designation,
                   
                }
            };     
            const result = await designationCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        });

     // --------------Department all method end--------------

     //-------------- User Profile start---------------------
     //-------------- User Profile  put or  update ---------------------
     app.put('/user/:email', async(req, res) =>{
        const email = req.params.email;
        const user = req.body;
        const filter = {email: email};
        const options = { upsert: true };
        const updateDoc = {
            $set: user,
        };
        const result = await userCollection.updateOne(filter,updateDoc,options);
        res.send(result);
     })
  //-------------- User Profile  get method---------------------
  
    app.get("/user", async(req, res) =>{
        const users = await userCollection.find().toArray();
        res.send(users)
    })

     //-------------- User Profile end-----------------------


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





