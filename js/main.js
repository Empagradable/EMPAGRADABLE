const altura = document.body.scrollHeight - window.innerHeight;
const hojas = document.getElementById("hojas");

window.onscroll = () => {
    const anchofondo = (window.pageYOffset / altura) * 900;
    if(anchofondo <= 100){
      hojas.style.width = anchofondo + "%";   
    }   
}

