document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;

    // Закрываем все открытые элементы, кроме текущего
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('active');
      }
    });

    // Переключаем состояние текущего элемента
    faqItem.classList.toggle('active');
  });
});
