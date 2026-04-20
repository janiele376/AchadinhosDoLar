// --- 1. SELEÇÃO DE ELEMENTOS ---
const menuToggle = document.getElementById('menuToggle');
const navTabs = document.getElementById('navTabs');
const btnTop = document.getElementById("btnTop");
const searchBar = document.getElementById('searchBar');

// --- 2. MENU MOBILE ---
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navTabs.classList.toggle('active-menu');
    });
}

// --- 3. FILTRO DE CATEGORIAS ---
function filterItems(category, el) {
    // Remove 'active' de todos os botões e adiciona no clicado
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    el.classList.add('active');

    // Filtra os cards
    document.querySelectorAll('.card').forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });

    // Fecha o menu no mobile após clicar
    if (window.innerWidth <= 768) {
        navTabs.classList.remove('active-menu');
    }
}

// --- 4. BOTÃO TOPO (SCROLL) ---
// Monitora a rolagem da página
window.addEventListener('scroll', () => {
    if (btnTop) {
        // window.scrollY é mais confiável no mobile que scrollTop
        if (window.scrollY > 300) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    }
});

// Ação do clique no botão
if (btnTop) {
    btnTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --- 5. BUSCA (SEARCH BAR) ---
if (searchBar) {
    searchBar.addEventListener('input', () => {
        const searchTerm = searchBar.value.toLowerCase();
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            const title = card.querySelector('h3').innerText.toLowerCase();
            
            // Exibe o card se o título contiver o texto digitado
            if (title.includes(searchTerm)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
}

console.log("Script carregado e pronto!");