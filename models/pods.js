const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const podSchema = new Schema({
  topic: { type: Text, required: true },
  userID: { type: String, required: true},
  creator: { type: String, required: true },
  numParticipants: { type: Number, required: true },
  actParticipant: { type: String, required: true },
  totParticipants: { type: Number, required: true }, 
  createDate: {type: Date, required: true}
});

const Pod = mongoose.model("Pod", podSchema);

/*module.exports = Pod;*/