// script.js
// Funcionalidades Interativas da ONG Abrace a Causa

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Funcionalidade de Toggle do Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', () => {
            // Verifica o estado atual do atributo aria-expanded
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            
            // Alterna o estado do botão e do menu
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mainMenu.style.display = isExpanded ? 'none' : 'flex';
        });

        // Oculta o menu ao clicar em um link (boa prática mobile)
        const menuLinks = mainMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                // No mobile, o menu deve ser fechado após a navegação
                if (window.innerWidth < 768) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                    mainMenu.style.display = 'none';
                }
            });
        });
    }


    // 2. Implementação de Lazy Loading (Exemplo)
    // Para cumprir o requisito de desempenho.
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // Nenhuma ação é necessária, pois a tag 'loading="lazy"' faz o trabalho
                    // Isso é apenas um placeholder para JS mais complexo de lazy loading
                    // Se estiver usando o atributo nativo, o JS não é estritamente necessário.
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => observer.observe(img));
    } else {
        // Fallback para navegadores sem Intersection Observer:
        // Todas as imagens serão carregadas normalmente.
        console.log("IntersectionObserver não suportado, usando carregamento padrão.");
    }

    // Adicione aqui outros scripts, como validação de formulário customizada, etc.

});
function applyInputMasks() {
    
    const inputCPF = document.getElementById('cpf');
    const inputTelefone = document.getElementById('telefone');
    const inputCEP = document.getElementById('cep');

    // Máscara de CPF: 000.000.000-00
    if (inputCPF) {
        inputCPF.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
            if (value.length > 11) value = value.substring(0, 11);

            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

            e.target.value = value;
        });
    }

    // Máscara de Telefone: (00) 90000-0000 ou (00) 0000-0000
    if (inputTelefone) {
        inputTelefone.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.substring(0, 11);
            
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            value = value.replace(/(\d{4,5})(\d{4})$/, '$1-$2');
            
            e.target.value = value;
        });
    }

    // Máscara de CEP: 00000-000
    if (inputCEP) {
        inputCEP.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 8) value = value.substring(0, 8);
            
            value = value.replace(/^(\d{5})(\d)/, '$1-$2');

            e.target.value = value;
        });
    }
}

// Chame as funções dentro do DOMContentLoaded para garantir que os elementos existam
document.addEventListener('DOMContentLoaded', () => {
    applyInputMasks(); 
});