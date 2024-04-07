let stIntrvl = setInterval(swiperPhotos, 4000)
let translatePosition = 0


function swiperPhotos() {
  const swiper = document.querySelector('.photo-swiper')
  translatePosition -= 100
  swiper.style.transform = `translateX(${translatePosition}vw)`

  if (translatePosition === -300) {
    translatePosition = 100;
  }

  if (translatePosition === -400) {
    translatePosition = -100;
  }
}
