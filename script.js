const text = "przyszłość zaczyna się teraz!";
const textElement = document.getElementById('text');
let index = 0;
let typingInterval;
function type() {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100); 
  }
}
function startTyping() {
  textElement.innerHTML = ""; 
  index = 0;
  type();
}


const links = document.querySelectorAll('.right-side a');
console.dir(links)

function animateLinks() {
  links.forEach((link, index) => {
    setTimeout(() => {
      link.classList.add('highlight');
      setTimeout(() => {
        link.classList.remove('highlight');
      }, 400); 
    }, index * 600); 
  });
}

function createBoxes() {
    const bodyWidth = document.body.offsetWidth;
    const boxSize = Math.floor(bodyWidth / 40);  // szerokość i wysokość boxa

    const numBoxes = Math.floor(window.innerHeight / boxSize) * Math.floor(bodyWidth / boxSize);

    for (let i = 0; i < numBoxes; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;

      document.body.appendChild(box);
    }
  }

  function changeRandomBoxColor() {
    const boxes = document.querySelectorAll('.box');
    
    // Losowanie 3 różnych boxów
    const randomIndexes = [];
    while (randomIndexes.length < 6) {
      const randomIndex = Math.floor(Math.random() * boxes.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }

    randomIndexes.forEach(index => {
      const box = boxes[index];
      const originalColor = box.style.backgroundColor;

      // Zmiana koloru tła na chwilę
      box.style.backgroundColor = '#ff00a6'; // Kolor zmienia się na żółty

      // Przywrócenie oryginalnego koloru po 1 sekundzie
      setTimeout(() => {
        box.style.backgroundColor = originalColor;
      }, 5000);
    });
  }


  window.onload = () => {
    startTyping();
    typingInterval = setInterval(startTyping, 15000); 
    animateLinks();
    createBoxes();
    setInterval(animateLinks, 8000);
    changeRandomBoxColor();
    setInterval(changeRandomBoxColor, 5000);
  };