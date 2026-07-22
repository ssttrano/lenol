document.addEventListener("DOMContentLoaded", () => {
  // Находим все кнопки "Заказать набор"
  const orderButtons = document.querySelectorAll(".catalog__card-btn");
  
  // Элементы модального окна
  const modal = document.getElementById("orderModal");
  const closeModalBtn = document.getElementById("closeModal");
  const modalTitle = document.getElementById("modalProductName");
  const modalPrice = document.getElementById("modalProductPrice");

  // Функция для открытия окна
  orderButtons.forEach(button => {
    button.addEventListener("click", function () {
      // 1. Ищем родительскую карточку, в которой произошел клик
      const card = this.closest(".catalog__card");
      
      // 2. Получаем текст заголовка и цены из этой карточки
      const title = card.querySelector(".catalog__card-title").innerText;
      const price = card.querySelector(".catalog__card-item.price p:last-child").innerText;
      
      // 3. Подставляем данные в модальное окно
      modalTitle.innerText = title;
      modalPrice.innerText = price;
      
      // 4. Показываем модальное окно и отключаем скролл на фоне
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  // Функция для закрытия окна
  const closeModal = () => {
    modal.classList.remove("active");
    // Возвращаем скролл страницы
    document.body.style.overflow = "";
  };

  // Закрытие при клике на крестик
  closeModalBtn.addEventListener("click", closeModal);

  // Закрытие при клике на темный фон вне окна
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Закрытие по нажатию клавиши Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
});