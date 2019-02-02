const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  contentText: { type: Text, required: false },
  createDate: {type: Date, required: true}
});

const Content = mongoose.model("Content", contentSchema);

/*module.exports = Pod;*/