
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
                alert('Timer finished!');
            }
            updateTimerDisplay();
        }, 10); 
    }
});

document.getElementById('pauseBtn').addEventListener('click', () => {
    if (running) {
        clearInterval(interval);
        running = false;
        document.getElementById('pauseBtn').disabled = true;
    }
});

document.getElementById('clearBtn').addEventListener('click', () => {
    clearInterval(interval);
    countdownTime = 0;
    running = false;
    document.getElementById('pauseBtn').disabled = true;
    updateTimerDisplay();
});

document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector('body'); 
  const numberOfStars = 200; 

  for (let i = 0; i < numberOfStars; i++) {
    let star = document.createElement('div');
    let size = Math.random() * 3 + 1; 
    let isPulsing = Math.random() > 0.75;


    star.className = 'star2';
    if (isPulsing) {
      star.classList.add('pulsing-star');
    }

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    container.appendChild(star);
  }
});

document.addEventListener("DOMContentLoaded", function() {
    const songs = [
    { spotifyUrl: "https://open.spotify.com/track/22I3h5AOENlH4CqXJsEbFR?si=0c6cf7aefe694e93", albumArt: "songCovers/collide.jpg", name: "Collide - Justine Skye, Tyga" }, //e
    { spotifyUrl: "https://open.spotify.com/track/5mjYQaktjmjcMKcUIcqz4s?si=8e7e35cc74a240ef", albumArt: "songCovers/strangers.jpg", name: "Strangers - Kenya Grace" },
    { spotifyUrl: "https://open.spotify.com/track/0DiWol3AO6WpXZgp0goxAV?si=ebf3d45473fc4647", albumArt: "songCovers/onemoretime.jpg", name: "One More Time - Daft Punk" },
    { spotifyUrl: "https://open.spotify.com/track/664gdARxaClFsoF5SXKOws?si=dc95f8060d7440de", albumArt: "songCovers/here.jpg", name: "Here - Alessia Cara" },
    { spotifyUrl: "https://open.spotify.com/track/5o1mS67lEoLCeFobGIaNb2?si=9f12f53e117945d0", albumArt: "songCovers/here.jpg", name: "Here - Alessia Cara" },
    //   { spotifyUrl: "https://open.spotify.com/track/211apnzqBdvi4A5SjL0Mzp?si=dcad29ea8fa740a4", albumArt: "songCovers/reckless.png", name: "Reckless - Gryffin, MØ " },
    //   { spotifyUrl: "https://open.spotify.com/track/4xLDWc1ymSHUhPUIoAcH8P?si=41c8dcb331a441c1", albumArt: "songCovers/loveinruins.jpg", name: "Love In Ruins - Gryffin" },
    //   { spotifyUrl: "https://open.spotify.com/track/65n4DkUhKUO4tECIabKwy1?si=a67712f50c914090", albumArt: "songCovers/hurricane.jpg", name: "Hurricane - Halsey, Arty" },
    

    //   { spotifyUrl: "", albumArt: "songCovers/", name: "" },
    //   { spotifyUrl: "", albumArt: "songCovers/", name: "" },
    //   { spotifyUrl: "", albumArt: "songCovers/", name: "" },
    //   { spotifyUrl: "", albumArt: "songCovers/", name: "" },

    ];
  
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
      
      function shuffleSongs() {
        shuffleArray(songs); // Shuffle the songs array
    
        // Update the UI with shuffled songs
        for (let i = 1; i <= 3; i++) {
          const songEl = document.getElementById(`song${i}`);
          songEl.href = songs[i-1].spotifyUrl;
          songEl.children[0].src = songs[i-1].albumArt; // Assuming first child is the <img> element
          songEl.children[0].alt = `Album cover for ${songs[i-1].name}`;
          songEl.children[1].textContent = songs[i-1].name; // Assuming second child is the <p> element for the song name
        }
      }
      
      // Initial shuffle to display songs when page loads
      shuffleSongs();
    
      // Attach event listener to the shuffle button
      document.getElementById('shuffleBtn').addEventListener('click', shuffleSongs);
      
    });
  
  document.addEventListener("DOMContentLoaded", function() {
  let dx = 0.1; // Change in position along X-axis
  let dy = 0.1; // Change in position along Y-axis
  const spaceTravelers = document.querySelector('.space-travelers');

  function moveElement() {
    const rect = spaceTravelers.getBoundingClientRect(); // Get current position
    let newX = rect.left + dx;
    let newY = rect.top + dy;

    // Check for right or left viewport boundary
    if (newX + rect.width > window.innerWidth || newX < 0) {
      dx = -dx; // Reverse direction on X-axis
    }

    // Check for bottom or top viewport boundary
    if (newY + rect.height > window.innerHeight || newY < 0) {
      dy = -dy; // Reverse direction on Y-axis
    }

    // Move the element
    spaceTravelers.style.left = newX + 'px';
    spaceTravelers.style.top = newY + 'px';

    requestAnimationFrame(moveElement); // Continue the animation
  }

  moveElement(); // Start the animation
});
   


  