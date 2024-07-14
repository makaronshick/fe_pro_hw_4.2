/* 
Дано тризначне число, яке надае користувач, потрибно визначити:
Чи правда, що всі цифри однакові?
Чи є серед цифр цифри однакові?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const inputValue = prompt(
  "Enter a three-digit whole number to check if it contains identical digits"
);

const valid =
  inputValue === null ||
  !inputValue.trim() ||
  isNaN(inputValue) ||
  parseInt(inputValue) !== +inputValue ||
  Math.abs(inputValue).toString().length !== 3;

if (valid) {
  alert("Nothing entered or the number entered does not meet the requirements");
} 
else {
  const absInputStr = Math.abs(inputValue).toString();
  const inputArr = absInputStr.split("");

  if (inputArr[0] === inputArr[1] && inputArr[0] === inputArr[2]) {
    alert(`In the number ${inputValue}, all digits are the same`);
  } 
  else if (
    (inputArr[0] === inputArr[1] && inputArr[0] !== inputArr[2]) ||
    (inputArr[0] === inputArr[2] && inputArr[0] !== inputArr[1]) ||
    (inputArr[1] === inputArr[2] && inputArr[0] !== inputArr[1])
  ) {
    alert(`In the number ${inputValue}, only two digits are the same`);
  } 
  else {
    alert(`In the number ${inputValue}, all digits are different`);
  }
}
