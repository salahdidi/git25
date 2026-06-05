document.getElementById('contactForm').addEventListener('submit', function(e) { 
  e.preventDefault(); 
  
  const name    = document.getElementById('name').value.trim(); 
  const email   = document.getElementById('email').value.trim(); 
  const message = document.getElementById('message').value.trim(); 
  const errors  = []; 
  
  if (name.length < 2)        errors.push("Le nom doit contenir au moins 2 caracteres."); 
  if (!/\S+@\S+\.\S+/.test(email)) errors.push("Adresse email invalide."); 
  if (message.length < 10)    errors.push("Le message doit contenir au moins 10 caracteres."); 
  
  const errDiv = document.getElementById('error-msg'); 
  const okDiv  = document.getElementById('success-msg'); 
  
  if (errors.length > 0) { 
    errDiv.innerHTML = errors.join('<br>'); 
    errDiv.style.display = 'block'; 
    okDiv.style.display  = 'none'; 
  } else { 
    okDiv.style.display  = 'block'; 
    errDiv.style.display = 'none'; 
    this.reset(); 
    console.log('Formulaire valide :', { name, email, message }); 
  } 
});