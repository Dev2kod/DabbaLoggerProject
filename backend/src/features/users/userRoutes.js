const express = require("express");
const pool = require("../../config/db");
const { signin } = require("./userControllers");
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

router.get("/getUser/:id",async(req,res)=>{
    const {id} = req.params;
    try{
        const result = await pool.query(`Select * from usertable where Id = ${id}`)
        console.log(result);
        
        res.json({result: result.rows});
    }catch(error){
        res.json({msg:error}).status(404);
        console.log(error);
        
    }
})

router.post("/signin",signin)

router.post("signup",async(req,res)=>{
    const {username,fname,lname,password} = req.body
    if(!(username&&fname&&lname&&password)){
        return res.status(400).json({error:"all fields required"})
    }
    try{
        const userExists = await pool.query(`Select * from usertable where Id = ${username}`)
        if(userExists.rows.length>0)
        
        res.json({result: result.rows});
    }catch(error){
        res.json({msg:error}).status(404);
        console.log(error);
        
    }
})

module.exports = router;