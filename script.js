//Timer 
let interval;
let countdownTime = 0;
let running = false;

function updateTimerDisplay() {
  let totalMilliseconds = countdownTime;
  let hours = String(Math.floor(totalMilliseconds / 3600000)).padStart(2, '0');
  let minutes = String(Math.floor((totalMilliseconds % 3600000) / 60000)).padStart(2, '0');
  let seconds = String(Math.floor((totalMilliseconds % 60000) / 1000)).padStart(2, '0');
  let milliseconds = String(Math.floor((totalMilliseconds % 1000) / 10)).padStart(2, '0'); // Adjusted for visibility

  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
  document.getElementById('milliseconds').textContent = milliseconds; // Ensure two digits are shown
}

function setTimer() {
  let inputHours = prompt("Set hours:", "0") || "0";
  let inputMinutes = prompt("Set minutes:", "0") || "0";
  countdownTime = (+inputHours * 3600 + +inputMinutes * 60) * 1000;
  updateTimerDisplay();
}

document.getElementById('hours').addEventListener('click', setTimer);
document.getElementById('minutes').addEventListener('click', setTimer);
//start button
document.getElementById('startBtn').addEventListener('click', () => {
  if (!running && countdownTime > 0) {
    running = true;
    document.getElementById('pauseBtn').disabled = false;
    interval = setInterval(() => {
      countdownTime -= 10;
      if (countdownTime <= 0) {
        clearInterval(interval);
        countdownTime = 0;
        running = false;
        document.getElementById('pauseBtn').disabled = true;

      }
      updateTimerDisplay();
    }, 10);
  }
});
//pause button
document.getElementById('pauseBtn').addEventListener('click', () => {
  if (running) {
    clearInterval(interval);
    running = false;
    document.getElementById('pauseBtn').disabled = true;
  }
});
//clear button
document.getElementById('clearBtn').addEventListener('click', () => {
  clearInterval(interval);
  countdownTime = 0;
  running = false;
  document.getElementById('pauseBtn').disabled = true;
  updateTimerDisplay();
});

//star background
document.addEventListener("DOMContentLoaded", function() {
  function getDocumentHeight() {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(
      body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight
    );
  }

  // generate stars
  function generateStars() {
    const container = document.querySelector('body');
    const numberOfStars = Math.floor(getDocumentHeight() / 10); // Example ratio, adjust as needed


    document.querySelectorAll('.star2').forEach(star => star.remove());

    for (let i = 0; i < numberOfStars; i++) {
      let star = document.createElement('div');
      let size = Math.random() * 3 + 1;
      let isPulsing = Math.random() > 0.75;

      star.className = 'star2';
      if (isPulsing) star.classList.add('pulsing-star');

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * window.innerWidth}px`;
      star.style.top = `${Math.random() * getDocumentHeight()}px`;

      container.appendChild(star);
    }
  }


  generateStars();


  window.addEventListener('resize', generateStars);
});

window.addEventListener('resize', addMoreStarsIfNeeded);

function addMoreStarsIfNeeded() {
  const docWidth = document.documentElement.scrollWidth;
  const docHeight = document.documentElement.scrollHeight;
  generateStars(docWidth, docHeight);
}


//moving rocket and astro
document.addEventListener("DOMContentLoaded", function() {
  const moveElements = () => {
    const vpWidth = window.innerWidth;
    const vpHeight = window.innerHeight;

    const moveElementWithinBounds = (element, deltaX, deltaY) => {
      const rect = element.getBoundingClientRect();
      let newX = rect.left + deltaX;
      let newY = rect.top + deltaY;


      if (newX < 0 || newX + rect.width > vpWidth) {
        deltaX *= -1;
      }
      if (newY < 0 || newY + rect.height > vpHeight) {
        deltaY *= -1;
      }

      element.style.transform = `translate(${newX}px, ${newY}px)`;
      requestAnimationFrame(() => moveElementWithinBounds(element, deltaX, deltaY));
    };


    const astronaut = document.querySelector('.astro-container');
    const spaceship = document.querySelector('.rocket-container');
    moveElementWithinBounds(astronaut, Math.random() * 4 - 2, Math.random() * 4 - 2); // Random speed between -2px and 2px
    moveElementWithinBounds(spaceship, Math.random() * 4 - 2, Math.random() * 4 - 2); // Random speed between -2px and 2px
  };

  moveElements();
});

document.addEventListener('DOMContentLoaded', function() {
  // Target buttons with 'btn-success' class for video switching
  const videoButtons = document.querySelectorAll('.btn-success');

  videoButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default action
      const newVideoSource = this.getAttribute('data-video');
      const iframe = document.getElementById('videoPlayer');
      if (iframe) { // Check if the iframe exists
        console.log('Changing source to:', newVideoSource);
        iframe.src = newVideoSource;
      }
    });
  });
});