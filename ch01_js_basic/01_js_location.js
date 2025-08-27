// document.write('자바스크립트 js 파일에 위치<br>');
// var greeting = 'Hello World!';

// console.log('Hello, JavaScript');
// console.log(greeting);

// let car;
// console.log(car);

// 객체 선언 및 초기화
// const person = {
//   firstName: 'Jone',
//   lastName: 'Doe',
//   age: 20,
//   eyeColor: 'blue'
// };

// // 객체 출력
// console.log(person);

// // 객체의 property 수정 방법 # 1
// person.firstName = '일';
// person.lastName = '김';
// console.log(person);

// // 객체의 property 수정 방법 # 2
// person['eyeColor'] = '검은색';
// console.log(person);

// console.log(typeof {x:1, y:2}); // object
// console.log(typeof [1,2,3]);    // object
// console.log(typeof null);       // object


//비교 연산자 부분
// let a = 3;
// let b = '3';

// console.log(a==b);  // true
// console.log(a===b); // false

// 중첩 삼항 연산자
let point = 92;
let grade = (point >= 90) ? 'A' : (point >= 80) ? 'B' : 'C';
console.log(grade);