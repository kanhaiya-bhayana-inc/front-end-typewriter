function displayDate(){
    var x = document.getElementById("dateField").value;
    document.getElementById("displayDateResponse").innerHTML = x;
}

function displayCard(name){
  let userName = document.getElementById('userName');
  let designation = document.getElementById('designation');
  let description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis veltemporetotam tenetur in debitis suscipit nulla nostrum ex, modi commodi earum nesciunt nobis, sint labore perferendis cupiditate sed rerum.";
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
  document.getElementById('description').innerText =description;
  typeWriter(description);
}
