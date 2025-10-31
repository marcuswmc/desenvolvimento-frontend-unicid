/*
 * script.js - Entrega III: Programação para Interfaces Web
 * Estrutura Modular: SPA Básico, Sistema de Templates e Validação de Formulários.
 */

// ==============================================
// 1. MÓDULO: UTILS E TEMPLATE SYSTEM (SPA BÁSICO)
// ==============================================

/**
 * Define o conteúdo HTML para cada rota da aplicação (Sistema de Templates).
 * O conteúdo original da index.html foi transformado no template '/'.
 */
const templates = {
    // 1. Template: PÁGINA INICIAL (Conteúdo completo da index.html)
    '/': {
        title: 'Início',
        content: `
            <section id="hero" class="hero" aria-labelledby="hero-heading">
                <div class="container">
                    <h2 id="hero-heading">
                        **Um Gesto de Carinho Transforma o Mundo.**
                    </h2>
                    <p>
                        Junte-se a nós. Sua ajuda, seja como voluntário ou doador, é a semente de um futuro mais justo e solidário.
                    </p>
                    <a href="#projetos" class="button primary-cta">Ver Projetos e Apoiar</a>
                </div>
                <figure class="hero-image">
                    <img src="assets/images/hero-home.jpg" alt="Foto inspiradora de voluntários interagindo com pessoas que ajudam, sorrindo.">
                </figure>
            </section>

            <section id="missao" aria-labelledby="missao-heading">
                <div class="container">
                    <h2 id="missao-heading">Nossa Essência: Abrace a Causa</h2>
                    <div class="grid-3-col">
                        <article class="card">
                            <h3><span aria-hidden="true">❤️</span> Missão</h3>
                            <p>
                                Promover a inclusão social e o desenvolvimento sustentável em comunidades vulneráveis, agindo com **transparência e amor**.
                            </p>
                        </article>
                        <article class="card">
                            <h3><span aria-hidden="true">✨</span> Visão</h3>
                            <p>
                                Ser reconhecida como a principal ponte entre a vontade de ajudar e a real necessidade de apoio no país.
                            </p>
                        </article>
                        <article class="card">
                            <h3><span aria-hidden="true">🤝</span> Valores</h3>
                            <p>
                                Empatia, Transparência, Colaboração e Inovação.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section id="chamada-acao" class="background-color-light" aria-labelledby="chamada-heading">
                <div class="container text-center">
                    <h2 id="chamada-heading">Como Você Pode Fazer a Diferença?</h2>
                    <p class="lead-text">
                        Seja doando seu tempo, seu talento ou um recurso financeiro. Toda ajuda é valiosa.
                    </p>
                    <div class="button-group">
                        <a href="#projetos" class="button secondary-cta">Quero Ser Voluntário</a>
                        <a href="#doacao" class="button tertiary-cta">Quero Doar Agora</a>
                    </div>
                </div>
            </section>

            <section id="contato" aria-labelledby="contato-heading">
                <div class="container">
                    <h2 id="contato-heading">Fale Conosco</h2>
                    <address class="contact-info">
                        <p>
                            <span aria-hidden="true">📍</span> **Endereço:** Rua da Solidariedade, 123 - Bairro Esperança - Cidade/Estado - CEP: 12345-678
                        </p>
                        <p>
                            <span aria-hidden="true">📞</span> **Telefone:** <a href="tel:+5511987654321">(11) 98765-4321</a>
                        </p>
                        <p>
                            <span aria-hidden="true">📧</span> **E-mail:** <a href="mailto:contato@abraceacausa.org.br">contato@abraceacausa.org.br</a>
                        </p>
                    </address>
                    <figure class="map-embed">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.069941198424!2d-46.639557!3d-23.55052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5843a0d3b66b%3A0x62a8753e1a6c9d!2sS%C3%A3o%20Paulo%20Cathedral!5e0!3m2!1sen!2sbr!4v1633537243912!5m2!1sen!2sbr" 
                            width="100%" 
                            height="300" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy"
                            title="Localização da Sede da ONG no Mapa (Exemplo: Catedral da Sé - SP)">
                        </iframe>
                        <figcaption>Encontre nossa sede. Venha nos visitar!</figcaption>
                    </figure>
                </div>
            </section>
        `
    },

    // 2. Template: PROJETOS & VOLUNTARIADO (Simulado)
    'projetos': {
        title: 'Projetos',
        content: `
            <section class="background-color-light">
                <div class="container">
                    <h2 class="text-center">Nossos Projetos de Impacto</h2>
                    <p class="lead-text text-center">Encontre aqui a causa que mais te toca e descubra como o seu apoio pode ser decisivo.</p>
                    
                    <div class="projeto-card">
                        <figure><img src="assets/images/projeto1.jpg" alt="Crianças lendo livros."></figure>
                        <div class="content">
                            <h3>Projeto Leitura para Todos</h3>
                            <span class="badge" style="background-color: var(--color-primary);">Educação</span>
                            <p>Iniciativa de reforço escolar e distribuição de livros em comunidades carentes.</p>
                            <a href="#cadastro" class="secondary-cta full-width" style="margin-top: auto;">Detalhes e Inscrição</a>
                        </div>
                    </div>

                     <div class="projeto-card reverse-layout">
                        <figure><img src="assets/images/projeto2.jpg" alt="Voluntários plantando árvores."></figure>
                        <div class="content">
                            <h3>Mutirão de Limpeza Ambiental</h3>
                            <span class="badge" style="background-color: var(--color-secondary);">Sustentabilidade</span>
                            <p>Ação mensal de coleta de lixo e conscientização ambiental em áreas de preservação.</p>
                            <a href="#cadastro" class="secondary-cta full-width" style="margin-top: auto;">Participar</a>
                        </div>
                    </div>
                </div>
            </section>
        `
    },

    // 3. Template: CADASTRO (Formulário para validação)
    'cadastro': {
        title: 'Cadastro',
        content: `
            <section class="background-color-light text-center">
                <div class="container">
                    <div class="form-container">
                        <h2>Junte-se à Causa!</h2>
                        <p class="lead-text">Preencha o formulário para se tornar um voluntário ou doador.</p>
                        
                        <form id="cadastroForm">
                            <fieldset>
                                <legend>Dados Pessoais</legend>
                                <label for="nome">Nome Completo (Obrigatório):</label>
                                <input type="text" id="nome" name="nome" required placeholder="Seu nome completo">
                                
                                <label for="email">E-mail (Obrigatório):</label>
                                <input type="email" id="email" name="email" required placeholder="exemplo@email.com.br">
                                
                                <label for="telefone">Telefone (DDD + Número - Obrigatório):</label>
                                <input type="tel" id="telefone" name="telefone" pattern="\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}" required placeholder="(99) 99999-9999">
                                
                            </fieldset>
                            
                            <fieldset>
                                <legend>Interesses</legend>
                                <p>Como você deseja contribuir? (Selecione pelo menos um)</p>
                                <div class="checkbox-group">
                                    <input type="checkbox" id="voluntario" name="interesse" value="voluntario">
                                    <label for="voluntario">Voluntariado</label>
                                    
                                    <input type="checkbox" id="doacao" name="interesse" value="doacao">
                                    <label for="doacao">Doação em Dinheiro</label>
                                </div>
                                <p class="politica">Ao enviar, você concorda com nossa Política de Privacidade.</p>
                            </fieldset>
                            
                            <button type="submit" class="primary-cta full-width margin-top-2">Enviar Cadastro</button>
                            <div id="form-feedback" class="visually-hidden" role="alert" style="margin-top: 1rem;"></div>
                        </form>
                    </div>
                </div>
            </section>
        `
    }
};

