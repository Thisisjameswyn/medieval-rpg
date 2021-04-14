import Character from '../src/js/charObj.js';
    
describe('Character', () => {

  test('should instantiate a new basic char object', () => {
    let myChar = new Character();
    expect(myChar).toBeDefined();
  });
  test('should instaniate character key and values', () => {
    let myChar = new Character("warrior");
    expect(myChar).toEqual("warrior");
  })
});

//let warStats = [10, 4];

