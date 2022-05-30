class User {
  constructor(name, damage) {
    // set up properties..
    this.name = name;
    this.damage = damage;
  }

  login() {
    console.log(`logged in ${this.name}`);
    return this;
  }

  attack() {
    console.log(`${this.name} attacks: ${this.damage} Damage!`);
    return this;
  }
}

class Admin extends User {
  constructor(name, damage, position) {
    super(name, damage);
    this.position = position;
  }
  getPosition() {
    console.log(`Position is ${this.position}`);
    return this;
  }
}

const user1 = new User("Toa Matao", 100);
const user2 = new User("Zaktan", 250);
const admin1 = new Admin("Takanuva", 5000, "head");

user1.login().attack();
user2.login().attack();
admin1.login().getPosition();
