const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app  = express()
const port = 5000;
const cors = require('cors');
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://raju:2000221Raju@raju.vg37rjw.mongodb.net/?retryWrites=true&w=majority&appName=raju";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const EmployeeInfo = client.db("Employee_management").collection("EmployeeData");
   
//  post empoloyee data
    app.post("/addEmployee",async(req, res) =>{
      try{
        const employeeData = req.body;

        const result = await EmployeeInfo.insertOne(employeeData);
        res.send(result);

      }catch(error){
        console.log(error)
        res.status(500).json({message:"faild to add employee"})
      }
    })

//  get employee data
app.get("/getEmployee",async(req, res) =>{
  try{
    const employeeData = req.body;

    const result = "hi";
    res.send(result);

  }catch(error){
    console.log(error)
    res.status(500).json({message:"faild to fetch employee"})
  }
})

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
 
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () =>{
    console.log("server is running ", port)
})