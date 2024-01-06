const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const segsEl = document.getElementById("segs");

const newYears = "10 Fev 2024"

function countDown(){

    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate.getSeconds() - currentDate.getSeconds()) / 1000
    

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60)  % 60;
    const segs = Math.floor(totalSeconds) % 60;
    console.log(totalSeconds);
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML =  formatTime(mins);
    segsEl.innerHTML =  formatTime(segs);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time 
}

countDown();

setInterval(countDown, 1000);