/**
 * Função principal de roteamento da SPA: Carrega o template baseado na hash da URL.
 */
const router = () => {
    // Pega a hash (ex: 'projetos') ou '/' se for a raiz.
    const path = window.location.hash.slice(1) || '/';
    const route = templates[path] || templates['/']; // Fallback para a página inicial

    const appContent = document.getElementById('app-content');
    if (appContent) {
        // Renderiza o conteúdo (Manipulação do DOM)
        appContent.innerHTML = route.content;
        window.scrollTo(0, 0); // Volta ao topo
    }
    document.title = route.title + ' | Abrace a Causa';

    // Re-bind events: Inicializa a validação apenas no template de cadastro
    if (path === 'cadastro') {
        initFormValidation();
    }
    
    // Atualiza o link ativo na navegação
    document.querySelectorAll('#main-menu a').forEach(link => {
        link.removeAttribute('aria-current');
        if (link.getAttribute('href') === window.location.hash || (window.location.hash === '' && link.getAttribute('href') === '#')) {
            link.setAttribute('aria-current', 'page');
        }
    });
};


// ==============================================
// 3. MÓDULO: VALIDAÇÃO ROBUSTA DE FORMULÁRIOS
// ==============================================

/**
 * Realiza a verificação de consistência de dados (validação robusta).
 */
