var gameData = { //Contains all the variables for the game
	hp:50,
	hpCap:100,
	
	food:50,
	foodCap:100,
	
	water:50,
	waterCap:100,
	
	stone:0,
	stoneCap:25,
	
	sticks:0,
	sticksCap:25,
	
	fiber:0,
	fiberCap:25,
	
	basket:0,
	basketCap:1,
		basketCostSticks:5,
		basketCostFiber:5,
	
	bowl:0,
	bowlCap:1,
		bowlCostSticks:5,
		bowlCostFiber:5,
	
	hammer:0,
	hammerCap:1,
		hammerCostStone:10,
		hammerCostSticks:1,
		hammerCostFiber:5,
		
	axe:0,
	axeCap:1,
		axeCostStone:10,
		axeCostSticks:1,
		axeCostFiber:5,
		
	sickle:0,
	sickleCap:1,
		sickleCostStone:10,
		sickleCostSticks:1,
		sickleCostFiber:5,
		
	toolLevel:1,
		toolUpStone:50,
		toolUpSticks:50,
		toolUpFiber:50,
	
	storyProgression:0,
}

{	//Things to display/hide at beginning and change later on as the story progresses
	document.getElementById("gatheringGameStart").style.display = "none";
	document.getElementById("gatherResourcesGameStart").style.display = "none";
	document.getElementById("craftingGameStart").style.display = "none";
	document.getElementById("craftingItemsGameStart").style.display = "none";
	document.getElementById("bottomTable").style.display = "none";
	document.getElementById("story5Gather").style.display = "none";
	
	document.getElementById("story1").style.display = "inline-block";
	document.getElementById("story2").style.display = "none";
	document.getElementById("story3").style.display = "none";
	document.getElementById("story4").style.display = "none";
	document.getElementById("story5").style.display = "none";
}

function gatherGen() { //The basic gathering function. Has probabilites for different resources
	var randInt = Math.floor(Math.random() * 100) + 1; //Random integer from 1-100
	
	if(gameData.food < gameData.foodCap && randInt <= 44){ //Food 44% (1-44)
		gameData.food += 1;		
	}
	else if(gameData.water < gameData.waterCap && randInt > 44 && randInt <= 88){ //Water 44% (45-88)
			gameData.water += 1;
	}
	else if(gameData.stone < gameData.stoneCap && randInt > 88 && randInt <= 92){ //Stone 4% (89-92)
			gameData.stone += 1;		
	}
	else if(gameData.sticks < gameData.sticksCap && randInt > 92 && randInt <= 96){ //Sticks 4% (93-96)
			gameData.sticks += 1;		
	}
	else if(gameData.fiber < gameData.fiberCap && randInt > 96){ //Fiber 4% (97-100)
			gameData.fiber += 1;		
	}

	document.getElementById("food").innerHTML = gameData.food;
	document.getElementById("water").innerHTML = gameData.water;
	document.getElementById("stone").innerHTML = gameData.stone;
	document.getElementById("sticks").innerHTML = gameData.sticks;
	document.getElementById("fiber").innerHTML = gameData.fiber;
}

function craftBasket() {
	if(gameData.sticks >= gameData.basketCostSticks && gameData.fiber >= gameData.basketCostFiber && gameData.basket < gameData.basketCap) {
		gameData.sticks -= gameData.basketCostSticks;
		gameData.fiber -= gameData.basketCostFiber;
		gameData.basket += 1;
		gameData.basketCostSticks += 2;
		gameData.basketCostFiber += 2;
	}
	if(gameData.basket == gameData.basketCap) {
		document.getElementById("basket").style.color = "green";
		document.getElementById("basketCap").style.color = "green";
		document.getElementById("basketSlash").style.color = "green";
	}
	if(gameData.basketCostSticks == 7 && gameData.basketCostFiber == 7) {
		document.getElementById("basketSticks").src = "icons/costs/sticks7.png";
		document.getElementById("basketFiber").src = "icons/costs/fiber7.png";
	}
	document.getElementById("sticks").innerHTML = gameData.sticks;
	document.getElementById("fiber").innerHTML = gameData.fiber;
	document.getElementById("basket").innerHTML = gameData.basket;
}

