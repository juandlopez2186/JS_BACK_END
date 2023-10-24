const deg=6;
const horas=document.querySelector('.horas');
const minutos=document.querySelector('.minutos');
const segundos=document.querySelector('.segundos');
setInterval(()=>{
    let tiempo =new Date();

    let hora= tiempo.getHours()*30;
    let minuto=tiempo.getMinutes()*deg;
    let segundo=tiempo.getSeconds()*deg;
    horas.style.transform = `rotate(${(hora)+(minuto/12)}deg)` ;
    minutos.style.transform = `rotate(${(minuto)}deg)`
    segundos.style.transform = `rotate(${(segundo)}deg)`
})