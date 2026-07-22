document.addEventListener("DOMContentLoaded", () => {
  /* =======================================================
     АНИМАЦИИ ПРИ ПРОКРУТКЕ (Intersection Observer)
  ======================================================= */
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Элемент сработает, когда покажется на 15%
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-inview');
        // Перестаем следить за элементом после появления (анимируем 1 раз)
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  // Ищем все элементы с классом animate-up и вешаем наблюдатель
  document.querySelectorAll('.animate-up').forEach(el => {
    observer.observe(el);
  });
});