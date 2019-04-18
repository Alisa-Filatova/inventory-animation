const images = document.querySelectorAll('.item > img');
const inventory = document.querySelector('.inventory');

inventory.addEventListener('click', () => {
  if (inventory.classList.contains('shine')) {
    inventory.classList.remove('shine');
  }

  images.forEach((image) => {
    const imageY = image.getBoundingClientRect().top;
    const imageX = image.getBoundingClientRect().left;
    const speed = 1000;
    const curveDelay = 300;
    const position = 'fixed';
    const imageClone = image.cloneNode();
    image.classList.add('fly');

    imageClone.classList.add('flyingItem');
    imageClone.style.position = position;
    imageClone.style.top = `${imageY}px`;
    imageClone.style.left = `${imageX}px`;
    imageClone.style.opacity = '1';

    setTimeout(() => {
      image.classList.remove('fly');
      imageClone.style.transition = `all ${speed / 1000}s ease, top ${(speed + curveDelay) / 1000}s ease, left ${speed / 1000}s ease, transform ${speed / 1000}s ease ${(speed - 10) / 1000}s`;

      image.parentNode.insertBefore(imageClone, image.nextSibling);

      imageClone.style.top = `${inventory.offsetTop + inventory.offsetHeight - 50}px`;
      imageClone.style.left = `${inventory.offsetLeft + inventory.offsetWidth - 100}px`;
      imageClone.style.width = '63px';
      imageClone.style.transform = 'scale(0.3)';
      imageClone.style.opacity = '0';
      imageClone.classList.remove('flyingItem');

    }, 800);

    setTimeout(() => {
      inventory.classList.add('shine');
    }, 1300);

    setTimeout(() => {
      imageClone.remove();
    }, 2000);
  });
});
