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
  }
}



function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

// Adding a new post for the user
function addPost(){
  var title = document.getElementById("submitPostForm").title.value;
  var content = document.getElementById("submitPostForm").content.value;

  if (title === "" || content === ""){
    window.alert("Please ensure that you complete both fields before submitting a post.");
  }else{
    var data = {
      post_title: title,
      post_content: content
    }
    var jsonData = JSON.stringify(data);
    return jsonData;
  }

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

// Searching for users with the exact name in the seacrh bar
function userSearch(){
  var user;
  var user = document.getElementById("searchForm").search.value;
  window.alert("Searching for user with name of " + user);
}

// Function called when the user is updating their bio
function updateInfo(){
  var name, bio, gender, occupation, age;

    name = document.getElementById("userInfoForm").name.value;
    window.alert(name + " is the name");
    bio = document.getElementById("userInfoForm").blog_bio.value;
    gender = document.getElementById("userInfoForm").gender.value;
    occupation = document.getElementById("occupation").occupation.value;
    age = document.getElementById("age").age.value;


  window.alert("Profile updated.");
}
