const container=document.querySelector('.counter');
const buttonDiv=document.querySelector('.buttons');
const secInput=document.getElementById('seconds');

var seconds;
var remseconds;
var minuts;
var toCount=false;

remove("reset");

function toSubmit(){
    display('start');
    remove('seconds');
    remove('ok');
    remove("reset");
    seconds=Number(secInput.value)
    counting();
}

function display(e){
    document.getElementById(e).style.display='inline';
}

function remove(e){
    document.getElementById(e).style.display='none';
}

function check(stat){
    toCount=stat.value;
    if(stat.id == "start"){
        display("stop");                             
        remove("start");    
        remove("reset")
    }
    else if(stat.id == "stop"){
        display("continue");
        remove("stop");
        remove("reset")
    }
    else{
        display("stop");
        remove("continue");
        remove("reset");
    }
}

function count(){
    if (seconds > 0){
        if(toCount == true){
            seconds--;
            remseconds=seconds % 60;
            minuts=Math.floor(seconds / 60);
    
            if(minuts < 10){
                minuts = "0" + minuts;
            }

            if(remseconds < 10){
               remseconds = "0" + remseconds;
            }

            container.innerHTML= minuts+":" + remseconds;
        }
    }
    else{
        container.innerHTML="DONE!";
        remove("stop");
        display("reset");
        var myMusic= document.getElementById("music");
        myMusic.play();
    }
}


function counting(){
    remseconds=seconds % 60;
    minuts=Math.floor(seconds / 60);
    
    if(minuts < 10){
        minuts = "0" + minuts;
    }

    if(remseconds < 10){
        remseconds = "0" + remseconds;
    }


    container.innerHTML=minuts+":" + remseconds;
    setInterval(count, 1000);
}

function timerActivatedInUrl(){
    history.replaceState({page: 2}, "Timer actiavted", "?timer_activated=true");
}

function timerDeactivatedInUrl(){
    history.replaceState({page: 1}, "Timer Deactivated", "?timer_activated=false");
}
