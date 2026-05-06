/**
 * Animations and Intersection Observers
 * Handles scroll-triggered animations and text typing effects
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Scroll Triggered Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };

    const animateOnScrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => animateOnScrollObserver.observe(el));

    // --- Hardware Binary Decoder Effect ---
    const typewriterText = document.getElementById('typewriter-text');
    if (typewriterText) {
        const words = [
            "Embedded Systems Engineer",
            "IoT Developer",
            "Robotics Innovator",
            "Hardware Designer"
        ];
        
        const chars = "010101010101010189ABCDEF"; // Mostly binary, some hex
        let wordIndex = 0;
        let timer;
        
        function scrambleWord(word, progress) {
            let result = "";
            const lockedChars = Math.floor(progress * word.length);
            
            for (let i = 0; i < word.length; i++) {
                if (i < lockedChars) {
                    result += word[i];
                } else if (word[i] === ' ') {
                    result += ' ';
                } else {
                    result += chars[Math.floor(Math.random() * chars.length)];
                }
            }
            return result;
        }

        function decode() {
            const currentWord = words[wordIndex];
            let iteration = 0;
            const totalIterations = 25; // Slower decode
            
            clearInterval(timer);
            timer = setInterval(() => {
                const progress = iteration / totalIterations;
                typewriterText.textContent = scrambleWord(currentWord, progress);
                
                if (iteration >= totalIterations) {
                    clearInterval(timer);
                    typewriterText.textContent = currentWord; // Ensure exact match
                    setTimeout(scrambleOut, 2500); // Pause on readable text
                }
                iteration++;
            }, 40);
        }

        function scrambleOut() {
            const currentWord = words[wordIndex];
            let iteration = 0;
            const totalIterations = 15;
            
            clearInterval(timer);
            timer = setInterval(() => {
                const progress = 1.0 - (iteration / totalIterations);
                typewriterText.textContent = scrambleWord(currentWord, progress);
                
                if (iteration >= totalIterations) {
                    clearInterval(timer);
                    wordIndex = (wordIndex + 1) % words.length;
                    setTimeout(decode, 300); // Brief pause in scrambled state before next
                }
                iteration++;
            }, 30); // Fast scramble out
        }
        
        // Start decoding after initial load
        setTimeout(decode, 800);
    }

    // --- Number Counter Animation ---
    const counters = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endVal = parseFloat(target.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                const frames = 60;
                const step = endVal / frames;
                let current = 0;
                
                const isFloat = endVal % 1 !== 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < endVal) {
                        target.textContent = isFloat ? current.toFixed(2) : Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        target.textContent = endVal + (target.getAttribute('data-suffix') || '');
                    }
                };
                
                updateCounter();
                observer.unobserve(target); // Only animate once
            }
        });
    }, observerOptions);

    counters.forEach(counter => counterObserver.observe(counter));

    // --- Terminal Boot Sequence (Interactive Progress) ---
    const terminalBody = document.getElementById('terminal-body');
    if (terminalBody) {
        const bootTasks = [
            { text: "Mounting core hardware modules", duration: 800, result: "Interface: ESP32, STM32 [OK]" },
            { text: "Loading MATLAB analysis engine", duration: 1200, result: "Signal processing initialized. [OK]" },
            { text: "Establishing secure IoT link", duration: 1000, result: "Cloud Database (ThingSpeak) connected." },
            { text: "Starting UI/UX rendering subsystem", duration: 900, result: "System ready. Welcome Harishkumaran." }
        ];

        let taskIndex = 0;
        
        function processNextTask() {
            if (taskIndex >= bootTasks.length) {
                // Done
                const cursorLine = document.createElement('div');
                cursorLine.className = 'terminal__line';
                cursorLine.innerHTML = `<span class="terminal__prompt">root@harish:~#</span><span class="terminal__cursor"></span>`;
                terminalBody.appendChild(cursorLine);
                terminalBody.scrollTop = terminalBody.scrollHeight;
                return;
            }

            const task = bootTasks[taskIndex];
            
            // Create progress line
            const lineEl = document.createElement('div');
            lineEl.className = 'terminal__line';
            terminalBody.appendChild(lineEl);
            
            let startTime = null;
            
            function updateProgress(timestamp) {
                if (!startTime) startTime = timestamp;
                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / task.duration, 1);
                const percent = Math.floor(progress * 100);
                
                // Spinner for hacker vibe
                const chars = ['/', '-', '\\', '|'];
                const spinner = chars[Math.floor((elapsed / 80) % chars.length)];
                
                // Create a basic loading bar visual: [=====>    ]
                const barLength = 10;
                const filledCount = Math.floor(progress * barLength);
                const emptyCount = barLength - filledCount;
                const bar = '[' + '='.repeat(filledCount) + (progress < 1 ? '>' : '') + '&nbsp;'.repeat(emptyCount) + ']';
                
                lineEl.innerHTML = `<span class="terminal__prompt">></span><span class="terminal__text">${task.text}... ${spinner} <span style="color:var(--text-tertiary)">${bar}</span> ${percent}%</span>`;
                terminalBody.scrollTop = terminalBody.scrollHeight;
                
                if (progress < 1) {
                    requestAnimationFrame(updateProgress);
                } else {
                    // Progress complete, finalize the line
                    lineEl.innerHTML = `<span class="terminal__prompt">></span><span class="terminal__text">${task.text}... </span><span class="terminal__success">[DONE]</span>`;
                    
                    // Add the success result line
                    setTimeout(() => {
                        const resultEl = document.createElement('div');
                        resultEl.className = 'terminal__line';
                        resultEl.innerHTML = `<span class="terminal__prompt">></span><span class="terminal__success" style="font-weight:bold">${task.result}</span>`;
                        terminalBody.appendChild(resultEl);
                        terminalBody.scrollTop = terminalBody.scrollHeight;
                        
                        taskIndex++;
                        setTimeout(processNextTask, 400); // Small pause before next task
                    }, 200);
                }
            }
            requestAnimationFrame(updateProgress);
        }

        setTimeout(processNextTask, 1500);
    }
});
