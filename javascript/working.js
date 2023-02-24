let start = document.getElementById("buttons--start");
let pause = document.getElementById("buttons--pause");
let reset = document.getElementById("buttons--reset");
let interval = document.getElementById("buttons--interval");
let display = document.getElementById("timer-display");
let intervaldisplay = document.getElementById("interval");
let seconds=0, minutes=0,hours=0,count=0;
let counttimer=false;


// start button
start.addEventListener("click", (e) =>{
    counttimer = true;
    stopwatch();
});

// main function
function stopwatch(){
    if (counttimer) {
        count++;
        if (count == 100) {
            seconds ++;
            count = 0;   
        }
        if(seconds == 60){
            minutes++;
            seconds = 0;
        }
        if(minutes == 60){
        hours++;
        minutes = 0;
        seconds = 0;
        }
        display.innerHTML = `${hours}:${minutes}:${seconds}:${count}`;
        console.log(1);
        setTimeout(stopwatch,10);
    }
}

// pause button
pause.addEventListener('click', function(){
    counttimer = false;
});

// reset button
reset.addEventListener('click', function () {
    counttimer = false;
    count = 0;
    seconds =0;
    minutes =0;
    hours = 0;
    display.innerHTML = "00:00:00:00";
    intervaldisplay.innerHTML = "";

});

// interval button
interval.addEventListener('click', function(){
    intervaldisplay.innerHTML += `<div class="timeinterval">${display.innerHTML}</div>`;
});