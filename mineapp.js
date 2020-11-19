const button = document.getElementById("btn");
const name = document.getElementById("name");
const height = document.getElementById("feet");
const weight = document.getElementById("weight");

function clicked(e) {
  // Prevent default page reloading on submit
  e.preventDefault();
  console.log("john");

  if (name.value === "") {
      alert('Name cannot be blank');
      
  } else if (height.value < 1) {
      alert('Height must be more than 0');
      
  } else if (weight.value < 1) {
      alert('Weight must be more than 0');
      
  }
}
button.addEventListener('click', clicked);


