import LogHouse from "./LogHouse";
import House from "./House";
import BeachHouse from "./BeachHouse";

const logHouse : House = new LogHouse(20, 30, 15);
const beachHouse : House = new BeachHouse(20, 30, 15);

console.log("\n\tBout to build a log house:");
logHouse.build();
console.log("\n\tBout to build a beach house:");
beachHouse.build();

