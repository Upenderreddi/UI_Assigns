//Write a for loop that prints all numbers from 1 to 20 but skips multiples of 3 andstops if the number reaches 17.

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue; // Skip multiples of 3
    }
    if (i === 17) {
        break; // Stop the loop at 17
    }
    console.log(i);
}

// Write a while loop that prints all even numbers between 10 and 30 in reverseorder, and also counts how many even numbers were printed.
let i = 30;
let count = 0;

while (i >= 10) {
    if (i % 2 === 0) {
        console.log(i);
        count++;
    }
    i--;
}

console.log("Total even numbers printed:", count);

// Use a do...while loop to prompt a user (simulate with hard coded input) to enter anumber greater than 50. Keep prompting until the number is valid, then print"Thank you"
let inputs = [30, 45, 50, 51]; // Simulated user inputs
let index = 0;
let number;

do {
    number = inputs[index];
    console.log("User entered:", number);
    index++;
} while (number <= 50);

console.log("Thank you");

// 4. for...of loop to convert array colors to uppercase
const colors = ["red", "green", "blue", "yellow", "purple"];

for (let i in colors) {
    colors[i] = colors[i].toUpperCase();
}

console.log(colors);
//5. for...in loop for object keys and nested keys
const student = {
    name: "Amit",
    age: 21,
    grade: "A",
    subjects: {
        math: 85,
        english: 78
    }
};

// Top-level keys
for (let key in student) {
    if (key !== "subjects") {
        console.log(`${key}: ${student[key]}`);
    }
}

// Nested keys
console.log("Subjects:");
for (let subject in student.subjects) {
    console.log(`${subject}: ${student.subjects[subject]}`);
}

// Part 2: Conditionals
// 1. Function based on color
function checkColor(inputColor) {
    const color = inputColor.toLowerCase();
    let action;

    if (color === "green") {
        action = "Go";
    } else if (color === "yellow") {
        action = "Slow down";
    } else if (color === "red") {
        action = "Stop";
    } else {
        action = "Invalid color";
    }

    console.log(`Color is ${inputColor.toUpperCase()}. Action: ${action}`);
}

// Test
checkColor("Green");
checkColor("YELLOW");
checkColor("blue");

//2. Switch statement for day of week

const day = "Fri"; // Example input

switch (day) {
    case "Mon":
        console.log("Start of work week");
        break;
    case "Tue":
    case "Wed":
    case "Thu":
        console.log("Midweek");
        break;
    case "Fri":
        console.log("Almost weekend");
        break;
    case "Sat":
    case "Sun":
        console.log("Weekend!");
        break;
    default:
        console.log("Invalid day");
}

//Part 3: Create 10 book objects and store in an array

const books = [{
        title: "Book 1",
        author: "Author A",
        year: 2001
    },
    {
        title: "Book 2",
        author: "Author B",
        year: 2002
    },
    {
        title: "Book 3",
        author: "Author C",
        year: 2003
    },
    {
        title: "Book 4",
        author: "Author D",
        year: 2004
    },
    {
        title: "Book 5",
        author: "Author E",
        year: 2005
    },
    {
        title: "Book 6",
        author: "Author F",
        year: 2006
    },
    {
        title: "Book 7",
        author: "Author G",
        year: 2007
    },
    {
        title: "Book 8",
        author: "Author H",
        year: 2008
    },
    {
        title: "Book 9",
        author: "Author I",
        year: 2009
    },
    {
        title: "Book 10",
        author: "Author J",
        year: 2010
    }
];

console.log(books);