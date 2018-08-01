const express = require('express');
const router = express.Router();


router.get("/", (req,res)=>{
    res.json({
        msg:"Rooms routes is working"
    })
})

module.exports = router;
