const xArray = ["Jan", "Fev", "Mar", "Abr", "Mai","jun","julh"];
const yArray = [0,5,15,10,5,8,40,70,80,90,100];
// Define Data[7,8,8,9,9,9,10,11,14,14,15];
const data = [{
  x: xArray,
  y: yArray,
  mode:"lines",
}];

// Define Layout
const layout = {
  xaxis: {
    range: [1,2,3,4,5,6,7,8,9,10,11,12],
    color:"#124085"
  },
  yaxis: {
    range: [0, 16], 
    color:"#124085"
  },  
  title: "Balançamento",
};
  
Plotly.newPlot("mygrafico", data, layout);

/*---------------menu-bar--------------*/
let logo=document.querySelector('.logo')
let nav=document.querySelector('nav')
let header=document.querySelector('header')
let menu_bar=document.querySelector('.menu-bar');
let list_icons=document.querySelector('.icons')
let es=document.querySelector('.es'),es1=document.querySelector('.es1')
menu_bar.addEventListener('click',() => {
  if (menu_bar.style.display == 'block') {
    menu_bar.classList.remove('menu-bar-check')
    menu_bar.style.display=''
    nav.style.display=''
    logo.style.display=''
    list_icons.style.display='none'
    es.style.width= "20rem";
    es1.style.width= "25rem";
    header.classList.remove('menu-bar-active')
  }
  else {
     menu_bar.style.display='block'
     menu_bar.classList.add('menu-bar-check')
     nav.style.display='none'
     logo.style.display='none'
     es.style.width= "0rem";
     es1.style.width= "10rem";
     list_icons.style.display='flex'
     header.classList.add('menu-bar-active')
  }
})
/*-----------circulo-progresso-----------*/
let progressso=document.querySelector('.circulo');
let progressvalue=document.querySelector('.progressvalue');
let progresso_inicio=0;
let progresso_fim=90,
speed=100;
let progress=setInterval(()=>{
  progresso_inicio++;
  progressvalue.textContent = `${progresso_inicio}%`
  progressso.style. background=`conic-gradient(#124085 ${progresso_inicio *3.6}deg, #ededed  0deg)` 
  if (progresso_inicio == progresso_fim) {
    clearInterval(progress)
  }
},speed )

/* trocar e chamar tela*/
let Dashboard=document.querySelector('#Dashboard');
Mensagens=document.querySelector('#Mensagens'),
Produtos=document.querySelector('#Produtos'),
Definicao=document.querySelector('#Definicao');

let bar_Dashboard=document.querySelector('.bar_Dashboard');
bar_Mensagens=document.querySelector('.bar_Mensagens'),
bar_Produtos=document.querySelector('.bar_Produtos'),
bar_Definicao=document.querySelector('.bar_Definicao');


let navlinks=document.querySelectorAll('header a')
sections=document.querySelectorAll('section');
let navlink=document.querySelector('ul')
let navlink_bar=document.querySelector('.list')

navlink.addEventListener('click', function(e) {
 let normalized = e.target.firstChild.textContent.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
 let Dados=normalized
   navlinks.forEach(links => {
      links.classList.remove('active');
      links.classList.remove('active_bar');
      document.querySelector('header a[href*=' + normalized + ']').classList.add('active'); 
      document.querySelector('header .list a[href*=' + normalized + ']').classList.add('active_bar'); 
    if (normalized == "Mensagens") {
        Mensagens.style.display='flex'
        Dashboard.style.display='none'
        Produtos.style.display='none'
        Definicao.style.display='none'
    }
    if (normalized == "Dashboard") {
        Dashboard.style.display='flex'
        Mensagens.style.display='none'
        Produtos.style.display='none'
        Definicao.style.display='none'
    }
      if (normalized == "Produtos") {
        Produtos.style.display='flex'
        Dashboard.style.display='none'
        Mensagens.style.display='none'
        Definicao.style.display='none'
    }
    if (normalized == "Definicao") {
        Definicao.style.display='flex'
        Dashboard.style.display='none'
        Mensagens.style.display='none'
        Produtos.style.display='none'
    }
  })

});
var
  srcs = [],
  images = document.querySelectorAll('.list a img');
  navlink_bar.addEventListener('click', function (e) {
   let normalized = "Dashboard"
   navlinks.forEach(links => {
      links.classList.remove('active');
      links.classList.remove('active_bar');
      document.querySelector('header a[href*=' + normalized + ']').classList.add('active'); 
      document.querySelector('header .list a[href*=' + normalized + ']').classList.add('active_bar'); 
  if (e.target == images[1]) {
      Mensagens.style.display='flex'
      Dashboard.style.display='none'
      Produtos.style.display='none'
      Definicao.style.display='none'
      normalized = "Mensagens"
  }
  if (e.target == images[0]) {
    Dashboard.style.display='flex'
    Mensagens.style.display='none'
    Produtos.style.display='none'
    Definicao.style.display='none'
    normalized = "Dashboard"
}
  if (e.target == images[2]) {
    Produtos.style.display='flex'
    Dashboard.style.display='none'
    Mensagens.style.display='none'
    Definicao.style.display='none'
    normalized = "Produtos"
}
if (e.target == images[3]) {
    Definicao.style.display='flex'
    Dashboard.style.display='none'
    Mensagens.style.display='none'
    Produtos.style.display='none'
    normalized = "Definicao"
}
})
});

