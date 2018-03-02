
try{
if (typeof(Storage) !== "undefined") {
    var user=localStorage.getItem("username");
    if (user!=null) {
        alert("welcome to stweather " + user);
    } else {
       user = prompt("welcome to stweather. enter your username");
       if (user != ""||user != null) {
           localStorage.setItem("username",user)
       }else{throw new Error("empty user name")}
    }
}else{throw new Error("localStorage not supported")}}catch(e){alert(e)}

