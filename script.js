const menuToggle = document.getElementById('menuToggle');
const navTabs = document.getElementById('navTabs');
const btnTop = document.getElementById("btnTop");

// Toggle Menu
menuToggle.addEventListener('click', () => {
    navTabs.classList.toggle('active-menu');
});
console.log("O script carregou com sucesso!");
// Filtro (Agora recebe o elemento clicado 'el' como parâmetro)
function filterItems(category, el) {
    // 1. Remove 'active' de todos e adiciona no clicado (el)
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    el.classList.add('active');

    // 2. Lógica de filtrar os cards
    document.querySelectorAll('.card').forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });

    // 3. Fecha o menu no mobile
    if (window.innerWidth <= 768) {
        navTabs.classList.remove('active-menu');
    }
}

// Botão Topo
window.onscroll = function() {
    btnTop.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? "block" : "none";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // Pega o texto do título (h3) da card
        const title = card.querySelector('h3').innerText.toLowerCase();
        
        // Verifica se o título contém o que foi digitado
        if (title.includes(searchTerm)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
});