var person = ['Roman', 28];
var personTwo = ['Seb', 37];

function logPerson(name, age) {
    console.log("Hi " + name + ", you are " + age);
}

logPerson(...person);
logPerson(...personTwo);


var persons = ["Seb", "Pati"];
var final = ['Roman', ...persons];

final.forEach((name) => {
    console.log(name);
});