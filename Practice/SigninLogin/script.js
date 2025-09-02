
const input = document.querySelector('.container');
// 메인화면 버튼들 변수 설정



input.addEventListener('input', (event) => {
  // input에 이벤트 추가
  if(event.target.value !== "") event.target.style.boxShadow = '0 0 8px rgba(72, 255, 0, 1)';
  // input이벤트를 실행시킨 대상의 value 값이 비어있지 않다면
  // 대상의 스타일 box-shadow를 변경시킨다.
  
  else event.target.style.boxShadow = '0 0 8px rgba(255, 255, 255, 1)';
  // 값이 비어있다면 box-shadow를 변경시킨다.
});

document.getElementById('loginbtn').addEventListener('click',login);
document.getElementById('signinbtn').addEventListener('click',signin);
document.getElementById('findpassword').addEventListener('click',findpw);
document.getElementById('deleteuser').addEventListener('click',leave);
// 각 버튼별로 이벤트 할당

function login() {
  // 로그인버튼을 눌렀을때 실행되는 로그인함수
  const inputId = document.getElementById('inputId');
  const inputPw = document.getElementById('inputPw');
  const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
  // localStorage에 key값이 users인 애들을 js객체로 바꿔서 변수 설정 / 없으면 빈 배열로 설정
  const savedUser = savedUsers.find(user => user.id === inputId.value);
  // savedusers배열안에 객체 id 값이 inputId의 value값이랑 같은애들을 변수 설정

  if (inputId.value === "" || inputPw.value === "") {
    // 로그인시 입력한 id pw가 비어있는지 확인

    alert("비어있는 칸이 있습니다.");
    // 비어있으니 비어있다고 알림

    return;
    //함수 종료
  }

  if (!savedUser) {
    // 만약 inputId값이랑 같은게 없다면 (!savedUser 가 false라면)

    alert("아이디가 또는 비밀번호가 틀렸습니다.");
    // 저장된 정보가 없으니 틀렸다 알림

    return;
    //함수 종료
  }

  if (inputPw.value === savedUser.pw) {
    // 위에서 비교했을시 비어있지 않고 id 값이랑 같은게 있고
    // 입력한 pw값이랑 저장되어있는 pw값이 같은지 확인

    alert(savedUser.name + "님 로그인 성공!");
    // 입력한 id pw 가 같으니 로그인 성공 알림
    
    succesLogin();
    const loginInfo = {login:"true",name:savedUser.name};
    localStorage.setItem("login", JSON.stringify(loginInfo));

  } else {
    // 정보에 id가 같은건 있지만 pw가 틀렸음

    alert("아이디 또는 비밀번호가 틀렸습니다.");
    // 틀렸다고 알림
  }
}

function signin() {
  // 회원가입버튼을 눌렀을시 실행되는 함수

  let forms = document.querySelector('.container');
  //클래스명이 .container인것을 forms로 선언

  forms.innerHTML = '';
  // forms안에 들어있는 HTML 을 '' 로 설정

  const createName = document.createElement('input');
  createName.type = 'text';
  createName.id = 'username';
  createName.placeholder = '이름을 입력하세요';
  createName.autocomplete = 'off';
  // createName이라는 변수를만들어 input 태그를만들고 세부사항 설정

  const createId = document.createElement('input');
  createId.type = 'text';
  createId.id = 'createId';
  createId.placeholder = '생성할 ID를 입력하세요';
  createId.autocomplete = 'off';
  // createId라는 변수를 만들어 input태그를만들고 세부사항 설정

  const createPw = document.createElement('input');
  createPw.type = 'password';
  createPw.id = 'createPw';
  createPw.placeholder = 'PW를 입력하세요';
  createPw.autocomplete = 'off';
  // createPw라는 변수를 만들고 input 태그를만들어 세부사항 설정

  const signIn = document.createElement('button');
  signIn.id = 'signin';
  signIn.innerText = '회원가입';
  // signIn이라는 변수를 만들고 button 태그를만들어 세부사항 설정

  signIn.addEventListener('click', createAccount);
  // singIn 버튼에 이벤트 추가 / 클릭시 createAccount 라는 함수 실행




  const span = document.createElement('span');
  span.className = 'input-container';

  span.appendChild(createName);
  span.appendChild(createId);
  span.appendChild(createPw);
  span.appendChild(signIn);
  forms.appendChild(span);
  // '' 로 설정한 forms의 html 에 자식으로 만든요소들 추가
}

