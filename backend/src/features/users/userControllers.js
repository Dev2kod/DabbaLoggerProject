const pool = require("../../config/db")

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


module.exports = {signin}