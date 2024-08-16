// Write your JavaScript code here!

window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    console.log(listedPlanets);
    let planet = pickPlanet(listedPlanets);
    let name = planet.name;
    let diameter = planet.diameter;
    let star = planet.star;
    let distance = planet.distance;
    let moons = planet.moons;
    let url = planet.image;
    addDestinationInfo(document, name, diameter, star, distance, moons, url);
  });
  let form = document.querySelector("form");
  // console.log(form.innerHTML);
  form.addEventListener("submit", function (event) {
    // console.log("event type", event.type);
    // console.log("event target", event.target);
    // console.log("does");
    event.preventDefault();

    let list = document.getElementById("faultyItems");
    let pilotName = document.getElementById("pilotName").value;
    let copilotName = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoMass = document.querySelector("input[name=cargoMass]").value;

    formSubmission(
      document,
      list,
      pilotName,
      copilotName,
      fuelLevel,
      cargoMass
    );
  });
});
