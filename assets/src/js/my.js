let btnsAccordion = document.querySelectorAll('.s-questions__btn-accordion')

for (let i = 0; i < btnsAccordion.length; i++) {
    const element = btnsAccordion[i];
    element.onclick = function () {
        for (let k = 0; k < btnsAccordion.length; k++) {
            const element = btnsAccordion[k];
            element.classList.remove('s-questions__btn-accordion_activ')
            
        }
        element.classList.add('s-questions__btn-accordion_activ')
    }
    
}

var swiper = new Swiper(".s-reviews__slider", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
    },
  });
