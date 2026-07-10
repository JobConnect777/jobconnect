const buttons = document.querySelectorAll(".category-btn");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

const menu = button.nextElementSibling;

menu.classList.toggle("active");

});

});
