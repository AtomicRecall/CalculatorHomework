"use strict";

let amountOfOperators = 0;


document.querySelectorAll("button").forEach(button =>{

    button.onclick = () => {
        
        switch(button.id){

            case "clear":
                clearDisplay();
                break;

            case "backSpace":
                (document.getElementById("display").value == "" ? (alert("You have nothing to remove in the display!"), amountOfOperators = 0) : (document.getElementById("display").value = document.getElementById("display").value.substring(0,document.getElementById("display").value.length-1), (document.getElementById("display").value === "" ? amountOfOperators = 0 : amountOfOperators = amountOfOperators)));
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

function addOperatorToDisplay(Operator){

    if(amountOfOperators > 0){
        alert("only one operator at a time, sorry!");
        return;
    }

    amountOfOperators++;

    document.getElementById("display").value+=Operator;
}

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

function clearDisplay(){

    document.getElementById("display").value="";
    amountOfOperators = 0;
}


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
