const express = require("express")
const router = express.Router()

router.get("/meal",(req,res)=>{
    res.json({
        msg: "post meal router triggered"
    }).status(200)
})

router.get("/:userId/:date", (req, res) => {
  const { userId, date } = req.params;
  res.json({ message: `Meals for user ${userId} on ${date}` });
});

module.exports = router