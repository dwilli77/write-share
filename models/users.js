const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  userEmail: { type: String, required: true },
  image: { img: { data: Buffer, contentType: String, required: false }}, 
  aboutMe: { type: Text, required: false },
  userPods: [{ type: Text, required: false}],
});

const User = mongoose.model("User", userSchema);

/*module.exports = User;*/