const path = require("path");
const express = require("express");
const app = express();
const PORT = 4444;
const mongoose = require("mongoose");

const cookieParser = require("cookie-parser");

app.use(cookieParser);

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://local:27017/myDB");
  then(() => {
    app.listen(PORT, () => {
      console.log(`localhost:` + PORT);
    });
  })

  .catch((err) => {
    console.log(err);
  });


const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});


const User = mongoose.model("User", userSchema);

app.post("/singup", async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  console.log(user);
  if (user)
    return res.status(400).json({
      msg: "email already exist",
    });
  
  await User.create({
    email,
    password
  });

  res.send({
    msg: "User signup success",
  });
});


app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user)
    return res.status(400).json({
      mas: "Email doesnot exist .try a vaild email",
    });
  
  if (user.password != password) {
    return res.status(400).json({
      msg: "password invalid",
    });
  }

  let mycookieData = {
    id: user.id,
  };


  res.cookie("cookieData", JSON.stringify(mycookieData));

  res.send({
    msg: "login success",
  });
});



app.get("/dashboard", async (req, res) => {
  let cookieData = JSON.parse(req.cookies.cookieData);
  let id = cookieData;
  let user = await User.findOne({ _id: id });

  if (!user) {
    return res.status(400).json({
      msg: "login agaiin",
    });

    res.send({
      msg: "welcome to dashboard",
    });
  };
});


