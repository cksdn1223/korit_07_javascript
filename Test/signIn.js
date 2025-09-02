// 로그인시 입력받은 값을 불러옴
const inputId = document.getElementById('inputId');
const inputPw = document.getElementById('inputPw');

// login 버튼에 이벤트 추가
document.getElementById('login').addEventListener('click', loginUser);

// Enter 키 이벤트 추가
let inputs = document.getElementsByTagName('input');

for(let i = 0 ; i < inputs.length ; i++){
  inputs[i].addEventListener('keydown', (event) => {
    if(event.key === 'Enter') loginUser();
  })
}

// 로컬 스토리지에 키값users 이 있따면 users에 저장 없으면 빈 배열
let users = JSON.parse(localStorage.getItem("users")) || [];

function loginUser() {
  if(inputId.value === "" || inputPw.value === ""){
    //비어있다면 함수 종료
    alert('비어있는 칸이 있습니다.');
    return;
  };

  // 비어있지 않으니 입력한값 저장된 값이랑 비교
  // users 배열에서 id가 inputId랑 같은 user가 있는지 찾기
  const savedUser = users.find(user => user.id === inputId.value);
  // 같은 유저가 있다면
  if(savedUser){
    // 비밀번호 비교해서 맞는지 틀렸는지 확인
    if(savedUser.pw === inputPw.value){
      // 저장된 유저의 비밀번호가 입력한 비밀번호랑 같다면 id pw 가 같은거니까 로그인성공
      alert('로그인 성공 !');
      // id pw 초기화
      inputId.value = '';
      inputPw.value = '';
      return;
    }
  }
  //로그인 실패 pw창 초기화
  alert('로그인 실패');
  inputPw.value = '';
}