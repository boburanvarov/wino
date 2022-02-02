let togle =document.querySelector('.dropdown .dropdown-menu');
let isActive= document.querySelector('.colorType')

togle.addEventListener("click", () => {
    isActive.classList.toggle('active')
})