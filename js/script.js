document.addEventListener("DOMContentLoaded", function () {
  // Carousel Slider
  const slides = document.querySelectorAll(".carousel-item");
  const dots = document.querySelectorAll(".dot");
  const nextButton = document.querySelector(".carousel-next");
  const prevButton = document.querySelector(".carousel-prev");
  let currentIndex = 0;
  let interval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    currentIndex = index;
  }

  function nextSlide() {
    const newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex);
  }

  function prevSlide() {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex);
  }

  function startAutoSlide() {
    interval = setInterval(nextSlide, 5000);
  }

  function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
  }

  if (nextButton && prevButton) {
    nextButton.addEventListener("click", () => {
      nextSlide();
      resetAutoSlide();
    });

    prevButton.addEventListener("click", () => {
      prevSlide();
      resetAutoSlide();
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      resetAutoSlide();
    });
  });

  showSlide(currentIndex);
  startAutoSlide();

  // Testimonial Slider
  const testimonialSlides = document.querySelectorAll(".testimonial-item");
  const testimonialDots = document.querySelectorAll(".testimonial-dots .dot");
  const testimonialNextButton = document.querySelector(".testimonial-next");
  const testimonialPrevButton = document.querySelector(".testimonial-prev");
  let testimonialIndex = 0;
  let testimonialInterval;

  function showTestimonial(index) {
    testimonialSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    testimonialDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    testimonialIndex = index;
  }

  function nextTestimonial() {
    const newIndex = (testimonialIndex + 1) % testimonialSlides.length;
    showTestimonial(newIndex);
  }

  function prevTestimonial() {
    const newIndex =
      (testimonialIndex - 1 + testimonialSlides.length) %
      testimonialSlides.length;
    showTestimonial(newIndex);
  }

  function startTestimonialAutoSlide() {
    testimonialInterval = setInterval(nextTestimonial, 5000);
  }

  function resetTestimonialAutoSlide() {
    clearInterval(testimonialInterval);
    startTestimonialAutoSlide();
  }

  if (testimonialNextButton && testimonialPrevButton) {
    testimonialNextButton.addEventListener("click", () => {
      nextTestimonial();
      resetTestimonialAutoSlide();
    });

    testimonialPrevButton.addEventListener("click", () => {
      prevTestimonial();
      resetTestimonialAutoSlide();
    });
  }

  testimonialDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showTestimonial(index);
      resetTestimonialAutoSlide();
    });
  });

  showTestimonial(testimonialIndex);
  startTestimonialAutoSlide();
});
