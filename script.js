function ligar(){
    let intervalo = 3000;
    let contador = 0;
    while(contador < 10){
        setTimeout("document.getElementById('farol').src = 'amarelo.png'", intervalo);
        intervalo += 3000;
        setTimeout("document.getElementById('farol').src = 'vermelho.png'", intervalo);
        intervalo += 3000;
        setTimeout("document.getElementById('farol').src = 'verde.png'", intervalo);
        intervalo += 500;
        contador ++;
    }

}
function atencao(){
    let intervalo = 0;
    let contador = 0;
    while(contador < 20){
        setTimeout("document.getElementById('farol').src = 'amarelo.png'", intervalo);
        intervalo += 500;
        setTimeout("document.getElementById('farol').src = 'neutro1.png'", intervalo);
        intervalo += 500;
        contador ++;
    }
}