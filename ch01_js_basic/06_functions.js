function sum(x,y){
  let sum = x + y;
  return sum;
}

// 함수의 결과값을 변수에 대입하고, 그 변수를 가지고 또 연산을 할 수 있을 겁니다.
let result = sum(11,22);
console.log(result);
let result2 = sum(result, 33);
console.log(result2);

function sum(x,y) {
  let result = x + y;
  return result;
}