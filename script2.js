let currentColor = 0;
let vermelhoTempo = 3000;
let amareloTempo = 1000;
let verdeTempo = 3000;

function trocarCor(){
    let luzes = document.querySelectorAll('.luz');

    luzes.forEach(luz => luz.classList.remove('active'));

    if(currentColor === 0){
        luzes[0].classList.add('active');
        setTimeout(trocarCor, vermelhoTempo);
        currentColor = 1;

    }else if(currentColor === 1){
        luzes[1].classList.add('active');
        setTimeout(trocarCor, amareloTempo);
        currentColor = 2;

    }else{
        luzes[2].classList.add('active');
        setTimeout(trocarCor, verdeTempo);
        currentColor = 0;
    }

    
}
trocarCor();
