describe('cashflowmeter controllers', function() {

  describe('MainCtrl', function(){
    var scope, ctrl;

    beforeEach(module('cfmApp'));

    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('MainCtrl', {$scope:scope});
    }));

    var myConfig = function() {
      scope.cashType = [0];
      scope.cardType = [1];
      scope.allType = [0, 1];
      scope.limitInit = 220;
      scope.balanceInit = 384;
      scope.npockets = 2;
      scope.ndays = 0;
      scope.addDay();
      scope.day[0].pockets = [234, 123];
      scope.addDay();
    };

    it('should calculate sum for each type of pockets', function() {
      myConfig();
      expect(scope.typeSum(scope.day[0].pockets, scope.cashType)).toBe(234);
      expect(scope.typeSum(scope.day[0].pockets, scope.cardType)).toBe(123);
      expect(scope.typeSum(scope.day[0].pockets, scope.allType)).toBe(357);
    });

    it('should calculate balance correctly', function() {
      myConfig();
      expect(scope.balance(0)).toBe(357);
    });

    it('should calculate limit from previous limit', function() {
      myConfig();
      expect(scope.limit(0)).toBe(193);
    });

    it('should take balance and limit prev from initial state for day = 0', function() {
      myConfig();
      expect(scope.balancePrev(0)).toBe(384);
      expect(scope.limitPrev(0)).toBe(220);
    });    

    it('should take balance and limit prev from previous day for day > 0', function() {
      myConfig();
      expect(scope.balancePrev(1)).toBe(357);
      expect(scope.limitPrev(1)).toBe(193);
    });

    it('should add days', function() {
      myConfig();
      scope.addDay();
      expect(scope.ndays).toBe(3);
    });

    it('should configure pockets', function() {
      expect(scope.npockets).toBeGreaterThan(0);
      expect(scope.allType.length).toBe(scope.npockets);
    });


  });
});