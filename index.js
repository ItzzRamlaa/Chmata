window.addEventListener('load', function() {
  const eventDate = new Date('2023-9-15 08:00:00');

  function updateCountdown() {
      const now = new Date().getTime();
      const timeRemaining = eventDate - now;

      const totalSecondsRemaining = Math.floor(timeRemaining / 1000);
      const daysRemaining = Math.floor(totalSecondsRemaining / (24 * 60 * 60));
      const hoursRemaining = Math.floor((totalSecondsRemaining % (24 * 60 * 60)) / (60 * 60));
      const minutesRemaining = Math.floor((totalSecondsRemaining % (60 * 60)) / 60);
      const secondsRemaining = totalSecondsRemaining % 60;

      
      const totalMinutesRemaining = daysRemaining * 24 * 60 + hoursRemaining * 60 + minutesRemaining;

      document.getElementById('countdown').innerHTML = `Mzzalou: ${daysRemaining} youm, ${hoursRemaining} sa3a, ${minutesRemaining} d9i9a, ww ${secondsRemaining} thanya (y3ny bd9aye9 ytl3ou ${totalMinutesRemaining})`;

      setTimeout(updateCountdown, 1000); 
  }

  updateCountdown();
});
