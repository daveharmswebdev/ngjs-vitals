export class TodosService {
    /*@ngInject*/
    constructor($http) {
      this.$http = $http;
      this._baseUrl = 'http://localhost:3000'
    }

    getTodos() {
      return this.$http.get(this._baseUrl + '/todos');
    }

    removeTodo(id) {
      return this.$http.delete(this._baseUrl + '/todos/' + id);
    }

    addTodo(payload) {
      return this.$http.post(this._baseUrl + '/todos', payload);
    }

    updateComplete(todo) {
      console.log(todo);
      const payload = { complete: todo.complete};
      return this.$http.patch(this._baseUrl + '/todos/' + todo.id, payload)
    }

}
