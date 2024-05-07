// Função para rolar para a seção desejada
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80, // Ajuste para compensar o cabeçalho
            behavior: 'smooth'
        });
    }
}

// Adicionar eventos de click aos links da navegação
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const sectionId = event.target.getAttribute('href').substring(1); // Remover o "#"
        scrollToSection(sectionId);
    });
});
