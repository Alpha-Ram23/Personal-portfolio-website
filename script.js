const texts = [
  "Web Learner 🌐",
  "ECE Student at SRM 🎓",
  "Embedded Enthusiast ⚙️",
  "Aspiring Developer 👨‍💻"
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing-text').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 100);
  }
})();