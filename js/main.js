'use strict'
var myClock = function(){
    var clock = document.querySelector('h1');
    var time = new Date();
    var h = time.getHours().toString();
    var m = time.getMinutes().toString();
    var s = time.getSeconds().toString();

    if(h.length < 2){
        h = "0" + h;
    }

    if(m.length < 2){
        m = "0" + m;
    }

    if(s.length < 2){
        s = "0" + s;
    }


    clock.textContent  = h + ':' + m + ':' + s;
}

myClock();
setInterval(myClock,1000);

// user seitings 

var darkBackground = function(){
    var result = document.querySelector('body').classList.toggle('dark');
}

var title = document.querySelectorAll('h1');
for(var i = 0; i < title.length; i++){
    title[i].addEventListener('click',darkBackground)
}