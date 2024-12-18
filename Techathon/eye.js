const body = document.body;
let blinkInterval, blinkTimeInMinutes;

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.classList.toggle('active');
}

function applySettings() {
  body.className = '';

  if (document.getElementById('dark-mode').checked) {
    body.classList.add('dark-mode');
  }
  if (document.getElementById('large-text').checked) {
    body.classList.add('large-text');
  }
  if (document.getElementById('high-contrast').checked) {
    body.classList.add('high-contrast');
  }
}

function resetSettings() {
  document.getElementById('dark-mode').checked = false;
  document.getElementById('large-text').checked = false;
  document.getElementById('high-contrast').checked = false;
  body.className = '';
}

let timer;
function startTimer() {
  let minutes = 0;
  document.getElementById('progressBar').style.width = '0%';
  timer = setInterval(() => {
    minutes++;
    document.getElementById('timerStatus').textContent = `You’ve been using your device for ${minutes} minute(s). Time for a break soon!`;

    let progress = (minutes / 30) * 100;
    document.getElementById('progressBar').style.width = progress + '%';

    if (minutes % 30 === 0) {
      alert('Time for a break! Take care of your eyes.');
    }
  }, 60000);
}

function startBlinkReminder() {
  const minutes = document.getElementById('blinkTime').value;
  if (minutes && minutes > 0) {
    blinkTimeInMinutes = minutes * 60000;
    setTimeout(() => {
      document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
      document.getElementById('alertMessage').style.display = 'block';
    }, blinkTimeInMinutes);
  } else {
    alert("Please enter a valid number of minutes.");
  }
}

function logSymptom() {
  const symptomInput = document.getElementById('symptom');
  const symptomText = symptomInput.value.trim();
  if (symptomText) {
    const symptomHistory = document.getElementById('symptomHistory');
    const listItem = document.createElement('li');
    listItem.textContent = symptomText;
    symptomHistory.appendChild(listItem);
    symptomInput.value = '';

    alert("Please contact your doctor for advice on your eye health.");
  }
}

function changeVisionTest() {
  const visionText = document.getElementById('letters');
  
  // Randomly pick a letter from the Snellen chart letters
  const letters = ["E", "F", "P", "T", "O", "Z", "L", "P", "D"];
  const randomLetter = letters[Math.floor(Math.random() * letters.length)];
  
  // Change the letter
  visionText.textContent = randomLetter;

  // Random font size between 1em and 5em
  const randomSize = Math.random() * 4 + 1; // Generates a value between 1 and 5
  visionText.style.fontSize = `${randomSize}em`;
  
  // Random rotation between -30 and 30 degrees
  const randomDegree = Math.random() * 60 - 30;
  visionText.style.transform = `rotate(${randomDegree}deg)`;
}

// Automatically change the test letter every 5 seconds
setInterval(changeVisionTest, 5000);




