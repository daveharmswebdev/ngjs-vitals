export function controller(TodosService) {
  'ngInject';
  this.title = 'Todos'
  this.newTodo = '';
  this.todos = [];

  this.addTodo = function () {
    console.log('click!', this.newTodo);
    this.newTodo = '';
  }

  this.$onInit = function () {
    TodosService.getTodos()
      .then(response => {
        this.todos = response.data;
        console.log(this.todos);
      })
  }

  this.removeTodo = function ({id}) {
    console.log(id);
    TodosService.removeTodo(id)
    .then(() => {
      const newTodos = this.todos.filter(t => t.id != id);
      this.todos = newTodos;
    });
  }

  this.addTodo = function (newTodo) {
    const payload = {
      todo: this.newTodo,
      complete: false
    }
    console.log(payload);
    TodosService.addTodo(payload)
    .then((response) => {
      this.newTodo = '';
      this.todos = [...this.todos, response.data];
    });
  }

  this.updateComplete = function(todo) {
    console.log('controller', todo);
    TodosService.updateComplete(todo)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log('error', error)
      const idx = this.todos.map(t => t.id).indexOf(todo.todo.id);
      todo.todo.complete = !todo.todo.complete;
      this.todos[idx] = todo.todo;
    })
  }
}
