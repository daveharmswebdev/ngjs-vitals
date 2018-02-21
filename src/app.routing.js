routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

export function routing ($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  const helloState = {
    name: 'hello',
    url: '/hello',
    template: require('./home/home.html'),
    controller: 'mainCtrl as ctrl'
  };

  const aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>It\'s about Webpack, ES2017, and AngularJS!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $urlRouterProvider.otherwise('/');
}