function createAccount() {
  // 회원가입페이지에서 회원가입 버튼을 눌렀을시 실행되는 함수

  const username = document.getElementById('username');
  const createId = document.getElementById('createId');
  const createPw = document.getElementById('createPw');
  // 회원가입 페이지의 이름 id pw 요소를 변수선언

  if(username.value === "" || createId.value === "" || createPw === "") {
    // 이름 혹은 id 혹은 pw 가 비어있는지 확인

    alert('비어있는 칸이 있습니다.');
    // 비어있는 칸이 있다면 알림

    return;
    // 다시 회원가입 페이지로 보냄
  }

  // 입력값이 올바른지 확인하는곳
  const regex = /^[가-힣]+$/;
  const regexId = /^[a-zA-Z0-9]+$/;
  if (!regex.test(username.value)) {
    alert("이름은 한글만 입력 가능합니다.");
    username.value = username.value.replace(/[^가-힣]/g, ""); 
    username.style.boxShadow = '0 0 8px rgba(255, 31, 31, 1)';
    return;
    // 허용되지 않는 문자 제거
  } else if (!regexId.test(createId.value)) {
      alert("ID는 영어 소문자 대문자 숫자만 입력 가능합니다.");
      createId.value = createId.value.replace(/[^a-zA-Z0-9]/g, "");
      createId.style.boxShadow = '0 0 8px rgba(255, 31, 31, 1)';
      return;
  } else if (!regexId.test(createPw.value)) {
      alert("PW는 영어 소문자 대문자 숫자만 입력 가능합니다.");
      createPw.value = createPw.value.replace(/[^a-zA-Z0-9]/g, "");
      createPw.style.boxShadow = '0 0 8px rgba(255, 31, 31, 1)';
      return;
  }


  let users = JSON.parse(localStorage.getItem("users")) || [];
  // localStorage에 있는 정보를 js객체로 바꿔 users에 배열로 저장하고 비어있으면 빈 배열로 저장

  if(users.find(user => user.id === createId.value)){
    // users에 저장된 값중 id값이 회원가입하려는 id와 같은지 확인

    alert("아이디가 이미 존재합니다.");
    // id가 같으면 이미 가입한 id기때문에 불가능하다 알림

    return;
    // 다시 회원가입 페이지로 보냄
  }

  const user = {
    name: username.value,
    id: createId.value,
    pw: createPw.value,
  }
  // 회원가입시 입력했단 이름 id pw 를 user 객체에 저장
  
  users.push(user);
  // 저장한 user 객체를 users 에 추가

  localStorage.setItem("users", JSON.stringify(users));
  // 로컬 스토리지에 key값 users로 설정후 users를 String으로 만들어서 저장

  alert(username.value + '님 회원가입 성공!');
  // 입력한 이름이 회원가입 성공했다고 알림
  main();
}

function findpw() {
  // 비밀번호 찾기 버튼을 눌렀을때 실행되는 함수

  const findId = prompt("비밀번호를 찾을 ID와 이름을 입력하세요 (ex. ID 이름)");
  // prompt를 이용해 정보 입력 >> id 이름

  const input = findId.split(" ");
  // 입력 받은 값을 공백을 기준으로 나눠 배열로 설정 {ID, 이름}
  const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
  // localStorage에 key값이 users인 애들을 js객체로 바꿔서 변수 설정 / 없으면 빈 배열로 설정
  const savedUser = savedUsers.find(user => user.id === input[0]);
  // savedUsers에 id값이 input[0](ID) 과 같다면 savedUser에 저장

  if(savedUser && savedUser.name === input[1]){
    // 입력한 id와 같은게 있고 && 저장된이름이 입력한이름과 같은지 확인

    alert(input[1] + '님의 PW는 ' + savedUser.pw + ' 입니다.');
    // 같으면 이름 과 pw 정보 알림

  } else {
    // 입력한 id와 같은게 없거나 저장된 이름이 입력한 이름과 다르다면

    alert('존재하지 않는 ID 혹은 이름 정보가 다릅니다.');
    // 틀렸다고 알림
  }
}

function leave() {
  // 회원탈퇴 버튼을 누를시 실행되는 함수

  let forms = document.querySelector('.container');
  // forms에 .container 클래스 를 저장

  forms.innerHTML = '';
  // forms에 들어있는 HTML을 '' 로 설정

  const deleteUserName = document.createElement('input');
  deleteUserName.type = 'text';
  deleteUserName.id = 'deleteUserName';
  deleteUserName.placeholder = '이름을 입력하세요';
  deleteUserName.autocomplete = 'off';
  // input 제작후 세부설정

  const deleteId = document.createElement('input');
  deleteId.type = 'text';
  deleteId.id = 'deleteId';
  deleteId.placeholder = '제거할 ID를 입력하세요';
  deleteId.autocomplete = 'off';
  // input 제작후 세부설정

  const deletePw = document.createElement('input');
  deletePw.type = 'password';
  deletePw.id = 'deletePw';
  deletePw.placeholder = 'PW를 입력하세요';
  deletePw.autocomplete = 'off';
  // input 제작후 세부설정

  const deleteInfo = document.createElement('button');
  deleteInfo.id = 'delete';
  deleteInfo.innerText = '회원 탈퇴';
  // 버튼 제작후 세부설정

  const span = document.createElement('span');
  span.className = 'input-container';
  span.appendChild(deleteUserName);
  span.appendChild(deleteId);
  span.appendChild(deletePw);
  span.appendChild(deleteInfo);
  forms.appendChild(span);
  // 비어있는 forms에 자식으로 만든요소 추가

  document.getElementById('delete').addEventListener('click', deleteUser);
  // 만들었던 회원탈퇴 버튼에 deleteUser 함수 실행할수있게 이벤트 추가
}

