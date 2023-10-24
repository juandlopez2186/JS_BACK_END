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

function calculartiempo() {
    let tiempo= new Date()
    let hora=tiempo.getHours();
    let minutos=tiempo.getMinutes();
    let segundos=tiempo.getSeconds();
    hora=hora<10 ? "0" + hora : hora;
    minutos=minutos<10 ? "0" + minutos : minutos;
    segundos=segundos<10 ? "0" + segundos : segundos;
    am=hora>12;
    if (hora>=13) {
        hora=hora-12
    } else {
        hora=hora
    }
    if (am===true) {
        am="PM"
    }else 
    {
       am="AM";
    }
    let PantallaReloj= hora+":"+minutos+":"+segundos+" "+am;
    let relojDigital=document.querySelector(".Reloj");
    relojDigital.innerHTML=PantallaReloj;
}
setInterval(calculartiempo,100)