//Ask the user to enter their grade. Print their letter grade:
//
// A 90 - 100 B 80 - 89 C 70 - 79 D 60 - 69 F 0 - 59
//If it's negative or over 100 print an error.

var grade = prompt("What is your number grade");
grade = parseInt(grade)

if (grade >= 90 && grade <= 100)
{
    console.log("Your letter grade is A")
}
else if (grade >= 80 && grade <= 89)
{
    console.log("Your letter grade is B")
}
else if (grade >= 70 && grade <= 79)
{
    console.log("Your letter grade is C")
}
else if (grade >= 60 && grade <= 69)
{
    console.log("Your letter grade is D")
}
else if (grade >= 0 && grade <= 59)
{
    console.log("Your letter grade is F")
}
else if (grade <0 || grade >100)
{
    console.log("ERROR")
}