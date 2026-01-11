const express = require("express")
const router = express.Router();


router.post("/register",(req,res)=>{
    res.json({
        msg: "create user route triggered"
    }).status(200);
})

router.get("/getUsers",(req,res)=>{
    res.json({
        msg: "get all users route triggered"
    }).status(200);
})

router.post("/login",(req,res)=>{
    const {username,password} = req.body;
    res.json({
        msg:"User Registered",
        username: username,
        password: password
    })
})


module.exports = router;