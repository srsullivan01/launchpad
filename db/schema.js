var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

var TaskSchema = new Schema({
  name: String,
  details: String,
  time: String
});

var TechSchema = new Schema({
  name: String,
  details: String,
  time: String
});

var DailySchema = new Schema({
  name: String,
  tasks: [TaskSchema]
});

var TechniqueSchema = new Schema({
  name: String,
  techniques: [TechSchema]
});

var TaskModel = mongoose.model("Task", TaskSchema);
var TechModel = mongoose.model("Tech", TechSchema);
var DailyModel = mongoose.model("Daily", DailySchema);
var TechniqueModel = mongoose.model("Technique", TechniqueSchema);

module.exports = {
  Task: TaskSchema,
  Tech: TechSchema,
  Daily: DailySchema,
  Technique: TechniqueSchema
};
