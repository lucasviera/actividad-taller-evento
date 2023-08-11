let button = document.getElementById("saludar");

button.addEventListener("click",mostrarSaludo);

function mostrarSaludo(){
    alert('Hola');
}

let eldiv = document.getElementById("div");

eldiv.addEventListener("click",divsaluda);

function divsaluda(e){
    alert("Hola! Soy el div");
    console.log(e)
};



