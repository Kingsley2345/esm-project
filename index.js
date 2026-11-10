//import { passswordLength, passwordSample,greetings,Animal } from "./module/utils.js";
//import process, {fishpie} from "./module/process.js";
import { passswordLength,passwordSample,fishpie,greetings } from "./module/index.js"
console.log("password length: " +passswordLength )
console.log("password Sample: " +passwordSample)
console.log("greetings:"+greetings)
//console.log(greetings("Tobi"))
//const anAnimal = new Animal('goat')
//const aprocess = new process()
//console.log(aprocess.log())
console.log(fishpie)
console.log(greetings("john"))


const colors = ["red", "blue" , "grey", "green"];

const[first,second,third,fourth] = colors;

console.log(first,third);

const user = {name:"faith", age: 50, city:"Nairobi"}

const{name ,age, city} = user;

console.log(name,age,city)
