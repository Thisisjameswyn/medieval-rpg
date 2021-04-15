import Character from '../src/js/charObj.js';
    
describe('Character', () => {

  test('should instantiate a new basic char object', () => {
    let myChar = new Character();
    expect(myChar).toBeDefined();
  })
  
  test('should instantiate character by type', () => {
    let myChar = new Character("warrior");
    expect(myChar.myType).toEqual("warrior");
  })

  test('should instantiate character with empty stat array', () => {
    const compArray = [];
    let myChar = new Character("warrior");
    expect(myChar.myStats).toEqual(compArray);
  })
});

describe('Character.checkType', () => {

  test('it should return warrior attributes to character object', () => {
    let myChar = new Character("defender")
    myChar.checkType(myChar.myType);
    expect(myChar.myStats).toEqual([100, 20, 20])
  })

  test('it should return mage attributes to character object', () => {
    let myChar = new Character("mage")
    myChar.checkType(myChar.myType);
    expect(myChar.myStats).toEqual([60, 30 , 30])
  })

  test('it should return swindler attributes to character object', () => {
    let myChar = new Character("swindler")
    myChar.checkType(myChar.myType);
    expect(myChar.myStats).toEqual([75, 25, 50])
  })

  test('it should return archer attributes to character object', () => {
    let myChar = new Character("archer")
    myChar.checkType(myChar.myType);
    expect(myChar.myStats).toEqual([70, 20, 45])
  })

  test('it should return vampire attributes to character object', () => {
    let myChar = new Character("vampire")
    myChar.checkType(myChar.myType);
    expect(myChar.myStats).toEqual([80, 30, 15])
  })

  test('it should return ghoul attributes to character object', () => {
    let myChar = new Character("ghoul")
    myChar.checkType(myChar.myType);
    expect(myChar.myStats).toEqual([60, 25, 30])
  })

  test('it should return dragon attributes to character object', () => {
    let myChar = new Character("dragon")
    myChar.checkType(myChar.myType);
    expect(myChar.myStats).toEqual([200, 40, 70])
  })

  test('it should return zombie attributes to character object', () => {
    let myChar = new Character("zombie")
    myChar.checkType(myChar.myType);
    expect(myChar.myStats).toEqual([20, 10, 10])
  })

  test('it should return litterbug attributes to character object', () => {
    let myChar = new Character("litterbug")
    myChar.checkType(myChar.myType);
    expect(myChar.myStats).toEqual([20, 5, 10])
  })

  test('it should return fiend attributes to character object', () => {
    let myChar = new Character("fiend")
    myChar.checkType(myChar.myType);
    expect(myChar.myStats).toEqual([50, 20, 30])
  })

  test('it should return blob attributes to character object', () => {
    let myChar = new Character("blob")
    myChar.checkType(myChar.myType);
    expect(myChar.myStats).toEqual([50, 15, 5])
  })

  test('it should return thrall attributes to character object', () => {
    let myChar = new Character("thrall")
    myChar.checkType(myChar.myType);
    expect(myChar.myStats).toEqual([40, 20, 10])
  })

  test('it should return ghost attributes to character object', () => {
    let myChar = new Character("ghost")
    myChar.checkType(myChar.myType);
    expect(myChar.myStats).toEqual([40, 20, 60])
  })
});

describe('Character.damage', () => {

  test('it should decrease health by entered amount', () => {
    let myChar = new Character("defender")
    myChar.checkType(myChar.myType);
    myChar.damage(10);
    expect(myChar.myStats[0]).toEqual(90);
  })

  test('it should increase health by entered amount', () => {
    let myChar = new Character("defender")
    myChar.checkType(myChar.myType);
    myChar.heal(10);
    expect(myChar.myStats[0]).toEqual(110);
  })
});