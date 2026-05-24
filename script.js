// countdown timer
function startCountdown() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);
  targetDate.setHours(0, 0, 0, 0);

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }

  // Update immediately
  updateCountdown();

  // Update every second
  setInterval(updateCountdown, 1000);
}

// load page
document.addEventListener('DOMContentLoaded', function () {
  startCountdown();
});

cursor = document.querySelector(".cursor")
body = document.querySelector("body")

body.addEventListener("mousemove",(e) =>{
  cursor.style.left = e.clientX - 5 + "px";
  cursor.style.top = e.clientY - 5 + "px";
})






hero1 = document.querySelector("#hero-op")
text1 = hero1.textContent
hero1.innerHTML = ""
for(let i = 0; i < text1.length; i++){
  setTimeout(() => {
    hero1.innerHTML += text1[i];
  }, 10 + i * 50);
}
hero2 = document.querySelector("#hero-op2")
text2 = hero2.textContent
hero2.innerHTML = ""
setTimeout(() => {
    for(let i = 0; i < text2.length; i++){
      setTimeout(() => {
        hero2.innerHTML += text2[i];
      }, 10 + i * 50);
    }
}, 2000);
