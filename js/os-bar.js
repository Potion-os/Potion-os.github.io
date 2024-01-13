function getTime() {
    const now = new Date();
    let currentTime = now.toLocaleTimeString();
    document.querySelector("#clock-time").textContent = currentTime;
  }
  function getDate() {
    const now = new Date();
    let currentDate = now.toLocaleDateString();
    document.querySelector("#clock-date").textContent = currentDate;
  }
  setInterval(getTime, 1000);
  setInterval(getDate, 1000);