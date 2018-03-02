function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString()
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
 
//<meta content="width=device-width,initial-scale=1,maximum-scale=1" name="viewport"><meta content="telephone=no" name="format-detection">   return "";
}

function checkCookie() {
    var user=localStorage.username;
    if (user != "") {
        alert("welcome to stweather " + user);
    } else {
       user = prompt("welcome to stweather. enter your username","");
       if (user != "" && user != null) {
           localStorage.username=user
       }
    }
}
checkCookie()
