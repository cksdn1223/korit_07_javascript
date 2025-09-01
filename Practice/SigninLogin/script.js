const inputId = document.getElementById('inputId');
const inputPw = document.getElementById('inputPw');
const input = document.querySelector('.container');
const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
input.addEventListener('input', (event) => {
  if(event.target.value !== "") event.target.style.boxShadow = '0 0 8px rgba(72, 255, 0, 1)';
  else event.target.style.boxShadow = '0 0 8px rgba(255, 255, 255, 1)';
});

function login() {
  const savedUser = savedUsers.find(user => user.id === inputId.value);

  if (inputId.value === "" || inputPw.value === "") {
    alert("비어있는 칸이 있습니다.");
    return;
  }

  if (!savedUser) {
    alert("아이디가 또는 비밀번호가 틀렸습니다.");
    return;
  }

  if (inputPw.value === savedUser.pw) {
    alert("로그인 성공");
  } else {
    alert("아이디 또는 비밀번호가 틀렸습니다.");
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

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const savedUser = users.find(user => user.id === createId.value);
  if(savedUser){
    alert("아이디가 이미 존재합니다.");
    return signin();
  }

  if(users.find(user => user.id === username.value)){
    createId.style.boxShadow = "0 1px 5px rgb(255, 0, 0)";

  }
  const user = {
    name: username.value,
    id: createId.value,
    pw: createPw.value,
  }
  
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  alert(username.value + '님 회원가입 성공!');
}

function findpw() {
  const findId = prompt("비밀번호를 찾을 ID와 이름을 입력하세요 (ex. ID 이름)");
  const input = findId.split(" ");
  const savedUser = savedUsers.find(user => user.id === input[0]);
  if(savedUser){
    alert(savedUser.id + '님의 PW는 ' + savedUser.pw + ' 입니다.' + input[1]);
  } else {
    alert('존재하지 않는 ID 입니다.');
  }
}