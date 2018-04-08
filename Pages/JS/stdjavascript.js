module.exports ={

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
  var user, password, password_repeat;

  var user = document.getElementById("signupForm").username.value;
  var psw = document.getElementById("signupForm").psw.value;
  var password_repeat = document.getElementById("signupForm").psw_repeat.value;

  var formData = $("signupForm.username")

  window.alert("program actually working");
  // Working now
  if (psw !== password_repeat){
    window.alert("Please ensure that both passwords are the same");
  } else {
    var data = {
      username: user,
      password: psw
    }

    var jsonData = JSON.stringify(data);
    download(jsonData, 'json.txt', 'text/plain');
  }

  // check that it's not already a login
  // if it's not a set of log in details already then
    // Check to see if password and re-entered passwords are the same
    // if they are then set new user && save to FILE
    // Else, complain more than I am right now
}

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function addPost(){
  window.alert('add post');
}

function newPost(){
  window.alert('new post');
}

function updateProfilePicture(){
  window.alert('Profile Picture Updated');


}

function userLoggedIn(){
  var url = require('../server.js');
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
}

function edit_post(){
  window.alert("EDIT POST");
}

/*
// Function called when the user is updating their bio
function updateInfo(firstTime){
  var name, bio, gender, occupation, age;
  if (firstTime === "true"){

    var name = document.getElementById("userInfoForm").name.value;
    var bio = document.getElementById("userInfoForm").blog_bio.value;
    var gender = document.getElementById("userInfoForm").gender.value;
    var occupation = document.getElementById("occupation").occupation.value;
    var age = document.getElementById("age").age.value;

    if (name === "" || bio === "" || gender === "" ||| occupation === "" || age === ""){
      window.alert("Please ensure that you update all of your profile information.")
      return false;
    }
  }

  window.alert("name");

  window.alert("Profile updated.");
}
*/
