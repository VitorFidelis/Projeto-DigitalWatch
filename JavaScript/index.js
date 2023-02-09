const horas = document.getElementById('hours')
const minutos = document.getElementById('minutes')
const segundos = document.getElementById('seconds')

const relogio  = setInterval(function time(){
    let dateToday = new Date ();
    let hr = dateToday.getHours ();
    let min = dateToday.getMinutes ();
    let seg =dateToday.getSeconds();

    if(hr < 10) hr = `0${hr}`;

    if(min < 10) min = `0${min}`;

    if(seg < 10) seg =`0${seg}`;

    horas.innerHTML = hr;
    minutos.innerHTML = min;
    segundos.innerHTML = seg;
})

/*
setInterval - serve para executar uma função ou instrução várias vezes em um determinado intervalo de tempo

Date - Retorna o valor numérico correspondente ao tempo corrente

innerHTML - Define ou retorna o conteúdo HTML de um elemento

function time() - Extrai a hora a partir de uma hora ou datahora específica e retorna como sequência de caracteres
*/