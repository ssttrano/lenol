document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach((item) => {
    const button = item.querySelector('.faq__quest');

    button.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      faqItems.forEach(i => {
        i.classList.remove('is-open');
        i.querySelector('.faq__quest').setAttribute('aria-expanded', 'false');
      });

      // Переключаем текущую вкладку
      if (!isOpen) {
        item.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
      } else {
        item.classList.remove('is-open');
        button.setAttribute('aria-expanded', 'false');
      }
    });
  });
});