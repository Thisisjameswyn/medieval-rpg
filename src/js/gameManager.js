import Character from '../js/charObj.js'

export default class Manager {
  constructor() {
    this.playerParty = [];
    this.enemyParty = [];
  }
  buildParty(amount) {
    for (let index = 0; index < amount; index++) {
      let pChar = new Character('defender')
      pChar.checkType(pChar.myType);
      this.playerParty.push(pChar);
    }
  }
}