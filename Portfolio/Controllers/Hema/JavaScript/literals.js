var batwing = {
  status: "Ready",
  rescueBatman : function() {
	document.write("Locating his transponder.... initializing launch...");

 }
}
/*
if(batwing.status === 'Ready')
{
	batwing.rescueBatman();
}
*/
var utilities = {
	printAllMembers : function(targetObject){
		for (i in targetObject){
		  document.write("<BR />" + targetObject[i]);
		}
	}
}

//utilities.printAllMembers(batwing);

// defining an empty object
var i_am_empty = {};

// utilities.printAllMembers(i_am_empty);


var planet = {
	id : 34,
	name : "Earth",
	faction :{
	  factionId : 2,
	  name : "Earth2",
	  notification : function(){
	    document.write("Earth2 alliance......unite!");
	  } 
	},
	cities:[
	  {  locationId: 15,name:'Glad'  },
	  {  locationId: 16,name:'Chal'},
	  {  locationID: 17,name:'Ensi'}
	]

};

// planet.faction.notification();

//document.write(planet.cities[1].name);

//modifying the value
//planet.name='newEarth';
//document.write("<br />" + planet.name);

// creating an object of planet

var planetObj = planet;
// document.write(planetObj.name + " " + planetObj.id);

// adding new member to the object planet

if(typeof planet.defence === 'undefined'){
	planet.defence = 'ozone layer';
}

// document.write(planet.defence);


// displaying all the members in planet

/*for(member in planet)
{
	document.write("<br />" + member + " ===> " + planet[member]);
}*/

function car(make,model,year){
  this.make = make;
  this.model = model;
  this.year = year;
}

var myCar = new car("Toyota","Altis",1997 );
var myCar1 = new car("Honda","CRV",2011);

document.write(myCar.model +" " + myCar.make +" " +myCar.year);
document.writeln("<BR />" +myCar1.model +" " + myCar1.make +" " +myCar1.year);
