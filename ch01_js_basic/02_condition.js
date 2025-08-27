/* 
  7세 이하 - 0원
  8세 이상 13세 이하 - 450원
  14세 이상 19세 이하 - 720원
  20세 이상 - 1200원
  70세 이상 - 0원
  
  실행 예
  12 살의 버스 요금은 450원입니다.
*/

let age = 12; // 변수 선언 및 초기화
let busFare = 0;
if(age <= 7){
  busFare = 0;
} else if (age <= 13){
  busFare = 450;
} else if (age <= 19){
  busFare = 720;
} else if (age < 70){
  busFare = 1200;
} 
console.log(age + " 살의 버스 요금은 " + busFare + "원입니다.");


const inputAge = document.getElementById("age");
const result = document.getElementById("result");
inputAge.addEventListener("input", ()=> {
  let busFare = 0;
  if(inputAge.value <= 7){
    busFare = 0;
  } else if (inputAge.value <= 13){
    busFare = 450;
  } else if (inputAge.value <= 19){
    busFare = 720;
  } else if (inputAge.value < 70){
    busFare = 1200;
  }
  result.value = inputAge.value + ' 살의 버스 요금은 ' + busFare + '원입니다.';
});
