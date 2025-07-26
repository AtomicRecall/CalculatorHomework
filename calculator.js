"use strict";

let amountOfOperators = 0;

/*
    Setting up all onclick functions for everybutton
    instead of doing it manually, get every possible button and just make it so if it is not a special button then push it to the display, 
    anything else we would do special code for.
*/
document.querySelectorAll("button").forEach(button =>{

    button.onclick = () => {
        switch(button.id){

            case "clear":
                clearDisplay();
                break;

            case "backSpace":
                //If the display is empty, say the display is empty, anything else: if the character that is going to be removed is an operator, then make amountOfOperators 0, then remove the character like intended, if it is not an operator then just remove the character like normal.
                (document.getElementById("display").value == "" ? (alert("You have nothing to remove in the display!"), amountOfOperators = 0) : ( ['+', '-', '*', '/', 'x'].includes(document.getElementById("display").value.substring(document.getElementById("display").value.length-1 , document.getElementById("display").value.length)) ? amountOfOperators = 0 : amountOfOperators = amountOfOperators,  document.getElementById("display").value = document.getElementById("display").value.substring(0,document.getElementById("display").value.length-1)));
                break;
            
            case "equal":
                (CheckIfStatementIsApplicable(document.getElementById("display").value)) ? CalculateStatement(document.getElementById("display").value) : alert("Statement Incorrect");
                break;

            case "empty":
                alert("This button is not functional!");
                break;

            default:
                addToDisplay(button.textContent);
                break;
        }

    }
});

/*
    function addToDisplay(String InputToAdd)
     this function takes an Input as a random string and pushes that to the "display"
     if the string is an operator then run the addOperatorToDisplay() function.

*/
function addToDisplay(InputToAdd){
    switch(InputToAdd){
        case "/":
            addOperatorToDisplay("/");
            break;
        case "x":
            addOperatorToDisplay("x");
            break;
        case "-":
            addOperatorToDisplay("-");
            break;
        case "+":
            addOperatorToDisplay("+");
            break;
        default:
            document.getElementById("display").value+=InputToAdd;
            break;
    }
    
}

/*
    function addOperatorToDisplay(String Operator)
     this function takes an operator ONLY and increments the amountOfOperators value by one and adds the operator to the display.
     If the amountOfOperators is greater than 0, (meaning the user already added an operator)...
     then push an alert and disallow the user from writing another operator. (since only simple arithmetic)
*/
function addOperatorToDisplay(Operator){

    if(amountOfOperators > 0){
        alert("only one operator at a time, sorry!");
        return;
    }

    amountOfOperators++;

    document.getElementById("display").value+=Operator;
}

/*
    function CheckIfStatementIsApplicable(String statement)
     this function checks if the statement is a correct math statement. (eg. NOT x1215, or 1512x, always has to be 12x15)
     if the function is correct, return true anything else return false.
*/

function CheckIfStatementIsApplicable(statement){
    for (let op of ['+', '-', '*', '/', 'x']) {

        const index = statement.indexOf(op);

        if(index !== -1){
            const before = statement.slice(0,index);
            const after = statement.slice(index+1);

            const isNumber = val => !isNaN(val) && val !== "";

            return (isNumber(before) && isNumber(after)) ? true : false;
    
        }
    }
}

/*
    function CalculateStatement(String statement)
     this function calculates the statement that should already have been confirmed as correct.

*/

function CalculateStatement(statement){
    for (let op of ['+', '-', '*', '/', 'x']) {

        const index = statement.indexOf(op);

        if(index !== -1){
            
            const before = Number(statement.slice(0,index));
            const after = Number(statement.slice(index+1));

            switch(op){                  
                case "x":
                    document.getElementById("display").value=String(before*after);
                    break;

                case "/":
                    // if the user has entered a 0, that means they are dividing by 0.
                    (before !== 0 && after !== 0) ? document.getElementById("display").value = String(before/after): (alert("Divide by Zero!"), clearDisplay());
                    break;
                case "+":
                    document.getElementById("display").value=String(before+after);
                    break;

                case "-":
                    document.getElementById("display").value=String(before-after);
                    break;

            }
        }
    }
    amountOfOperators = 0;
    
}
/*
    function clearDisplay()
     this function just removes whatever is in the display and sets amountOfOperators to 0 since it has been removed.
*/
function clearDisplay(){

    document.getElementById("display").value="";
    amountOfOperators = 0;
}

/*
    special functionality for the dark/light mode.
*/

document.getElementById("DarkOrLight").onclick = function(){
                
                if(document.body.style.backgroundColor === "rgb(248, 248, 248)" || document.body.style.backgroundColor === ""){
                    
                    document.getElementById("DarkOrLight").src = "https://images.unsplash.com/photo-1527842891421-42eec6e703ea?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHVhfGVufDB8fDB8fHww";
                    document.body.style.backgroundColor = "black";
                    document.getElementById("DarkOrLight").style.filter = "drop-shadow(0px 0px 3px white)";
                    document.getElementById("display").style.color = "white";
                    document.getElementById("display").style.backgroundColor = "black";
                    document.getElementById("display").style.borderColor = "black";
                    document.querySelectorAll("button").forEach(button =>{
                        button.style.color = "white";
                        button.style.backgroundColor = "black";
                        button.style.borderColor = "black";
                    })
                }
                else{
                    document.getElementById("DarkOrLight").src = "https://media.istockphoto.com/id/1124567572/vector/cute-flat-sun-icon.jpg?s=612x612&w=0&k=20&c=_ekkRvw-dX-3Dt-jH3tG8wonvYJ1NrBHEAEDFm4cGVc=";
                    document.body.style.backgroundColor = "#F8F8F8";
                    document.getElementById("DarkOrLight").style.filter = "drop-shadow(0px 0px 3px black)";
                    document.getElementById("display").style.color = "black";
                    document.getElementById("display").style.backgroundColor = "white";
                    document.getElementById("display").style.borderColor = "white";
                    document.querySelectorAll("button").forEach(button =>{
                        button.style.color = "black";
                        button.style.backgroundColor = "white";
                        button.style.borderColor = "white";
                        
                    })

                }

                
            }
