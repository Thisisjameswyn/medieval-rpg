export default class Character {
  constructor(myType) {
    this.myType = myType
    this.myStats = []
  }
  checkType(myType) {
    if (myType === "defender") {
      this.myStats = [100, 20, 20]
    } else if(myType === "mage") {
      this.myStats = [60, 30, 30]
    } else if(myType === "swindler") {
      this.myStats = [75, 25, 50]
    } else if(myType === "archer") {
      this.myStats = [70, 20, 45]
    }   
  }
  damage(amount) {
    this.myStats[0] -= amount;
  }

  heal(amount) {
    this.myStats[0] += amount;
  }
}