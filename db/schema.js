var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

const TaskSchema = new Schema({
  name: String,
  details: String,
  time: String
});

const TechSchema = new Schema({
  name: String,
  details: String,
  time: String
});

const DailySchema = new Schema({
  name: String,
  tasks: [TaskSchema]
});

const TechniqueSchema = new Schema({
  name: String,
  techniques: [TechSchema]
});

const Task = mongoose.model("Task", TaskSchema);
const Tech = mongoose.model("Tech", TechSchema);
const Daily = mongoose.model("Daily", DailySchema);
const Technique = mongoose.model("Technique", TechniqueSchema);

module.exports = {
  Task,
  Tech,
  Daily,
  Technique
};
