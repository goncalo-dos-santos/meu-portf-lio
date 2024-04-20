// Adiciona funcionalidade de clique aos botões "Ver mais"
document.addEventListener('DOMContentLoaded', function() {
    var projectLinks = document.querySelectorAll('.project .btn');
  
    projectLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        var projectName = this.previousElementSibling.textContent.trim();
        alert('Você clicou em "Ver mais" para o projeto: ' + projectName);
      });
    });
  });
  