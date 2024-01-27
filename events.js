// import module
const event = require("events");
class Cat extends event.EventEmitter {}
const cat = new Cat();

//create meow funtion
cat.on("meow", () => {
  console.log("Meow Meow :3");
});

// call meow function to display in terminal
cat.emit("meow");
