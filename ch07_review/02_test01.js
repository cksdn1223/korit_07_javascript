const inputId = document.getElementById('inputId');
const inputPw = document.getElementById('inputPw');
const container = document.getElementById('container');

// 버튼에 회원가입 이벤트 추가
document.getElementById('signIn').addEventListener('click', signin);
document.getElementById('login').addEventListener('click',login);

// 회원가입 함수
function signin(){
  // 버튼 클릭시 기존 input button 사라지고 새로운 input 2개 button 1개 추가
  // container 안에 있는 기존 내용 삭제
  container.innerHTML = '';

  const createId = document.createElement('input');
  createId.type = 'text';
  createId.id = 'createId';
  createId.placeholder = '생성할 ID를 입력하세요.';

  const createPw = document.createElement('input');
  createPw.type = 'password';
  createPw.id = 'createPw';
  createPw.placeholder = 'PW를 입력하세요.';

  const signInBtn = document.createElement('button');
  signInBtn.innerText = 'SIGN IN';
  signInBtn.id = 'signInBtn';

  signInBtn.addEventListener('click', createuser);
  // 위에서 만든 input button 들을 container 안에 자식으로 집어넣기
  container.appendChild(createId);
  container.appendChild(createPw);
  container.appendChild(signInBtn);
}
//로그인 페이지 함수
function main(){
  // container 안에 있는 기존 내용 삭제
  container.innerHTML = '';

  const inputId = document.createElement('input');
  inputId.type = 'text';
  inputId.id = 'inputId';
  inputId.placeholder = 'ID를 입력하세요.';

  const inputPw = document.createElement('input');
  inputPw.type = 'password';
  inputPw.id = 'inputPw';
  inputPw.placeholder = 'PW를 입력하세요.';

  const loginBtn = document.createElement('button');
  loginBtn.innerText = 'LOGIN';
  loginBtn.id = 'login';

  const signIn = document.createElement('button');
  signIn.innerText = 'SIGN IN';
  signIn.id = 'signIn';

  loginBtn.addEventListener('click', login);
  signIn.addEventListener('click', signin);
  // 위에서 만든 input button 들을 container 안에 자식으로 집어넣기
  container.appendChild(inputId);
  container.appendChild(inputPw);
  container.appendChild(loginBtn);
  container.appendChild(signIn);
}

// 회원가입 페이지에서 입력한 정보를 객체로만들어서 JSON 파일로 로컬스토리지에 저장하는 함수
function createuser() {
  //회원가입 페이지에서 넣은 id pw 를 받아옴
  const createId = document.getElementById('createId');
  const createPw = document.getElementById('createPw');

  // 로컬스토리지에 저장되어있는 users들을 가져오는데 없으면 빈 배열
  let users = JSON.parse(localStorage.getItem("accounts")) || [];
  
  // 받아온 users에 id가 중복되는지 확인하는 함수
  // users안에 생성할 id와 같은 id가 있다면 가입 불가
  if(users.find(user => user.id === createId.value)){
    alert('이미 존재하는 ID입니다.');
    // 다시 회원가입 페이지로 이동 시킴
    return signin();
  }


  // id가 중복되지 않으면 회원가입 진행
  // input들에 빈칸이 없는지 확인
  if(createId.value === "" || createPw.value === ""){
    // 둘중 하나가 빈칸이라면 빈칸이라고 안내
    alert('비어있는 칸이 있습니다.');
    //다시 회원가입 페이지로 이동
    return signin();
  }

  // 중복도 아니고 비어있지 않으니까 회원가입 진행
  // id pw 객체로 user 만들어서 로컬 스토리지에 json으로 저장
  // 먼저 객체 생성
  const user = {
    id: createId.value,
    pw: createPw.value,
  }
  // users 에 정보 저장
  users.push(user);
  // 객체를 배열에 저장했으니 로컬스토리지에 json 저장
  localStorage.setItem("accounts",JSON.stringify(users));
  // users 를 string 으로 만들어서 usrs 키 값으로 저장
  
  //정보 저장 완료했으니 회원가입 완료 안내 메시지
  alert('회원가입에 성공했습니다 !!');
  main();
}

// 로그인 함수
function login() {
  let users = JSON.parse(localStorage.getItem("accounts")) || [];
  // users 안에 user 정보가 id pw 가 같다면 로그인 성공
  for(let i = 0 ; i < users.length ; i++){
    if(users[i].id === inputId.value && users[i].pw === inputPw.value){
      alert(inputId.value + ' 님 로그인 성공 !!');
    } else {
      alert('아이디 혹은 비밀번호가 틀립니다.');
      break;
    }
  }
}