function craftBowl() {
	if(gameData.sticks >= gameData.bowlCostSticks && gameData.fiber >= gameData.bowlCostFiber && gameData.bowl < gameData.bowlCap) {
		gameData.sticks -= gameData.bowlCostSticks;
		gameData.fiber -= gameData.bowlCostFiber;
		gameData.bowl += 1;
		gameData.bowlCostSticks += 2;
		gameData.bowlCostFiber += 2;
	}
	if(gameData.bowl == gameData.bowlCap) {
		document.getElementById("bowl").style.color = "green";
		document.getElementById("bowlCap").style.color = "green";
		document.getElementById("bowlSlash").style.color = "green";
	}
	if(gameData.bowlCostSticks == 7 && gameData.bowlCostFiber == 7) {
		document.getElementById("bowlSticks").src = "icons/costs/sticks7.png";
		document.getElementById("bowlFiber").src = "icons/costs/fiber7.png";
	}
	document.getElementById("sticks").innerHTML = gameData.sticks;
	document.getElementById("fiber").innerHTML = gameData.fiber;
	document.getElementById("bowl").innerHTML = gameData.bowl;
}

function craftHammer() {
	if(gameData.stone >= gameData.hammerCostStone && gameData.sticks >= gameData.hammerCostSticks && gameData.fiber >= gameData.hammerCostFiber && gameData.hammer < gameData.hammerCap) {
		gameData.stone -= gameData.hammerCostStone;
		gameData.sticks -= gameData.hammerCostSticks;
		gameData.fiber -= gameData.hammerCostFiber;
		gameData.hammer += 1;
		gameData.hammerCostStone += 2;
		gameData.hammerCostSticks += 2;
		gameData.hammerCostFiber += 2;
	}
	if(gameData.hammer == gameData.hammerCap) {
		document.getElementById("hammer").style.color = "green";
		document.getElementById("hammerCap").style.color = "green";
		document.getElementById("hammerSlash").style.color = "green";
	}
	if(gameData.hammerCostStone == 12 && gameData.hammerCostSticks == 3 && gameData.hammerCostFiber == 7) {
		document.getElementById("hammerStone").src = "icons/costs/stone12.png";
		document.getElementById("hammerSticks").src = "icons/costs/sticks3.png";
		document.getElementById("hammerFiber").src = "icons/costs/fiber7.png";
	}
	document.getElementById("sticks").innerHTML = gameData.sticks;
	document.getElementById("fiber").innerHTML = gameData.fiber;
	document.getElementById("stone").innerHTML = gameData.stone;
	document.getElementById("hammer").innerHTML = gameData.hammer;
}

function craftAxe() {
	if(gameData.stone >= gameData.axeCostStone && gameData.sticks >= gameData.axeCostSticks && gameData.fiber >= gameData.axeCostFiber && gameData.axe < gameData.axeCap) {
		gameData.stone -= gameData.axeCostStone;
		gameData.sticks -= gameData.axeCostSticks;
		gameData.fiber -= gameData.axeCostFiber;
		gameData.axe += 1;
		gameData.axeCostStone += 2;
		gameData.axeCostSticks += 2;
		gameData.axeCostFiber += 2;
	}
	if(gameData.axe == gameData.axeCap) {
		document.getElementById("axe").style.color = "green";
		document.getElementById("axeCap").style.color = "green";
		document.getElementById("axeSlash").style.color = "green";
	}
	if(gameData.axeCostStone == 12 && gameData.axeCostSticks == 3 && gameData.axeCostFiber == 7) {
		document.getElementById("axeStone").src = "icons/costs/stone12.png";
		document.getElementById("axeSticks").src = "icons/costs/sticks3.png";
		document.getElementById("axeFiber").src = "icons/costs/fiber7.png";
	}
	document.getElementById("sticks").innerHTML = gameData.sticks;
	document.getElementById("fiber").innerHTML = gameData.fiber;
	document.getElementById("stone").innerHTML = gameData.stone;
	document.getElementById("axe").innerHTML = gameData.axe;
}

