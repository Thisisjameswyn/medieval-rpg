import Manager from '../src/js/gameManager.js';

describe('Manager', () => {

  test('game manager exists', () => {
    let myGame = new Manager()
    expect(myGame).toBeDefined(); 
  })

  test('game manager contains one empty array for character party', () => {
    let myGame = new Manager()
    const checkArray = []
    expect(myGame.playerParty).toEqual(checkArray)
  })

  test('game manager contains one empty array for enemy party', () => {
    let myGame = new Manager()
    const checkArray = []
    expect(myGame.enemyParty).toEqual(checkArray)
  })
});

describe('Manager.buildParty', () => {
  
  test('game manager builds an array with matching amount of characters', () => {
    let myGame = new Manager()
    const compArray = ["defender","mage", "swindler", "archer"];
    myGame.buildParty(compArray)
    expect(myGame.playerParty.length).toEqual(compArray.length)
  })

  test('game manager builds an array with matching content', () => {
    let myGame = new Manager()
    const returnedArray = []
    const compArray = ["defender","mage", "swindler", "archer"];
    myGame.buildParty(compArray)
    myGame.playerParty.forEach((element) => {
      returnedArray.push(element.myType)
    })
    expect(returnedArray).toEqual(compArray)
  })
});

describe('Manager.buildMonster', () => {

  test('buildMonster returns an array of equal length to player array', () => {
    let myGame = new Manager()
    const compArray = ["defender","mage", "swindler", "archer"];
    myGame.buildParty(compArray)  
    expect(myGame.enemyParty.length).toEqual(compArray.length);
  })
})

describe('Manager.attack', () => {

  test('attack tells a character object to lower its health by attackers amount', () => {
    let myGame = new Manager()
    const compArray = ["defender"]
    myGame.buildParty(compArray)
    let compHealth = myGame.playerParty[0].myStats[0]
    const attackAmount = myGame.enemyParty[0].myStats[1]
    const attacker = myGame.enemyParty[0]
    const victim = myGame.playerParty[0]
    myGame.attack(attacker, victim)
    expect(myGame.playerParty[0].myStats[0]).toEqual(compHealth-attackAmount)
  })
})

describe('Manager.heal', () => {

  test('heal tells player object to riplenish health with passed in value', () => {
    let myGame = new Manager()
    const compArray = ["defender","mage"]
    myGame.buildParty(compArray)
    const enemy = myGame.enemyParty[0]
    const victim = myGame.playerParty[0]
    const healer = myGame.playerParty[1]
    const healthDelta = victim.myStats[0] - enemy.myStats[1]
    myGame.attack(enemy, victim)
    myGame.heal(healer,victim)
    expect(victim.myStats[0]).toEqual(healthDelta + healer.myStats[1])
  })
}) 

describe('Manager.death', () => {

  test('Manager should remove Character from array when Character health reaches 0', () => {
    let myGame = new Manager()
    const compArray = []
    const partyArray = ["defender"]
    myGame.buildParty(partyArray)
    const enemy = {    
      myType: "Superman",
      myStats: [500, 200, 20]
    }
    const victim = myGame.playerParty[0]
    myGame.attack(enemy, victim)
    expect(myGame.playerParty).toEqual(compArray)
  })
})