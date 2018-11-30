const Eris = require("eris");
var x5bzteam = new Eris(process.env.BOT_TOKEN);
x5bzteam.on("ready", () => {
    console.log("The Bot CMD Developerment By, Rqmz Huxa");
    onstart();
});
x5bz = "505804537097879552";
nick = "! ʚɞ ᴿQᴹᶻ | Huxa ʚɞ";
function onstart(){
    var v1 = nick.split('');
    var counter;
    var i=0;
var x5bz2 = ' ';
  var x5bz3 =   setInterval(function(){
     
     if (i == v1.length){
     clearInterval(x5bz3);
     onstart()
      return;
     }
     var v2 = v1[i];
    x5bz2 += v2;
    x5bzteam.editNickname(x5bz, x5bz2);
 
        i++;
   
     }, 1000);
}
x5bzteam.connect();
