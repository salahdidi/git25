// Annee dynamique dans le footer 
document.getElementById('year').textContent = new Date().getFullYear(); 
  
// Message de bienvenue dans la console (utile pour les tests) 
console.log('Site charge avec succes ! Version 1.0'); 
  
// Surbrillance du lien actif dans la nav 
const currentPage = window.location.pathname.split('/').pop() || 'index.html'; 
document.querySelectorAll('.navbar a').forEach(link => { 
  if (link.getAttribute('href') === currentPage) { 
    link.classList.add('active'); 
  } else { 
    link.classList.remove('active'); 
  } 
}); 