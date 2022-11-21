var inputName = document.getElementById("name")
var btnCriar = document.getElementById("btncriar")


var userPhoto = document.getElementById("userphoto")
var userName = document.getElementById("username")
var userLocation =  document.getElementById("userlocation")
var userBio =  document.getElementById("userbio")
var userLink =  document.getElementById("userlink")




 
btnCriar. addEventListener("click", ()=>{
    fetch(`https://api.github.com/users/${inputName.value}`)
    .then((response) => response.json())
.then((data) => { 
    userPhoto.setAttribute("src", data.avatar_url);
    userLink.setAttribute("href", data.html_url);
    userName.innerHTML = data.name;
    userBio.innerHTML = data.bio;
    userLocation.innerHTML = data.location;
    })
});