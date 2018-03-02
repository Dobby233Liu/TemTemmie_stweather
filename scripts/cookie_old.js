
function checkCookie() {
    if(docCookies.hasItem("username")){
    var user=docCookies.getItem("username")
    
    alert("welcome to stweather " + user);
    } else {
       var promp= prompt("welcome to stweather. enter your username","");
       if (promp != "" || promp != null) {
           docCookies.setItem("username",promp);
       }
    
}
checkCookie()
