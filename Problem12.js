//Ask the user to enter their age. Check if they entered a value between 0 and 125. If valid, print "REAL AGE".
//If invalid print “NOT A REAL AGE!!!”

var userAge= parseInt(prompt("How old are you?"));

if (userAge < 0 )
{
    console.log("NOT REAL AGE.");
}
else if (userAge <= 125 )
{
    console.log("REAL AGE.");
}
else
{
    console.log("NOT REAL AGE.")
}