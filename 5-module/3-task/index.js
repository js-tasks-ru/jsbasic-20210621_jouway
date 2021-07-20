function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const slidesCount = carouselInner.children.length;
  const slideWidth = document.querySelector('.carousel__slide').offsetWidth;
  
  const arrowLeftButton = document.querySelector('.carousel__arrow_left');
  const arrowRightButton = document.querySelector('.carousel__arrow_right');

  arrowLeftButton.style.display = 'none';

  let currentSlide = 0;

  const handleArrowClick = (direction) => {
    if (direction === 'next') {
      carouselInner.style.transform = `translateX(${slideWidth * (currentSlide - 1)}px)`;
      currentSlide--;

      arrowLeftButton.style.display = '';
      if (currentSlide === -(slidesCount - 1)) {
        arrowRightButton.style.display = 'none';
      }
    }
    if (direction === 'prev') {
      carouselInner.style.transform = `translateX(${slideWidth * (currentSlide + 1)}px)`;
      currentSlide++;

      arrowRightButton.style.display = '';
      if (currentSlide === 0) {
        arrowLeftButton.style.display = 'none';
      }
    }
  };

  arrowLeftButton.addEventListener('click', () => handleArrowClick('prev'));
  arrowRightButton.addEventListener('click', () => handleArrowClick('next'));
}
