genderArray = ["M", "F"];
const genderNeutralNames = [
  "Alex",
  "Taylor",
  "Jordan",
  "Riley",
  "Casey",
  "Jamie",
  "Jordan",
  "Peyton",
  "Cameron",
  "Bailey",
  "Avery",
  "Morgan",
  "Sawyer",
  "Quinn",
  "Hayden",
  "Harper",
  "Reese",
  "Charlie",
  "Skyler",
  "Finley",
];
const magicTypeArray = ["Earth", "Water", "Fire", "Air"];
const miningMissions = [
  {
    missionName: "Gather Iron Ore",
    description:
      "Explore the forest to find iron ore deposits and mine them for raw iron.",
    difficulty: "E",
    type: "iron",
    success: () => {
      return Math.floor(1 + Math.random() * 2);
    },
  },
  {
    missionName: "Extract Precious Stones",
    description:
      "Search for hidden gemstone veins within rocky outcrops and extract them for valuable gems.",
    difficulty: "B",
    type: "gem",
    success: () => {
      return Math.floor(Math.random() * 2);
    },
  },
  {
    missionName: "Collect Quartz Crystals",
    description:
      "Scour the forest floor and caves to find quartz crystal formations and gather them.",
    difficulty: "F",
    type: "quartz",
    success: () => {
      return Math.floor(2 + Math.random() * 4);
    },
  },
];
const foragerMissions = [
  {
    missionName: "Collect Berries",
    description: "Gather a variety of wild berries found in the forest.",
    difficulty: "F",
    type: "food",
    success: () => {
      return 1;
    },
  },
  {
    missionName: "Gather Mushrooms",
    description:
      "Search for different types of edible mushrooms growing on the forest floor.",
    difficulty: "E",
    type: "food",
    success: () => {
      return Math.floor(1 + Math.random() * 1);
    },
  },
  {
    missionName: "Harvest Herbs",
    description:
      "Identify and collect various herbs used for cooking or medicinal purposes.",
    difficulty: "D",
    type: "food",
    success: () => {
      return Math.floor(1 + Math.random() * 2);
    },
  },
];
const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Miller",
  "Davis",
  "Garcia",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Moore",
  "Jackson",
  "Martin",
  "Lee",
  "Perez",
  "Thompson",
  "White",
  "Harris",
  "Sanchez",
  "Clark",
  "Ramirez",
  "Lewis",
];
const weaponNames = [
  "Excalibur",
  "Thunderfury, Blessed Blade of the Windseeker",
  "Mjölnir",
  "Vorpal Sword",
  "Dragonslayer",
  "Glaive",
  "Frostmourne",
  "Spear of Destiny",
  "Sword of Omens",
];

const huntingMissions = [
  {
    missionName: "Track Deer",
    description: "Follow the tracks of deer and hunt one for its meat.",
    difficulty: "B",
    type: "food",
    success: () => {
      return Math.floor(1 + Math.random() * 4);
    },
  },
  {
    missionName: "Hunt Wild Boar",
    description:
      "Search for a wild boar in the forest and hunt it down for its meat and hide.",
    difficulty: "A",
    type: "food",
    success: () => {
      return Math.floor(1 + Math.random() * 5);
    },
  },
  {
    missionName: "Catch Rabbits",
    description:
      "Set traps or use other hunting techniques to catch rabbits for their meat.",
    difficulty: "C",
    type: "food",
    success: () => {
      return Math.floor(1 + Math.random() * 3);
    },
  },
];

