// 빈 객체 생성
let person = new Object();

// 멤버 설정
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;
person.getFullName = function() {
  return this.firstName + " " + this.lastName;
};
/*
함수 표현식 관련한 부분
JS 에서는 함수를 변수에 저장할 수 있었습니다.
그래서 객체명.함수명()으로 호출을 하게 될거니까 저희가 배운 방식으로는 method라고 할 수 있겠습니다.
*/
console.log(person.getFullName());  // 결과값 : John Doe

// String-indexOf()
let str1 = '일이삼사오륙칠파구 십십일';
let emptySpace = str1.indexOf(' ');
let lastTen = str1.lastIndexOf('십');
console.log(emptySpace);
console.log(lastTen);

// String-slice()
let str2 = 'Apple, Banana, Kiwi';
let result2 = str2.slice(7, 12);
let result3 = str2.slice(7, 13);
console.log(result2); // 결과값 : Banan
console.log(result3); // 결과값 : Banana
/* 이상의 부분에서 주의할 점은 한계값 바로 앞까지만 불러온다는 점입니다.*/

let result4 = str2.slice(7);
console.log(result4); // 결과값 : Banana, Kiwi
/* 매개변수를 하나만 지정했을 경우 그 시작 인덱스로부터 문자열 끝까지 출력해줍니다. 

  마이너스인덱스
  맨마지막 문자열의 index를 -1으로 잡고 앞으로 올 때마다 -1씩 더해줍니다.
*/
let result5 = str2.slice(-12);
console.log(result5); // 결과값 : Banana, Kiwi
/* 
  마이너스 인덱스를 써야하는 경우
  
  자동차 차량 번호판
  12일5678
  370수5690

  index 7 로 출력하려고하면 7이 없는경우 오류발생
  -1 을 사용하면 걱정없이 맨 뒤를 출력가능
*/

// String-substring()
let result6 = str2.substring(7, 13);  // 결과값 : Banana
console.log(result6);
// 마이너스 인덱스를 지원하지 않기 때문에 결과값이 예상과 다릅니다.
// let result7 = str2.substring(-12);
// console.log(result7); // 결과값 : Apple, Banana, Kiwi

// String-substr()
let result8 = str2.substr(0, 5);
console.log(result8);
let result9 = str2.substr(-12); // 결과값 : Banana, Kiwi
console.log(result9);

let eStc = 'Please visit Seoul and Seoul';
let rdpStc = eStc.replace('SEOUL', 'Busan');
console.log(rdpStc);
let rpdStc2 = eStc.replace(/SEOUL/i, 'Busan');
console.log(rpdStc2);
/*
JS 정규식 표현식을 사용
i 는 insensitive의 축약어로 대소문자 구분 안하고 그냥 찾는다는 의미
*/
let rpdStc3 = eStc.replace(/Seoul/g, 'Busan');
console.log(rpdStc3);
// 결과값 : Please visit Busan and Busan
// g 는 global 약자로, 맨 앞에 것만 바꾸는게 아니라 전부 다 바꾼다는 의미

// String-concat()
let txt1 = 'Hello';
let txt2 = 'World';
let txt3 = txt1.concat(' ', txt2);
console.log(txt3);
// 결과값 : Hello World
let txt4 = 'Hello' + ' ' + 'World';

/*
실무 사용 예시
우리나라에서는 이름이 성이름이 붙어있지만 다른 나라에서는 이름 성 형태나 성 이름 에서 공백으로 구분하는 경우가 있습니다. 이상의 경우에 firstName / middleName / lastName 으로 각각 변수에 데이터를 저장하고

fullName 변수에 .concat()을 적용한 다음 출력하는 방법을 사용할 수 있습니다.
*/

// String-trim()
let txtSpace = '     Hello, World!     ';
console.log(txtSpace.trim());
// 결과값 : Hello, World!

// String-charAt()
let charAtTxt = "I'm tired.😂";
console.log(charAtTxt.charAt(4));
// 결과값 : t

// String-split()
let birthday = '1988-07-09';
let birthdayArray = birthday.split('-');
console.log(birthdayArray);
// 결과값 : [ '1988', '07', '09' ]
