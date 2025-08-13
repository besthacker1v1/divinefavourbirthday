// Confetti effect using canvas
const confettiSettings = {
  target: 'confetti',
  max: 100,
  size: 2,
  animate: true,
  props: ['circle', 'square', 'triangle', 'line'],
  colors: [[114, 0, 38], [248, 165, 194], [249, 213, 229]],
  clock: 25,
};

const confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

// Birthday message reveal
document.getElementById('reveal-btn').addEventListener('click', () => {
  const message = document.getElementById('birthday-message');
  message.style.display = 'block';
  message.scrollIntoView({ behavior: 'smooth' });
  // Disable button after click
  document.getElementById('reveal-btn').disabled = true;
  document.getElementById('reveal-btn').innerText = 'Message Revealed 🎉';
});

