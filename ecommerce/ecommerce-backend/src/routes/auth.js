const express=require('express');
const { signin, requireSignin } = require('../controller/auth');
const { signup } = require('../controller/auth');
router=express.Router();

router.post('/signup', signup);


router.post('/signin', signin);

// router.post('/profile',requireSignin, (req,res) =>{
//     res.status(200).json({user: "profile"})
// });

module.exports=router;