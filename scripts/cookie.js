


    var user=localStorage.username;
    if (user != "") {
        alert("welcome to stweather " + user);
    } else {
       user = prompt("welcome to stweather. enter your username","");
       if (user != "" && user != null) {
           localStorage.username=user
       }
    }


