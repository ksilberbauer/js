
var todoList = document.getElementById('todoList');

function addTodo(event) {
  var val = event.target.value.trim();

  if (event.which === 13 && val) {
    var newTodo = document.createElement('li');
    newTodo.innerHTML = val;
    todoList.insertBefore(newTodo, event.target);
    event.target.value = '';
  }
}

document.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    todoList.removeChild(event.target.parentElement);
  }
});
