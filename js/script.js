function megusta(numero){
    let contador=document.querySelector(".counter"+numero);
    let contador_act=contador.innerText;
    contador_act++;

    contador.innerText= contador_act;
}