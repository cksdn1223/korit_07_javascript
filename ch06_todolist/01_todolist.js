    // DOM 요소 가져오기 위한 변수 선언 및 초기화
    const todoInput = document.getElementById('todo-input');  // 메서드 결과값을 변수에 대입
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // 처음 페이지에 들어갔을 때 localStorage를 참조해서 기존 todo데이터가 있다면 가지고 와야 겠네요.
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    // 값이 있으면 true 없으면 false > []
    console.log(todos); // JS 객체가 아니라 배열이라는 점 
    // Todo 리스트를 불러오는 과정이 필요합니다.

    function renderTodos() {
      // 기존 todo list를 초기화 -> 추가했을 때 누적안되게
      todoList.innerHTML = '';
      
      // todos 배열을 반복 돌려서 목록을 생성
      todos.forEach((todo, index) => {
        // todos의 반복을 돌면 내부 element가 있을건데, 그때마다
        // li 태그를 생성한다는 의미
        // forEach() / map() method에는 두 개 이상의 argument가 요구된다고 알아두시면 좋습니다.
        // 첫번째가 반복문 돌때의 element의 이름을 선언합니다.
        // 두번째가 index 관련이라고 생각하시면 됩니다.

        //각 todo 는 js 객체, 이걸 페이지 상에서 보여주기 위해서는 ul태그의 자식인 li태그가 필요합니다.
        
        const li = document.createElement('li');
        // li 태그만 만들었지 클래스 이름안정했으니까
        li.className = 'todo-item';
        if(todo.completed) {  // localStorage의 'todos' key의 내부를 확인했을 때 배열로 저장되어있고, 내부에 JS 객체가 있는데, 그 객체가 현재 todo 라고 이름 붙여져 있습니다. 그 todo들은 text라는 키와 completed라는 key를 가지고 있었습니다. 
          // 그 completed는 자료형이 boolean이었고, 걔가 true / false에 따라서 조건문의 실행여부가 결정됨
          li.classList.add('completed');
        }
        // JS 객체상의 key가 completed인 애의 value가 true라면 li 태그에 completed 속성을 추가한다. 이게 추가되면 .css 에서 정의한 .todo-item.completed의 스타일을 적용하기 위한 것. 


        //체크 박스 - input 태그니까
        const checkbox = document.createElement('input');
        // 얘는 타입이 text가 아니라 checkbox니까
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;

        // 텍스트 내용 생성 - span 태그
        // span - 컨텐츠 길이만큼만 영역
        const span = document.createElement('span');
        span.className = 'todo-text';
        span.textContent = todo.text;

        // 삭제 버튼 - button 태그
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '&times'; // x 기호

        // 요소들을 li 변수에 추가해야합니다.li 내부에 체크박스/스팬/버튼
        li.append(checkbox);
        li.append(span);
        li.append(deleteBtn);

        // 그리고 이 li를 <ul> 태그에 추가해야 합니다.
        todoList.appendChild(li); // todoList 의 자식으로 li 를 추가

        // 이벤트 리스너 추가
        // 체크박스 변경 이벤트
        checkbox.addEventListener('change', () => {
          todos[index].completed = checkbox.checked;  // checkbox가 type이고, checked는 속성
          // 완료 상태에 따라 CSS 클래스를 토글
          li.classList.toggle('completed', checkbox.checked);
          saveTodos();
        });

        // 삭제 버튼 클릭 이벤트
        deleteBtn.addEventListener('click', () => {
          // 삭제할 항목의 텍스트를 이용해서 배열 내에서 정확한 인덱스를 찾아낼겁니다.
          // 보통은 index로 내용을 확인하지만 삭제를 하면 index넘버가 바뀌겠죠
          // 그래서 input에 입력했던 내용을 근거로 index를 역으로 찾아낼 예정입니다.
          const itemText = span.textContent;  // 얘를 쓰는 이유는 저희가 .trim() 쓰는 바람에 공백을 날렸기 때문입니다.

          // 배열 내에서의 내용과 span 태그 내에서의 내용이 같은 index를 뽑아내서 itemIndex 변수에 저장
          const itemIndex = todos.findIndex(item => item.text === itemText);
          
          if(itemIndex !== -1){ // 일치하는 인덱스가 없으면 -1 
            todos.splice(itemIndex, 1); // itemIndex에 해당하는 거 element 하나를 삭제
            li.remove();
            saveTodos();
          }
        });
      });
    }

    function saveTodos() {
        // localStorage에 저장한다는 의미였으니까,
        localStorage.setItem('todos',JSON.stringify(todos));
        // 1번 매개변수 - key
        // 2번 매개변수 - 그 키에 들어가는 value
    }

    function addTodo(){
      const todoText = todoInput.value.trim();  // 공백 제거 후 todoText에 입력한 값 넣기
      if(todoText === '') { // todoText 가 비어있다면 
        alert('내용을 입력하세요 !'); // 창띄워서 알림
        return; // 창을 띄우고 여기서 종료
      } // todoText가 비어있지 않다면 아래서부터 다시 실행
      
      // input 창에 내용이 있다면 내용이 들어갈 JS 객체 선언
      const newTodo = {
        text: todoText, // newTodo 객체에 text 입력한 값 넣기
        completed: false, // 객체에 completed false 로 넣기
      };

      // todos 에 todo를 추가
      todos.push(newTodo);  // input에 값을 넣고 추가를 눌렀으니 정보를 todos 에 넣었음

      // 추가한 이후에 input 태그 내의 내용을 비우는 역할
      todoInput.value = ''; // 추가 완료했으니 다시 빈칸으로 만들어 줬음

      renderTodos();  // 추가버튼 누르고 갱신된 리스트 가지고 오기위해 renderTodos() 함수 호출
      saveTodos();  // localStorage에 저장하기위해 saveTodos() 호출

      // method는 method 하나당 기능 하나라고 생각해야한다.
      // 모듈화
    }

    // '추가' 버튼 클릭 이벤트
    addBtn.addEventListener('click', addTodo);
    // 함수에 () 가 있으면 결과값 ()없으면 함수자체실행

    // 엔터 키 입력 이벤트
    todoInput.addEventListener('keydown', (event) => {
      if(event.key === 'Enter') {
        addTodo();  // input 태그에 Enter키 입력을 감지하면 addTodo(); 함수를 호출할 것.
      }
    });

    // 새로 고침 했을때 renderTodos()가 호출되어야함.
    window.onload = renderTodos();