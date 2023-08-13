document.addEventListener("DOMContentLoaded", function() {
    const numberElements = document.querySelectorAll(".number");
  
    // Função para animar o carregamento de um número
    function animateNumber(element, current, target, duration) {
      const range = target - current;
      const increment = range / duration * 10;
      let count = current;
  
      function updateCount() {
        count += increment;
        if ((increment > 0 && count >= target) || (increment < 0 && count <= target)) {
          count = target;
          clearInterval(interval);
        }
        element.textContent = Math.round(count);
      }
  
      const interval = setInterval(updateCount, 10);
    }
  
    // Função para animar vários números
    function animateNumbers() {
      numberElements.forEach((element) => {
        const targetNumber = parseInt(element.getAttribute("data-target"), 10);
        animateNumber(element, 0, targetNumber, 700); // Duração da animação em milissegundos
      });
    }
  
    // Chama a função de animação ao carregar a página
    animateNumbers();
  });
  