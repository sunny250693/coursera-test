(function () {
        'use-strict';

        angular.module('LunchCheck', [])
            .controller('LunchCheckController', function($scope) {
                $scope.istoomuch = '';
                $scope.numberitems = function() {
                    if ($scope.items) {
                        var itemstring = $scope.items
                        var lunchItems = itemstring.split(",")
                        return lunchItems.length;
                    } else {
                        return 0;
                    }
                };
                $scope.statement = function() {
                    var totalitems = $scope.numberitems();
                    console.log(totalitems);
                    if (totalitems === 0) {
                        $scope.istoomuch = "Please enter data first!"
                    } else if (totalitems <= 3) {
                        $scope.istoomuch = "Enjoy!"
                    } else if (totalitems > 3) {
                        $scope.istoomuch = "Too much!"
                    }
                }
            });
            })();