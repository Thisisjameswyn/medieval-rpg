import { check } from 'yargs';
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

  test('game manager builds an array with starting amount of characters', () => {
    let myGame = new Manager()
    myGame.buildParty(4)
    const compArray = [{"myStats": [100, 20, 20], "myType": "defender"}, {"myStats": [100, 20, 20], "myType": "defender"}, {"myStats": [100, 20, 20], "myType": "defender"}, {"myStats": [100, 20, 20], "myType": "defender"}]
    expect(myGame.playerParty).toEqual(compArray)
  })
});