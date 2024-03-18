$("#cityName").text(wonderLand.name);
var index;
alert("Reach a population of 200 people to win.");
var personIndex = 0;
$("#nextTurnButton").on("click", function () {
  wonderLand.nextTurn();
  $("#countryName").text(wonderLand.name);
  $("#countryMoney").text("Cities Money: " + wonderLand.citiesMoney());
  $("#upgradeMoney").text("Money: " + wonderLand.money);
  $("#countryCities").text("Cities: " + wonderLand.activeCities());
  $("#countryYear").text("Year: " + wonderLand.year);
  $("#countryPopulation").text("population: " + wonderLand.population());
  cityView();
});
$("#fiveNextTurnButton").on("click", function () {
  for (let i = 0; i < 5; i++) {
    wonderLand.nextTurn();
  }
  $("#countryName").text(wonderLand.name);
  $("#countryMoney").text("Cities Money: " + wonderLand.citiesMoney());
  $("#upgradeMoney").text("Money: " + wonderLand.money);
  $("#countryCities").text("Cities: " + wonderLand.activeCities());
  $("#countryYear").text("Year: " + wonderLand.year);
  $("#countryPopulation").text("population: " + wonderLand.population());
  cityView();
});
$("#n100nextnTurnsButtonn").on("click", function () {
  for (let i = 0; i < 100; i++) {
    wonderLand.nextTurn();
  }
  $("#countryName").text(wonderLand.name);
  $("#countryMoney").text("Cities Money: " + wonderLand.citiesMoney());
  $("#upgradeMoney").text("Money: " + wonderLand.money);
  $("#countryCities").text("Cities: " + wonderLand.activeCities());
  $("#countryYear").text("Year: " + wonderLand.year);
  $("#countryPopulation").text("population: " + wonderLand.population());
  cityView();
});
function cityView() {
  for (let c = 0; c < wonderLand.cities.length; c++) {
    if (wonderLand.cities[c].status == "Alive") {
      document.querySelectorAll(".cityNameList")[c].innerHTML =
        wonderLand.cities[c].name + " " + wonderLand.cities[c].id;
    } else {
      document.querySelectorAll(".cityNameList")[c].innerHTML = "";
    }
  }
}
$(".cityNameList").on("click", function () {
  for (let i = 0; i < wonderLand.cities.length; i++) {
    if (
      this.innerHTML ==
      wonderLand.cities[i].name + " " + wonderLand.cities[i].id
    ) {
      index = i;
      $("#smallCityName").text(wonderLand.cities[i].name);
      $("#cityMoney").text("Money: " + wonderLand.cities[i].money);
      $("#cityFood").text("Food: " + wonderLand.cities[i].inventory[0].food);
      $("#blacksmithLevel").text(
        "Blacksmith Level: " + wonderLand.cities[i].blacksmith
      );
      $("#hospitalLevel").text(
        "Hospital Level: " + wonderLand.cities[i].hospitalLevel
      );
      $("#marketLevel").text("Market Level: " + wonderLand.cities[i].market);
      $("#trainingLevel").text(
        "Training Grounds Level: " + wonderLand.cities[i].trainingGround
      );
      $("#guildLevel").text(
        "Adventure Guild Level: " + wonderLand.cities[i].adventureGuild
      );
      $("#cityPopulation").text(
        "Population: " + wonderLand.cities[i].population.length
      );
    }
  }
});

$("#blacksmithUp").on("click", function () {
  if (index + 1 > 0) {
    if (wonderLand.money > 1000) {
      wonderLand.cities[index].blacksmithUpgrade();
    } else {
      alert("Not enough money");
    }
  } else {
    alert("Select a city.");
  }
});

$("#marketUp").on("click", function () {
  if (index + 1 > 0) {
    if (wonderLand.money > 1000) {
      wonderLand.cities[index].marketUpgrade();
    } else {
      alert("Not enough money");
    }
  } else {
    alert("Select a city.");
  }
});

$("#guildUp").on("click", function () {
  if (index + 1 > 0) {
    if (wonderLand.money > 1000) {
      wonderLand.cities[index].adventureGuildUpgrade();
    } else {
      alert("Not enough money");
    }
  } else {
    alert("Select a city.");
  }
});

$("#hospitalUp").on("click", function () {
  if (index + 1 > 0) {
    if (wonderLand.money > 1000) {
      wonderLand.cities[index].hospitalUpgrade();
    } else {
      alert("Not enough money");
    }
  } else {
    alert("Select a city.");
  }
});

$("#trainingUp").on("click", function () {
  if (index + 1 > 0) {
    if (wonderLand.money > 1000) {
      wonderLand.cities[index].trainingGroundUpgrade();
    } else {
      alert("Not enough money");
    }
  } else {
    alert("Select a city.");
  }
});
cityView();
$("#cityBuilder").on("click", function () {
  wonderLand.newCity();
  $("#countryName").text(wonderLand.name);
  $("#countryMoney").text("Cities Money: " + wonderLand.citiesMoney());
  $("#upgradeMoney").text("Money: " + wonderLand.money);
  $("#countryCities").text("Cities: " + wonderLand.activeCities());
  $("#countryYear").text("Year: " + wonderLand.year);
  $("#countryPopulation").text("population: " + wonderLand.population());

  cityView();
});
$("#countryName").text(wonderLand.name);
$("#countryMoney").text("Cities Money: " + wonderLand.citiesMoney());
$("#upgradeMoney").text("Money: " + wonderLand.money);
$("#countryCities").text("Cities: " + wonderLand.activeCities());
$("#countryYear").text("Year: " + wonderLand.year);
$("#countryPopulation").text("population: " + wonderLand.population());
