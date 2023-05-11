/*----------Declaração de variaveis-----------*/
let menu_bar=document.querySelector('.menu-bar')
let nav=document.querySelector('nav')
let navlinks=document.querySelectorAll('header nav ul li a');
let sections=document.querySelectorAll('section')
let scaleton=document.querySelector('.scaleton')
let scroll=document.querySelector('html')
let modal_close=document.querySelector('.close-img')
let produto=document.querySelector('#produto')
setInterval(Ligado,10000)
function Ligado() {
scaleton.style.opacity='0%'
scaleton.style.transition='.6s ease-in-out'
scroll.style.overflowY='scroll'
scaleton.style.zIndex='0'
}
/*----------Menu-bar-----------*/
menu_bar.addEventListener('click',() => {
  if (menu_bar.style.display == 'block') {
    menu_bar.classList.remove('menu-bar-check')
    menu_bar.style.display=''
    nav.style.display=''
    nav.classList.remove('menu-bar-backgraund')
  }
  else {
     menu_bar.style.display='block'
     menu_bar.classList.add('menu-bar-check')
     nav.style.display='block'
     nav.classList.add('menu-bar-backgraund')
  }
})

window.onscroll=()=>{

 sections.forEach(sec => {
    
    let top=window.scrollY;
    let offset=sec.offsetTop -40;
    let height=sec.offsetHeight;
    let id=sec.getAttribute('id')
    if (top >= offset && top < offset + height) {
        navlinks.forEach(links =>{
            links.classList.remove('active')
            document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
        })
    }
 });

}

/*----modal------*/
let active=document.querySelector('.produtos-active')
let desactive=document.querySelector('.produtos-active')
produto.addEventListener("click",() => {
 active.style.display='flex'
})

modal_close.addEventListener("click",() => {
  desactive.style.display='none'
})