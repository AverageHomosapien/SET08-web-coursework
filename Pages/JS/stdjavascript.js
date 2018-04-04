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
}

function signup(){
  window.alert("signup pressed");
}
