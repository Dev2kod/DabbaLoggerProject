const express = require("express");
const pool = require("../db");
const router = express.Router();

router.post("/register",async(req,res)=>{
    const result = await pool.query()
    res.json({
    }).status(200);
})

router.get("/getUsers",async(req,res)=>{
    const result = await pool.query(`select * from usertable`)
    res.json({
        result : result.rows
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