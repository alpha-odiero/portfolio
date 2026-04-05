import portfolioData from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavbar();
    renderAbout();
    renderSkills();
    renderProjects();
    renderServices();
    renderContact();
    initToolsButton();
    initScrollReveal();
    initContactForm();
});

// Tools Button
function initToolsButton() {
    document.querySelectorAll('.view-tools-button').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const toolList = document.getElementById(targetId);
            if (!toolList) return;

            const isHidden = toolList.classList.toggle('hidden');
            button.textContent = isHidden ? 'View Tools' : 'Hide Tools';
        });
    });
}

// Theme Toggle
function initTheme() {
    const themeToggles = [
        document.getElementById('theme-toggle'),
        document.getElementById('theme-toggle-mobile')
    ].filter(Boolean);
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

    themeToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    });
}

// Navbar Scroll Effect & Mobile Menu
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });
    }
}

// Render About Section
function renderAbout() {
    const aboutText = document.getElementById('about-text');
    const howIWorkContainer = document.getElementById('how-i-work');
    const readMoreBtn = document.getElementById('read-more-btn');

    if (aboutText) {
        aboutText.textContent = portfolioData.about.intro;
    }

    if (howIWorkContainer) {
        howIWorkContainer.innerHTML = portfolioData.about.howIWork.map((item) => `
            <div class="group flex items-start space-x-4 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary/30 transition-all duration-300">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-sm">
                    ${item.step}
                </div>
                <div class="flex-1">
                    <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">${item.title}</h4>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">${item.description}</p>
                </div>
            </div>
        `).join('');

        if (readMoreBtn) {
            readMoreBtn.addEventListener('click', () => {
                const isHidden = howIWorkContainer.classList.toggle('hidden');
                readMoreBtn.textContent = isHidden ? 'Read More' : 'Show Less';
            });
        }
    }
}

// Render Skills Section
function renderSkills() {
    const container = document.getElementById('skills-container');
    const skillGroups = [
        {
            title: 'Frontend & Design',
            description: 'Designing polished user interfaces and digital experiences with modern frontend tools.',
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro', 'Canva']
        },
        {
            title: 'Backend & Workflow',
            description: 'Building reliable systems and efficient workflows using backend services and version control.',
            skills: ['Node.js', 'Express']
        
        },
        {
            title: 'Core Strengths',
            description: 'Focused on strong UX, responsive design, debugging, and performance optimization.',
            skills: ['Responsive Design', 'UI/UX Thinking', 'Problem Solving', 'Debugging', 'Performance Optimization']
        }
    ];

    container.innerHTML = skillGroups.map((group, index) => `
        <div class="skill-card service-card skill-grid-card">
            <div class="service-card-icon">
                <i class="fas fa-layer-group text-primary text-2xl"></i>
            </div>
            <div>
                <h3 class="service-card-title">${group.title}</h3>
                <p class="service-card-copy">${group.description}</p>
                <button type="button" class="btn-secondary mt-6 view-tools-button" data-target="tools-${index}">View Tools</button>
                <ul id="tools-${index}" class="tools-list hidden mt-6">
                    ${group.skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

function hasLiveDemo(project) {
    const liveUrl = project.live?.trim();
    return Boolean(liveUrl && liveUrl !== '#' && liveUrl !== project.github);
}

// Render Projects Section
function renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = portfolioData.projects.map(project => `
        <div class="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <div class="aspect-video overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">${project.title}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tech.map(t => `<span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">${t}</span>`).join('')}
                </div>
                <div class="flex flex-wrap gap-3">
                    <button type="button" onclick="openProjectModal(${project.id})" class="inline-flex items-center px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-medium transition-colors">
                        <i class="fas fa-eye mr-2"></i>
                        View Details
                    </button>
                    ${hasLiveDemo(project) ? `
                    <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 border border-emerald-300 dark:border-emerald-700 hover:border-emerald-500 text-emerald-700 dark:text-emerald-300 hover:text-emerald-500 rounded-lg text-sm font-medium transition-colors">
                        <i class="fas fa-arrow-up-right-from-square mr-2"></i>
                        Live Site
                    </a>
                    ` : ''}
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 hover:border-primary text-gray-700 dark:text-gray-300 hover:text-primary rounded-lg text-sm font-medium transition-colors">
                        <i class="fab fa-github mr-2"></i>
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Project Modal Logic
window.openProjectModal = (id) => {
    const project = portfolioData.projects.find(p => p.id === id);
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const modalLive = document.getElementById('modal-live');
    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-image').alt = `${project.title} preview`;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-problem').textContent = project.problem;
    document.getElementById('modal-solution').textContent = project.solution;
    document.getElementById('modal-challenges').textContent = project.challenges;
    document.getElementById('modal-github').href = project.github;

    if (modalLive) {
        if (hasLiveDemo(project)) {
            modalLive.href = project.live;
            modalLive.classList.remove('hidden');
        } else {
            modalLive.href = '#';
            modalLive.classList.add('hidden');
        }
    }

    document.getElementById('modal-tech').innerHTML = project.tech.map(t => `
        <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">${t}</span>
    `).join('');

    document.getElementById('modal-features').innerHTML = project.features.map(f => `
        <li>${f}</li>
    `).join('');

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
};

document.getElementById('close-modal').addEventListener('click', () => {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
});

// Render Services Section
function renderServices() {
    const container = document.getElementById('services-container');
    container.innerHTML = portfolioData.services.map(service => `
        <div class="service-card group">
            <div class="service-card-icon">
                <i class="${service.icon} text-primary text-3xl"></i>
            </div>
            <h3 class="service-card-title">${service.title}</h3>
            <p class="service-card-copy">${service.description}</p>
        </div>
    `).join('');
}

// Render Contact Section
function renderContact() {
    document.getElementById('contact-email').textContent = portfolioData.identity.email;
    document.getElementById('contact-phone').textContent = portfolioData.identity.phone;

    const socialContainer = document.getElementById('social-links');
    const icons = {
        github: 'fab fa-github',
        linkedin: 'fab fa-linkedin',
        whatsapp: 'fab fa-whatsapp',
        email: 'fas fa-envelope',
        tiktok: 'fab fa-tiktok',
        instagram: 'fab fa-instagram',
        twitter: 'fab fa-twitter'
    };

    socialContainer.innerHTML = Object.entries(portfolioData.identity.socials).map(([key, url]) => `
        <a href="${url}" target="_blank" class="w-12 h-12 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-all transform hover:scale-110 text-gray-600 dark:text-gray-400">
            <i class="${icons[key]}"></i>
        </a>
    `).join('');

    // Make email and phone clickable
    const emailEl = document.getElementById('contact-email');
    const phoneEl = document.getElementById('contact-phone');
    if (emailEl) {
        emailEl.innerHTML = `<a href="mailto:${portfolioData.identity.email}" class="hover:text-primary">${portfolioData.identity.email}</a>`;
    }
    if (phoneEl) {
        const digits = portfolioData.identity.phone.replace(/[^0-9+]/g, '');
        phoneEl.innerHTML = `<a href="https://wa.me/${digits.replace('+', '')}" class="hover:text-primary">${portfolioData.identity.phone}</a>`;
    }
}

// Contact Form Simulation
function initContactForm() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.textContent;
        
        btn.disabled = true;
        btn.textContent = 'Sending...';
        
        setTimeout(() => {
            alert('Message sent successfully! (Simulation)');
            form.reset();
            btn.disabled = false;
            btn.textContent = originalText;
        }, 1500);
    });
}

// Simple Scroll Reveal
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Observe other elements that should animate
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
}
