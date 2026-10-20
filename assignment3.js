
const score = 85;

// Step 1: Evaluate the score using if...else
let result;

if (score >= 0 && score <= 100) {
    result = "Valid";
} else {
    result = "Invalid";
}

// Step 2: Determine the grade using switch
let grade;

if (result === "Valid") {
    switch (true) {
        case score >= 90:
            grade = "A";
            break;

        case score >= 80:
            grade = "B";
            break;

        case score >= 70:
            grade = "C";
            break;

        case score >= 60:
            grade = "D";
            break;

        default:
            grade = "F";
    }
}

// Step 3: Use the ternary operator
const status = score >= 40 ? "Passed" : "Failed";

console.log("Score:", score);
console.log("Grade:", grade);
console.log("Status:", status);
