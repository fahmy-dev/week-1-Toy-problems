// function responsible for calculating grade
function calcGrade(grade) {
    // if statements to assign correct grade (using conditionals)
    if (grade < 0 || grade > 100 || !Number.isInteger(grade)) {
        return "Invalid, input a number between 0 and 100";   
    } else if (grade > 79) {
        return "A";
    } else if (grade >= 60 && grade <= 79) {
        return "B";
    } else if (grade > 49 && grade <= 59) {
        return "C"
    } else if (grade > 40 && grade <= 49) {
        return "D"
    } else {
        return "E"
    }
}

// printing the grade for the input marks 
console.log(calcGrade(20));

