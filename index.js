document.querySelectorAll('.menu a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href'); 
    const targetSection = document.querySelector(targetId); 

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      const menu = document.querySelector('.menu');
      if (menu.classList.contains('open')) {
        toggleMenu();
      }
    }
  });
});


function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('open');
}