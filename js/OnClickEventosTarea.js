function mostraralerta(){
    alert('hizo clic!');

}

function hacerclic(){
    var elemento=document.getElementsByTagName('p')[0];
    elemento.addEventListener('click', mostraralerta(), false);
    elemento.style.color="red";
    elemento.style.fontSize="1.5rem";
}
//window.addEventListener('load', hacerclic, false);
