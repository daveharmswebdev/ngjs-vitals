routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

export function routing ($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  const helloState = {
    name: 'hello',
    url: '/',
    template: require('./home/home.html'),
    controller: 'homeCtrl as ctrl'
  };

  const aboutState = {
    name: 'about',
    url: '/about',
    component: 'lkqAbout'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $urlRouterProvider.otherwise('/');
}