function craftSickle() {
	if(gameData.stone >= gameData.sickleCostStone && gameData.sticks >= gameData.sickleCostSticks && gameData.fiber >= gameData.sickleCostFiber && gameData.sickle < gameData.sickleCap) {
		gameData.stone -= gameData.sickleCostStone;
		gameData.sticks -= gameData.sickleCostSticks;
		gameData.fiber -= gameData.sickleCostFiber;
		gameData.sickle += 1;
		gameData.sickleCostStone += 2;
		gameData.sickleCostSticks += 2;
		gameData.sickleCostFiber += 2;
	}
	if(gameData.sickle == gameData.sickleCap) {
		document.getElementById("sickle").style.color = "green";
		document.getElementById("sickleCap").style.color = "green";
		document.getElementById("sickleSlash").style.color = "green";
	}
	if(gameData.sickleCostStone == 12 && gameData.sickleCostSticks == 3 && gameData.sickleCostFiber == 7) {
		document.getElementById("sickleStone").src = "icons/costs/stone12.png";
		document.getElementById("sickleSticks").src = "icons/costs/sticks3.png";
		document.getElementById("sickleFiber").src = "icons/costs/fiber7.png";
	}
	document.getElementById("sticks").innerHTML = gameData.sticks;
	document.getElementById("fiber").innerHTML = gameData.fiber;
	document.getElementById("stone").innerHTML = gameData.stone;
	document.getElementById("sickle").innerHTML = gameData.sickle;
}

function upgradeTools() {
	if(gameData.stone >= gameData.toolUpStone &&
		gameData.sticks >= gameData.toolUpSticks &&
		gameData.fiber >= gameData.toolUpFiber &&
		gameData.basket >= 1 &&
		gameData.bowl >= 1 &&
		gameData.hammer >= 1 &&
		gameData.axe >= 1 &&
		gameData.sickle >= 1) {
			gameData.stone -= gameData.toolUpStone;
			gameData.sticks -= gameData.toolUpSticks;
			gameData.fiber -= gameData.toolUpFiber;
			gameData.basket -= 1;
			gameData.bowl -= 1;
			gameData.hammer -= 1;
			gameData.axe -= 1;
			gameData.sickle -= 1;
			gameData.toolLevel += 1;
			gameData.toolUpStone *= 10;
			gameData.toolUpSticks *= 10;
			gameData.toolUpFiber *= 10;
	}
}

function story() { //Progresses the story variable, to later use for displaying/hiding textprompts
	gameData.storyProgression += 1;
}

function textPrompts() { //Displays and/or hides text prompts based on the story variable
	if(gameData.storyProgression == 1) {
		document.getElementById("story1").style.display = "none";
		document.getElementById("story2").style.display = "inline-block";
	}
	if(gameData.storyProgression == 2) {
		document.getElementById("story2").style.display = "none";
		document.getElementById("story3").style.display = "inline-block";
	}
	if(gameData.storyProgression == 3) {
		document.getElementById("story3").style.display = "none";
		document.getElementById("story4").style.display = "inline-block";
	}
	if(gameData.storyProgression == 4) {
		document.getElementById("story4").style.display = "none";
		document.getElementById("gatheringGameStart").style.display = "inline-block";
		document.getElementById("gatherResourcesGameStart").style.display = "inline-block";
		document.getElementById("craftingGameStart").style.display = "inline-block";
		document.getElementById("craftingItemsGameStart").style.display = "inline-block";
		document.getElementById("bottomTable").style.display = "block";
	}
	if(gameData.basket == 1 && gameData.bowl == 1 && gameData.hammer == 1 && gameData.axe == 1 && gameData.sickle == 1 && gameData.storyProgression == 4) {
		document.getElementById("story5").style.display = "inline-block";
	}
	if(gameData.storyProgression == 5) {
		document.getElementById("story5").style.display = "none";
		document.getElementById("story5Gather").style.display = "inline-block";
		document.getElementById("gatherResourcesGameStart").style.display = "none";
	}
}



var mainGameLoop = window.setInterval(function() {
	if(gameData.storyProgression >= 4) {
		gatherGen();
		textPrompts();
	}
}, 20)