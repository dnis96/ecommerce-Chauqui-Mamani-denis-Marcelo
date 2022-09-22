function busq (filtro){
    let resultado = productos.filter(prod => prod.nombre.includes(filtro));
    console.log(resultado);
    console.log('este es el filtro',filtro);
}

let filtros = document.getElementsByClassName('nav-item');
console.log(filtros);
let arr = ['hilo','boton','cinta'];
for (let i = 0; i<filtros.length; i++){
    let a = arr[i];
    console.log('este es el',a);
    filtros[i].addEventListener('click',()=> busq(a));
}


/*
for (let i = 0; i<filtros.length; i++){
    
    filtros[i].addEventListener('click', function(evento){ busq(evento,arr[i])});
}*/