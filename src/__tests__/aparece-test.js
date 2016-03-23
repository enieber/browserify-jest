jest.unmock('../aparece');

describe('Aparecimento', function(){
  it('a soma 1 + 2 deve ser iqual 3', function(){
    var somar = require('../aparece');
    expect(somar(1,2)).toBe(3);
  });

  it('a soma 2 + 5 deve ser iqual 7', function () {
    var somar = require('../aparece');
    expect(somar(2, 5)).toBe(7);
  });
});
