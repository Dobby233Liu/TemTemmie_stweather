
function checkCookie() {
    var user=docCookies.getItem("username")
    if (user != null) {
        alert("welcome to stweather " + user);
    } else {
       user = prompt("welcome to stweather. enter your username","");
       if (user != "" || user != null) {
           docCookies.setItem("username",user);
       }
    }
}
checkCookie()
