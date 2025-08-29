    // DOM 요소 가져오기 위한 변수 선언 및 초기화
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // 처음 페이지에 들어갔을 때 localStorage를 참조해서 기존 todo데이터가 있다면 가지고 와야 겠네요.
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    // Todo 리스트를 불러오는 과정이 필요합니다.
    function renderTodos() {
      // 기존 todo list를 초기화 -> 추가했을 때 누적안되게
      todoList.innerHTML = '';
      
      // todos 배열을 반복 돌려서 목록을 생성
      todos.forEach((todo, index) => {
        // todos의 반복을 돌면 내부 element가 있을건데, 그때마다
        // li 태그를 생성한다는 의미
        const li = document.createElement('li');
        // li 태그만 만들었지 클래스 이름안정했으니까
        li.className = 'todo-item';
        if(todo.completed) {
          li.classList.add('completed');
        }

        //체크 박스 - input 태그니까
        const checkbox = document.createElement('input');
        // 얘는 타입이 text가 아니라 checkbox니까
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;

        // 텍스트 내용 생성 - span 태그
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

      renderTodos();
      saveTodos();
    }

    // '추가' 버튼 클릭 이벤트
    addBtn.addEventListener('click', addTodo);

    // 엔터 키 입력 이벤트
    todoInput.addEventListener('keydown', (event) => {
      if(event.key === 'Enter') {
        addTodo();  // input 태그에 Enter키 입력을 감지하면 addTodo(); 함수를 호출할 것.
      }
    });

    // 새로 고침 했을때 renderTodos()가 호출되어야함.
    window.onload = renderTodos();