//const button = document.getElementById("btn");
const name = document.getElementById("name");
const height = document.getElementById("feet");
const weight = document.getElementById("weight");
const diet =  document.getElementById("diet");
let grid = document.getElementById("grid");


function rawDinoData() {
    const dinos = [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "herbivore",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivore",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbivore",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbivore",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbivore",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivore",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivore",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "herbivore",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs."
        }
    ]
    return dinos;
    
}

//Dinosaur Constructor 
function Dinosaur(dino){

    this.species = dino.species;
    this.diet = dino.diet;
    this.where = dino.where;
    this.when = dino.when;
    this.fact = dino.fact;
    this.height = dino.height;
    this.weight = dino.weight;

}
//Dinosaur prototype: Method to return random arrayItem
Dinosaur.prototype.mix = function(dino){

    const arrayItems = ["height","weight","diet","where","when","fact"];
    //const arrayItems = ["diet"];
    const arrayItem = arrayItems[Math.floor(Math.random() * arrayItems.length)];
    
    return arrayItem;
}
//Dinosaur prototype
Dinosaur.prototype.compareWeight = function(dinoWeight,dinoSpecies){

    humanWeight = getHumanData();
    const weightRatio = (dinoWeight/humanWeight.weight).toFixed(1);
    
    if(weightRatio > 1){
        return `${dinoSpecies} weighed ${(dinoWeight / humanWeight.weight).toFixed(1)} times more than you!`;
    } 
    if(weightRatio < 1){
        return `You weigh ${(humanWeight.weight / dinoWeight).toFixed(1)} times more than ${dinoSpecies}!`;
    }
    return `You weigh the same as ${dinoSpecies}!`;

}

Dinosaur.prototype.compareHeight = function(dinoHeight,dinoSpecies){

    humanHeight = getHumanData();

    const heightRatio = (dinoHeight/humanHeight.height).toFixed(1);
    if(heightRatio > 1){
        return `${dinoHeight} was ${(dinoHeight / humanHeight.height).toFixed(1)} times taller than you!`;
    } 
    if(heightRatio < 1){
        return `You are ${(humanHeight.height / dinoHeight).toFixed(1)} times taller than ${dinoSpecies}!`;
    }
    return `You are the same height as ${dinoSpecies}!`;

}

Dinosaur.prototype.compareDiet = function(dinoDiet,dinoSpecies){
    
    humanDiet = getHumanData();
    const article = humanDiet.diet === "Omnivor" ? "an" : "a";
    
    if (humanDiet.diet.toLowerCase() === dinoDiet) {
        return `You are ${article} ${humanDiet.diet} and ${dinoSpecies} was too!`;
    } else {
        return `You are ${article} ${humanDiet.diet}, but ${dinoSpecies} was a ${dinoDiet}.`;
    }
}

// Create Dino Object
function createDinosaur(){
    const rawDino =  rawDinoData();
    const dinosaurArray = [];
    
    

    rawDino.forEach(function (dino){
        dinoObj = new Dinosaur(dino);
        dinosaurArray.push(dinoObj);
        
    })
    
    return dinosaurArray.sort(() => Math.random() - 0.5);

}
// Function to get Human Data
function getHumanData() {

    const humanData = {
        name: name.value,
        height: height.value,
        weight: weight.value,
        diet: diet.value
        
    };

    return humanData;
}
// Function to create Compare Again button in the grid screen
function createButton(){

    parent = document.getElementById("parent");
    const btn = document.createElement("BUTTON");
    btn.setAttribute("id","btn" );
    btn.setAttribute("type","submit" );
    btn.innerHTML = "Compare Again";
    btn.addEventListener("click",compare);
    parent.appendChild(btn);
    
       
}
// Function to create Grid image tiles
function createImg(species){

    const newDiv = document.createElement("h3");
    newDiv.textContent = species;
    const newText = document.createElement("img");
    newText.setAttribute("src", "images/"+species.toLowerCase()+".png");
    newText.setAttribute("alt", "image of "+ species);
    newDiv.append(newText);
    
    return newDiv;

}
//Function to create Paragraph element to describe the Dinosour 
function createP(newContent){

    const addParagraph = document.createElement("p");
    addParagraph.appendChild(newContent);

    return addParagraph;

}
//Generate Tiles for each Dino in Array
function createDiv(humanData,rawDino){

    
    const mergeData = [];
    for (let index = 0; index < (rawDino.length)/2 ; index++) {
        mergeData.push(rawDino[index]);

    }
    mergeData.push(humanData);

    for (let index = 4; index < rawDino.length; index++) {
        mergeData.push(rawDino[index]);

    }
    mergeData.forEach(myLogic);
   

    function myLogic(item,index){
        const details = item.mix && item.mix();
        

        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-item");
       
        // Checking if the object is for a human or not
        if(item.hasOwnProperty("name")) {
            
            newDiv.innerHTML = `<h3>${item.name}</h3>
                                <img src="images/human.png" alt="image of human">`;
                                
        } 
        else if (item.species === "Pigeon"){

            newDiv.appendChild(createImg(item.species));
            const newContent = document.createTextNode(item.fact);
            newDiv.append(createP(newContent));
            
        }
        else if (details === "weight"){

            newDiv.appendChild(createImg(item.species));
            const newContent = document.createTextNode(item.compareWeight(item.weight,item.species));
            newDiv.append(createP(newContent));
            

        }
        else if (details === "height"){

            newDiv.appendChild(createImg(item.species));
            const newContent = document.createTextNode(item.compareHeight(item.height,item.species));
            newDiv.append(createP(newContent));
            

        }
        else if (details === "diet"){

            dinoDiet = item.diet.toLowerCase();
            newDiv.appendChild(createImg(item.species));
            const newContent = document.createTextNode(item.compareDiet(dinoDiet,item.species));
            newDiv.append(createP(newContent));
            
        }
        else {

            newDiv.appendChild(createImg(item.species));
            const newContent = document.createTextNode(item[details]);
            newDiv.append(createP(newContent));
            
        }

        grid.appendChild(newDiv);
        

    } 
    createButton();
}


function compare(e){
    const humanData = getHumanData();
    const dinosaurArray = createDinosaur()
    removeGrid();
    const createElement = createDiv(humanData,dinosaurArray);
    
}
// Remove the button
function removeGrid(){
    grid.innerHTML = "";
    document.querySelector("button").remove();
}

// Remove form from screen
function removeForm(){
    document.getElementById("dino-compare").remove();

}
// Called when the user clicks the submit button, this programs calls the other parts of the sequence
function clicked(e) {
    // Prevent default page reloading on submit
    e.preventDefault();
    
    const humanData = getHumanData();
    
    if (humanData.name === "") {
        alert("Name cannot be blank");
        return;
        
    } else if (humanData.height < 1) {
        alert("Height must be more than 0");
        return;
        
    } else if (humanData.weight < 1) {
        alert("Weight must be more than 0");
        return;
        
    }
     
      const dinosaurArray = createDinosaur()
      removeForm();
      
      const createElement = createDiv(humanData,dinosaurArray);
  
  }

//IIFE to attach the event listeners on the buttons
(function () {
    document.getElementById("btn").addEventListener("click", clicked);
})();
