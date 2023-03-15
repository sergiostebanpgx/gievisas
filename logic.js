let menuBtn = document.getElementById('menuBtn')
let ResMenu = document.getElementById('ResMenu')

menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('fa-xmark')
    ResMenu.classList.toggle('open-menu')
})

let Btn1 = document.getElementById('Btn1')
let Btn2 = document.getElementById('Btn2')
let Btn3 = document.getElementById('Btn3')

let Btn1Filter = document.getElementById('Btn1Filter')
let Btn2Filter = document.getElementById('Btn2Filter')
let Btn3Filter = document.getElementById('Btn3Filter')

Btn1.addEventListener('click', ()=>{
    Btn1.classList.add('active-btn')
    Btn2.classList.remove('active-btn')
    Btn3.classList.remove('active-btn')

    Btn1Filter.style.display = 'block'
    Btn1Filter.style.opacity = '1'
    Btn2Filter.style.display = 'none'
    Btn2Filter.style.opacity = '0'
    Btn3Filter.style.display = 'none'
    Btn3Filter.style.opacity = '0'
})

Btn2.addEventListener('click', ()=>{
    Btn1.classList.remove('active-btn')
    Btn2.classList.add('active-btn')
    Btn3.classList.remove('active-btn')

    Btn1Filter.style.display = 'none'
    Btn1Filter.style.opacity = '0'
    Btn2Filter.style.display = 'block'
    Btn2Filter.style.opacity = '1'
    Btn3Filter.style.display = 'none'
    Btn3Filter.style.opacity = '0'
})

Btn3.addEventListener('click', ()=>{
    Btn1.classList.remove('active-btn')
    Btn2.classList.remove('active-btn')
    Btn3.classList.add('active-btn')

    Btn1Filter.style.display = 'none'
    Btn1Filter.style.opacity = '0'
    Btn2Filter.style.display = 'none'
    Btn2Filter.style.opacity = '0'
    Btn3Filter.style.display = 'block'
    Btn3Filter.style.opacity = '1'
})

let navLinks = document.querySelectorAll('header nav ul li a')
let sections = document.querySelectorAll('section')

window.addEventListener('scroll', function (){
    const scrollPos = window.scrollY + 65
    sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active')
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});