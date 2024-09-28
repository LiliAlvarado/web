document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      
      // Alternar la visibilidad de la respuesta
      answer.style.display = (answer.style.display === "block") ? "none" : "block";
      
      // Opcional: puedes agregar una clase para animaciones o efectos
      item.classList.toggle('active');
    });
  });
  