//
//city
//
function City(name, country) {
  this.name = name;
  this.country = country;
  this.id = idMake();
  this.level = 1;
  this.population = [" "];
  this.maxPopulation = 40;
  this.money = 3500;
  this.tradeWith = (otherCity) => {
    if (otherCity.inventory[0].food > 10 && this.money > 50) {
      let p = 100 - this.market * 13;
      otherCity.inventory[0].food--;
      this.inventory[0].food++;
      otherCity.money = otherCity.money + p;
      this.money = this.money - p;
    }
  };
  this.trainingGround = 1;
  this.trainingGroundUpgrade = () => {
    if (this.trainingGround <= 3) {
      this.trainingGround++;
      this.country.money = this.country.money - 1000;
      this.money = this.money + 1000;
    }
  };
  this.adventureGuild = 1;
  this.adventureGuildUpgrade = () => {
    if (this.adventureGuild <= 2) {
      this.adventureGuild++;
      this.country.money = this.country.money - 1000;
      this.money = this.money + 1000;
    }
  };
  this.market = 1;
  this.marketUpgrade = () => {
    if (this.market <= 5) {
      this.market++;
      this.country.money = this.country.money - 1000;
      this.money = this.money + 1000;
    }
  };
  this.buyMenu = [
    {
      item: ironSpear,
      cost: 30,
    },
    {
      item: ironAxe,
      cost: 30,
    },
  ];
  this.weaponMake = () => {
    if (this.blacksmith > 2 && this.inventory[1].iron >= 100) {
      this.inventory[1].iron = this.inventory[1].iron - 100;
      this.buyMenu[this.buyMenu.length] = {
        item: new Weapon(
          weaponNames[Math.floor(Math.random() * weaponNames.length)],
          4 + this.blacksmith * 3 * Math.floor(1 + Math.random() * 3)
        ),
        cost: 90 + 23 * Math.floor(Math.random() * 4),
      };
    }
  };
  this.populationMoney = () => {
    let k = 0;
    for (let i = 0; i < this.population.length; i++) {
      k = k + this.population[i].money;
    }
    return k;
  };
  this.coinMake = () => {
    this.money = this.money + this.tax * this.market;
    if (this.inventory[2].gems > 60) {
      this.money = this.money + 200;
      this.inventory[2].gems = this.inventory[2].gems - 60;
    } else if (this.inventory[3].quartz > 60) {
      this.money = this.money + 150;
      this.inventory[3].quartz = this.inventory[3].quartz - 60;
    }
  };
  this.hospitalLevel = 1;
  this.hospitalUpgrade = () => {
    if (this.hospitalLevel <= 6) {
      this.hospitalLevel++;
      this.country.money = this.country.money - 1000;
      this.money = this.money + 1000;
    }
  };
  this.tax = 3;
  this.blacksmith = 1;
  this.blacksmithUpgrade = () => {
    if (this.blacksmith <= 10) {
      this.blacksmith++;
      this.country.money = this.country.money - 1000;
      this.money = this.money + 1000;
    }
  };
  this.foodNeed = () => {
    if (this.population.length < 20) {
      return Math.floor(this.population.length / (4 + this.market));
    } else {
      return Math.floor(this.population.length / (2 + this.market));
    }
  };
  this.inventory = [{ food: 4 }, { iron: 0 }, { gems: 0 }, { quartz: 0 }];
  this.status = "Alive";
  this.deathText = "";
  this.quests = [];
  this.feed = () => {
    if (
      this.inventory[0].food < this.foodNeed() ||
      this.population.length == 0
    ) {
      this.country.money = this.country.money + this.money;
      this.money = 0;
      this.population = [];
      this.status = "Dead";
    } else {
      this.inventory[0].food = this.inventory[0].food - this.foodNeed();
      console.log("Everyone in", this.name, "is weill fed.");
    }
  };
  this.questsReset = () => {
    this.quests[0] = foragerMissions[Math.floor(Math.random() * 3)];
    this.quests[1] = huntingMissions[Math.floor(Math.random() * 3)];
    this.quests[2] = miningMissions[Math.floor(Math.random() * 3)];
  };
  this.start = () => {
    this.questsReset();
    this.population[this.population.length - 1] = new Person(
      "M",
      genderNeutralNames[
        Math.floor(Math.random() * (genderNeutralNames.length - 1))
      ],
      lastNames[Math.floor(Math.random() * lastNames.length - 1)],
      "GOD",
      "GOD",
      idMake(),
      this,
      18.0
    );
    this.population[this.population.length] = new Person(
      "F",
      genderNeutralNames[
        Math.floor(Math.random() * (genderNeutralNames.length - 1))
      ],
      lastNames[Math.floor(Math.random() * lastNames.length - 1)],
      "GOD",
      "GOD",
      idMake(),
      this,
      18.0
    );
  };
  const cityNames = [
    "Aurora Vista",
    "Crystal Haven",
    "Emerald Shores",
    "Phoenix Heights",
    "Silverbrook",
    "Starfall Metropolis",
    "Elysium Springs",
    "Nova Harbor",
    "Veridian Ridge",
    "Luminous Valley",
    "Celestial City",
    "Moonlight Meadows",
    "Sunset Summit",
    "Mystic Falls",
    "Whispering Woods",
    "Radiant Bay",
  ];
  this.turnAction = () => {
    this.questsReset();
    if (Math.floor(Math.random() * 100) < 2) {
      this.weaponMake();
    }
    if (this.status == "Alive" && this.population.length > 0) {
      console.log(this.name + " " + this.id + " " + "New Turn.");
      for (let i = 0; i < this.population.length; i++) {
        if (this.population[i].status == "Alive") {
          console.log(" ");
          if (this.population[i].age >= 18) {
            if (
              Math.floor(Math.random() * 100) <=
              16 + this.trainingGround * 2
            ) {
              this.population[i].training();
            } else if (
              Math.floor(Math.random() * 100) <=
              25 + this.adventureGuild * 4
            ) {
              this.population[i].adventure();
            } else if (
              Math.floor(Math.random() * 100) <=
              3 + this.hospitalLevel * 2
            ) {
              this.population[i].makeOffspring(
                this.population[
                  Math.floor(Math.random() * this.population.length)
                ]
              );
            } else if (Math.floor(Math.random() * 100) <= 1 + this.market * 2) {
              this.population[i].buy();
            } else {
              this.population[i].doNothing();
            }
          } else if (this.population[i].age <= 18 && this.population[i] > 6) {
            if (Math.floor(Math.random() * 100) <= 20) {
              this.population[i].training();
            } else {
              this.population[i].doNothing();
            }
          } else {
            this.population[i].doNothing();
          }
          this.population[i].ageUp();
          this.population[i].payTax();
        } else {
          this.population.splice(this.population[i], 1);
        }
      }
      console.log(" ");
      this.feed();
    } else {
      console.log("City is dead.");
    }
  };
}
//
//weapon
//
function Weapon(name, damage) {
  this.damage = damage;
  this.name = name;
}
const ironSpear = new Weapon("Iron Spear", 3);
const ironAxe = new Weapon("Iron Axe", 3);
const woodenStick = new Weapon("Wooden Stick", 1);
//
//idMake
//
function idMake() {
  return Math.floor(Math.random() * 10000);
}
//
//person
//
function Person(gender, fName, lName, father, mother, id, city, age) {
  this.gender = gender;
  this.fName = fName;
  this.lName = lName;
  this.father = father;
  this.mother = mother;
  this.money = 10;
  this.id = id;
  this.city = city;
  this.age = age;
  this.ageUp = () => {
    this.age = this.age + 0.5;
    console.log(this.id + " Got older");
    if (
      this.age > 65 + this.city.hospitalLevel &&
      Math.floor(
        Math.random() * (this.age + 40) + 8 * this.city.hospitalLevel
      ) < this.age
    ) {
      this.status = "Dead";
      this.deathText = "Died of old age.";
      console.log(this.id, this.deathText);
      this.city.money = this.city.money + this.money;
      this.money = 0;
    }
  };
  this.buy = () => {
    if (this.weapon != woodenStick) {
      for (let j = 0; j < this.city.buyMenu.length; j++) {
        if (
          this.money > this.city.buyMenu[j].cost &&
          this.weapon.damage < this.city.buyMenu[j].item.damage &&
          Math.floor(Math.random() * 6) < 2
        ) {
          this.money = this.money - this.city.buyMenu[j].cost;
          this.city.money = this.city.money + this.city.buyMenu[j].cost;
          this.weapon = this.city.buyMenu[j].item;
          break;
        }
      }
    } else {
      if (this.money >= 30 && this.weapon == woodenStick) {
        this.weapon = this.city.buyMenu[Math.floor(Math.random() * 2)].item;
        this.money = this.money - 30;
        this.city.money = this.city.money + 30;
      } else {
        this.adventure();
      }
    }
  };
  this.children = [];
  this.level = 0;
  this.magic = () => {
    return this.level * 3;
  };
  this.magicType = "None";
  this.weapon = woodenStick;
  this.health = 25;
  this.maxHealth = () => {
    return 25 + 6 * this.level;
  };
  this.status = "Alive";
  this.deathText = "";
  this.exp = 0;
  this.adventureRank = "F";
  this.makeOffspring = (otherPerson) => {
    if (
      otherPerson.gender != this.gender &&
      this.city.population.length < this.city.maxPopulation
    ) {
      let i = this.city.population.length;
      if (this.gender == "M") {
        this.city.population[i] = new Person(
          genderArray[Math.floor(Math.random() * 2)],
          genderNeutralNames[
            Math.floor(Math.random() * (genderNeutralNames.length - 1))
          ],
          this.lName,
          this.fName + " " + this.lName,
          otherPerson.fName + " " + otherPerson.lName,
          idMake(),
          this.city,
          1
        );
      } else {
        this.city.population[i] = new Person(
          genderArray[Math.floor(Math.random() * 2)],
          genderNeutralNames[
            Math.floor(Math.random() * (genderNeutralNames.length - 1))
          ],
          otherPerson.lName,
          otherPerson.fName + " " + otherPerson.lName,
          this.fName + " " + this.lName,
          idMake(),
          this.city,
          1
        );
      }
      this.children[this.children.length] =
        this.city.population[i].fName +
        " " +
        this.city.population[i].lName +
        " ID:" +
        this.city.population[i].id;
      otherPerson.children[otherPerson.children.length] =
        this.city.population[i].fName +
        " " +
        this.city.population[i].lName +
        " ID:" +
        this.city.population[i].id;
    } else {
      console.log("This is gay");
    }
  };
  this.strike = () => {
    return this.level * 2 + this.weapon.damage * ((1 / 2) * this.magic());
  };
  this.levelUp = () => {
    if (this.exp >= 1 + this.level * 2) {
      this.level++;
      this.exp = 0;
      this.health = this.maxHealth();
      console.log(this.id + " Leveled Up.");
      this.rankUp();
    }
  };
  this.training = () => {
    if (this.magicType == "None") {
      this.magicType = magicTypeArray[Math.floor(Math.random() * 4)];
      console.log(this.magicType);
    }
    this.exp = this.exp * this.city.trainingGround;
    this.levelUp();
  };
  this.payTax = () => {
    if (this.money > 11 * this.city.tax) {
      this.money = this.money - this.city.tax;
      this.city.money = this.city.money + this.city.tax;
    } else {
      console.log(this.id + ": is Too poor to pay the tax.");
    }
  };
  this.doNothing = () => {
    console.log(
      this.fName + " " + this.lName + " " + this.id + " Did nothing."
    );
    if (this.health != this.maxHealth()) {
      this.health = this.health + this.city.hospitalLevel;
      if (this.health > this.maxHealth()) {
        this.health = this.maxHealth();
      }
    }
  };
  this.adventure = () => {
    for (let i = 0; i < this.city.adventureGuild; i++) {
      if (
        this.city.quests[i].difficulty <= this.adventureRank &&
        this.city.money >= 10
      ) {
        this.exp++;
        this.money = this.money + 10;
        this.city.money = this.city.money - 9;
        this.levelUp();
        if (this.city.quests[i].type == "food") {
          this.city.inventory[0].food =
            this.city.inventory[0].food + this.city.quests[i].success();
        } else if (this.city.quests[i].type == "iron") {
          this.city.inventory[1].iron =
            this.city.inventory[1].iron + this.city.quests[i].success();
        } else if (this.city.quests[i].type == "gem") {
          this.city.inventory[2].gems =
            this.city.inventory[2].gems + this.city.quests[i].success();
        } else if (this.city.quests[i].type == "quartz") {
          this.city.inventory[3].quartz =
            this.city.inventory[3].quartz + this.city.quests[i].success();
        }
      }
    }
  };
  this.rankUp = () => {
    if (this.level > 16) {
      this.adventureRank = "A";
    } else if (this.level > 13) {
      this.adventureRank = "B";
    } else if (this.level > 9) {
      this.adventureRank = "C";
    } else if (this.level > 6) {
      this.adventureRank = "D";
    } else if (this.level > 3) {
      this.adventureRank = "E";
    } else {
      this.adventureRank = "F";
    }
  };
}
