// window.alert('이것은 alert창입니다.');

// confirm()
// confirm();

// prompt()
// prompt('삭제하신다면 delete my page 를 입력');

// open()
// open('https://www.naver.com');

// setTimeout() / clearTimeout()
let myExec;

function myFunction() {
  myExec = setTimeout(
    function() {console.log('5초후 실행');}
    , 5000);
}

function myStopFunction() {
  console.log('취소합니다.');
  clearTimeout(myExec);
}

myFunction();
// 보통 onclick에 사용합니다.