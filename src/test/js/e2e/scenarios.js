'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('cashflowmeter App', function() {

  describe('main view', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should sum the cash inputs and display the result in cash balance control', function () {
      var i;
      for(i=0; i<5; i++) {
        element(by.id(i.toString())).sendKeys('1');
      }
      var cashBal = element(by.id('cashbal'));
      expect(cashBal.getAttribute('value')).toBe('5');
    });
  });
});
