console.log('Задание 5');
let monthNumber = 16;
if (monthNumber < 1 || monthNumber > 12) {
  console.log("Неправильный номер месяца");
} else {
switch (monthNumber) {
    case 12: 
    case 1:  
    case 2:  
        console.log("зима");
        break;
    case 3:  
    case 4:  
    case 5: 
        console.log("весна");
        break;
    case 6:  
    case 7:  
    case 8:  
        console.log("лето");
        break;
    case 9:  
    case 10: 
    case 11: 
        console.log("осень");
        break;
}}
