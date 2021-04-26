/*
*	gameSelect.js
*	Selects what game will be displayed in the iframe. Will check the index
*	for a query and pick a game. With no query, a random game will be chosen.
*
*
*	Kameron Dangleben
*	Chris Capaldi
*	Sam Fisher
*
*	IST 411
*	4/25/21
*/


//List of game embed urls
var games = [
  "https://www.addictinggames.com/embed/html5-games/20543",
  "https://www.addictinggames.com/embed/html5-games/20398",
  "https://www.addictinggames.com/embed/html5-games/19016",
  "https://cdn2.addictinggames.com/addictinggames-content/ag-assets/content-items/html5-games/theimpossiblequiz/index.html",
  "https://www.addictinggames.com/embed/html5-games/17154",
  "https://www.addictinggames.com/embed/html5-games/20305",
  "http://html5gameshq.com/iframed/cut-the-rope-2"
  
];

//Get get the frame element
var myFrame = document.getElementsByClassName("frame")[0];


/**
*	getRandomUrl()
*	Checks for query in url, if no query, a random game will return.
*
*/
function getRandomUrl(myFrame) {
	
if(document.URL.includes("index.html?0")){
   index = 0;
}
else if(document.URL.includes("index.html?1")){
   index = 1;
}
else if(document.URL.includes("index.html?2")){
   index = 2;
}
else if(document.URL.includes("index.html?3")){
   index = 3;
}
else if(document.URL.includes("index.html?4")){
   index = 4;
}
else if(document.URL.includes("index.html?5")){
   index = 5;
}
else if(document.URL.includes("index.html?6")){
   index = 6;
}
else{
	index = Math.floor(Math.random() * games.length);
}
 
  var url = games[index];//Url is grabbed from the games array
  myFrame.src = url; //Game frame src will equal url
  
}

/**
*	executeQuery()
*	Executes the getRandomUrl function
*
*/
function executeQuery() { 
  getRandomUrl(myFrame);
}

executeQuery(); //Execute the command

console.log(myFrame.src); //Output


var titleElem = document.getElementsByTagName("vg")[0]; //Grab title by it's tag name "<vg>"

var descElem = document.getElementsByTagName("vgd")[0];//Grab description by it's tag name "<vgd>"



var gametitle = getgame(index); //Uses the game url index to grab a game title from the game_titles array
console.log(gametitle);//output
titleElem.innerHTML = gametitle; //Replace content

var desc = getdesc(index); //Uses game url to grab a description from the game_desc array
console.log(desc);
descElem.innerHTML = desc;


/**
*	getgame()
*	Get game title from array at value 'n'
*
*/
function getgame(n) { 
	var game_titles = [
	"Bloons Tower Defense 4",
	"Age of War","Bubble Spinner",
	"The Impossible Quiz",
	"Bloons",
	"Tanks",
	"Cut the Rope 2"
	];
	


	return game_titles[n];
}

/**
*	getdesc()
*	Get game description from array at value 'n'
*
*/
function getdesc(n) 
{
	var game_desc = [
"Bloons Tower Defense 4 is the fourth game in the series. After the massive success of its predecessor,BTD4 tries to modernize the experience to be more suitable for more modern gamers. Graphically, the game is more polished than its predecessor, and there are many more units to choose from. As for the gameplay, there are now multiple modes to try out which allow for unlimited replayability!",
"Age of War is the classic real time strategy game that simulates the evolution of mankind; more specifically, war. You start off with clubs and spears, then end up with planes and tanks. The endless survival aspect allows for many different viable playstyles. Try experimenting with your own style of play!",
"Bubble Spinner is a very addicting, arcade style game. It tests your reflexes, as well as your precision. The goal is to connect the bubbles of the same color, but each time you shoot a bubble, the target will rotate. Go for the high score!",
"The Impossible Quiz is a classic that will not only make you laugh, but also very confused. The game is very simple, you select an answer-However, as simple as it sounds, the questions progressively get harder and harder, and much more cryptic. See who can get the furthest out of your friends!",
"Bloons will take away hours of your day without you even noticing. The goal is straightforward, pop as many balloons in as little turns possible. If you run out of darts, you start over. Some bloons will even grant you powerups, so be on the lookout.",
"Classic tank shooter strategy game. Similar to worms, the goal is to angle your shots and defeat your opponents. Fun to play with friends!",
"The popular mobile game finally finds its way into the browser. You must cut the rope to collect stars. The more stars, the more coins you get, and the higher the score you get."

]

return game_desc[n];	
}


