var keypad = document.getElementsByClassName('keypad');
var display = document.getElementById('display-area');
var operand1 = null;
var operand2 = null;
var operator = null;
var flag = 0;


for(var i = 0; i<keypad.length; i++){
    keypad[i].addEventListener('click', function(){

        if(flag === 1){    // to display the operator
            display.innerText = '';
            flag = 0;

        }
        
        var value = this.getAttribute('data-value');
        
        if(value == '/' || value == '*' || value == '-' || value == '+'){
            //when an operator is clicked

            operand1 = parseFloat(display.textContent);
            operator = value;
            display.innerText = value;
            flag = 1;

        }

        else if(value == 'reset'){
            //when clear button is clicked

            display.innerText = '';
        
        }

        else if(value == '='){
            //when = is clicked

            operand2 = parseFloat(display.textContent);
            display.innerText = '';

            if(operator == '/' && operand2 == '0'){
                display.innerText = "Error";  
            }
            else if(operator == '/' || operator == '*' || operator == '-' || operator == '+'){
                var result = eval(operand1 + " " + operator + " " + operand2);
                display.innerText = result;
            }  
                
        }

        else if(value == '%'){
            operand1 = parseFloat(display.textContent);
            var result = operand1 / 100;
            display.innerText = result; 
        }

        else if(value == '+/_'){
            display.innerText = -(display.textContent);
        }

        else{
            //when operand is entered

            display.innerText += value;
        
        }

    });
}