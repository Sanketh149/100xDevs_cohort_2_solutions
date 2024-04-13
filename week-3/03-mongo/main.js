const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:admin123@cluster0.y0xgds8.mongodb.net/users_app?authSource=admin&appName=Cluster0"
);

const schema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

const User = mongoose.model("User", schema);

const user = new User({
  name: "Sanketh",
  email: "sanketh@gmail.com",
  password: "hello",
});

user.save().then(() => {
  console.log("Save Successfully");
});
