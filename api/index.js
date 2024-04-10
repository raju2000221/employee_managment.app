const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = 5000;
const cors = require('cors');

// Middleware
app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb+srv://raju:2000221Raju@raju.vg37rjw.mongodb.net/?retryWrites=true&w=majority&appName=raju";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const EmployeeInfo = client.db("Employee_management").collection("EmployeeData");
    const sels = client.db("sample_supplies").collection("sales");

    // POST employee data
    app.post("/addEmployee", async (req, res) => {
      try {
        const employeeData = req.body;
        const result = await EmployeeInfo.insertOne(employeeData);
        res.status(200).json({ message: "Employee added successfully" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to add employee" });
      }
    });

    // GET employee data
    app.get("/getEmployee", async (req, res) => {
      try {
        const salesData = await sels.find({}).toArray();
        res.status(200).json(salesData);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to fetch employees" });
      }
    });

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log("Server is running on port ", port);
});
