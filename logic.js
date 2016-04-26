
var todoList = document.getElementById('todoList');

function addTodo(event) {
  var val = event.target.value.trim();

  if (event.which === 13 && val) {
    var newTodo = createTodoItem(val);
    todoList.insertBefore(newTodo, event.target);
    event.target.value = '';
  }
}

function createTodoItem(text) {
    var newTodo = document.createElement('li');
    var todoText = document.createTextNode(text);
    var deleteButton = document.createElement('button');
    var deleteText = document.createTextNode('X');

    deleteButton.appendChild(deleteText);
    newTodo.appendChild(todoText);
    newTodo.appendChild(deleteButton);

    return newTodo;
}

document.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    todoList.removeChild(event.target.parentElement);
  }
});
