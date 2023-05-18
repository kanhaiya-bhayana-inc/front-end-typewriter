let currentCharIndex = 0;
let timerId;
const content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus error animi iure ipsa repellat corrupti ad. Reiciendis architecto, velit, iusto fuga consequatur vel porro, veniam esse adipisci inventore magnam animi?`;


function displayDate(){
    var x = document.getElementById("dateField").value;
    document.getElementById("displayDateResponse").innerHTML = x;
}

function displayCard(name){
  let userName = document.getElementById('userName');
  let designation = document.getElementById('designation');

  switch(name){
    case 'anuj':
      userName = "Anuj";
      designation = "Manager"
      break;
      case 'kartik':
      userName = "Karitk";
      designation = "Tech Lead"
      break;
      case 'kanhaiya':
        userName = "Kanhaiya";
        designation = "Intern Fresher"
        break;
      }
      document.getElementById('userName').innerText = userName;
      document.getElementById('designation').innerText = designation;
      startTypewriter();
 
  
}

function typeCharacter() {
  const typewriterElement = document.getElementById("description");
  typewriterElement.textContent += content[currentCharIndex];
  currentCharIndex++;

  if (currentCharIndex < content.length) {
    timerId = setTimeout(typeCharacter, 100); // Adjust typing speed here (in milliseconds)
  }
}

function startTypewriter() {
  clearTimeout(timerId);
  currentCharIndex = 0;
  document.getElementById("description").textContent = "";
  typeCharacter();
}