window.addEventListener('load',function(){
    //JavaScript del Index
    let container = document.querySelector('.container');
    let subtitulo = document.querySelector('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let fondo = document.querySelector('body');
    let enlace = document.querySelector('a');
    
    let nombre = prompt('Ingrese su nombre');
    console.log(nombre);
    if(nombre !=''){
        subtitulo.innerHTML += ' '+ nombre;
    }else{
        subtitulo.innerHTML += ' INVITADO';
    }
        
    subtitulo.style.textTransform = 'uppercase';
    let confirmar = confirm('Desea colocar un fondo de pantalla ')
    if(confirmar){
        fondo.classList.add('fondo');
        enlace.style.color = '#E51B3E';
    }
    console.log(destacado);
    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    };
    

    container.style.display = 'block';

   

}


);
//Paso1 Ejercicio01
let logo = document.querySelector('.logoDH');
console.log(logo);
let menu = document.querySelector('#menu');
console.log(menu);

logo.addEventListener('click', () => {
  menu.classList.toggle('mostrar');
});

//Paso1 Ejercicio02
menu.addEventListener('mouseout', () => {
  menu.classList.toggle('mostrar');
});
/*
window.addEventListener('load',function(){
let logo = document.querySelector('.logoDH')
let menu = document.querySelector('div #menu');

logo.addEventListener("click", function() {
       menu.classList.toggle('mostrar');
    console.log('que pasa')
})

});*/