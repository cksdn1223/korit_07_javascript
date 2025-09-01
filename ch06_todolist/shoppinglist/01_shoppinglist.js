    // DOM element 가져오기
    const itemInput = document.getElementById('item-input');  //  쇼핑 품목
    const priceInput = document.getElementById('price-input'); // 품목의 가격
    const addBtn = document.getElementById('add-btn');  // 버튼
    const shoppingList = document.getElementById('shopping-list');  // 장바구니?

    const shoppingItems = JSON.parse(localStorage.getItem('shopping-items')) || []; // 구매목록?

    function renderShoppingList() {
      shoppingList.innerHTML = '';

      shoppingItems.forEach((item, index) => { // 장바구니에 올릴 품목을 반복해서 넣어줌
        const li = document.createElement('li');
        li.className = 'todo-item';
        if(item.completed) {
          li.classList.add('completed');
        }

        const checkbox = document.createElement('input'); // ㅁ V 모양만
        checkbox.type = 'checkbox';
        checkbox.checked = item.completed;

        const itemTextSpan = document.createElement('span'); // 쇼핑품목에 이름
        itemTextSpan.className = 'item-text';
        itemTextSpan.textContent = item.text;

        const priceSpan = document.createElement('span'); // 품목의 가격
        priceSpan.className = 'price';
        // priceSpan.textContent = item.price ? `%{item.price} 원` : ''; // 삼항연산자 사용
        priceSpan.textContent = item.price+'원'; // 삼항연산자 사용

        const deleteBtn = document.createElement('button'); // 삭제 사유: 단순변심
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '&times';
        
        li.append(checkbox); //  li 는 품목에 정보 데이터
        li.append(itemTextSpan);
        li.append(priceSpan);
        li.append(deleteBtn);

        shoppingList.appendChild(li); // 장바구니에 표시할거다 큰틀안에 정보를 넣는 느낌

        checkbox.addEventListener('change', () => { // 체크한 품목을 저장?
          shoppingItems[index].completed = checkbox.checked;
          li.classList.toggle('completed', checkbox.checked);
          saveShoppingItems();
        });

        deleteBtn.addEventListener('click', () => { // 단순변심 샥제 5
          shoppingItems.splice(index, 1);
          saveShoppingItems();
          renderShoppingList(); // 삭제 버튼을 눌렀을 때 renderShoppingList 내에서 다시 renderShoppingList를 호출 -> 재귀용법
        });
      });
    }

    
    function saveShoppingItems() {   //저장하는 함수? 닌텐도 포켓몬 리포트
      localStorage.setItem('shopping-items',JSON.stringify(shoppingItems));
    }

    function addShoppingItem() {  // 찾는 옷 이름과 금액 정보를 입력후 저장
      const itemText = itemInput.value.trim();
      const itemPrice = priceInput.value.trim();

      if(itemText === ''){
        alert('구매할 물품을 입력해주세요 !');
        return;
      } else if (itemPrice === ''){
        alert('가격을 입력해주세요 !');
        return;
      }

      const newShoppingItems = {
        text: itemText,
        price: itemPrice,
        completed: false,
      };

      shoppingItems.push(newShoppingItems);
      itemInput.value = '';
      priceInput.value = '';

      renderShoppingList();
      saveShoppingItems();
    }
    // 소괄호 포함하지 않음 / 소괄호 유무에 따른 함수의 실행 방식 차이
    addBtn.addEventListener('click', addShoppingItem);  
    // 함수명(); -> return 값이 전달된다.
    itemInput.addEventListener('keydown', (event) => {
      if(event.key === 'Enter') {
        addShoppingItem();
      }
    });
    priceInput.addEventListener('keydown', (event) => {
      if(event.key === 'Enter') {
        addShoppingItem();
      }
    });

    window.onload = renderShoppingList();