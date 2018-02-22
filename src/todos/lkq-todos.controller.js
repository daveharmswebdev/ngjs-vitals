export function controller() {
  this.title = 'Todos'
  this.newTodo = '';

  this.addTodo = function () {
    console.log('click!', this.newTodo);
    this.newTodo = '';
  }
}
