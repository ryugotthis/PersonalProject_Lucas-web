const fadeEls = document.querySelectorAll('.visual .fade-in');
console.log(fadeEls);
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //0.7초 1.4초 2.1초 2.7초 순으로 나타남
    opacity: 1,
  });
});

// $('.project .swiper').each(function (index) {
//   let t = $(this);
//   t.addClass('swiepr-' + index);

//   let swiper = new Swiper(t, {
//     autoplay: {
//       delay: 0, //add
//       disableOnInteraction: false,
//     },
//     speed: 5000,
//     loop: true,
//     loopAdditionalSlides: 1,
//     slidesPerView: 5,
//   });
// });

const swiper = new Swiper('.project .swiper', {
  // direction: 'horizental' 기본값이라 생략
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, //반복재생여부
  autoplay: {
    delay: 0,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  speed: 4000,
  //
});

// const slideEls = document.querySelectorAll('.project .swiper-slide');
// slideEls.forEach((element) => {
//   element.addEventListener('mouseover', () => {
//     swiper[0].autoplay.stop();
//     console.log('in');
//   });
//   element.addEventListener('mouseout', () => {
//     swiper[0].autoplay.start();
//     console.log('out');
//   });
// });
$('.swiper.up .swiper-slide').on('mouseover', function () {
  console.log('hi');
  swiper[0].autoplay.stop();
});
$('.swiper.up .swiper-slide').on('mouseout', function () {
  swiper[0].autoplay.start();
});
$('.swiper.down .swiper-slide').on('mouseover', function () {
  console.log(swiper);
  swiper[1].autoplay.stop();
});
$('.swiper.down .swiper-slide').on('mouseout', function () {
  swiper[1].autoplay.start();
});

// review button
const reviewBtn = document.querySelector('.review-btn');
let isReview = false;
const reviewEl = document.querySelector('.review');
reviewBtn.addEventListener('click', () => {
  console.log('click');
  isReview = !isReview;
  if (isReview) {
    console.log('isReview', isReview);
    reviewBtn.textContent = 'Close Review';
    reviewEl.classList.remove('hide');
    console.log(reviewEl.classList);
  } else {
    reviewBtn.textContent = 'Check Review';
    console.log('isReview', isReview);
    reviewEl.classList.add('hide');
  }
});

// Create your own package calculation
const priceTable = [
  { price: 450, status: false },
  { price: 320, status: false },
  { price: 240, status: false },
  { price: 410, status: false },
  { price: 500, status: false },
  { price: 150, status: false },
  { price: 600, status: false },
  { price: 200, status: false },
  { price: 250, status: false },
  { price: 430, status: false },
  { price: 120, status: false },
  { price: 450, status: false },
  { price: 130, status: false },
  { price: 470, status: false },
  { price: 500, status: false },
  { price: 370, status: false },
  { price: 310, status: false },
  { price: 480, status: false },
];

const packageOptionEls = document.querySelectorAll('.package .package-option');
console.log(packageOptionEls);
let packagePriceResult = 0;
const priceResult = document.querySelector('.estimate-price-box .result');
packageOptionEls.forEach((el, index) => {
  el.addEventListener('click', () => {
    priceTable[index].status = !priceTable[index].status;
    console.log('statue', priceTable[index].status);
    if (priceTable[index].status) {
      packagePriceResult += priceTable[index].price;
      console.log(packagePriceResult);
      el.classList.add('clicked');
    } else {
      packagePriceResult -= priceTable[index].price;
      console.log(packagePriceResult);
      el.classList.remove('clicked');
    }
    priceResult.textContent = `${packagePriceResult}€`;
  });
});