function deleteUser() {
  // 회원탈퇴 페이지에서 회원탈퇴 버튼을 눌렀을시 실행되는 함수

  const deleteUserName = document.getElementById('deleteUserName');
  const deleteId = document.getElementById('deleteId');
  const deletePw = document.getElementById('deletePw');
  // 회원탈퇴 페이지의 이름 id pw 입력받아 저장

  let users = JSON.parse(localStorage.getItem("users")) || [];
  // localStorage 저장된 정보 객체로 바꿔 users에 저장 / 비었다면 빈배열
  
  if(users.length === 0){
    alert("입력된 정보가 잘못되었습니다.");
    // 잘못되었다 알림

    return;
    // 다시 회원탈퇴 페이지로 보냄
  }

  for (let i = 0; i < users.length; i++) {
    // users에 저장되어있는 길이만큼 반복
    if (
    users[i].name === deleteUserName.value &&
    users[i].id === deleteId.value &&
    users[i].pw === deletePw.value
    ) {
      // 저장되어있는값과 입력한 name id pw 가 같다면

      users.splice(i, 1);
      // users배열에서 i번째부터 1개를 삭제

      localStorage.setItem("users", JSON.stringify(users));
      // 삭제했으니 localStorage 다시 String으로 정보 저장

      alert(deleteUserName.value + "님 회원탈퇴 성공하셨습니다.");
      // 삭제완료했으니 회원탈퇴 성공메시지 알림
      main();
      break;
      // 반복문 탈출

    } else {
      // 저장되어있는 값과 입력한 name id pw가 다르다면

      alert("입력된 정보가 잘못되었습니다.");
      // 잘못되었다 알림

      return;
      // 다시 회원탈퇴 페이지로 보냄
    }
  }
}




function succesLogin() {

  let forms = document.querySelector('.container');
  //클래스명이 .container인것을 forms로 선언

  forms.innerHTML = '';
  // forms안에 들어있는 HTML 을 '' 로 설정
  // const div = document.createElement('div');
  // div.className = 'logout-container';

  // const logoutBtn = document.createElement('button');
  // logoutBtn.id='logout';
  // logoutBtn.innerText = 'LOG OUT';

  // const img = document.createElement('img');
  // img.src = "../Portfolio2/resource/html-icon.svg";
  // img.alt = 'img';
  
  // const text = document.createElement('div');
  // text.innerText = '0';
  // text.className = 'img-text';

  // div.appendChild(logoutBtn);
  // div.appendChild(img);
  // div.appendChild(text);
  // forms.appendChild(div);

  // img.addEventListener('click', ()=>{
  //   text.innerText++;
  // });

  // logoutBtn.addEventListener('click', logout);

  location.href = '../Board/index.html';
}

function logout() {
  localStorage.removeItem("login");
  alert("로그아웃 되었습니다.");
  main();
}

window.addEventListener('load',()=>{
  if(localStorage.getItem("login").login === "true"){
    succesLogin();
  }
});

function main(){
  let forms = document.querySelector('.container');
  // forms에 .container 클래스 를 저장

  forms.innerHTML = '';
  // forms에 들어있는 HTML을 '' 로 설정

  const idInput = document.createElement('input');
  idInput.type = 'text';
  idInput.id = 'inputId';
  idInput.placeholder = 'ID를 입력하세요';
  idInput.autocomplete = 'off';
  // input 제작후 세부설정

  const pwInput = document.createElement('input');
  pwInput.type = 'password';
  pwInput.id = 'inputPw';
  pwInput.placeholder = 'PW를 입력하세요';
  pwInput.autocomplete = 'off';
  // input 제작후 세부설정

  const loginbtn = document.createElement('button');
  loginbtn.id = 'loginbtn';
  loginbtn.innerText = '로그인';
  loginbtn.addEventListener('click', login);
  
  const signinbtn = document.createElement('button');
  signinbtn.id = 'signinbtn';
  signinbtn.innerText = '회원가입';
  signinbtn.addEventListener('click',signin);

  const findpassword = document.createElement('button');
  findpassword.id = 'findpassword';
  findpassword.innerText = '비밀번호 찾기';
  findpassword.addEventListener('click', findpw)

  const deleteuser = document.createElement('button');
  deleteuser.id = 'deleteuser';
  deleteuser.innerText = '회원탈퇴';
  deleteuser.addEventListener('click', leave);
  // 버튼 제작후 세부설정

  const span = document.createElement('span');
  span.className = 'input-container';
  const span2 = document.createElement('span');
  span2.className = 'button-container';

  span.appendChild(idInput);
  span.appendChild(pwInput);
  span2.appendChild(loginbtn);
  span2.appendChild(signinbtn);
  span2.appendChild(findpassword);
  span2.appendChild(deleteuser);

  forms.appendChild(span);
  forms.appendChild(span2);
}




