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

  this.removeTodo = function (todo) {
    console.log(todo);
    TodosService.removeTodo(todo)
    .then(() => {
      const newTodos = this.todos.filter(t => t.id != todo);
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
}
