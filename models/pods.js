const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const podSchema = new Schema({
  topic: { type: String, required: true },
  name: { type: String, required: true},
  creator: { type: String, required: true },
  creatorId: { type: String, required: true},
  numParticipants: { type: Number, required: true },
  activeParticipant: { type: String, required: false },
  totalParticipants: [{ type: String, required: false }], 
  participantIds:[String],
  createDate: {type: Date, required: false}
});

const Pod = mongoose.model("Pod", podSchema);

module.exports = Pod;