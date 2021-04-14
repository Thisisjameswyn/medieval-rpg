import Character from '../src/js/charObj.js';
    
describe('Character', () => {

  test('should instantiate a new basic char object', () => {
    let myChar = new Character()
    expect(myChar).toBeDefined();
  });
});