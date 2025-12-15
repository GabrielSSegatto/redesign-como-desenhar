
function trocarTema() {
    const html = document.documentElement;
    const icone = document.querySelector("#btnTema i");

    // Se estiver escuro, muda para claro
    if (html.getAttribute("data-bs-theme") === "dark") {
        html.setAttribute("data-bs-theme", "light");
        html.setAttribute("data-theme", "light");
        icone.className = "fas fa-sun text-warning";
    } else {
        // Volta para escuro
        html.setAttribute("data-bs-theme", "dark");
        html.setAttribute("data-theme", "dark");
        icone.className = "fas fa-moon";
    }
}



function alternarGrade() {
    const ocultos = document.getElementById('modulosOcultos');
    const btnVerTudo = document.getElementById('btnVerTudo');

    // Verifica se está visível ou não
    const estaVisivel = ocultos.style.display === 'block';

    if (estaVisivel) {
        // FECHAR A LISTA
        ocultos.style.display = 'none';
        btnVerTudo.innerHTML = 'Ver grade completa <i class="fas fa-chevron-down ms-1"></i>';

        document.getElementById('accordionGrade').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        // ABRIR A LISTA
        ocultos.style.display = 'block';
        btnVerTudo.innerHTML = 'Ver menos módulos <i class="fas fa-chevron-up ms-1"></i>';
    }
}

function toggleExpandir() {
    const btnExpandir = document.getElementById('btnExpandir');
    const ocultos = document.getElementById('modulosOcultos');
    const btnVerTudo = document.getElementById('btnVerTudo');

    const isExpanded = btnExpandir.innerText.includes('Recolher');

    if (!isExpanded) {
        if (ocultos.style.display !== 'block') {
            ocultos.style.display = 'block';
            btnVerTudo.innerHTML = 'Ver menos módulos <i class="fas fa-chevron-up ms-1"></i>';
        }
    }

    const items = document.querySelectorAll('.accordion-collapse');

    items.forEach(item => {
        // Pega o botão de cabeçalho correspondente a este item
        const buttonHeader = item.previousElementSibling.querySelector('button');

        if (isExpanded) {
            // AÇÃO: FECHAR TUDO
            item.classList.remove('show');
            buttonHeader.classList.add('collapsed');
            buttonHeader.setAttribute('aria-expanded', 'false');
        } else {
            // AÇÃO: ABRIR TUDO
            item.classList.add('show');
            buttonHeader.classList.remove('collapsed');
            buttonHeader.setAttribute('aria-expanded', 'true');
        }
    });

    // Troca o texto do botão principal
    btnExpandir.innerText = isExpanded ? 'Expandir Tudo' : 'Recolher Tudo';
}



// 1. LÓGICA DO MODAL (Toca o vídeo)
const modalDepoimento = document.getElementById('modalVideoDepoimento');
const iframeDepoimento = document.getElementById('iframeDepoimento');

modalDepoimento.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const videoId = button.getAttribute('data-video-id');
    // Usa 'embed' que funciona tanto pra vídeo normal quanto pra Shorts
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    iframeDepoimento.src = videoUrl;
});

modalDepoimento.addEventListener('hidden.bs.modal', function () {
    iframeDepoimento.src = ''; // Para o vídeo ao fechar
});

// 2. LÓGICA DO VER MAIS (Mostra os ocultos)
function toggleDepoimentos() {
    const divMais = document.getElementById('maisDepoimentos');
    const btn = document.getElementById('btnVerMaisDepoimentos');

    if (divMais.style.display === 'none') {
        divMais.style.display = 'block';
        btn.innerHTML = 'Ver menos <i class="fas fa-chevron-up ms-2"></i>';
    } else {
        divMais.style.display = 'none';
        btn.innerHTML = 'Ver mais depoimentos <i class="fas fa-chevron-down ms-2"></i>';
        // Rola suavemente de volta para o topo da seção
        document.getElementById('depoimentos').scrollIntoView({ behavior: 'smooth' });
    }
}
