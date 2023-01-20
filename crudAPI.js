const express = require("express");
const router = express.Router();
const Password = require("./models/password");
// const app = express();

// app.use(express.urlencoded({extended:false}))
// app.use(cors());
//Create
router.route("/save-password").post((req, res) => {
  const website = req.body.website;
  const password = req.body.password;
  const username = req.body.username;
  const newPassword = new Password({
    website,
    password,
    username
  });
  newPassword.save();
});

//Read
router.route("/getpasswords").get((req, res) => {
  Password.find().then((foundPasswords) => res.json(foundPasswords));
});

//Update
// router.route("/updatepassword").put((req,res)=>{
//     const newwebsite = req.body.newWebsite;
//     const newpassword = req.body.newPassword;
//     const id = req.body.id;
//     try{
//         Password.findById(id,(err, updatePassword) =>{
//             if(err || !updatePassword){
//               res.status(404).send("password not found");
//               return;
//             }
//             updatePassword.password = newpassword.toString();
//             updatePassword.website = newwebsite.toString();
//             updatePassword.save();
//             res.send("update");
//         });
//     }
//     catch(err){
//         console.log(err);
//     }

// })
router.route("/updatepassword/:id").put((req, res) => {
  Password.findByIdAndUpdate(
    { _id: req.params.id },
    {
      website: req.body.website,
      password: req.body.password,
      username: req.body.username,
    }
  )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
  // console.log(req.params);
  // console.log(req.body);

});

//Delete
router.route("/deletepassword/:id").delete((req, res) => {
  const id = req.params.id;
  Password.findOneAndRemove(id).exec();
  res.send("deleted");
});
module.exports = router;
