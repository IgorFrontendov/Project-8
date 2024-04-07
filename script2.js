const right = document.querySelector('.arrow-right');
const left = document.querySelector('.arrow-left');
const images = document.querySelectorAll('.image');

let idx = 0;
images[idx].style.zIndex = images.length;

left.style.display = 'none';

images.forEach((image, index) => {
    if (index > idx) {
        image.style.zIndex = images.length - index;
        image.style.transform = `scale(${0.06 * (images.length - 1 - index) + 0.8}) translateX(${15 * index - idx + 1}px)`;
    }
});

right.addEventListener('click', () => {
    images[idx].classList.remove('active');

    idx++;
    if (idx >= images.length) {
        idx = images.length - 1;
        right.style.display = 'none';
    }


    left.style.display = 'block';

    images[idx].classList.add('active');
    images[idx].style.zIndex = images.length;
    images[idx].style.transform = 'scale(1) translateX(0)';

    images.forEach((image, index) => {
        if (index < idx) {
            image.style.zIndex = index + 1;
            image.style.transform = `scale(${0.8 + (0.05 * (images.length - 1)) - 0.05 * (idx - index - 1)}) translateX(${-13 * idx - index + 15}px)`;
        }
    });
});

left.addEventListener('click', () => {
    images[idx].classList.remove('active');

    idx--;
    if (idx < 0) {
        idx = 0;
        left.style.display = 'none';
    }

    right.style.display = 'block';

    images[idx].classList.add('active');
    images[idx].style.zIndex = images.length;
    images[idx].style.transform = 'scale(1) translateX(0)';

    images.forEach((image, index) => {
        if (index > idx) {
            image.style.zIndex = images.length - index;
            image.style.transform = `scale(${0.06 * (images.length - 1 - index) + 0.8}) translateX(${15 * index - idx + 1}px)`;
        }
    });
});
