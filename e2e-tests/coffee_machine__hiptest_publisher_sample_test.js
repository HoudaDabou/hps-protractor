describe('Coffee machine - Hiptest publisher sample', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
  browser.get('http://localhost:8000');
  });

  it('my new scenario', function () {
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I take a coffee
    this.actionwords.iTakeACoffee();
    // Then the coffee machine provides me a delicious coffee
    this.actionwords.theCoffeeMachineProvidesMeADeliciousCoffee();
  });
});