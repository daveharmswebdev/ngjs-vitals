function MainCtrl ($scope) {
  $scope.message = 'Hello $scope'
  $scope.address = '3608 Sperry Ave.'
  $scope.addresses = []

  $scope.clickIt = function () {
    $scope.message = 'New Message'
  }

  $scope.addAddress = function () {
    $scope.addresses.push($scope.address)
    $scope.address = ''
  }
}

export { MainCtrl }
