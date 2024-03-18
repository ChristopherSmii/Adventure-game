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

function Country(name) {
  this.name = name;
  this.citiesMoney = () => {
    let mo = 0.0;
    for (let i = 0; i < this.cities.length; i++) {
      mo = mo + this.cities[i].money;
    }
    return mo;
  };
  this.money = 4000;
  this.citiesTax = () => {
    for (let i = 0; i < this.cities.length; i++) {
      if (this.cities[i].status == "Alive" && this.cities[i].money >= 100) {
        this.money = this.money + 8;
        this.cities[i].money = this.cities[i].money - 8;
      }
    }
  };
  this.pay;
  this.population = () => {
    let j = 0;
    for (let i = 0; i < this.cities.length; i++) {
      j = j + this.cities[i].population.length;
    }
    return j;
  };
  this.year = 0;
  this.cities = [" "];
  this.activeCities = () => {
    let k = 0;
    for (let i = 0; i < this.cities.length; i++) {
      if (this.cities[i].status == "Alive") {
        k++;
      }
    }
    return k;
  };
  this.start = () => {
    this.cities[0] = new City(cityNames[Math.floor(Math.random() * 12)], this);

    for (let i = 0; i < this.cities.length; i++) {
      this.cities[i].start();
    }
  };
  this.nextTurn = () => {
    if (this.population() >= 200) {
      alert("You Won!!");
      location.reload();
    } else if (this.population() == 0 || this.deadCities() >= 2) {
      alert("You Lost!!");
      location.reload();
    }
    for (let i = 0; i < this.cities.length; i++) {
      this.cities[i].turnAction();
    }
    this.citiesTax();
    this.year = this.year + 0.5;
  };
  this.newCity = () => {
    if (this.money > 3500) {
      this.money = this.money - 3500;
      let l = this.cities.length;
      this.cities[l] = new City(prompt("New city name"), this);
      this.cities[l].start();
    }
  };
  this.deadCities = () => {
    let w = 0;
    for (let i = 0; i < this.cities.length; i++) {
      if (this.cities[i].status != "Alive") {
        w++;
      }
    }
    return w;
  };
}

const wonderLand = new Country(prompt("country name"), this);
wonderLand.start();
