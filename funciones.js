// funciones.js

// Desplazamiento suave al hacer clic en enlaces del menú
var enlaces = document.querySelectorAll('nav a');

enlaces.forEach(function(enlace) {
  enlace.addEventListener('click', function(e) {
    var destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      e.preventDefault();
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Efecto al pasar el mouse sobre botones
var botones = document.querySelectorAll('.boton');

botones.forEach(function(boton) {
  boton.addEventListener('mouseover', function() {
    boton.style.transform = 'scale(1.05)';
  });

  boton.addEventListener('mouseout', function() {
    boton.style.transform = 'scale(1)';
  });
});
