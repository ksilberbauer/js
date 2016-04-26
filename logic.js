
    function addTodo(event) {
      
      var todoList = document.getElementById('todoList');
      var val = event.target.value.trim();

      if (event.which === 13 && val) {
        var newTodo = document.createElement('li');
        newTodo.innerHTML = val;
        todoList.insertBefore(newTodo, event.target);
        event.target.value = '';
      }
    }