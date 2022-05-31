let Colores=
[['Blue','Blueviolet','Brown','Cadetblue','Chartreuse','Chocolate','Coral','Cornflowerblue'],
['#0000FF','#8A2BE2','#A52A2A','#5F9EA0','#7FFF00','#D2691E','#FF7F50','#6495ED']];

let NumeroRandom2;


let Spam=document.querySelector('.color');

let btn=document.getElementById('btn');btn.addEventListener('click',CambiaColor);
btn.addEventListener('mouseover',()=>{
      btn.style.background='black';
      btn.style.color='white';});

btn.addEventListener('mouseout',()=>{
    if(NumeroRandom2== undefined){
        btn.style.background='White';
        btn.style.color='Black';
    }else{
     btn.style.background=Colores[1][NumeroRandom2];
     btn.style.color='Black';}});


function CambiaColor(){
    let randomnumero= RandomNumero();
    NumeroRandom2=randomnumero;
    document.body.style.backgroundColor=Colores[1][randomnumero];
    Spam.textContent=Colores[0][randomnumero];
    btn.style.backgroundColor=Colores[1][randomnumero];
    
}

let RandomNumero=()=>{
    /**math.floor devuelve numero que eran con desimal a entero*/
    
    return  Math.floor( Math.random()*Colores[1].length); // 
}