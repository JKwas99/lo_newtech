function toggleMenu() {
    const menu = document.querySelector('.nav-links.mobile-menu');
    let burger_packs = document.getElementsByClassName('burger-child')

    menu.classList.toggle('show');
    burger_packs[0].classList.toggle('open-menu')
    burger_packs[1].classList.toggle('open-menu')
    burger_packs[2].classList.toggle('open-menu')
}

const links = document.querySelectorAll('.kierunki-img a');
const links2 = document.querySelectorAll('.kierunki-img img');

links.forEach(link => {
    const image = link.previousElementSibling;

    link.addEventListener('mouseenter', () => {
        image.style.filter = 'grayscale(0%)'; 
        // image.style.transform = 'translateY(-3px)'
    });

    link.addEventListener('mouseleave', () => {
        image.style.filter = 'grayscale(100%)'; 
        // image.style.transform = 'translateY(0px)'
    });
});


function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.random() * 40 + 20; 
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    const posX = Math.random() * (container.clientWidth - size);
    const posY = Math.random() * (container.clientHeight - size);
    bubble.style.left = `${posX}px`;
    bubble.style.top = `${posY}px`;

    container.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 5000);
  }

  setInterval(() => {
    const count = Math.floor(Math.random() * 4) + 5; 
    for (let i = 0; i < count; i++) {
      createBubble();
    }
  }, 600);


//RUCH BANIEK

  const container = document.querySelector('.bubble-container');
  const edukacja = document.querySelector('.container-rewolucja');
  let lastMouseX = null;
  let lastMouseY = null;
  let deltaX = 0;
  let deltaY = 0;
  let hovering = false;

  // Inercyjny ruch baniek
  function moveBubblesSmoothly() {
    if (hovering) {
      document.querySelectorAll('.bubble').forEach(bubble => {
        const currentLeft = parseFloat(bubble.style.left);
        const currentTop = parseFloat(bubble.style.top);

        // Płynne przesunięcie z delikatnym oporem
        bubble.style.left = `${currentLeft + deltaX * 0.1}px`;
        bubble.style.top = `${currentTop + deltaY * 0.1}px`;
      });

      // Redukujemy delty, by efekt wygasał
      deltaX *= 0.9;
      deltaY *= 0.9;
    }

    requestAnimationFrame(moveBubblesSmoothly);
 }

  moveBubblesSmoothly(); // start animacji

  edukacja.addEventListener('mouseenter', () => {
    hovering = true;
  });

  edukacja.addEventListener('mouseleave', () => {
    hovering = false;
    lastMouseX = null;
    lastMouseY = null;
  });

  edukacja.addEventListener('mousemove', (e) => {
    if (lastMouseX !== null && lastMouseY !== null) {
      deltaX = e.clientX - lastMouseX;
      deltaY = e.clientY - lastMouseY;
    }

    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  });