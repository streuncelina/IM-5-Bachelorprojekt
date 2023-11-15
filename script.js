let interval; // Globale Variable für das Interval

function startCountdown() {
    updateCountdown(); // Starten Sie den Countdown sofort
    interval = setInterval(updateCountdown, 1000); // Aktualisieren Sie den Countdown alle 1 Sekunde
}

var menubutton = document.querySelector(".menubutton");
var menu = document.querySelector("nav");

menubutton.onclick = function () {
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
};

const targetDate = new Date('2024-01-15').getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (timeRemaining <= 0) {
        document.getElementById('days').innerText = "0";
        document.getElementById('hours').innerText = "0";
        document.getElementById('minutes').innerText = "0";
        document.getElementById('seconds').innerText = "0";
        clearInterval(interval);
    }
}

// Starten Sie den Countdown, wenn das Dokument geladen ist
document.addEventListener('DOMContentLoaded', startCountdown);


// Dankeschön 

document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registration-form');
    const thankYouMessage = document.getElementById('thank-you-message');
  
    registrationForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Verhindert das Standardverhalten des Formulars (das Neuladen der Seite)
  
      // Hier können Sie weitere Logik für die Formularverarbeitung hinzufügen, z. B. eine AJAX-Anfrage senden.
  
      // Zeige die Dankesnachricht an und blende das Formular aus
      registrationForm.style.display = 'none';
      thankYouMessage.style.display = 'block';
    });
  });
  

  

