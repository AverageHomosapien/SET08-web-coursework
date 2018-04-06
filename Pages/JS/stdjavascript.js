var loggedIn = false;

// Get the modal
var loginModal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == loginModal) {
        modal.style.display = "none";
    }
}

function login(){
  window.alert("login pressed");

// FOREACH VALUE IN THE JSON FILE (CHECK THROUGH EACH SIGNED UP USER ALREADY)
  if (form.username.value == "VALUE" && form.username.value == "VALUE"){
    loggedIn = true;
  }

  // after FOREACH
  if (!loggedIn){
    window.alert("Please ensure you enter the correct username and password.");
  }else{
    window.alert("Login successful. Redirecting...");
  }
}

function signup(){
  window.alert("signup pressed");

  // check that it's not already a login
  // if it's not a set of log in details already then
    // Check to see if password and re-entered passwords are the same
    // if they are then set new user && save to FILE
    // Else, complain to the user
}
