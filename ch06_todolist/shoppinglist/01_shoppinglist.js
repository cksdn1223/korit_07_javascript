    // DOM element 가져오기
    const itemInput = document.getElementById('item-input');
    const priceInput = document.getElementById('price-input');
    const addBtn = document.getElementById('add-btn');
    const shoppingList = document.getElementById('shopping-list');

    const shoppingItems = JSON.parse(localStorage.getItem('shopping-items')) || [];

    function renderShoppingList() {
      shoppingList.innerHTML = '';

      shoppingItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        if(item.completed) {
          li.classList.add('completed');
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.completed;

        const itemTextSpan = document.createElement('span');
        itemTextSpan.className = 'item-text';
        itemTextSpan.textContent = item.text;

        const priceSpan = document.createElement('span');
        priceSpan.className = 'price';
        // priceSpan.textContent = item.price ? `%{item.price} 원` : ''; // 삼항연산자 사용
        priceSpan.textContent = item.price+'원'; // 삼항연산자 사용

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '&times';

        li.append(checkbox);
        li.append(itemTextSpan);
        li.append(priceSpan);
        li.append(deleteBtn);

        shoppingList.appendChild(li);

        checkbox.addEventListener('change', () => {
          shoppingItems[index].completed = checkbox.checked;
          li.classList.toggle('completed', checkbox.checked);
          saveShoppingItems();
        });

        deleteBtn.addEventListener('click', () => {
          shoppingItems.splice(index, 1);
          saveShoppingItems();
          renderShoppingList(); // 삭제 버튼을 눌렀을 때 renderShoppingList 내에서 다시 renderShoppingList를 호출 -> 재귀용법
        });
      });
    }

    
    function saveShoppingItems() {
      localStorage.setItem('shopping-items',JSON.stringify(shoppingItems));
    }

    function addShoppingItem() {
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