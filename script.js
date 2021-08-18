let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
let fact = 1;
for(item of buttons){
    item.addEventListener('click', (e) =>{
        buttonText = e.target.innerText;
        console.log('button text is ' , buttonText)
        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'CE'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '='){
            screen.value = eval(screenValue);
            screenValue = screen.value;
        }
        else if (buttonText == '+/-'){
            screen.value = -(screenValue);
            screenValue = screen.value;
        }
        else if (buttonText == 'Mod'){
            buttonText = '%';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '🔙'){
            screenValue = screenValue.substring(0, screenValue.length - 1);
            screen.value = screenValue;
        }
        else if (buttonText == '!'){
            while (screenValue >= 1) {
             fact = fact * screenValue;
             screenValue = screenValue - 1;
            }
            screen.value = fact;
            screenValue = screen.value;
        }
        else if (buttonText == '|x|'){
            var x = Math.abs(screenValue);
            screenValue = x;
            screen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}