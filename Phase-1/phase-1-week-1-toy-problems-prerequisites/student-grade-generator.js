function studentGradeGenerator(marks) {
    if (marks > 100 || marks < 0 || isNaN(marks)) {
        return "Invalid input! Marks should be between 0 and 100.";
    }

    if (marks > 79) {
        return "Grade: A";
    } 
    else if (marks >= 60) {
        return "Grade: B";
    } 
    else if (marks >= 50) {
        return "Grade: C";
    } 
    else if (marks >= 40) {
        return "Grade: D";
    } 
    else {
        return "Grade: E";
    }
}

// Example Test 
console.log(studentGradeGenerator(65)); // Output: "Grade: B"
console.log(studentGradeGenerator(85)); // Output: "Grade: A"
console.log(studentGradeGenerator(55)); // Output: "Grade: C"
console.log(studentGradeGenerator(30)); // Output: "Grade: E"
console.log(studentGradeGenerator(40)); // Output: "Grade: D"
console.log(studentGradeGenerator(-5)); // Invalid input! Marks should be between 0 and 100
console.log(studentGradeGenerator(123)); // Invalid input! Marks should be between 0 and 100