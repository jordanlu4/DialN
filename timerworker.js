let countdownTime = 0;
let running = false;

onmessage = function(e) {
  const { command } = e.data;
  switch (command) {
    case 'start':
      running = true;
      runTimer();
      break;
    case 'stop':
      running = false;
      break;
    case 'clear':
      countdownTime = 0;
      running = false;
      postMessage({countdownTime, running});
      break;
    case 'updateTime':
      countdownTime = e.data.countdownTime;
      break;
  }
};

function runTimer() {
    if (!running) return;
    setTimeout(() => {
      countdownTime -= 10;
      if (countdownTime <= 0) {
        countdownTime = 0;
        running = false;
        postMessage({countdownTime, running, finished: true}); // indicate the timer has finished
      } else {
        postMessage({countdownTime, running});
      }
      if (running) runTimer();
    }, 10);
  }
  
