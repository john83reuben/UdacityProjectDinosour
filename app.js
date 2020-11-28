const button = document.getElementById("btn");
const name = document.getElementById("name");
const height = document.getElementById("feet");
const weight = document.getElementById("weight");
const diet =  document.getElementById("diet").value;
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
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "herbavor",
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

//Dinosaur prototype
Dinosaur.prototype.mix = function(dino){

    //const arrayItems = ['species','diet','where','when','fact','height','weight'];
    const arrayItems = ['diet','diet','diet','diet','diet','diet','diet'];
    const arrayItem = arrayItems[Math.floor(Math.random() * arrayItems.length)];
    
    return arrayItem;
}
Dinosaur.prototype.compareWeight = function(dinoWeight,dinoSpecies){

    humanWeight = getHumanData();
    //console.log(dinoWeight +  dinoSpecies);

    const weightRatio = (dinoWeight/humanWeight.weight).toFixed(1);
    //console.log(weightRatio);
    if(weightRatio > 1){
        return `${dinoSpecies} weighed ${(dinoWeight / humanWeight.weight).toFixed(1)} times more than you!`;
    } 
    if(weightRatio < 1){
        return `You weigh ${(humanWeight.weight / dinoWeight.weight).toFixed(1)} times more than ${dinoSpecies}!`;
    }
    return `You weigh the same as ${dinoSpecies}!`;

}

Dinosaur.prototype.compareHeight = function(dinoHeight,dinoSpecies){

    humanHeight = getHumanData();
    //console.log(dinoHeight +  dinoSpecies);

    const heightRatio = (dinoHeight/humanHeight.height).toFixed(1);
    //console.log(heightRatio);
    if(heightRatio > 1){
        return `${dinoHeight} was ${(dinoHeight / humanHeight.height).toFixed(1)} times taller than you!`;
    } 
    if(heightRatio < 1){
        return `You are ${(humanHeight.height / dinoHeight).toFixed(1)} times taller than ${dinoSpecies}!`;
    }
    return `You are the same height as ${dinoSpecies}!`;

}

Dinosaur.prototype.compareDiet = function(dinoDiet,dinoSpecies){

    const article = dinoDiet === 'omnivore' ? 'an' : 'a';
    humanDiet = getHumanData();
    console.log(humanDiet);

    if (humanDiet.diet === dinoDiet) {
        return `You are ${article} ${humanDiet.diet} and ${dinoSpecies} was too!`;
    } else {
        return `You are ${article} ${humanDiet.diet}, but ${dinoSpecies} was a ${dinoDiet}.`;
    }

}


// Assign the methods in the dinosaurPrototype to all objects created with Dinosaur Constructor
//Dinosaur.prototype = dinosaurMethods;

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
function getHumanData() {

    const humanData = {
        name: name.value,
        height: height.value,
        weight: weight.value,
        diet: diet.value
        
    };

    return humanData;
}

function createDiv(humanData,rawDino){

    
    const mergeData = [];
    for (let index = 0; index < (rawDino.length)/2 ; index++) {
        mergeData.push(rawDino[index]);

    }
    mergeData.push(humanData);

    for (let index = 4; index < rawDino.length; index++) {
        mergeData.push(rawDino[index]);

    }
    
    //console.log(mergeData);
    mergeData.forEach(myFunction);

    function myFunction(item,index){

        
        const newDiv = document.createElement('div');
        newDiv.classList.add("grid-item");
        // Checking if the object is for a human or not
        
        if(item.hasOwnProperty('name')) {
            console.log("humand detected")
            newDiv.innerHTML = `<h3>${item.name}</h3>
                                <img src="images/human.png" alt="image of human">`;
                                //<p>${item.name}</p>`;
        } else if(item.species === 'Pigeon') {
            newDiv.innerHTML = `<h3>${item.species}</h3>
                                <img src="images/${item.species.toLowerCase()}.png" alt="image of ${item.species}">
                                <p>${item.fact}</p>`;
                                
        } 
        else if (item.mix() === 'weight'){
            newDiv.innerHTML = `<h3>${item.species}</h3>
                                <img src="images/${item.species.toLowerCase()}.png" alt="image of ${item.species}">
                                <p>${item.compareWeight(item.weight,item.species)}</p>`;

        }
        else if (item.mix() === 'height'){
            newDiv.innerHTML = `<h3>${item.species}</h3>
                                <img src="images/${item.species.toLowerCase()}.png" alt="image of ${item.species}">
                                <p>${item.compareHeight(item.height,item.species)}</p>`;

        }
        else if (item.mix() === 'diet'){
            newDiv.innerHTML = `<h3>${item.species}</h3>
                                <img src="images/${item.species.toLowerCase()}.png" alt="image of ${item.species}">
                                <p>${item.compareDiet(item.diet,item.species)}</p>`;
        }

        else {
            newDiv.innerHTML = `<h3>${item.species}</h3>
                                <img src="images/${item.species.toLowerCase()}.png" alt="image of ${item.species}">
                                <p>${item[item.mix()]}</p>`;
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
function removeGrid(){
    grid.innerHTML = '';
    document.querySelector("button").remove();
}

function removeForm(){
    document.getElementById("dino-compare").remove();

}

function createButton(){

    parent = document.getElementById("parent");
    const btn = document.createElement("BUTTON");
    btn.setAttribute("id","btn" );
    btn.setAttribute("type","submit" );
    btn.innerHTML = "Compare Again";
    btn.addEventListener('click',compare);
    parent.appendChild(btn);
    
       
}

function clicked(e) {
    // Prevent default page reloading on submit
    e.preventDefault();
    
    const humanData = getHumanData();
    
    if (humanData.name === "") {
        alert('Name cannot be blank');
        
    } else if (humanData.height < 1) {
        alert('Height must be more than 0');
        
    } else if (humanData.weight < 1) {
        alert('Weight must be more than 0');
        
    }
     
      const dinosaurArray = createDinosaur()
      removeForm();
      
      const createElement = createDiv(humanData,dinosaurArray);
  
  }

button.addEventListener('click', clicked);

