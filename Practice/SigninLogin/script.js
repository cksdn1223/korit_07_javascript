const inputId = document.getElementById('inputId');
const inputPw = document.getElementById('inputPw');


function login() {
  const savedUser = JSON.parse(localStorage.getItem("user"));
  if(inputId.value === savedUser.id && inputPw.value === savedUser.pw){
    alert('로그인 성공');
  } else {
    alert('아이디 혹은 비밀번호가 틀렸습니다.');
  }
}

function signin() {
  let forms = document.querySelector('.container');
  forms.innerHTML = '<input id="username" type="text" placeholder="이름을 입력하세요" autocomplete="off">' + 
  '<input id="createId" type="text" placeholder="생성할 ID를 입력하세요" autocomplete="off">' + 
  '<input id="createPw" type="password" placeholder="PW를 입력하세요" autocomplete="off">' +
  '<button id="signin" onclick="createAccount()">회원가입</button>';
}

function createAccount() {
  const username = document.getElementById('username');
  const createId = document.getElementById('createId');
  const createPw = document.getElementById('createPw');
  if(username.value === "" || createId.value === "" || createPw === "") {
    alert('비어있는 칸이 있습니다.');
    return signin();
  }
  const user = {
    name: username.value,
    id: createId.value,
    pw: createPw.value,
  }
  localStorage.setItem("user", JSON.stringify(user));
  alert(username.value + '님 회원가입 성공!');
}


inputId.addEventListener("input", () => {
  if (inputId.value === "") {
    inputId.style.boxShadow = "0 1px 5px rgb(255, 63, 63)";
  } else {
    inputId.style.boxShadow = "0 1px 5px rgb(63, 255, 63)";
  }
});
