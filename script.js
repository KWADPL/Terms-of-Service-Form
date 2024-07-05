let selectBool = true;
let firstNameBool = true;
let lastNameBool = true;
let checkBool = true;
let termsBool = true;
let notificationExists = false;
const notification = document.getElementById("notification");

function getValue(){
  const selectResult = document.getElementById("select-value").value;
  document.getElementById("employment-status").innerHTML = `Please select employment status: ${selectResult}`;
  document.getElementById("employment-status").style.color = "#62d76b";
}

function getFirstName(e){
  document.getElementById("first-name").innerHTML = `Enter first name: ${e.currentTarget.firstname.value}`;
  document.getElementById("first-name").style.color = "#62d76b";
}

function getLastName(e){
  document.getElementById("last-name").innerHTML = `Enter last name: ${e.currentTarget.lastname.value}`;
  document.getElementById("last-name").style.color = "#62d76b";
}

function getCheckValue(){
  document.getElementById("question").style.color = "#62d76b";
}

function completeTerms(){
  document.getElementById("terms-header").style.color = "#62d76b";
}

function submit(){
  notification.innerHTML = "Your submission is complete, you may now close the browser.";
  notification.style.color = "#62d76b";
}