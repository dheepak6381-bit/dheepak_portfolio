/**
 * Project Data and Functionality
 * Handles rendering, filtering, search, and modal interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Project Data ---
    const projectsData = [
        {
            id: 'pyrosentinel',
            title: 'PyroSentinel – AIoT Forest Fire Early Detection System',
            role: 'Lead Developer & Indian Patent Holder',
            duration: '2026',
            categories: ['iot', 'hardware'],
            tags: ['ESP32', 'LoRa Mesh', 'PSO Algorithm', 'Sensor Fusion', 'AI'],
            image: 'assets/images/projects/project1.png',
            shortDesc: 'Patented AI-powered LoRa-based low power forest fire early detection communication system.',
            details: `
                <div class="modal__section">
                    <h3 class="modal__section-title">Overview</h3>
                    <p>Designed and developed an ESP32 and LoRa-based intelligent forest fire detection system with multi-sensor fusion and AI-driven fire prediction.</p>
                </div>
                <div class="modal__section">
                    <h3 class="modal__section-title">Technical Implementation</h3>
                    <p>Implemented Particle Swarm Optimization (PSO) for intelligent mesh routing, ensuring robust low-power communication over long distances in off-grid forest environments.</p>
                </div>
                <div class="modal__section">
                    <h3 class="modal__section-title">Impact</h3>
                    <p>Officially published as an Indian Patent (App No: 202641055047 A).</p>
                </div>
            `
        },
        {
            id: 'abhaya-lora',
            title: 'ABHAYA: Offline LoRa-Fog Intelligent Safety Watch',
            role: 'Embedded Systems Developer',
            duration: '2026',
            categories: ['iot', 'hardware'],
            tags: ['Wearable', 'LoRa', 'Fog Computing', 'PSO', 'C++'],
            image: 'assets/images/projects/project2.png',
            shortDesc: 'Patent-filed offline wearable safety and rescue communication network.',
            details: `
                <div class="modal__section">
                    <h3 class="modal__section-title">Overview</h3>
                    <p>An offline LoRa-Fog intelligent safety watch network featuring automated emergency interception for areas without cellular coverage.</p>
                </div>
                <div class="modal__section">
                    <h3 class="modal__section-title">Features</h3>
                    <ul>
                        <li>Wearable device architecture utilizing LoRa RA-02 for long-range SOS transmission.</li>
                        <li>Fog computing nodes to process and relay critical emergency data autonomously.</li>
                        <li>PSO-based routing for optimal automated emergency interception.</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'driver-emotion',
            title: 'Edge AI Driver Emotion Recognition & Vehicle Control',
            role: 'AI & Embedded Developer',
            duration: '2025',
            categories: ['software', 'hardware', 'iot'],
            tags: ['Python', 'DeepFace', 'OpenCV', 'ESP32', 'CAN'],
            image: 'assets/images/projects/project3.jpg',
            shortDesc: 'Real-time pipeline classifying driver states to actively control vehicle speed.',
            details: `
                <div class="modal__section">
                    <h3 class="modal__section-title">Overview</h3>
                    <p>Built a real-time pipeline to classify driver states such as Calm, Aggressive, and Fatigued using Edge AI and computer vision.</p>
                </div>
                <div class="modal__section">
                    <h3 class="modal__section-title">Technical Implementation</h3>
                    <p>Interfaced ESP32 control algorithms via CAN protocol to adjust vehicle speed and initiate emergency stops upon detecting severe fatigue. Developed an Edge AI-powered live web dashboard for real-time monitoring.</p>
                </div>
            `
        },
        {
            id: 'accent-conversion',
            title: 'UI/UX for Accent Conversion of Speaker in Audio',
            role: 'UI/UX Designer and Developer',
            duration: '2024',
            categories: ['uiux', 'software'],
            tags: ['Python', 'Pydub', 'Audio Processing', 'UI Design'],
            image: 'assets/images/projects/project4.jpeg',
            shortDesc: 'User interface for an AI-powered audio accent conversion tool.',
            details: `
                <div class="modal__section">
                    <h3 class="modal__section-title">Overview</h3>
                    <p>Designed and developed an intuitive interface for a complex audio processing backend that converts speaker accents in audio files.</p>
                </div>
                <div class="modal__section">
                    <h3 class="modal__section-title">Role & Impact</h3>
                    <p>Bridged the gap between complex Python audio processing scripts (Pydub, MP3/WAV manipulation) and end-users by creating a clean, accessible frontend.</p>
                </div>
            `
        },
        {
            id: 'attendance-system',
            title: 'IoT-Based Biometric Attendance Monitoring System',
            role: 'System Developer',
            duration: '2024',
            categories: ['iot', 'hardware'],
            tags: ['ESP32-S3', 'R307S', 'ThingSpeak', 'OLED'],
            image: 'assets/images/projects/project5.jpg',
            shortDesc: 'Fingerprint-based authentication with real-time OLED feedback and cloud logging.',
            details: `
                <div class="modal__section">
                    <h3 class="modal__section-title">Overview</h3>
                    <p>A smart, biometric attendance logging system built for educational or corporate environments.</p>
                </div>
                <div class="modal__section">
                    <h3 class="modal__section-title">Technical Implementation</h3>
                    <ul>
                        <li>Interfaced R307S Fingerprint module with ESP32-S3 LilyGO.</li>
                        <li>Developed fingerprint-based authentication with real-time OLED feedback.</li>
                        <li>Engineered a compact hardware enclosure and cloud-ready architecture for remote data logging via ThingSpeak.</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'glucose-monitor',
            title: 'Wearable Non-Invasive Glucose Monitoring System',
            role: 'Lead Developer',
            duration: '2025',
            categories: ['software', 'hardware', 'iot'],
            tags: ['Python', 'Tkinter', 'ThingSpeak Cloud', 'Data Visualization'],
            image: 'assets/images/projects/project6.png',
            shortDesc: 'Non-invasive glucose monitoring prototype built during Nanochip Hackathon.',
            details: `
                <div class="modal__section">
                    <h3 class="modal__section-title">Overview</h3>
                    <p>Engineered a wearable-oriented non-invasive glucose monitoring prototype during a 24-hour continuous hackathon sprint.</p>
                </div>
                <div class="modal__section">
                    <h3 class="modal__section-title">Features</h3>
                    <p>Processed and analyzed a simulated dataset of over 2,000 glucose data points for trends. Integrated ThingSpeak cloud architecture for remote tracking and developed a desktop GUI for live feedback.</p>
                </div>
            `
        },
        {
            id: 'robotic-arm',
            title: 'Autonomous Robotic Arm for Material Handling',
            role: 'Embedded Systems Developer',
            duration: '2025',
            categories: ['hardware', 'iot'],
            tags: ['STM32', 'Embedded C', 'Motor Drivers', 'Sensors'],
            image: 'assets/images/projects/project7.jpg',
            shortDesc: 'Autonomous robotic arm designed for industrial material handling.',
            details: `
                <div class="modal__section">
                    <h3 class="modal__section-title">Overview</h3>
                    <p>Designed an autonomous robotic arm for transporting materials between industrial workstations.</p>
                </div>
                <div class="modal__section">
                    <h3 class="modal__section-title">Technical Implementation</h3>
                    <ul>
                        <li>Programmed precise motion-control routines using Embedded C on STM32.</li>
                        <li>Implemented reliable pick-and-place routines through sensor integration and motor driver coordination.</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'pharma-chain',
            title: 'Pharma-Chain Hackathon',
            role: 'Front-End & Hardware Developer',
            duration: '2025',
            categories: ['iot', 'hardware'],
            tags: ['ESP32', 'DHT11', 'MQ-2', 'ThingSpeak', 'C++'],
            image: 'assets/images/projects/project2.png',
            shortDesc: 'IoT-based environment monitoring system for pharmaceutical logistics.',
            details: `
                <div class="modal__section">
                    <h3 class="modal__section-title">Overview</h3>
                    <p>An IoT monitoring solution to ensure the integrity of pharmaceutical supply chains by tracking temperature, humidity, and gas levels in transit.</p>
                </div>
                <div class="modal__section">
                    <h3 class="modal__section-title">Technical Implementation</h3>
                    <ul>
                        <li>Interfaced ESP32 with DHT11 (temp/humidity), MQ-2 (gas), and pressure sensors.</li>
                        <li>Implemented robust data logging to ThingSpeak Cloud.</li>
                        <li>Developed a web dashboard for real-time visualization of sensor data.</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'smith-chart',
            title: 'Interactive Web-Based Smith Chart Analyzer',
            role: 'Technical Developer',
            duration: '2026',
            categories: ['software', 'uiux'],
            tags: ['HTML', 'CSS', 'JavaScript', 'RF Engineering'],
            image: 'assets/images/projects/project8.jpg',
            shortDesc: 'Web-based microwave engineering tool with built-in LLM assistance.',
            details: `
                <div class="modal__section">
                    <h3 class="modal__section-title">Overview</h3>
                    <p>Developed an interactive application for RF impedance matching and high-frequency circuit analysis. A patent has been filed for this platform.</p>
                </div>
                <div class="modal__section">
                    <h3 class="modal__section-title">Features</h3>
                    <ul>
                        <li>Implemented automated VSWR and complex impedance matching calculations.</li>
                        <li>Integrated offline LLM-assisted RF analysis features for microwave network interpretation.</li>
                    </ul>
                </div>
            `
        }
    ];

    // --- DOM Elements ---
    const projectsGrid = document.getElementById('projects-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('project-search');

    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const modalCloseBtn = document.querySelector('.modal__close');

    // --- Render Projects ---
    function renderProjects(projects) {
        if (!projectsGrid) return;

        projectsGrid.innerHTML = '';

        if (projects.length === 0) {
            projectsGrid.innerHTML = '<div class="projects__empty">No projects found matching your criteria.</div>';
            return;
        }

        projects.forEach((project, index) => {
            const delay = index * 0.1;

            const card = document.createElement('div');
            card.className = 'project-card';
            card.style.animationDelay = `${delay}s`;

            // Generate tags HTML
            const tagsHtml = project.tags.slice(0, 3).map(tag => `<span class="badge">${tag}</span>`).join('');
            const extraTagHtml = project.tags.length > 3 ? `<span class="badge badge--purple">+${project.tags.length - 3}</span>` : '';

            card.innerHTML = `
                <div class="project-card__image-wrapper">
                    <img src="${project.image}" alt="${project.title}" class="project-card__img" style="width:100%; height:200px; object-fit:cover; border-bottom:var(--border-thin);">
                    <div class="project-card__overlay">
                        <button class="btn btn--primary btn--sm view-project-btn" data-id="${project.id}">View Details</button>
                    </div>
                </div>
                <div class="project-card__body">
                    <div class="project-card__tags">
                        ${tagsHtml}${extraTagHtml}
                    </div>
                    <h3 class="project-card__title">${project.title}</h3>
                    <div class="project-card__role">${project.role}</div>
                    <p class="project-card__desc">${project.shortDesc}</p>
                </div>
            `;

            projectsGrid.appendChild(card);
        });

        // Add event listeners to new buttons
        document.querySelectorAll('.view-project-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                openModal(id);
            });
        });
    }

    // Initial render
    renderProjects(projectsData);

    // --- Filtering ---
    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                filterBtns.forEach(b => b.classList.remove('is-active'));
                // Add to clicked
                btn.classList.add('is-active');

                const filterValue = btn.getAttribute('data-filter');
                filterAndSearchProjects(filterValue, searchInput ? searchInput.value : '');
            });
        });
    }

    // --- Searching ---
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const activeFilter = document.querySelector('.filter-btn.is-active').getAttribute('data-filter');
            filterAndSearchProjects(activeFilter, e.target.value);
        });
    }

    function filterAndSearchProjects(filter, searchTerm) {
        const lowerSearch = searchTerm.toLowerCase();

        const filtered = projectsData.filter(project => {
            // Check category
            const matchCategory = filter === 'all' || project.categories.includes(filter);

            // Check search term
            const matchSearch = project.title.toLowerCase().includes(lowerSearch) ||
                project.tags.some(tag => tag.toLowerCase().includes(lowerSearch));

            return matchCategory && matchSearch;
        });

        renderProjects(filtered);
    }

    // --- Modal Functionality ---
    function openModal(projectId) {
        const project = projectsData.find(p => p.id === projectId);
        if (!project) return;

        const tagsHtml = project.tags.map(tag => `<span class="badge">${tag}</span>`).join('');

        modalContent.innerHTML = `
            <div class="modal__header">
                <h2 class="modal__title gradient-text">${project.title}</h2>
                <div class="modal__meta">
                    <span class="modal__meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        ${project.role}
                    </span>
                    <span class="modal__meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        ${project.duration}
                    </span>
                </div>
                <div class="modal__tech-tags">
                    ${tagsHtml}
                </div>
            </div>
            <div class="modal__body modal__body--grid">
                <div class="modal__text-content">
                    ${project.details}
                    
                    <div style="margin-top: var(--space-8); display: flex; gap: var(--space-4);">
                        <button class="btn btn--secondary" onclick="document.querySelector('.modal__close').click()">Back to Projects</button>
                    </div>
                </div>
                <div class="modal__image-content">
                    <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: var(--radius-md); border: var(--border-thin); box-shadow: var(--shadow-lg);">
                </div>
            </div>
        `;

        modal.classList.add('is-active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        modal.classList.remove('is-active');
        document.body.style.overflow = '';
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('is-active')) {
            closeModal();
        }
    });
});

