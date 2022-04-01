const express =require('express');
const env = require('dotenv');
const app = express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
//routs
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
env.config();
//database connection
//mongodb+srv://:<ee11ll22ii33>@cluster0.tiqy9.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority

mongoose.connect(
    "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
    
    ).then(() => {
    console.log("connection established");
 });
        
 


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://eliassisaynega:ee11ll22ii33@cluster0.fsxyd.mongodb.net/ecommerce?retryWrites=true&w=majority";
// const client = new MongoClient(uri, 
//     { useNewUrlParser: true,
//          useUnifiedTopology: true, 
//          serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions onu the collection object
//   client.close();
// });


app.use(bodyParser());
app.use('/api',authRoutes);
app.use('/api',adminRoutes);
// app.get( '/', (req,res,next ) => {
//     res.status(200).json({
//         message: "hello from server"
//     });
     
// });
// app.post( '/data', (req,res,next ) => {
//     res.status(200).json({
//         message: req.body
//     });
     
// });
app.listen(process.env.PORT, () =>{
    console.log(process.env.PORT);
});