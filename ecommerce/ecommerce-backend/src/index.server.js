const express =require('express');
const env = require('dotenv');
const bodyParser=require('body-parser');
const app = express();
env.config();
//database connection
//mongodb+srv://:<ee11ll22ii33>@cluster0.tiqy9.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority

mongoose.connect(
    'mongodb+srv://${process.env.MONGO_DB_USERNAME}:<${process.env.MONGO_DB_PASSWORD}>@cluster0.tiqy9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    ).then(() =>{
        console.log("connection established");
    });

// app.use(bodyParser());

// app.get( '/', (req,res,next ) => {
//     res.status(200).json({
//         message: "hello from server"
//     });
     
// });
// app.push( '/data', (req,res,next ) => {
//     res.status(200).json({
//         message: req.body
//     });
     
// });
app.listen(process.env.PORT, () =>{
    console.log(process.env.PORT);
});