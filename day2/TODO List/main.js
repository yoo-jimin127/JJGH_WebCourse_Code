init();

function init(){
        document.querySelector('form').addEventListener('submit', addToDo);
        document.getElementById('clear').addEventListener('click', clearTodoList);
        document.querySelector('ul').addEventListener('click', deleteOrCheck);
}

function deleteOrCheck(event){
    if(event.target.className == 'delete')  
        deleteToDo(event); // X 버튼 클릭 시 목록에서 항목 삭제
    else {
        checkToDo(event); // 체크박스를 클릭 시 글씨 색을 연하게 변경
    }
}

function deleteToDo(event){ // X 버튼 클릭 시 목록에서 항목 삭제
    // currentTarget : 이벤트 핸들러가 부착된 것 가리킴 - 이벤트가 부착된 부모의 위치 반환
    // event.target : 부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 내가 클릭한 자식 요소를 반환
    let remove = event.target.parentNode; // event.target 이용해 이벤트 위임 구현 : 이벤트가 발생한 대상 객체
    let parentNode = remove.parentNode; // 삭제할 요소의 부모로부터 removeChild
    parentNode.removeChild(remove);
}

function checkToDo(event){  // 체크박스 클릭 시 글씨 색 연하게 변경
    const todo = event.target.nextSibling; 
    if(event.target.checked){
        todo.style.color = "#dddddd";
    }else {
        todo.style.color = "#000000";
    }
}

function clearTodoList(event){ //목록 전체 삭제하는 경우
    let ul = document.querySelector('ul').innerHTML = '';
}

function addToDo(event){ //새로운 할 일 추가하는 경우
    // event.preventDefault : 이벤트를 명시적으로 처리하지 않은 경우, 
    // 해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정
    event.preventDefault();
    let toDoValue = document.querySelector('input');
    if(toDoValue.value !== '')
        addTask(toDoValue.value); // To Do list의 값으로 value 추가
        toDoValue.value = ''; // 입력창 비워주기
}

function addTask(value){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<span class="delete">X</span><input type="checkbox"><label>${value}</label>`;
    ul.appendChild(li);
    document.querySelector('.todolist').style.display = 'block';
}