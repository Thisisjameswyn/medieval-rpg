export default class Character {
  constructor(myType) {
    this.myType = myType
    this.myStats = []
    this.myIndexLoc = 0
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
    } else if(myType === "vampire") {
      this.myStats = [80, 30, 15]
    } else if(myType === "ghoul") {
      this.myStats = [60, 25, 30]
    } else if(myType === "dragon") {
      this.myStats = [200, 40, 70]
    } else if(myType === "zombie") {
      this.myStats = [20, 10, 10]
    } else if(myType === "litterbug") {
      this.myStats = [20, 5, 10]
    } else if(myType === "fiend") {
      this.myStats = [50, 20, 30]
    } else if(myType === "blob") {
      this.myStats = [50, 15, 5]
    } else if(myType === "thrall") {
      this.myStats = [40, 20, 10]
    } else if(myType === "ghost") {
      this.myStats = [40, 20, 60]
    }  
  }
  damage(amount, manager) {
    this.myStats[0] -= amount;
    if(this.myStats[0] <= 0) {
      manager.death(this.myIndexLoc)
    }
  }

  heal(amount) {
    this.myStats[0] += amount;
  }
}