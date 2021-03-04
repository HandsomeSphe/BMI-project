////////create an object for each individual 

///////add a method to each object to calculate BMI
/*var Mark = {
    firstName: "Mark",
    lastName: " Smith",
    mass:78,
    height: 1.69,

    calculateBMI: function(){
         return bmi = this.mass / (this.height )*(this.height);
        
    }
}
var John = {
    firstName: "John",
    lastName: "Jameson",
    mass: 92,
    height: 1.95,
    calculateBMI: function(){
          return johnBmi = this.mass/(this.height)*(this.height);
        
    }
}

var JB = John.calculateBMI();
var MB = Mark.calculateBMI();
console.log(JB);
console.log(MB);

//////log into thew console who haas the biggest BMI

function compareBMIs(){

    if(MB > JB){
        console.log(Mark.firstName + " has the highest BMI than that of " + John.firstName + " and has a BMI of " + MB);
    }else if(MB < JB){
        console.log(John.firstName + " has the highest BMI than that of " + Mark.firstName + " and has a BMI of " + JB)
    }else{
        console.log("both their BMI are equal");
    }
}
compareBMIs();


////////create an object for each individual 
var Sboniso = {

    firstName : "Sboniso",
    lastName: " Mkhaliphi",
    mass: 78,
    height:1.69,
    calculateBMI: function(){
        return bmi = this.mass/(this.height)*(this.height);
    }
}

var Barman = { 
    firstName: "Nkanyiso",
    lastName: "Zikhundla",
    mass:98,
    height:1.96,
    calculateBMI: function(){
        return bmi = this.mass/(this.height)*(this.height);
    }
}

var SB = Sboniso.calculateBMI();
var BB = Barman.calculateBMI();
console.log(SB,BB);

///////add a method to each object to calculate BMI
//////log into thew console who has the biggest BMI

function showMeBmi(){
    if(SB > BB ){
        console.log(Sboniso.firstName + " have a BMI of  " + SB + " which is greater than that of " + Barman.firstName);
    }else if(BB > SB){
        console.log(Barman.firstName + " have a BMI of  " + BB + " which is greater than that of " + Sboniso.firstName);
    }else {
        console.log("well both of their BMIs are equal");
    }
}
showMeBmi();

console.log(Sboniso);
console.log(Barman);

//////////////////NEW PROJECT 
////////////////// GET DATA FROM THE INPUTS
var mass = document.querySelector(".mass");
var height = document.querySelector(".height");


document.getElementById("mass").addEventListener("click", function(){

    var myMass = mass.value;
    console.log(myMass);

     mass.value = "";

        document.getElementById("height").addEventListener("click", function(){
            var result = document.querySelector(".results");

            var myHeight = height.value;
            console.log(myHeight);
    
             height.value = "";

             ////////////////// STORE THIS INFORMATION FROM THE EMPTY OBJECT
                   var Person = {
                        mass: myMass,
                        height: myHeight,
                        ////////////////// CREATE A METHOD TO CALCULATE THIS BMI
                        calculateBMI: function(){
                        return bmi = this.mass/(this.height)*(this.height);
                        }
                    }
                    var firstPerson = Person.calculateBMI();
                    console.log(firstPerson);

                    var myItem = document.createElement("li");
                    var myValue = document.createElement("h3");

                    myValue.innerHTML = firstPerson;
                    myItem.appendChild(myValue);
                    result.appendChild(myItem);
    
    })
})
////////////////FUNCTION TO RETURN RESULTS AND DISPLAY THEM TO THE CONSOLE

/*
var classicCars = ["BMW", "Merc MCI25", "BenlyCooper", "Roll Royce"];

for(i=0; i<classicCars.length;  i++){
    console.log(classicCars[i]);
}*/


var mass = document.querySelector(".right__mass");
var height = document.querySelector(".right__height");
var results = document.querySelector(".results");

document.getElementById("right__massBtn").addEventListener("click", function(){
              
    var myMass = mass.value;
    
    mass.value = "";

    document.getElementById("right__heightBtn").addEventListener("click", function(){
        var myHeight = height.value;


        function calculateBmi(){
                return  myResults = myMass/(myHeight)*(myHeight);
          }
          calculateBmi();
  
          var output = myResults;
          
          var myList = document.querySelector(".list");
          var myItem = document.createElement("li");
          var myInput = document.createElement("p");
  
          myInput.innerHTML = output;
          myItem.appendChild(myInput);
          myList.appendChild(myItem);
  
  
          height.value = "";

          document.querySelector("li").style.listStyleType = "none";

        



    });

});
