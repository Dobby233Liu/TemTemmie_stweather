
try{
if (typeof(Storage) !== "undefined") {
    var user=localStorage.getItem("username");
    if (user != "") {
        alert("welcome to stweather " + user);
    } else {
       user = prompt("welcome to stweather. enter your username");
       if (user != ""||user != null) {
           localStorage.setItem("username",user)
       }
    }
}else{alert("error")}}catch(e){alert(e)}

