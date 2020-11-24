
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

}

//Dinosaur prototype
// Dinosaur.prototype.mix = function(dino){

//      const items = ['species','diet','where','when','fact'];
//      const item = items[Math.floor(Math.random()*items.length)];
//      //console.log(item);

//     // step one : newArray = [store all Dinosaur key properties only];
//     // step two : use Math.random() function on newArray and set it to variable
    
//     //step three : return the variable, so that i can use the value returned in createDiv function in the innerHTML section
//     //console.log(Object.keys(this.species));
//     console.log(item);
//     //return "diet";

// }


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

    const arrayItems = ['species','diet','where','when','fact'];
    //const arrayItem = arrayItems[Math.floor(Math.random() * arrayItems.length)];
    const arrayItem = 'when';


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
                                
        } else {
            newDiv.innerHTML = `<h3>${item.species}</h3>
                                <img src="images/${item.species.toLowerCase()}.png" alt="image of ${item.species}">
                                <p>${item.arrayItem}</p>`;
                                // <p>${arrayItem}</p>`;

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



