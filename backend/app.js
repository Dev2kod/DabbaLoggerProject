const express  = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors([]))

app.get("/",(req,res)=>{
    res.json({
        msg: "backend running"
    })
})

app.post("/sendData",(req,res)=>{
    const {username,password} = req.body;
    res.json({
        msg: `your password is revealed ${username} ! let me guess is it ${password}`
    })
})

app.listen(3000,()=>{console.log("app listening on port 3000");
})