const pantalla=document.querySelector(".pantalla")
const botones=document.querySelectorAll(".boton")
botones.forEach(boton=>{boton.addEventListener("click",()=>{
    const botonPR=boton.textContent
    if(boton.id=="limpiar"){
        pantalla.textContent="0";
        return
    }
    if(boton.id=="borrar"){
        if(pantalla.textContent.length==1 || pantalla.textContent=="mira lo que has hecho barry"){
            pantalla.textContent="0";
        } else {
        pantalla.textContent=pantalla.textContent.slice(0,-1)
        }
        return
    }
    if(boton.id=="igual"){
        if(pantalla.textContent.includes("//") || pantalla.textContent=="mira lo que has hecho barry"){
        pantalla.textContent="mira lo que has hecho barry"}
        try{pantalla.textContent=eval(pantalla.textContent);
            return
        }
        catch {

            pantalla.textContent="mira lo que has hecho barry"
            return
    } 
    }
    if(pantalla.textContent==="0" || pantalla.textContent=="mira lo que has hecho barry"){
        pantalla.textContent=botonPR;
    } else {
        pantalla.textContent+=botonPR;
    }
})
})