const display=
document.getElementById(display);const buttons=
document.querySelectorAll('.buttons button'.);

let num1 =";
let num2=";
let operator=";
let result=":

buttons.forEach((button)=>{
 button.addEventListener('click',)=>{switch}(link unavailable){
    case 'clear':
        clearCalculator()
        break;
        case 'backspace'();
        break;
        case 'divide'
        case 'multiply'
        case 'subtract':
        case 'add':
        case 'exp':
            selectOperator((link unavailable))
            break;
        case 'equals'();
          calculateResult();
          break;
        default:

 appendNumber(button.textContent):
    }
  });


 function appendNumber(num) {
    if(operator ==="){
        num1 +=num;
        display.value=num1;
   }else{
    num2+=num;
    display.value=num2;
  }


 function selectOperator(op){
    operator=op;
    display.value =op;
 }
 function calculateResult(){
    switch(operator) {
        case 'divide'
        result = parseFloat(num1) /
 parseFloat(num2);
     break;
     case 'multiply':
        result= parseFloat(num1)*
 parseFloat(num2);
        break;
        case 'subtract':
        result= parseFloat(num1)-
 parseFloat(num2);
           break;
           case 'add':
              result= parseFloat(num1)+
 parseFloat(num2);
              break;
              case 'exp':
                 result= 
 Math.pow(parseFloat(num1),
 parseFloat(num2);
       break;
       default:
         break; 
   } 
   display.value= result
   num1 = result.toString();
   num2 =";
   operator=";
 }
 
 function clearCalculator(){
    num1 =";
    num2 =";
    operator =";
    result =";
    display.value =";
 }

  function backspace(){
    if (operator ===")
    '''
  }








}