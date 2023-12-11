let choice = prompt("enter a list of comma-separated froyo flavors");

let ordered = choice.split(",");
let f1 = "vanilla";
let f2 = "chocholate";
let f3 = "mocha";
let flavors = {};

for (let i = 0; i < ordered.length; i++) {
  let flavor = flavors[i];
  flavors[flavor] = (flavors[flavor] || 0) + 1;
}

console.log(flavors);


