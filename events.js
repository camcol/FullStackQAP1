const event = require("events");
class Cat extends event.EventEmitter {}
const cat = new Cat();

cat.on("meow", () => {
  console.log("Meow Meow :3");
});

cat.emit("meow");
