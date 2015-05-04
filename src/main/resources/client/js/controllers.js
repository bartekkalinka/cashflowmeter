'use strict';

/* Controllers */

var cfmControllers = angular.module('cfmControllers', []);

cfmControllers.controller('MainCtrl', function($scope) {
  $scope.config = function() {
	  $scope.npockets = 7;
	  $scope.pockName = ["cash1", "cash2", "cash3", "acc1", "acc2", "card limit", "card max"];
	  $scope.cashType = [0, 1, 2, 3, 4];
	  $scope.cardType = [5, 6];
	  $scope.allType = $scope.cashType.concat($scope.cardType);
  }

  $scope.init = function() {
    $scope.ndays = 2;
    $scope.day = [];
    $scope.balanceInit = 3100;
    $scope.limitInit = 500;
    var i;
    for(i = 0; i < $scope.ndays; i++) {
      $scope.day[i] = {};
      $scope.day[i].pockets = [];
    }
  }

  $scope.config();
  $scope.init();

  $scope.getNumber = function(num) {
    return new Array(num);   
  }

  $scope.typeSum = function(pockets, type) {
  	var i, res = 0;
  	for(i = 0; i < type.length; i++) {
  		res += pockets[type[i]];
  	}
  	return res;
  }

  $scope.balance = function(di) {
    return $scope.typeSum($scope.day[di].pockets, $scope.allType);
  }

  $scope.limit = function(di) {
    return $scope.limitPrev(di) - ($scope.balancePrev(di) - $scope.balance(di));  
  }

  $scope.balancePrev = function(di) {
    if(di > 0) {
      return $scope.balance(di - 1);
    } else {
      return $scope.balanceInit;
    }
  }

  $scope.limitPrev = function(di) {
    if(di > 0) {
      return $scope.limit(di - 1);
    } else {
      return $scope.limitInit;
    }
  }
  
});
