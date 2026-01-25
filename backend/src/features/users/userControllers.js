const pool = require("../../config/db")
const bcrypt = require("bcrypt");

const signin = async(req,res)=>{
    const {username,password} = req.body;
    if(!username||!password){
        return res.json({msg:"email and password required"}).status(400)
    }

    try {
        const result1  = await pool.query(
            `select id, username, password from usertable where username = $1`,
            [username]
        )
         if (result1.rows.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
        }

        const user = result1.rows[0];
    
        const isMatch = await compare(user.password,password)
        if(!isMatch){
            return res.status(401).json({msg:"Passwords didn't match !"})
        }
        
        if(isMatch){
            return res.status(200).json({msg:"Success, User Logged in"})
        }
    
    
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


const signup = async(req,res)=>{
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
}


module.exports = {signin,signup}