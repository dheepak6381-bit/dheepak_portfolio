/**
 * Main Application Logic
 * Initializes components, handles navigation and scroll behaviors
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Set Current Year in Footer ---
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // --- Header & Scroll Behavior ---
    const header = document.getElementById('header');
    const backToTopBtn = document.getElementById('back-to-top');
    const navLinks = document.querySelectorAll('.header__nav-link');
    const sections = document.querySelectorAll('section');

    function handleScroll() {
        const scrollPos = window.scrollY;

        // Header sticky background
        if (scrollPos > 50) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }

        // Back to top button visibility
        if (scrollPos > 500) {
            backToTopBtn.classList.add('is-visible');
        } else {
            backToTopBtn.classList.remove('is-visible');
        }

        // Scroll spy (Highlight active nav link)
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('is-active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('is-active');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    // --- Mobile Navigation ---
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');

    function toggleMobileMenu() {
        const isActive = mobileToggle.classList.contains('is-active');

        if (isActive) {
            mobileToggle.classList.remove('is-active');
            mobileNav.classList.remove('is-active');
            mobileToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        } else {
            mobileToggle.classList.add('is-active');
            mobileNav.classList.add('is-active');
            mobileToggle.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    }

    mobileToggle.addEventListener('click', toggleMobileMenu);

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMobileMenu();
        });
    });

    // --- Back to top click ---
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- Smooth Scrolling for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- CGPA Modal Logic ---
    const cgpaCard = document.getElementById('cgpa-card');
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');

    if (cgpaCard && modal && modalContent) {
        cgpaCard.addEventListener('click', () => {
            modalContent.innerHTML = `
                <div class="modal__header">
                    <h2 class="modal__title gradient-text">Academic Grade Sheets</h2>
                    <div class="modal__meta">
                        <span class="modal__meta-item">Kalasalingam Academy of Research and Education</span>
                    </div>
                </div>
                <div class="modal__body">
                    <p style="margin-bottom: var(--space-4); color: var(--text-secondary);">Here are my official grade sheets spanning my academic semesters, maintaining a consistent CGPA of 9.36.</p>
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-4);">
                        <div class="hover-lift" style="background: var(--bg-tertiary); padding: var(--space-4); border-radius: var(--radius-sm); text-align: center; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.3s ease;">
                            <h4 style="margin-bottom: var(--space-2);">Semester 1</h4>
                            <a href="assets/images/gradesheet-sem1.jpeg" target="_blank" style="display: block;">
                                <img src="assets/images/gradesheet-sem1.jpeg" alt="Semester 1" style="width: 100%; border-radius: var(--radius-sm); object-fit: cover; aspect-ratio: 1/1.4; background: rgba(0,0,0,0.5);">
                            </a>
                        </div>
                        <div class="hover-lift" style="background: var(--bg-tertiary); padding: var(--space-4); border-radius: var(--radius-sm); text-align: center; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.3s ease;">
                            <h4 style="margin-bottom: var(--space-2);">Semester 2</h4>
                            <a href="assets/images/gradesheet-sem2.jpeg" target="_blank" style="display: block;">
                                <img src="assets/images/gradesheet-sem2.jpeg" alt="Semester 2" style="width: 100%; border-radius: var(--radius-sm); object-fit: cover; aspect-ratio: 1/1.4; background: rgba(0,0,0,0.5);">
                            </a>
                        </div>
                        <div class="hover-lift" style="background: var(--bg-tertiary); padding: var(--space-4); border-radius: var(--radius-sm); text-align: center; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.3s ease;">
                            <h4 style="margin-bottom: var(--space-2);">Semester 3</h4>
                            <a href="assets/images/gradesheet-sem3.jpeg" target="_blank" style="display: block;">
                                <img src="assets/images/gradesheet-sem3.jpeg" alt="Semester 3" style="width: 100%; border-radius: var(--radius-sm); object-fit: cover; aspect-ratio: 1/1.4; background: rgba(0,0,0,0.5);">
                            </a>
                        </div>
                        <div class="hover-lift" style="background: var(--bg-tertiary); padding: var(--space-4); border-radius: var(--radius-sm); text-align: center; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.3s ease;">
                            <h4 style="margin-bottom: var(--space-2);">Semester 4</h4>
                            <a href="assets/images/gradesheet-sem4.jpeg" target="_blank" style="display: block;">
                                <img src="assets/images/gradesheet-sem4.jpeg" alt="Semester 4" style="width: 100%; border-radius: var(--radius-sm); object-fit: cover; aspect-ratio: 1/1.4; background: rgba(0,0,0,0.5);">
                            </a>
                        </div>
                    </div>
                </div>
            `;
            modal.classList.add('is-active');
            document.body.style.overflow = 'hidden';
        });
    }
});
