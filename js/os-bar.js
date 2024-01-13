const now = new Date();

function getTime(){
    let currentTime = now.toLocaleTimeString();
    document.querySelector('#clock-time').textContent = currentTime;
}

function getDate(){
    let currentDate = now.toLocaleDateString();
    document.querySelector('#clock-date').textContent = currentDate;
}

setInterval(getTime, 1000);
setInterval(getDate, 1000);
