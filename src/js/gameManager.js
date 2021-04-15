import Character from '../js/charObj.js'

export default class Manager {
  constructor() {
    this.playerParty = []; 
    this.enemyParty = [];
  }
  buildParty(party) {
    const npcArray = party
    for (let i = 0; i < npcArray.length; i++) {
      let pChar = new Character(npcArray[i])
      pChar.checkType(pChar.myType);
      pChar.myIndexLoc = i;
      this.playerParty.push(pChar);
    }
    this.monsterParty(npcArray.length)
  }
  monsterParty(partySize) {
    const monsterArray = ["vampire", "ghoul", "dragon", "zombie", "litterbug", "fiend", "blob", "thrall", "ghost"]
    for (let i = 0; i < partySize; i ++) {
      let ranNum = Math.floor(Math.random() * monsterArray.length);
      let mChar = new Character(monsterArray[ranNum]);
      mChar.checkType(mChar.myType);
      this.enemyParty.push(mChar);
    }
  }
  attack(attacker, victim) {
    const attackAmount = attacker.myStats[1]
    victim.damage(attackAmount, this)
    console.log(attacker.myType + " attacked " + victim.myType + " for " + attackAmount + " damage")
  }
  heal(healer, victim) {
    const healAmount = healer.myStats[1]
    victim.heal(healAmount) 
    console.log(healer.myType + " healed " + victim.myType + " for " + healAmount + " damage")
  }
  death(unitToKill) {
    this.playerParty.splice(unitToKill)
  }
}

