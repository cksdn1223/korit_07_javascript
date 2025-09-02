const listView = document.getElementById('listView');
const writeView = document.getElementById('writeView');
const detailView = document.getElementById('detailView');

const date = new Date();
const yearMonthDay = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

const main = document.getElementById('main');
document.getElementById('logout').addEventListener('click', () => {
  alert('로그아웃 하셨습니다 !');
  localStorage.removeItem('login');
});

const loginUser = JSON.parse(localStorage.getItem('login'));
let lists = JSON.parse(localStorage.getItem("list")) || [];
window.addEventListener('hashchange', () => {
  if(location.hash === '#/posts'){
    listView.style.backgroundColor = 'yellowgreen';
    writeView.style.backgroundColor = 'transparent';
    postArea();
  }
  if(location.hash === '#/write'){
    listView.style.backgroundColor = 'transparent';
    writeView.style.backgroundColor = 'green';
    writeArea();
  }
  if(location.hash.includes('#/posts/')){
    const address = location.hash.replace('#/posts/', '');
    const findlist = lists.find(list => list.id === address);
    if(findlist){
      clearViews();
      const div = document.createElement('div');
      div.innerText = findlist.text;
      main.appendChild(div);
    }
    findlist.viewCount = Number(findlist.viewCount) + 1;
    localStorage.setItem("list", JSON.stringify(lists));
  }
});

function writeArea(){
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'title';

  const textarea = document.createElement('textarea');
  textarea.id = 'inputText';
  textarea.s
  
  const button = document.createElement('button');
  button.id = 'writeBtn';
  button.innerText = '글쓰기';
  button.addEventListener('click', handleWrite);

  clearViews();
  main.appendChild(input);
  main.appendChild(textarea);
  main.appendChild(button);
}

function postArea() {
  clearViews();
  const table = document.createElement('table');
  table.innerHTML = '<tr><th>번호</th><th>제목</th><th>글쓴이</th><th>일시</th><th>조회수</th></tr>';
  main.appendChild(table);
  if(lists.length === 0){
    const nolist = '<div>작성된 글이 없습니다.</div>';
    main.innerHTML += nolist;
  }
  lists.forEach((list, index) => {
    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    const listNumber = document.createElement('span');
    td1.id = 'listNumber';
    listNumber.innerText = index + 1;
    td1.appendChild(listNumber);

    const td2 = document.createElement('td');
    const a = document.createElement('a');
    td2.id = `list${index}`;
    a.innerText = list.title;
    a.href = `#/posts/${index}`;
    td2.appendChild(a);

    const td3 = document.createElement('td');
    const author = document.createElement('span');
    td3.id = 'author';
    author.innerText = list.author;
    td3.appendChild(author);

    const td4 = document.createElement('td');
    const writeDay = document.createElement('span');
    td4.id = 'writeDay';
    writeDay.innerText = yearMonthDay;
    td4.appendChild(writeDay);

    const td5 = document.createElement('td');
    const viewCount = document.createElement('span');
    td5.id = 'viewCount';
    viewCount.innerText = list.viewCount;
    td5.appendChild(viewCount);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    table.appendChild(tr);
  });
}




function handleWrite() {
  const inputText = document.getElementById('inputText');
  const title = document.getElementById('title');

  if(inputText.value === "" || title.value === ""){
    alert('제목 혹은 내용이 비어있습니다.');
    return;
  }
  const writeText = {
    title: title.value,
    id: lists.length + "",
    author: loginUser.name,
    text: inputText.value,
    date: yearMonthDay,
    viewCount: 0 + "",
  };
  lists.push(writeText);
  localStorage.setItem("list",JSON.stringify(lists));
  alert('작성 완료했습니다 !');
  location.hash = '#/posts';
}












function clearViews() {
  main.innerHTML = '<hr>';
}
window.onload = function() {
  location.hash = '';
};