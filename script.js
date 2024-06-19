  const inputTime = document.getElementById('input-time');
  const button = document.getElementById('submit');
  const timer = document.getElementById('timer');

  let val = null;
  let interval = null;

  const startTimer = () => {
    if (val !== null && val > 0) {
      timer.innerText = val;
      val -= 1;
    } else {
      clearInterval(interval);
      timer.innerText = 'Time Up';
    }
  }

  button.addEventListener('click', () => {
    val = parseInt(inputTime.value, 10);  // Convert input value to an integer
    if (isNaN(val) || val <= 0) {
      alert('Please enter a valid positive number.');
      return;
    }
    clearInterval(interval);  // Clear any existing interval
    timer.innerText = val;  // Display the initial value
    interval = setInterval(startTimer, 1000);  // Start a new interval
  });
