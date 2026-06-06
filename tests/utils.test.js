// tests/utils.test.js 
const { validateEmail, validateMessage, formatDate, filterProjects } = require('../js/utils'); 
  
// ============================================================ 
// TESTS : validateEmail 
// ============================================================ 
describe('validateEmail', () => { 
  
  // Tests qui doivent reussir (cas valides) 
  test('accepte un email valide simple', () => { 
    expect(validateEmail('user@example.com')).toBe(true); 
  }); 

  test('accepte un email avec sous-domaine', () => { 
    expect(validateEmail('user@mail.example.com')).toBe(true); 
  }); 
  
  test('accepte un email avec chiffres', () => { 
    expect(validateEmail('user123@test.org')).toBe(true); 
  }); 
  
  // Tests qui doivent echouer (cas invalides) 
  test('rejette un email sans @', () => { 
    expect(validateEmail('userexample.com')).toBe(false); 
  }); 
  
  test('rejette un email sans domaine', () => { 
    expect(validateEmail('user@')).toBe(false); 
  }); 
  
  test('rejette une chaine vide', () => { 
    expect(validateEmail('')).toBe(false); 
  }); 
  
  test('rejette null', () => { 
    expect(validateEmail(null)).toBe(false); 
  }); 
  
  test('rejette un email avec espaces', () => { 
    expect(validateEmail('user @example.com')).toBe(false); 
  }); 
}); 
  
// ============================================================ 
// TESTS : validateMessage 
// ============================================================ 
describe('validateMessage', () => { 
  
  test('accepte un message suffisamment long', () => { 
    const result = validateMessage('Ceci est un message valide'); 
    expect(result.valid).toBe(true); 
    expect(result.error).toBeNull(); 
  }); 
  
  test('rejette un message trop court', () => { 
    const result = validateMessage('Court'); 
    expect(result.valid).toBe(false); 
    expect(result.error).toContain('10'); 
  }); 
  
  test('rejette un message vide', () => { 
    const result = validateMessage(''); 
    expect(result.valid).toBe(false); 
  }); 
  
  test('respecte la longueur minimale personnalisee', () => { 
    const result = validateMessage('Court', 3);  // minLength = 3 
    expect(result.valid).toBe(true); 
  }); 
}); 
  
// ============================================================ 
// TESTS : filterProjects 
// ============================================================ 
describe('filterProjects', () => { 
  const projects = [ 
    { id: 1, title: 'Audit', category: 'securite' }, 
    { id: 2, title: 'Topo', category: 'reseau' }, 
    { id: 3, title: 'App',  category: 'dev' }, 
    { id: 4, title: 'CTF',  category: 'securite' }, 
  ]; 
  
  test("retourne tous les projets avec la categorie 'all'", () => { 
    expect(filterProjects(projects, 'all')).toHaveLength(4); 
  }); 
  
  test("filtre correctement par categorie 'securite'", () => { 
    const result = filterProjects(projects, 'securite'); 
    expect(result).toHaveLength(2); 
    expect(result[0].title).toBe('Audit'); 
  }); 
  
  test("retourne un tableau vide si aucun projet ne correspond", () => { 
    expect(filterProjects(projects, 'inconnue')).toHaveLength(0); 
  }); 
  
  test("ne modifie pas le tableau original", () => { 
    filterProjects(projects, 'securite'); 
    expect(projects).toHaveLength(4);  // original inchange 
  }); 
}); 