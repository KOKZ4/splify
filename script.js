const header = document.querySelector('header');
const sectionOne = document.querySelector('.free');

const sectionOneOptions = {
  rootMargin: '-10px 0px 0px 0px'
};

const sectionOneObserver = new IntersectionObserver
(function(
  entries,
  sectionOneObserver
){
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      header.classList.add('nav-scrolled');
    }  else {
      header.classList.remove('nav-scrolled');
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
let body = document.querySelector('body');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal =document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () =>{
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal =>{
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
  body.classList.add('active') 
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
  body.classList.remove('active') 
}

var currentImageIndex = 0;

function getCurrentIndexImage(value) {
  if (value <1) {
    return `0${value}`;
  }
  return value;
}

function animate(){
  requestAnimationFrame(() => {
    setTimeout(() => {
      animate();
    }, 1000/11);
    
  });
  const image = document.getElementById('goofy');
  image.src = `./images/goofy/${getCurrentIndexImage(currentImageIndex)}.png`
  if (currentImageIndex < 7) {
    currentImageIndex++;
  } else {
    currentImageIndex = 1;
  }
}

function startAnimate(){
animate();
}