const express = require("express");
const pool = require("../../config/db");
const { signin } = require("./userControllers");
const router = express.Router();
const bcrypt = require("bcrypt")


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

router.post("/signup",async(req,res)=>{
    const {username,fname,lname,password} = req.body
    if(!(username&&fname&&lname&&password)){
        return res.status(400).json({error:"all fields required"})
    }
    try{
        const userExists = await pool.query(`Select * from usertable where username = $1`,[username])
        if(userExists.rows.length>0){
            return res.status(401).json({msg:"user already exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10)
        
        const result = await pool.query(`insert into usertable (username,fname,lname,password)
                                    values($1,$2,$3,$4)
                                    Returning id username`,
                                [username,fname,lname,hashedPassword])
                res.status(201).json({
                message: "Signup successful",
                user: result.rows[0],
                });
    }catch(error){
        res.json({msg:error}).status(404); 
        console.log(error);
        
    }
})

module.exports = router;