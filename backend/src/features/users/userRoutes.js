const express = require("express");
const pool = require("../../config/db");
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

router.post("signup",async(req,res)=>{
    
    try{
        const result = await pool.query(`Select * from usertable where Id = ${id}`)
        console.log(result);
        
        res.json({result: result.rows});
    }catch(error){
        res.json({msg:error}).status(404);
        console.log(error);
        
    }
})

module.exports = router;