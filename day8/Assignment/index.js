let display = document.getElementById("display");

function appendNumber(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function CalculateResult(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = "Error"
    }
}

