// js/utils.js 
// Fonctions utilitaires du site - exportees pour les tests 
  
/** 
 * Valide un email cote client 
 * @param {string} email 
 * @returns {boolean} 
 */ 
function validateEmail(email) { 
  if (!email || typeof email !== 'string') return false; 
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()); 
} 
  
/** 
 * Valide un message de formulaire 
 * @param {string} message 
 * @param {number} minLength - longueur minimale (defaut: 10) 
 * @returns {{ valid: boolean, error: string|null }} 
 */ 
function validateMessage(message, minLength = 10) { 
  if (!message || typeof message !== 'string') { 
    return { valid: false, error: 'Le message est requis.' }; 
  } 
  const trimmed = message.trim(); 
  if (trimmed.length < minLength) { 
    return { valid: false, error: `Le message doit contenir au moins ${minLength} caracteres.` 
}; 
  } 
  return { valid: true, error: null }; 
} 
  
/** 
 * Formate une date en francais 
 * @param {Date} date 
 * @returns {string} ex: "lundi 6 juin 2025" 
 */ 
function formatDate(date) { 
  if (!(date instanceof Date) || isNaN(date)) return 'Date invalide'; 
  return date.toLocaleDateString('fr-FR', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
  }); 
} 
  
/** 
 * Filtre un tableau de projets par categorie 
 * @param {Array} projects 
 * @param {string} category - 'all' ou une categorie specifique 
 * @returns {Array} 
 */ 
function filterProjects(projects, category) { 
  if (category === 'all') return projects; 
  return projects.filter(p => p.category === category); 
} 
  
// Export pour Node.js/Jest 
if (typeof module !== 'undefined') { 
  module.exports = { validateEmail, validateMessage, formatDate, filterProjects }; 
} 