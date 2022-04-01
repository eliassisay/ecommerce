const user = require('../models/user');
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email }).exec((error,user) => {
        if(user) return res.status(400).json({
            message:'user alerady registerd'
        });
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;
        const _user = new User({ 
             firstName,
             lastName, 
             email,  
             password,
             username:Math.random().toString()
           
            });
    
    
    _user.save((error,data) => {
        if(error){
            return res.status(400).json({
                message:"somthing wrong"
            });
    
        }
        if(data){
            return res.status(201).json({
          message:"user created seccessful"
          //user:data
            })
        }
    });
});
    
}
exports.signin = (req,res) =>{
    user.findOne({ email:req.body.email })
    .exec((error, user) =>{
        if(error) return res.status(400).json({ error});
        if(user){
            if(user.authenticate(req.body.password)){
                const token =jwt.sign({_id:user._id},process.env.JWT_SECRET,{ expiresIn: '1h'});
                const {firstName,lastName,email,role} =user;
                res.status(200).json({
                    token,
                    user:{
                        firstName,lastName,email,role
                    }
                });

            }else{
                return res.status(400).json({message:"invalid password"})
            }

        }else{
            return res.status(400).json({message:"somthing went wrong"});
        }
    });
}
exports.requireSignin = (req,res,next) =>{
    const token= req.headers.authorization.split("")[1];
   const user =  jwt.verify(token,process.env.JWT_SECRET);
    req.user = user;
    next();
    //jwt.decode()
}