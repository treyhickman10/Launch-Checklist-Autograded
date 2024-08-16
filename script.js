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

		let list = document.getElementById("faultyItems");
		let pilotName = document.getElementById("pilotName").value;
		let copilotName = document.querySelector("input[name=copilotName]").value;
		let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
		let cargoMass = document.querySelector("input[name=cargoMass]").value;

		formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);

		let pilotStatus = document.getElementById("pilotStatus");
		pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;

		let copilotStatus = document.getElementById("copilotStatus");
		copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;

		let h2 = document.getElementById("launchStatus");

		let fuelStatus = document.getElementById("fuelStatus");

		list.style = "visibility: visible";

		if (fuelLevel >= 10000 && cargoMass <= 10000) {
			h2.innerHTML = "Shuttle is Ready for Launch";
			h2.style.color = "green";
			list.style = "visibility: visible";
		} else {
			h2.innerHTML = "Shuttle Not Ready for Launch";
			h2.style.color = "red";
			list.style = "visibility: visible";
		}
		if (fuelLevel < 10000) {
			fuelStatus.innerHTML = `Fuel level too low for launch`;
			list.style = "visibility: visible";
		} else {
			fuelStatus.innerHTML = `Fuel level high enough for launch`;
		}
		let cargoStatus = document.getElementById("cargoStatus");
		if (cargoMass > 10000) {
			cargoStatus.innerHTML = "Cargo mass too heavy for launch";
			list.style = "visibility: visible";
		} else {
			cargoStatus.innerHTML = "Cargo mass low enough for launch";
		}
		// console.log(pilotStatus.innerHTML);
		// console.log(pilotStatus);
		// console.log(list.innerHTML);
		event.preventDefault();
	});
});