const validateForm = (form) => {
    let isValid = true;
    const feedback = document.getElementById('form-feedback');
    let errors = [];
    
    // Limpa estados de erro anteriores
    form.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));

    // 3.1. Validação de Opções (Pelo menos um interesse deve ser selecionado)
    const interesseChecks = form.querySelectorAll('input[name="interesse"]:checked');
    if (interesseChecks.length === 0) {
        isValid = false;
        errors.push("Você deve selecionar pelo menos uma forma de contribuição (Voluntariado ou Doação).");
    }

    // 3.2. Validação de Campos Obrigatórios Vazios
    form.querySelectorAll('input[required]').forEach(input => {
        // Exclui a validação de checkboxes aqui, pois já foi feita acima (Interesse)
        if (input.type !== 'checkbox' && input.type !== 'radio' && !input.value.trim()) {
            isValid = false;
            errors.push(`O campo **${input.name.toUpperCase()}** não pode estar vazio.`);
            input.classList.add('input-error');
        }
    });

    // 3.3. Validação de Email (Regex mais robusta)
    const emailInput = form.elements['email'];
    if (emailInput && emailInput.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        isValid = false;
        errors.push("O formato do e-mail é inválido. Ex: contato@ong.org.br");
        emailInput.classList.add('input-error');
    }

    // 3.4. Feedback ao Usuário (Aviso de preenchimento incorreto)
    if (!isValid) {
        feedback.classList.remove('visually-hidden', 'alert-success');
        feedback.classList.add('alert-error');
        feedback.innerHTML = `<strong>Erro no preenchimento:</strong><ul style="padding-left: 20px;">${errors.map(err => `<li>${err}</li>`).join('')}</ul>`;
        feedback.style.display = 'block';
    } else {
        // Sucesso
        feedback.classList.remove('visually-hidden', 'alert-error');
        feedback.classList.add('alert-success');
        feedback.innerHTML = '<strong>Sucesso!</strong> Formulário enviado. Em breve entraremos em contato.';
        feedback.style.display = 'block';
        
        // Simulação de envio
        setTimeout(() => {
            feedback.style.display = 'none';
            form.reset(); 
        }, 3000);
    }

    return isValid;
};


/**
 * Inicializa a escuta de eventos do formulário de cadastro.
 */
const initFormValidation = () => {
    const form = document.getElementById('cadastroForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão da página
            validateForm(this);
        });
    }
};


// ==============================================
// 4. INICIALIZAÇÃO DA APLICAÇÃO
// ==============================================

document.addEventListener('DOMContentLoaded', () => {
    // 4.1. Inicia o SPA (Carrega o template inicial)
    router(); 

    // 4.2. Escuta mudanças na hash da URL para navegação SPA
    window.addEventListener('hashchange', router);
    
    // 4.3. Implementação do menu toggle (Mobile)
    const menuToggle = document.querySelector('.menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mainMenu.setAttribute('aria-expanded', !isExpanded);
        });
        
        // Fecha o menu após clicar em um link
        mainMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (link.getAttribute('href').startsWith('#')) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                    mainMenu.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
});