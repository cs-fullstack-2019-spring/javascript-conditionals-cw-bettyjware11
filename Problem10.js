//Ask the user for 3 cards. If the sum equals 21 print BLACKJACK! If the sum is greater than 21 print BUST!
//If the sum is less than 21 print “The total is [TOTAL]”

var card1 =prompt("Enter card number");
var card2 =prompt("Enter card number");
var card3 =prompt("Enter card number");
var cardTotal=(card1+card2+card3);

if(cardTotal =  21)
    {
        console.log("BLACKJACK")
    }


else if (cardTotal > 21)
{
    console.log("BUST")  }

    else if (cardTotal < 21)
    {
        console.log("The total is" + cardTotal)
    }
