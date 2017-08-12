require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var Daily = require('../models/daily');
var Technique = require('../models/technique');
var Task = require('../models/task');
var Tech = require('../models/tech');

mongoose.Promise = global.Promise;

Daily.remove({}, (err) => console.log(err));
Technique.remove({}, (err) => console.log(err));
Task.remove({}, (err) => console.log(err));
Tech.remove({}, (err) => console.log(err));

const eat = new Task({
  name: "Refuel",
  details: "If its been more than 4 hours since you last ate now is probably a good time to grab a snack. Try to choose something your body will be able to use.",
  time: "Medium"
});

const wash = new Task({
  name: "Wash Up",
  details: "If youre feeling dirty or gross, it will help to wash up.  If you're able to, go take a quick shower. If you can't do that, wash your face and hands. Bonus points for brushing your teeth!",
  time: "Medium"
});

const tidy = new Task({
  name: "Tidy Up",
  details: "If your space is messy, spend a few minutes cleaning it up. Set a timer for five or ten minutes on your phone and pick up anything that doesn't belong on the floor, wash a few dishes, or do whatever you need to make your space feel a little cleaner.",
  time: "Medium"
});

const meds = new Task({
  name: "Take Meds",
  details: "Do you have any medication you need to take? Now is a good time to take a minute or two to take it.",
  time: "Small"
});

const stuff = new Task({
  name: "Get Your Stuff",
  details: "Do you know what you'll be doing today? If you're going to be going to school today, gather everything you'll need and put it in a central location near the front door.",
  time: "Medium"
});

const pets = new Task({
  name: "Check on Pets",
  details: "If you have any animal companions, go ahead and spend some time with them. If your cat needs to have her litter box cleaned, if your puppy needs a walk, or if your lizard needs fresh water take care of that. If all their needs are met, just take a few minutes to play with them.",
  time: "Medium"
});

const pressure = new Tech({
  name: "Deep Pressure",
  details: "If you're feeling overwhelmed, step away from the situation and apply deep pressure to a body part like your arms or hands. Just press down on an extremety and make a dragging motion away from your body. Repeat three to five times.",
  time: "Small"
});

const breathe = new Tech({
  name: "Four by Four Breathing",
  details: "Take a deep breath, counting to four as you breathe in. Hold it for a count of four. Blow the breath out slowly, to a count of four. Keep your lungs empty for another count of four. Repeat this a few times to help slow down your heart rate.",
  Time: "Small"
});

const leave = new Tech({
  name: "Take a Time Out",
  details: "If you feel like the situation is too much for you to handle right now, it can be helpful to walk away for a few minutes. If you can, get up and go outside or just leave the room. Walk around, listen to your favorite song, or do something else unrelated to the situation you're struggling with. Try checking back with what was frustrating you in fifteen minutes.",
  Time: "Medium"
});

const example = new Daily({
  name: "Example Routine",
  Tasks: [wash, eat, tidy, pets]
});

example.save().then(() => console.log("Daily routine saved!"));
wash.save().then(() => console.log('wash saved'));

mongoose.connection.close();
