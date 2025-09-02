// 회원가입시 입력받은 값을 불러옴
const inputId = document.getElementById('inputId');
const inputPw = document.getElementById('inputPw');

// Register 버튼에 이벤트 추가
document.getElementById('register').addEventListener('click', createUser);

// Enter 키 이벤트 추가
let inputs = document.getElementsByTagName('input');

for(let i = 0 ; i < inputs.length ; i++){
  inputs[i].addEventListener('keydown', (event) => {
    if(event.key === 'Enter') createUser();
  })
}

// 로컬 스토리지에 키값users 이 있따면 users에 저장 없으면 빈 배열
let users = JSON.parse(localStorage.getItem("users")) || [];

function createUser() {
  // 비어있는지 확인
  if(inputId.value === "" || inputPw.value === ""){
    //비어있다면 함수 종료
    alert('비어있는 칸이 있습니다.');
    return;
  };
  // ID 중복 방지
  if(users.find(user => user.id === inputId.value)){
    alert('이미 사용중인 ID 입니다.');
    return;
  }
  // 입력값 사이에 공백 방지
  if(
    inputId.value.length - inputId.value.trim().length !== 0 ||
    inputPw.value.length - inputPw.value.trim().length !== 0
  ){
    alert('ID또는 PW는 공백을 포함할 수 없습니다.');
    return;
  }

  // 위 조건들을 통과했으니 user 객체만들어 localStorage에 저장
  const user = {
    id: inputId.value,
    pw: inputPw.value,
  };
  // user 객체를 users 배열에 넣기
  users.push(user);
  // string 으로 만들어서 users 키값 으로 localStorage에 저장
  localStorage.setItem("users", JSON.stringify(users));

  // 회원가입 성공 알림 후 로그인 페이지로 전환
  alert('회원가입 성공! 로그인 페이지로 이동합니다.');
  // 로그인 html 로 보내기
  location.href = "signIn.html";
}