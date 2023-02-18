
const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const dbConnect = require('./utils/dbConnect');
require('dotenv').config();
const port = process.env.PORT || 5000;
// const gendersRouters = require("./gender.route");
// const { connectToServer } = require('./utils/dbConnect');

app.use(cors())
app.use(express.json())


// connectToServer((err) => {
//   if(!err){
//     app.listen(port, () => {
//       console.log('Listening to port', port);
//   })
//   } else{
//     console.log(err)
//   }
// });

// app.use("/api/v1/gender", gendersRouters)

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.m8gbcys.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log(uri)

async function run() {
  try {
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
    const leadsCollection = client.db('leadsList').collection('leads');
    const businessTypeCollection = client.db('businessList').collection('business');
    const opportunityCollection = client.db('opportunityList').collection('opportunity');
    const followUpTypeCollection = client.db('followUpTypeList').collection('followUpType');
    const followUpCollection = client.db('followUpList').collection('followUp');

    //  ***********************************  All Library  Work start ***********************



    // --------------Gender all method start--------------
    // --------------Gender post method--------------

    // app.post('/gender', async(req, res) =>{
    //     const gender = req.body;
    //     if(!gender.gender){
    //         return res.send({success: false, error: "Please Provide all information"})
    //     }
    //     const result = await genderCollection.insertOne(gender);
    //     res.send({success: true, message: `Successfully inserted ${gender.result}!` });
    // })

    // ---------------Gender get method--------------------

    app.get("/gender", async (req, res) => {
      const gender = await genderCollection.find().toArray();
      res.send(gender)
    })

    // --------------------Gender  Update method-----------------------
    app.put('/gender/:id', async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const gender = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          gender: gender.gender,

        }
      };
      const result = await genderCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    // --------------------Gender Delete method ------------------
    app.delete('/gender/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await genderCollection.deleteOne(query)
      res.send(result);
    })
    // --------------------Gender Update data show method ------------------
    app.get('/gender/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await genderCollection.findOne(query)
      res.send(result);
    })
    // --------------Gender all method End-------------- 

    // --------------Religion  all method start--------------
    // ------------------Religion post method -------------
    app.post('/religion', async (req, res) => {
      const newReligion = req.body;
      const result = await religionCollection.insertOne(newReligion);
      res.send(result);
    })
    // ----------------Religion get method---------------- 
    app.get("/religion", async (req, res) => {
      const religion = await religionCollection.find().toArray();
      res.send(religion)
    })
    // --------------------Religion Delete method ------------------
    app.delete('/religion/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await religionCollection.deleteOne(query)
      res.send(result);
    })
    // --------------------Religion  Update show data method-----------------------
    app.get("/religion/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await religionCollection.findOne(query)
      res.send(result)
    })

    // --------------------Religion  Update method-----------------------
    app.put('/religion/:id', async (req, res) => {
      const id = req.params.id;
      const religion = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
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
    app.post('/marital', async (req, res) => {
      const newReligion = req.body;
      const result = await maritalStatusCollection.insertOne(newReligion);
      res.send(result);
    })
    // ----------------Marital Statas get method----------------
    app.get("/marital", async (req, res) => {
      const marital = await maritalStatusCollection.find().toArray();
      res.send(marital)
    })
    // -------------------Marital Statas Delete method ------------------
    app.delete('/marital/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await maritalStatusCollection.deleteOne(query)
      res.send(result);
    })
    // -------------------Marital Statas update data show method ------------------
    app.get('/marital/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await maritalStatusCollection.findOne(query)
      res.send(result);
    })
    // --------------------Marital Statas  Update method-----------------------
    app.put('/marital/:id', async (req, res) => {
      const id = req.params.id;
      const marital = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
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
    app.post('/bloodgroup', async (req, res) => {
      const newBloodGroup = req.body;
      const result = await bloodGroupCollection.insertOne(newBloodGroup);
      res.send(result);
    })
    // ----------------Blood Group get method----------------
    app.get("/bloodgroup", async (req, res) => {
      const bloodgroup = await bloodGroupCollection.find().toArray();
      res.send(bloodgroup)
    })
    // -------------------Blood Group Delete method ------------------
    app.delete('/bloodgroup/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await bloodGroupCollection.deleteOne(query)
      res.send(result);
    })
    // -------------------Blood Group Update show method ------------------
    app.get('/bloodgroup/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await bloodGroupCollection.findOne(query)
      res.send(result);
    })
    // --------------------Blood Group  Update method-----------------------
    app.put('/bloodgroup/:id', async (req, res) => {
      const id = req.params.id;
      const bloodgroup = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
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
    app.post('/location', async (req, res) => {
      const newLocation = req.body;
      const result = await locationCollection.insertOne(newLocation);
      res.send(result);
    })
    // ----------------Location get method----------------
    app.get("/location", async (req, res) => {
      const location = await locationCollection.find().toArray();
      res.send(location)
    })
    // -------------------Location Delete method ------------------
    app.delete('/location/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await locationCollection.deleteOne(query)
      res.send(result);
    })
    // -------------------Location update data show method ------------------
    app.get('/location/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await locationCollection.findOne(query)
      res.send(result);
    })
    // --------------------Location  Update method-----------------------
    app.put('/location/:id', async (req, res) => {
      const id = req.params.id;
      const location = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
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
    app.post('/division', async (req, res) => {
      const newDivision = req.body;
      const result = await divisionCollection.insertOne(newDivision);
      res.send(result);
    })
    // ----------------Division get method----------------
    app.get("/division", async (req, res) => {
      const division = await divisionCollection.find().toArray();
      res.send(division)
    })
    // -------------------Division Delete method ------------------
    app.delete('/division/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await divisionCollection.deleteOne(query)
      res.send(result);
    })
    // -------------------Division update data show method ------------------
    app.get('/division/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await divisionCollection.findOne(query)
      res.send(result);
    })
    // --------------------Division  Update method-----------------------
    app.put('/division/:id', async (req, res) => {
      const id = req.params.id;
      const division = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
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
    app.post('/district', async (req, res) => {
      const newDistrict = req.body;
      const result = await districtCollection.insertOne(newDistrict);
      res.send(result);
    })
    // ----------------District get method----------------

    app.get("/district", async (req, res) => {
      const district = await districtCollection.find().toArray();
      res.send(district)
    })
    // -------------------District Delete method ------------------
    app.delete('/district/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await districtCollection.deleteOne(query)
      res.send(result);
    })
    // -------------------District update data show method ------------------
    app.get('/district/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await districtCollection.findOne(query)
      res.send(result);
    })
    // --------------------District  Update method-----------------------
    app.put('/district/:id', async (req, res) => {
      const id = req.params.id;
      const district = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
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
    app.post('/department', async (req, res) => {
      const newDepartment = req.body;
      const result = await departmentCollection.insertOne(newDepartment);
      res.send(result);
    })
    // ----------------Department get method----------------
    app.get("/department", async (req, res) => {
      const department = await departmentCollection.find().toArray();
      res.send(department)
    })
    // -------------------Department Delete method ------------------
    app.delete('/department/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await departmentCollection.deleteOne(query)
      res.send(result);
    })
    // -------------------Department Update data show method ------------------
    app.get('/department/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await departmentCollection.findOne(query)
      res.send(result);
    })
    // --------------------Department  Update method-----------------------
    app.put('/department/:id', async (req, res) => {
      const id = req.params.id;
      const department = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
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
    app.post('/designation', async (req, res) => {
      const newDesignation = req.body;
      const result = await designationCollection.insertOne(newDesignation);
      res.send(result);
    })
    // ----------------Designation get method----------------

    app.get("/designation", async (req, res) => {
      const designation = await designationCollection.find().toArray();
      res.send(designation)
    })
    // -------------------Designation Delete method ------------------
    app.delete('/designation/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await designationCollection.deleteOne(query)
      res.send(result);
    })
    // -------------------Designation Update data show method ------------------
    app.get('/designation/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await designationCollection.findOne(query)
      res.send(result);
    })
    // --------------------Designation  Update method-----------------------
    app.put('/designation/:id', async (req, res) => {
      const id = req.params.id;
      const designation = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          designation: designation.designation,

        }
      };
      const result = await designationCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    // --------------Department all method end--------------


    // --------------Business type all method start--------------
    // ------------------Business typepost method -------------
    app.post('/business', async (req, res) => {
      const newBusiness = req.body;
      const result = await businessTypeCollection.insertOne(newBusiness);
      res.send(result);
    })
    // ----------------Business type get method----------------
    app.get("/business", async (req, res) => {
      const business = await businessTypeCollection.find().toArray();
      res.send(business)
    })
    // -------------------Business type Delete method ------------------
    app.delete('/business/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await businessTypeCollection.deleteOne(query)
      res.send(result);
    })
    // -------------------Business Update data show method ------------------
    app.get('/business/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await businessTypeCollection.findOne(query)
      res.send(result);
    })
    // --------------------Business type  Update method-----------------------
    app.put('/business/:id', async (req, res) => {
      const id = req.params.id;
      const business = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          business: business.business,

        }
      };
      const result = await businessTypeCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    // --------------Opportunity  all method end--------------

    // --------------Opportunity  all method start--------------
    // ------------------Opportunity typepost method -------------
    app.post('/opportunity', async (req, res) => {
      const newOpportunity = req.body;
      const result = await opportunityCollection.insertOne(newOpportunity);
      res.send(result);
    })
    // ----------------Opportunity  get method----------------
    app.get("/opportunity", async (req, res) => {
      const opportunity = await opportunityCollection.find().toArray();
      res.send(opportunity)
    })
    // -------------------Opportunity  Delete method ------------------
    app.delete('/opportunity/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await opportunityCollection.deleteOne(query)
      res.send(result);
    })
    // -------------------Opportunity Update data show method ------------------
    app.get('/opportunity/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await opportunityCollection.findOne(query)
      res.send(result);
    })
    // --------------------Opportunity  Update method-----------------------
    app.put('/opportunity/:id', async (req, res) => {
      const id = req.params.id;
      const opportunity = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          opportunity: opportunity.opportunity,

        }
      };
      const result = await opportunityCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    // --------------Opportunity all method end--------------


    // --------------Follow Up Type all method start--------------
    // ------------------Follow Up Type typepost method -------------
    app.post('/followUpType', async (req, res) => {
      const newFollowUpType = req.body;
      const result = await followUpTypeCollection.insertOne(newFollowUpType);
      res.send(result);
    })
    // ----------------Follow Up Type  get method----------------
    app.get("/followUpType", async (req, res) => {
      const followUpType = await followUpTypeCollection.find().toArray();
      res.send(followUpType)
    })
    // -------------------Follow Up Type  Delete method ------------------
    app.delete('/followUpType/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await followUpTypeCollection.deleteOne(query)
      res.send(result);
    })
    // -------------------Follow Up Type  Update data show method ------------------
    app.get('/followUpType/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await followUpTypeCollection.findOne(query)
      res.send(result);
    })
    // --------------------Follow Up Type  Update method-----------------------
    app.put('/followUpType/:id', async (req, res) => {
      const id = req.params.id;
      const followUpType = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          followUpType: followUpType.followUpType,

        }
      };
      const result = await followUpTypeCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    // --------------Follow Up Type all method end--------------

    //  ***********************************  All Library  Work end ***********************


    //-------------- User Profile start---------------------
    //-------------- User Profile  put or  update ---------------------
    app.put('/user/:email', async (req, res) => {
      const email = req.params.email;
      const user = req.body;
      const filter = { email: email };
      const options = { upsert: true };
      const updateDoc = {
        $set: user,
      };
      const result = await userCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    })
    //-------------- User Profile  get method---------------------

    app.get("/user", async (req, res) => {
      const users = await userCollection.find().toArray();
      res.send(users)
    })

    //-------------- User Admin  put or  update ---------------------
    app.put('/user/admin/:email', async (req, res) => {
      const email = req.params.email;
      const filter = { email: email };
      const updateDoc = {
        $set: { role: 'admin' },
      };
      const result = await userCollection.updateOne(filter, updateDoc);
      res.send(result)
    })

    // -------------------admin  Delete method ------------------
    app.delete('/user/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await userCollection.deleteOne(query)
      res.send(result);
    })
    // -------------------admin  Update data show method ------------------
    app.get('/user/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await userCollection.findOne(query)
      res.send(result);
    })

    //   ----------------get admin method-------------
    app.get('/admin/:email', async (req, res) => {
      const email = req.params.email;
      const user = await userCollection.findOne({ email: email });
      const isAdmin = user.role === 'admin';
      res.send({ admin: isAdmin })
    })

    //-------------- User Profile end-----------------------
    //-------------- Leads Entry method start ---------------------
    //-------------- Leads Insert data Entry method  ---------------------
    app.post('/leads', async (req, res) => {
      const newLeadsEntry = req.body;
      const result = await leadsCollection.insertOne(newLeadsEntry);
      res.send(result);
    })
    //-------------- Leads get data Entry method  ---------------------
    app.get('/leads', async (req, res) => {
      const companyDetails = await leadsCollection.find().toArray();
      res.send(companyDetails);
    })

    //-------------- Leads put data Entry method  ---------------------
    app.put('/leads/:id', async (req, res) => {
      const id = req.params.id;
      const state = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: state,
      }
      const result = await leadsCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    })
    //   ----------------------leads delete method-------------
    app.delete('/leads/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) }
      const result = await leadsCollection.deleteOne(query);
      res.send(result);
    })
    //   ----------------------leads Update data show method-------------
    app.get('/leads/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) }
      const result = await leadsCollection.findOne(query);
      res.send(result);
    })

    //-------------- Leads Entry method end-----------------------
    //----------------Follow Up page all method Start-------------
    //----------------Follow Up page insert data post method Start-------------
    app.post('/followUp', async (req, res) => {
      const newFollowUp = req.body;
      const result = await followUpCollection.insertOne(newFollowUp);
      res.send(result)
    })
    //----------------Follow Up page get method -------------
    app.get('/followUp', async (req, res) => {
      const followUp = await followUpCollection.find().toArray();
      res.send(followUp);
    })
    //----------------Follow Up Delete method -------------
    app.delete('/followUp/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) }
      const result = await followUpCollection.deleteOne(query);
      res.send(result);
    })

    //  app.use(errorHandler);

    //----------------Follow Up page all method End-------------


  }
  finally {

  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Server is Running')
});

module.exports = app;





