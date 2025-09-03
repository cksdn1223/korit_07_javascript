# cksdn1223/korit\_07\_javascript

## 📌 Overview

이 리포지토리는 **JavaScript 학습용 프로젝트**를 단계별로 구성한 환경입니다.
DOM 기초부터 고급 UI까지 단계별 학습이 가능하며, 모든 프로젝트는 **localStorage**를 활용한 클라이언트 데이터 저장 방식을 사용합니다.
클라이언트 사이드 전용 구조로, 서버 의존성이 없습니다.

---

## 📞 Project Categories

### **Foundation Projects**

* **TodoList** – 배열 조작, CRUD, localStorage
* **ShoppingList** – 장바구니 CRUD, 가격 계산, localStorage
* **Clock** – 실시간 시간 계산, CSS transform/animation

### **Authentication Projects**

* **SigninLogin** – 로그인/회원가입, 폼 검증, localStorage 기반 유저 관리
* **Test Authentication** – 간단한 인증 실습

### **Advanced Projects**

* **Board** – SPA, 해시 기반 라우팅, 게시글 CRUD
* **Portfolio2** – 캐러셀, 인터랙티브 UI, 동적 조명, 스킬 시각화

---

## 🛠️ Technical Stack

* **Frontend**: HTML5, CSS3 (Flexbox, Animation, Transition)
* **JavaScript**: Vanilla JS, DOM 조작, localStorage, 이벤트 핸들링

---

## 📋 Project Details, Key Functions & Usage

| 프로젝트                    | 핵심 함수 / 패턴           | 역할              | 학습 포인트                | 사용 예시                                                     |
| ----------------------- | -------------------- | --------------- | --------------------- | --------------------------------------------------------- |
| **TodoList**            | `addTodo()`          | 새로운 할 일 추가      | 배열 조작, DOM 업데이트       | `addTodo("JS 공부")`                                        |
|                         | `deleteTodo()`       | 할 일 삭제          | 이벤트 핸들링, 배열 관리        | `deleteTodo(2)`                                           |
|                         | `saveTodos()`        | localStorage 저장 | 데이터 지속성               | `saveTodos()`                                             |
| **ShoppingList**        | `addItem()`          | 아이템 추가          | CRUD, DOM, 가격 계산      | `addItem("사과",3,1000)`                                    |
|                         | `updateTotal()`      | 총 가격 계산         | 계산 로직, DOM 갱신         | `updateTotal()`                                           |
|                         | `saveList()`         | localStorage 저장 | 데이터 지속성               | `saveList()`                                              |
| **Clock**               | `updateClock()`      | 시계 갱신           | Date 객체, 실시간 업데이트     | `updateClock()`                                           |
|                         | `setInterval()`      | 주기적 호출          | 반복문, 비동기 실행           | `setInterval(updateClock,1000)`                           |
| **SigninLogin**         | `createUserForm()`   | 폼 생성            | 동적 UI 생성, DOM         | `createUserForm(container)`                               |
|                         | `validateInput()`    | 입력 검증           | 조건문, 문자열 검증           | `validateInput("user","pw")`                              |
|                         | `loginUser()`        | 로그인 처리          | localStorage, 조건문     | `loginUser("user","pw")`                                  |
| **Test Authentication** | `checkCredentials()` | 아이디/비밀번호 검증     | 조건문, 배열 검색            | `checkCredentials("test","1234")`                         |
| **Board**               | `renderTable()`      | 게시글 테이블 생성      | 배열 반복, DOM            | `renderTable(postsArray)`                                 |
|                         | `addPost()`          | 게시글 추가          | 객체 생성, 배열 관리          | `addPost({title:"안녕하세요", author:"김"})`                    |
|                         | `handleHashChange()` | 페이지 전환          | SPA 라우팅, 이벤트          | `window.addEventListener("hashchange", handleHashChange)` |
| **Portfolio2**          | `updateCarousel()`   | 캐러셀 전환          | DOM manipulation, 이벤트 | `updateCarousel(1)`                                       |
|                         | `showCurtain()`      | 조명 효과 표시        | 이벤트, CSS transform    | `showCurtain(mouseX,mouseY)`                              |
|                         | `hideCurtain()`      | 조명 제거           | 이벤트, CSS 제거           | `hideCurtain()`                                           |
|                         | `updateSkills()`     | 스킬 시각화          | DOM 업데이트, 애니메이션       | `updateSkills()`                                          |

---

## 💡 Technical Patterns

* **Data Persistence**: localStorage로 사용자, 게시글, 할 일 데이터 관리
* **Dynamic UI Generation**: `document.createElement()`로 폼, 테이블, 리스트 생성
* **Event-Driven Interactions**: click, hashchange, mouse tracking, wheel 이벤트 단계적 활용
* **SPA & Routing**: 해시 기반 페이지 전환, 동적 콘텐츠 렌더링
* **Core JS Concepts**: 배열/객체 조작, 함수 설계, 이벤트 핸들러, DOM 업데이트

---

## 🔸 Installation & Usage

```bash
# 리포지토리 클론
git clone https://github.com/cksdn1223/korit_07_javascript.git

# 프로젝트 디렉토리 이동
cd Practice/Portfolio2

# 브라우저에서 index.html 열기
```

> 다른 프로젝트도 동일하게 `cd Practice/프로젝트명` 후 `index.html` 열기
> 필요 시 VSCode Live Server 사용 가능

---

## 🎯 Learning Progression

1. **Foundation**: DOM 조작, 배열/CRUD 실습 (TodoList, ShoppingList, Clock)
2. **Authentication**: 로그인/회원가입, 폼 검증 (SigninLogin, Test Authentication)
3. **SPA & Routing**: Board SPA, 해시 기반 페이지 전환, 동적 콘텐츠
4. **Advanced UI**: Portfolio2

   * 핵심 함수:

     * `updateCarousel()` – 캐러셀 전환
     * `showCurtain() / hideCurtain()` – 동적 조명 효과
     * `updateSkills()` – 스킬 시각화

---

## 📌 Notes

* 클라이언트 사이드 전용, 서버 의존성 없음
* 학습용/실습용 구조 최적화
* 각 프로젝트별 **핵심 함수 + 사용 예시 + 학습 포인트** 포함
