/* 
조건문을 활용하고, 숫자 두개와 사칙연산 기호 하나를 매개변수로 받아서 그에 맞는 계산을 하는 계산기 함수를 정의 하도록 하겠습니다.
 */

let calc = function(x,y,operator) { // 매개변수의 자료형이나 선언자가 없다는 점.
  if(operator === '+') return x + y;
  else if(operator === '-') return x - y;
  else if(operator === '*') return x * y;
  else if(operator === '/') return x / y;
}

let plusResult = calc(5,7,'+');
console.log(plusResult);
let minusResult = calc(10,7,'-');
console.log(minusResult);
let multiResult = calc(203,3459,'*');
console.log(multiResult);
let divResult = calc(5943,21,'/');
console.log(divResult);
