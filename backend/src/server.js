const express  = require("express")
const cors = require("cors")
const userRouter = require("./features/users/userRoutes")
const mealRouter  = require("./features/meals/mealRoutes")
const app = express()
app.use(express.json())
app.use(cors([]))

app.use("/api/v1/users",userRouter)
app.use("/api/v1/meals",mealRouter)

app.get("/",(req,res)=>{
    res.json({
        msg: "backend running"
    })
})


app.listen(3000,()=>{console.log("app listening on port 3000");
})