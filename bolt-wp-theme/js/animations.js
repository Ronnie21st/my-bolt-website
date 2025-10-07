/**
 * Animations JavaScript - All interactive animations from Bolt design
 */

(function() {
    'use strict';

    // Scroll reveal animation handler
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');

        if (revealElements.length === 0) return;

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Optionally unobserve after revealing
                    // revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    }

    // Parallax scrolling effect
    function initParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        if (parallaxElements.length === 0) return;

        function updateParallax() {
            const scrollY = window.pageYOffset;

            parallaxElements.forEach(el => {
                const speed = el.dataset.parallax || 0.5;
                const yPos = -(scrollY * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
        }

        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });

        updateParallax();
    }

    // Counter animation
    function initCounters() {
        const counters = document.querySelectorAll('[data-counter]');

        if (counters.length === 0) return;

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        function animateCounter(element) {
            const target = parseInt(element.dataset.counter);
            const duration = parseInt(element.dataset.duration) || 2000;
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current).toLocaleString();
                }
            }, 16);
        }

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    // Hover tilt effect
    function initTiltEffect() {
        const tiltElements = document.querySelectorAll('[data-tilt]');

        if (tiltElements.length === 0) return;

        tiltElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;

                el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            });

            el.addEventListener('mouseleave', () => {
                el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        });
    }

    // Smooth scroll to anchor
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                if (href === '#' || href === '#0') return;

                const target = document.querySelector(href);

                if (target) {
                    e.preventDefault();
                    const offset = 80;
                    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Stagger animation for lists
    function initStaggerAnimation() {
        const staggerContainers = document.querySelectorAll('[data-stagger]');

        if (staggerContainers.length === 0) return;

        const staggerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('staggered')) {
                    entry.target.classList.add('staggered');
                    const children = entry.target.children;
                    const delay = parseInt(entry.target.dataset.stagger) || 100;

                    Array.from(children).forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('revealed');
                        }, index * delay);
                    });

                    staggerObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        staggerContainers.forEach(container => {
            staggerObserver.observe(container);
        });
    }

    // Progress bar animation
    function initProgressBars() {
        const progressBars = document.querySelectorAll('[data-progress]');

        if (progressBars.length === 0) return;

        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                    const progress = entry.target.dataset.progress;
                    const fill = entry.target.querySelector('.progress-fill');

                    if (fill) {
                        setTimeout(() => {
                            fill.style.width = progress + '%';
                        }, 200);
                    }

                    progressObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        progressBars.forEach(bar => {
            progressObserver.observe(bar);
        });
    }

    // Image lazy loading with fade-in
    function initLazyLoad() {
        const lazyImages = document.querySelectorAll('img[data-src]');

        if (lazyImages.length === 0) return;

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, { rootMargin: '50px' });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Background parallax on scroll
    function initBackgroundParallax() {
        const parallaxBgs = document.querySelectorAll('[data-bg-parallax]');

        if (parallaxBgs.length === 0) return;

        function updateBgParallax() {
            const scrollY = window.pageYOffset;

            parallaxBgs.forEach(el => {
                const speed = parseFloat(el.dataset.bgParallax) || 0.5;
                const rect = el.getBoundingClientRect();
                const elementTop = rect.top + scrollY;
                const yPos = (scrollY - elementTop) * speed;
                el.style.backgroundPosition = `center ${yPos}px`;
            });
        }

        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateBgParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });

        updateBgParallax();
    }

    // Initialize all animations
    function initAllAnimations() {
        initScrollReveal();
        initParallax();
        initCounters();
        initTiltEffect();
        initSmoothScroll();
        initStaggerAnimation();
        initProgressBars();
        initLazyLoad();
        initBackgroundParallax();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAllAnimations);
    } else {
        initAllAnimations();
    }

    // Re-initialize on dynamic content load (for Elementor)
    window.addEventListener('elementor/frontend/init', initAllAnimations);

})();
