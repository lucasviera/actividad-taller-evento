const button = document.getElementById("saludar");
const eldiv = document.getElementById("div");

eldiv.addEventListener("click",divsaluda);

button.addEventListener("click", (e) => {
    alert ("Hola");
    e.stopPropagation();
    eldiv.removeEventListener("click", divsaluda);
});



function divsaluda(){
    alert("Hola! Soy el div"); 
};
