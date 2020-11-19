
const button = document.getElementById("btn");
const name = document.getElementById("name");
const height = document.getElementById("feet");
const weight = document.getElementById("weight");
const diet =  document.getElementById("diet").value;

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
function getHumanData() {

    const humanData = {
        name: name.value,
        height: height.value,
        weight: weight.value,
        diet: diet.value
        
    };

    return humanData;
}
// function createDiv(humanData,rawDino){

//     document.getElementById("dino-compare").remove();
//     let newHumanData = [];
//     newHumanData.push(humanData);

//     rawDino.forEach(myFunction);

//     function myFunction(item,index){

        
//         let grid = document.getElementById("grid");
//         const newDiv = document.createElement('div');
//         newDiv.classList.add("grid-item");
//         if (index === 3) {
//             newDiv.innerHTML = `<h3>${newHumanData.name}</h3><img src="images/human.png" alt="image of human"><p>${newHumanData.name}</p>`;
//             return true;
//         }
//         newDiv.innerHTML = `<h3>${rawDino[index].species}</h3><img src="images/${rawDino[index].species.toLowerCase()}.png" alt="image of ${rawDino[index].species}"><p>${rawDino[index].fact}</p>`;


//         grid.appendChild(newDiv);

        
//     }

// }
function createDiv(humanData,rawDino){

    document.getElementById("dino-compare").remove();


    let mergeData;
    mergeData = rawDino.concat(humanData);
    

    console.log(rawDino);
    console.log(humanData);
    console.log(mergeData);

    // for(let index=0; index < mergeData.length ; index++){
    //         let grid = document.getElementById("grid");
    //         const newDiv = document.createElement('div');
    //         newDiv.classList.add("grid-item");
    //         if (index === 3) {
    //             newDiv.innerHTML = `<h3>${mergeData[index].name}</h3><img src="images/human.png" alt="image of human"><p>${mergeData[index].name}</p>`;
    //             continue;
    //         }
    //         newDiv.innerHTML = `<h3>${mergeData[index].species}</h3><img src="images/${mergeData[index].species.toLowerCase()}.png" alt="image of ${mergeData[index].species}"><p>${mergeData[index].fact}</p>`;
    //         grid.appendChild(newDiv);


    // }

    rawDino.forEach(myFunction);

    function myFunction(item,index){

        
        let grid = document.getElementById("grid");
        const newDiv = document.createElement('div');
        newDiv.classList.add("grid-item");
        if (index === 3) {
            newDiv.innerHTML = `<h3>${mergeData.name}</h3><img src="images/human.png" alt="image of human"><p>${mergeData.name}</p>`;
            return true;
        }
        newDiv.innerHTML = `<h3>${mergeData[index].species}</h3><img src="images/${mergeData[index].species.toLowerCase()}.png" alt="image of ${mergeData[index].species}"><p>${mergeData[index].fact}</p>`;


        grid.appendChild(newDiv);

        
    }
    

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
   
    const rawDino =  rawDinoData();
    //console.log(rawDino);
    const createElement = createDiv(humanData,rawDino);

}

button.addEventListener('click', clicked);


