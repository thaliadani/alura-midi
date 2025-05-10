function tocaSom(seletorAudio) {
  const elementoAudio = document.querySelector(seletorAudio);
  if (elementoAudio && elementoAudio.localName === "audio") {
    elementoAudio.play();
  } else {
    alert.error(`Elemento com o seletor "${seletorAudio}" não encontrado.`);
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (const tecla of listaDeTeclas){
    const instumento = tecla.classList[1];
    const idAudio = `#som_${instumento}`; // template string
    tecla.onclick = function () {
        tocaSom(idAudio);
      };
    tecla.onkeydown = function(evento){ 
      
      if(evento.code === "Enter" || evento.code === "Space"){
        tecla.classList.add("ativa");
      }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove("ativa");
    }
}
