const menuToggle = document.getElementById('menuToggle');
const navTabs = document.getElementById('navTabs');
const btnTop = document.getElementById("btnTop");

// Toggle Menu
menuToggle.addEventListener('click', () => {
    navTabs.classList.toggle('active-menu');
});

// Filtro
function filterItems(category) {
    if (event) {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }
    document.querySelectorAll('.card').forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
    if (window.innerWidth <= 768) navTabs.classList.remove('active-menu');
}

// Botão Topo
window.onscroll = function() {
    btnTop.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? "block" : "none";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}