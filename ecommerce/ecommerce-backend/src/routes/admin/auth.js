const express=require('express');
const { signin} = require('../../controller/admin/auth');
const { signup } = require('../../controller/admin/auth');
router=express.Router();

router.post('/admin/signup', signup);


router.post('/admin/signin', signin);



module.exports=router;