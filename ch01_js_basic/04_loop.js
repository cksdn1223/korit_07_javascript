// let brands = ['애플', '구글', '메타', '아마존', '삼성전자'];

// console.log(brands[0]);
// console.log(brands[1]);
// console.log(brands[2]);
// console.log(brands[3]);
// console.log(brands[4]);
// for(let i = 0 ; i < brands.length ; i++){
//   console.log('반복문으로 출력한 ' + brands[i]);
// }

// let productList = [
//   {
//     name: '솔의눈',
//     price: 700,
//   },
//   {
//     name: '레쓰비',
//     price: 780,
//   },
//   {
//     name: '파워에이드',
//     price: 1200,
//   },
//   {
//     name: '오렌지주스',
//     price: 1400,
//   },
//   {
//     name: '제로콜라',
//     price: 800,
//   },
//   {
//     name: '맥콜',
//     price: 900,
//   },
// ];

/*
이상의 코드라인에서 주목해야 할 부분은
첫번째, 마지막 index에 해당하는 element 다음에도 ' , '  가 찍혀있는데도 오류가 발생하지 않는다는점
두번쨰, Array의 element인 object의 마지막 property의 value 값 다음에도 ' , ' 가 있지만 오류가 발생하지 않는다는점

추후에 property를 추가하거나 혹은 element를 추가하거나 할 때 전에 말한 것처럼 쉼표 치고 엔터 치고 다시 {} 혹은 property 추가하기 귀찮으니까
맨 마지막 element/property 여부와 관계없이 쉼표 찍어주는게 매너가 된게 아예 관행처럼 굳어진겁니다. 그래서 오류로 처리하지도 않습니다.
*/
// console.log(productList[4].name);
// console.log(productList[4]['name']);
//솔의눈 파워에이드 음료수 합
// let sol = productList[0];
// let power = productList[2];
// console.log(sol.name + '의 가격과 ' + power.name + '의 가격은 각각 ' + sol.price + ' 원과 ' + power.price + ' 원으로, 그 합은 ' + (sol.price + power.price) + ' 원 입니다.');


// let inputCoin = 900;
// let outputList = [];
// inputcoin 으로 살수있는 음료 목록들을 집어넣기

// for( let i = 0 ; i < productList.length ; i++ ){
//   if(inputCoin > productList[i].price) {
//     //outputList에 element로 추가
//     outputList.push(productList[i]);  // 배열에 데이터를 추가하는 method .push()
//   }
// }

// console.log(outputList);

/*
배열 내부에 객체가 element라면, 배열 자체를 console.log(배열명); 으로 출력했을 때 결과값이 
[object Object],[object Object],[object Object]
형식으로만 나오게 되고,

명확한 상태를 알기 위해서는 결국 배열의 각 element를 추출하는 반복문을 작성해야 한다는 점을 확인할 수 있습니다.
*/

// for ( let i = 0 ; i < outputList ; i++ ){
//   for ( let j = 0 ; j < outputList[i] ; j++){
//     console.log(outputList[i][j]);
//   }
// }
/*
outputList의 element의 자료형은 객체이고, 객체에는 index number가 존재하지 않으므로 이중 for문을 통해서 객체 내부의 각 property를 확인하는 것은 불가능합니다.

그럼 마찬가지로 일반 객체의 각 property를 추출해서 데이터를 가공하는 방식이 불가능함을 의미합니다. 
*/

// 2. for-in 문

// let person = {
//   fName: '일',
//   lName: '김',
//   age: 20,
// }

// for ( const key in person) {  // 그럼 추출되는 key는 각각 fName / lName / age 입니다.
//   console.log(key);
//   console.log(person[key]);
  // 이 시점에서 첫 번재 반복이라고 가정해보겠습니다.
  // 그러면 key = 'fName';이 저장되어있다고 볼 수 있겠네요.

  // 즉 person.key는 person.fName이 아니라 person.'fName'이라는 점이 문제입니다.
  // console.log(person.key);
// }
// JS에서 객체에 반복문을 돌리게 되면 key 값을 return 합니다.
// 그래서 해당 key에 할당된 value를 추출하고싶다면 위와같은 방식으로 코드를 작성해야 합니다.

let nums = [1,2,3,4,5,6,7,8,9];
// 일반 for문으로 추출
for(let i = 0 ; i < nums.length ; i++){
  console.log(nums[i]);
}

// 객체의 property의 키를 추출할 수 있으니까, 마치 향상된 for문 처럼 여겨져서
// 배열을 for-in문으로 추출 시도해봅니다.
// for ( let num in nums ) {
//   console.log(num); // 결과값 : string
// }

// 3. for-of 문
// for-in문의 경우에는 객체 한정으로 생각하시는 편이 낫습니다.  
// 일반적인 Java에서의 enhanced for 문에 해당하는 것은 for-of 문이라고 생각
for(const num of nums) {
  console.log(num);
  console.log(typeof num); // 결과값: number
}

// 4. while 문 : Java랑 동일합니다.