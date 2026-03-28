        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        mono: ['JetBrains Mono', 'monospace'],
                    },
                    colors: {
                        brand: {
                            50: '#f0f9ff',
                            100: '#e0f2fe',
                            400: '#38bdf8',
                            500: '#0ea5e9',
                            600: '#0284c7',
                            900: '#0c4a6e',
                        },
                        dark: {
                            900: '#0f172a',
                            800: '#1e293b',
                            700: '#334155',
                        }
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-20px)' },
                        }
                    }
                }
            }
        }
        
        // Mobile menu toggle
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                document.getElementById('mobile-menu').classList.add('hidden');
            });
        });

        // Simple form handling (prevent default for demo)
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Message Sent!';
            btn.classList.add('bg-green-600', 'hover:bg-green-500');
            btn.classList.remove('bg-brand-600', 'hover:bg-brand-500');
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.remove('bg-green-600', 'hover:bg-green-500');
                btn.classList.add('bg-brand-600', 'hover:bg-brand-500');
                this.reset();
            }, 3000);
        });

        // Scroll to top function
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });        }

        // Scroll-triggered animations using Intersection Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-animate');
                }
            });
        }, observerOptions);

        // Change navigation background after scrolling for a short time
        const navElement = document.querySelector('nav');
        let scrollTimer = null;

        function handleNavBackgroundOnScroll() {
            if (!navElement) return;

            if (window.scrollY === 0) {
                navElement.classList.remove('nav-scroll-blue');
                if (scrollTimer) {
                    clearTimeout(scrollTimer);
                    scrollTimer = null;
                }
                return;
            }

            if (!scrollTimer) {
                scrollTimer = setTimeout(() => {
                    navElement.classList.add('nav-scroll-blue');
                    scrollTimer = null;
                }, 500);
            }
        }

        window.addEventListener('scroll', handleNavBackgroundOnScroll);

        // Observe all elements with scroll animation classes
        document.addEventListener('DOMContentLoaded', function() {
            const animatedElements = document.querySelectorAll('.scroll-fade-in-up, .scroll-fade-in-left, .scroll-fade-in-right, .scroll-scale-in, .scroll-slide-in-up');
            animatedElements.forEach(element => {
                observer.observe(element);
            });

            // Apply nav background if page is already scrolled on load
            handleNavBackgroundOnScroll();
        });
    