jest.unmock('../some');

describe('Sumiço', function(){
  it('a subtração 1 - 1 deve ser iqual 0', function(){
    var subtrair = require('../some');
    expect(subtrair(1, 1)).toBe(0);
  });

  it('a subtração 5 - 3 deve ser iqual 2', function(){
    var subtrair = require('../some');
    expect(subtrair(5, 3)).toBe(2);
  });
});
