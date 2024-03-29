const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const { port } = require("./Configuration/config");
const dotenv = require('dotenv');
const User = require("./Models/user");
const { AdmiredPlayer } = require("./Models/admiredPlayer");
const userRoutes = require("./Routers/users");
const authenticationRoutes = require("./Routers/authentication");
const passport = require("passport");
const jwt = require("jsonwebtoken");

dotenv.config()


const port =  5001
// process.env.EXPRESS_PORT ||
const localDB = 'mongodb://localhost:27017/football-friends'
const currentDB =  localDB;
// process.env.MONGODB_URI ||


// Require Passport Strategy and Options
const strategy = require("./Authentication/passportStrategy");
const jwtOptions = require("./Authentication/passportOptions");

passport.use(strategy);

const profilePictureRouter = require("./Routers/profilePicture")


const app = express();
console.log(process.env.MONGODB_URI)
console.log(process.env.EXPRESS_PORT)
console.log(currentDB)
// Establish Database Connection
mongoose.connect(currentDB, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log('Connected to MongoDB'));

// Connect to mongoDB
// mongoose.connect(currentDB);
// const db = mongoose.connection;
// db.on("error", (error) => console.log(`ERROR: ${error.message}`));
// db.on("connected", () => console.log(`MongoDB Connected: ${currentDB}`));
// db.on("disconnected", () => console.log("MongoDB Disconnected"));

// MIDDLEWARE
app.use(express.json());

app.use(
  cors()
);



app.use(userRoutes);
app.use(authenticationRoutes);

//TEST ROUTE
app.get(
  "/api/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      message: "Hey, you can only see this message with a valid jwt",
      user: req.user,
    });
  }
);

 
 


app.use(profilePictureRouter)

// Makes the files in the uploads folder accessible through our /uploads endpoint created here
app.use("/uploads", express.static("uploads"));

app.listen(port, () => console.log(`Server started on port ${port}`));

// Test Seed Code

// const testUser = new User({
//     email: "test",
//     password: "tester"
// })

// const testAdmiredPlayer = new AdmiredPlayer({
//     name: "test2",
//     reasonAdmired: "test2"
// })
// testAdmiredPlayer.save()
// .then((res) => console.log(res))
// .catch((err) =>  console.log(err))

// testUser.playersAdmired.push(testAdmiredPlayer)
// testUser.save()
// .then((res) => console.log(res))
// .catch((err) =>  console.log(err))
