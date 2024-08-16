// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `<h2>Mission Destination</h2>
    	<ol>
			<li>Name: ${name}</li>
			<li>Diameter: ${diameter}</li>
			<li>Star: ${star}</li>
			<li>Distance from Earth: ${distance}</li>
			<li>Number of Moons: ${moons}</li>
		</ol>
		<img src="${imageUrl}"></img>`;

  // Here is the HTML formatting for our mission target div.
  /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  }
  if (!isNaN(testInput)) {
    return "Is a Number";
  }
  if (isNaN(testInput)) {
    return "Not a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  fuelLevel = Number(fuelLevel);
  cargoLevel = Number(cargoLevel);
  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoLevel) === "Empty"
  ) {
    alert("Please fill all inputs");
    return;
  } else if (
    validateInput(pilot) === "Is a Number" ||
    validateInput(copilot) === "Is a Number" ||
    validateInput(fuelLevel) === "Not a Number" ||
    validateInput(cargoLevel) === "Not a Number"
  ) {
    alert("Please enter valid values");
    return;
  } else {
    list.style = "visibility: visible";
    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;

    let copilotStatus = document.getElementById("copilotStatus");
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    let h2 = document.getElementById("launchStatus");

    let fuelStatus = document.getElementById("fuelStatus");

    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
      h2.innerHTML = "Shuttle is Ready for Launch";
      h2.style.color = "green";
    } else {
      h2.innerHTML = "Shuttle Not Ready for Launch";
      h2.style.color = "red";
    }
    if (fuelLevel < 10000) {
      fuelStatus.innerHTML = `Fuel level too low for launch`;
    } else {
      fuelStatus.innerHTML = `Fuel level high enough for launch`;
    }
    let cargoStatus = document.getElementById("cargoStatus");
    if (cargoLevel > 10000) {
      cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    } else {
      cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }
    // console.log(pilotStatus.innerHTML);
    // console.log(pilotStatus);
    // console.log(list.innerHTML);
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    console.log(response);
    return response.json();
  });
  return planetsReturned;
}

function pickPlanet(planets) {
  let planet = planets[Math.floor(Math.random() * planets.length)];
  return planet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
