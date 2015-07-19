app.controller('ChartCtrl', ['$scope', function($scope) {
  $scope.plot_pie = [];
  $scope.plot_pie = [{label: "CTL", data: 20}, {label: "LAB", data:10}, {label: "Application", data:15}];

  $scope.plot_line = [[1, 7.5], [2, 7.5], [3, 5.7], [4, 8.9], [5, 10], [6, 7], [7, 9], [8, 6], [9, 8], [10, 9]];
  $scope.plot_line_1 = [[1, 9.5], [2, 9.4], [3, 9.5], [4, 9.5], [5, 9.7], [6, 9.5], [7, 9], [8, 9.9], [9, 9.6], [10, 9.3]];
  $scope.plot_line_2 = [[1, 4.5], [2, 4.2], [3, 4.5], [4, 4.3], [5, 4.5], [6, 4.7], [7, 4.6], [8, 4.8], [9, 4.6], [10, 4.5]];
  $scope.plot_line_3 = [[1, 14], [2, 5.7], [3, 9.6], [4, 7.8], [5, 6.6], [6, 10.5]];
}]);
