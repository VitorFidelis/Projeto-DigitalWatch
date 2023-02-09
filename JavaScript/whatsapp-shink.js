const contente = document.querySelector('[data-shrink="yes"]');

//Seleciona por elemento 
const span = document.querySelector('[data-shrink="yes"] span')

//Adiciona o aparecer antes do shrink
span.classList.add('aparecer')

//Adiciona o Shrink como uma classe no HTML depois de 3s 
setInterval(function(){
    contente.classList.toggle('shrink')
},5000)

//Força o setTimeout ocorrer depois do setInterval,pois o setTimeout ocorre uma vez
setTimeout(function(){
    //Adiciona o Aparecer como uma classe no HTML depois de 3s
    setInterval(function(){
        span.classList.toggle('aparecer')
    },5000)

},150)