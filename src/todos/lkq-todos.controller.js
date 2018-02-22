export function controller(TodosService) {
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
}
