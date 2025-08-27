let date = new Date();  // Java에서의 객체 생성 방식과 같죠
let day = date.getDay();
let dayName = '';
/*
  일요일 = 0, 월요일 = 1, ... 토요일 = 6 리턴
  return 자료형은 number
*/
switch(day){
  case 0:
    dayName = '일요일';
    break;
  case 1:
    dayName = '월요일';
    break;
  case 2:
    dayName = '화요일';
    break;
  case 3:
    dayName = '수요일';
    break;
  case 4:
    dayName = '목요일';
    break;
  case 5:
    dayName = '금요일';
    break;
  case 6:
    dayName = '토요일';
    break;
}

console.log('오늘은 ' + dayName + ' 입니다.');