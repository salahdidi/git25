// Filtrage des cartes par categorie 
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.gallery-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        // Mise a jour du bouton actif 
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // Afficher / cacher les cartes 
        cards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}); 