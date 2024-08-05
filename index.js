// Função para animação dos elementos
const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85;

  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

animeScroll();

window.addEventListener("scroll", () => {
  animeScroll();
});

// Função para mostrar ou esconder participantes
function toggleParticipantes() {
  const participantesDiv = document.getElementById("participantes");
  if (participantesDiv.classList.contains("hidden")) {
    participantesDiv.classList.remove("hidden");
  } else {
    participantesDiv.classList.add("hidden");
  }
}

//imagens
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 5) % totalImages;
    showImage(currentIndex);
}

setInterval(nextImage, 3000); // Troca de imagem a cada 3 segundos

// Inicialização
showImage(currentIndex);
