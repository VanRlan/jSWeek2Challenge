// Very Easy
const x = Math.min(0, 5, 10, 15, 20);

function min() {
    return x;
}
console.log(min());

// Easy 
const students = new Array(3);

students[0] = "Hello, my name is Van Rlan and I'm 19 years old";
students[1] = "Hello, my name is Miku Nakano and I'm 17 years old";
students[2] = "Hello, my name is Yae Miko and I'm 500 years old";

console.log(students[1]);

// Medium
const month = prompt("Enter a number 1-12 to get a month");

if (month == 1) {
    console.log("January")
} else if (month == 2) {
    console.log("February")
} else if (month == 3) {
    console.log("March")
} else if (month == 4) {
    console.log("April")
} else if (month == 5) {
    console.log("May")
} else if (month == 6) {
    console.log("June")
} else if (month == 7) {
    console.log("July")
} else if (month == 8) {
    console.log("August")
} else if (month == 9) {
    console.log("September")
} else if (month == 10) {
    console.log("October")
} else if (month == 11) {
    console.log("November")
} else if (month == 12) {
    console.log("December")
} else {
    console.log("That is not 1-12 you idiot -_- Try again!")
}

// Hard
const tomMass = 8;
const tomHeight = 9;
const jerryMass = 45;
const jerryHeight = 10;

const BMITom = tomMass / tomHeight ** 2;
const BMIJerry = jerryMass / (jerryHeight * jerryHeight);
console.log(BMITom, BMIJerry);

if (BMITom > BMIJerry) {
    console.log("Tom's BMI is higher than Jerry's");
} else {
    console.log("Jerry's BMI is higher than Tom's");
}




