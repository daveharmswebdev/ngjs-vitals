export class TodosService {

    constructor($http) {
      this.$http = $http;
      this._baseUrl = 'http://localhost:3000'
    }

    getTodos() {
      return this.$http.get(this._baseUrl + '/todos');
    }

}
