const router = require("express").Router();
const Feedback = require("../models/Feedback");

router.post("/", async (req,res)=>{
  try{
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.json(feedback);
  }catch(err){
    res.status(500).json(err);
  }
});

router.get("/", async (req,res)=>{
  try{
    const data = await Feedback.find().sort({createdAt:-1});
    res.json(data);
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;