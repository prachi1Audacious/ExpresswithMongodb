const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')
//const {omit} = require('lodash')


//crud operation
router.post('/create',async(req,res) => {
    let user_data = {
        name:req.body.name,
        email:req.body.email,
        passward:bcrypt.hashSync(req.body.passward,10),
        phone:req.body.phone,
    }
    try{
        let result = await User.create(user_data)
        res.status(201).send({message:"create successfully","result":result})
        console.log(result)
    }catch (error){
        res.status(500).send({message: error.message})
    }
})

router.patch('/update/:ID', async (req, res) => {
    try {
        let name = req.body.name;
        let ID = req.params.ID 
        let _id = await User.findById(ID)
   
        let result = await User.updateOne({_id:ID},{ $set:{name:name}})
        res.status(200).send({ message: "changed",result: result })

    } catch (error) {
        res.status(500).send({ message: error.message})
    }

})

router.put('/update', async (req, res) => {
    try {
        let name = req.body.name;
        let result = await User.updateMany({ $set: { name: name }});
        res.status(200).send({ message: "changed", result: result });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

router.delete('/delete/:ID', async (req, res) => {
    try {
        let ID = req.params.ID;
        let result = await User.deleteOne({ _id: ID });
        res.status(200).send({ message: "deleted", result: result });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


router.get('/getall/:id',async(req,res) => {
    let id = req.params.id
    let result  = await User.findOne({_id: id})
    res.send({message: final})

})

// router.get("/getall", async (req, res) => {
//     const result = await User.findOne({});
  
//     try {
//       res.send({message: final});
//     } catch (error) {
//       res.status(500).send(error);
//     }
//   
//   router.get('/users', async (req, res) => {
//     try {
//         let user_data  = await User.find({});
//         res.status(200).send({ message: "retrieved"});
//     } catch (error) {
//         res.status(500).send({ message: error.message });
//     }
// });





module.exports = router