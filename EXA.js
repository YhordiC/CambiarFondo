let color=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
let Voleano=false;
let Spam=document.querySelector('.color');
let ValorColor;
let btn=document.getElementById('btn');btn.addEventListener('click',CambiaColor);

btn.addEventListener('mouseover',()=>{
    btn.style.background='black';
    btn.style.color='white';});

    
btn.addEventListener('mouseout',()=>{
    if(Voleano== false){
        btn.style.background='White';
        btn.style.color='Black';
    }else{
     btn.style.background=ValorColor;
     btn.style.color='Black';}});
function CambiaColor(){
    let randomnumero= RandomNumero();
    Voleano=true;
    document.body.style.backgroundColor=ValorColor;
    Spam.textContent=ValorColor;
    btn.style.backgroundColor=ValorColor;
    
}

let RandomNumero=()=>{
    /**math.floor devuelve numero que eran con desimal a entero*/
     ValorColor='#';
    for(let i=0;i<=5;i++){
     let numeroram= Math.floor( Math.random()*color.length);
      ValorColor= ValorColor +color[numeroram];
    }
    return  ValorColor;
    

}