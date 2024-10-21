/**
 * FleetMetrics
 * @version 1.0.0
 * @description A simple UI framework for building beautiful responsive websites and web apps.
 * @license MIT
 * @see https://draftscripts.com/
 */

/**
 * Core Dependencies
 */
import 'preline/preline';
import 'simplebar';

// Alpine & Plugins
import persist from '@alpinejs/persist';
import Alpine from 'alpinejs';

window.Alpine = Alpine;
Alpine.plugin(persist);
// You will need a ResizeObserver polyfill for browsers that don't support it! (iOS Safari, Edge, ...)
import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

// tippy.js for tooltip
import tippy from 'tippy.js';
window.tippy = tippy;

(function () {
    // set current year in footer
    const yearEle = document.querySelector('#footer-year');
    if (yearEle) {
        yearEle.innerHTML = `© 2023 - ${new Date().getFullYear()}`;
    }

    // screen loader
    const loading = document.querySelector('.loading');
    loading?.remove();

    // vertical menu active
    let currentPath = window.location.pathname;
    if (currentPath == '/') {
        currentPath = '/index.html';
    }

    const content = document.querySelector('.tw-nav-menu');
    const sidebarToggle = document.querySelectorAll('.toggle-sidebar');
    const wrapper = document.querySelector('.tw--container');
    const overlay = document.querySelector('.menu-shadow');
    sidebarToggle.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const windowWidth = window.innerWidth;
            if (windowWidth < 1024) {
                verticalMenu.classList.toggle('expanded');
                overlay.classList.toggle('hidden');
            } else {
                verticalMenu.classList.toggle('collapsed');
                wrapper.classList.toggle('expanded');
            }
        });
    });

    const menuItem = document.querySelector(`.tw-nav-menu a[href="${currentPath}"]`);

    if (menuItem) {
        // Add 'active' class to the selected menu item
        menuItem.classList.add('active');

        // Traverse upwards to expand parent accordions
        let parentMenu = menuItem.closest('.twd--menu-item.hs-accordion'); // Start with the closest accordion

        while (parentMenu) {
            // Find the associated accordion toggle button
            const toggleButton = parentMenu.querySelector('.hs-accordion-toggle');

            if (toggleButton) {
                // Add 'active' class to the parent accordion button
                toggleButton.classList.add('active');
                parentMenu.classList.add('active');

                // Expand the associated submenu by adding the class to make it visible
                const submenu = parentMenu.querySelector('.hs-accordion-content');
                if (submenu) {
                    submenu.classList.add('!block'); // Ensure the submenu is visible
                }
            }

            // Move up to the next parent accordion if present
            parentMenu = parentMenu.closest('.twd--menu-item.hs-accordion')?.parentElement.closest('.hs-accordion');
        }
    }

    // for scroll sidebar menu
    const activeMenu = content?.querySelector('.tw-menu-link.active');
    const activeSubmenu = content?.querySelector('.twd--link.active');
    if (activeSubmenu) {
        activeSubmenu.scrollIntoView({ block: 'center', behavior: 'smooth' });
    } else if (activeMenu) {
        activeMenu.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }

    const verticalMenu = document.querySelector('.vertical-menu');
    window.addEventListener('resize', () => {
        if (window.innerWidth < 1024) {
            verticalMenu.classList.remove('collapsed');
        } else {
            verticalMenu.classList.remove('expanded');
        }
    });
    // window scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.navbar-nav');
        if (document.documentElement.scrollTop > 0) {
            // add class to header
            header.classList.add('scrollable');
        } else {
            // remove class from header
            header.classList.remove('scrollable');
        }
    });

    // theme config
    const initialize = {
        locale: 'en', // en, da, de, el, es, fr, hu, it, ja, pl, pt, ru, sv, tr, zh
        theme: 'light', // light, dark, system
        rtlClass: 'ltr', // rtl, ltr
        menu: 'vertical', // vertical, horizontal
        layout: 'full', // full, boxed-layout
        animation: 'animate__fadeIn', // animate__fadeIn, animate__fadeInDown, animate__fadeInUp, animate__fadeInLeft, animate__fadeInRight, animate__slideInDown, animate__slideInLeft, animate__slideInRight, animate__zoomIn
        navbar: 'navbar-fixed', // navbar-static, navbar-fixed, navbar-hidden
        footer: 'footer-fixed', // footer-static, footer-fixed, footer-hidden
        semiDark: false,
        sidebar: false,
    };

    // theme config persist with alpine js store
    Alpine.store('app', {
        name: 'FleetMetrics',
        // theme
        theme: Alpine.$persist(initialize.theme),
        toggleTheme(val) {
            let theme = initialize.theme; // light|dark|system
            if (val && val != 'toggle') {
                theme = val;
            } else {
                if (this.theme === 'dark') {
                    theme = 'light';
                } else {
                    theme = 'dark';
                }
            }
            if (theme == 'dark') {
                this.semiDark = false;
            }

            this.theme = theme;
        },
        // sidebar
        sidebar: Alpine.$persist(initialize.sidebar),
        toggleVMenu() {
            this.sidebar = !this.sidebar;
        },
        sidebarCollapsed: 'compact', // expanded, compact, collapsed
        collapsibleMenu() {
            console.log('collapsibleMenu');
        },

        // navigation menu
        menu: Alpine.$persist(initialize.menu),
        toggleMenu(val) {
            if (!val) {
                val = this.menu || initialize.menu; // vertical, collapsible, horizontal
            }
            this.menu = val;
        },

        // layout
        layout: Alpine.$persist(initialize.layout),
        toggleLayout(val) {
            if (!val) {
                val = this.layout || initialize.layout; // full, boxed-layout
            }

            this.layout = val;
        },

        // rtl support
        rtlClass: Alpine.$persist(initialize.rtlClass),
        toggleRTL(val) {
            if (!val) {
                val = this.rtlClass || initialize.rtlClass; // rtl, ltr
            }

            this.rtlClass = val;
            this.setRTLLayout();
        },

        setRTLLayout() {
            document.querySelector('html').setAttribute('dir', this.rtlClass || initialize.rtlClass);
        },

        // animation
        animation: Alpine.$persist(initialize.animation),
        toggleAnimation(val) {
            if (!val) {
                val = this.animation || initialize.animation;
            }
            val = val?.trim();

            this.animation = val;
        },

        // navbar type
        navbar: Alpine.$persist(initialize.navbar),
        toggleNavbar(val) {
            if (!val) {
                val = this.navbar || initialize.navbar;
            }

            this.navbar = val;
        },
        // footer type
        footer: Alpine.$persist(initialize.footer),
        toggleFooter(val) {
            if (!val) {
                val = this.footer || initialize.footer;
            }

            this.footer = val;
        },

        // semi dark
        semiDark: Alpine.$persist(initialize.semiDark),

        toggleSemiDark() {
            console.log('toggleSemiDark');
        },

        // multi language
        locale: Alpine.$persist(initialize.locale),
        toggleLocale(val) {
            if (!val) {
                val = this.locale || initialize.locale;
            }

            this.locale = val;
        },
    });

    //? alpine data
    Alpine.data('themeConfig', () => ({
        fullscreen: false,
        showCustomizer: false,
        init() {
            this.$store.app.setRTLLayout();
            // watch showCustomizer
            this.$watch('showCustomizer', value => {
                if (value) {
                    document.body.classList.add('overflow-hidden');
                } else {
                    document.body.classList.remove('overflow-hidden');
                }
            });
        },
        toggleCustomizer() {
            this.showCustomizer = !this.showCustomizer;
        },
        toggleTheme(val) {
            this.$store.app.toggleTheme(val);
        },
        toggleFullscreen() {
            if (this.fullscreen) {
                document.exitFullscreen();
            } else {
                document.documentElement.requestFullscreen();
            }
            this.fullscreen = !this.fullscreen;
        },
        get appTheme() {
            return this.$store.app.theme;
        },
        get appConfig() {
            const app = this.$store.app;
            let theme = this.appTheme;
            if (theme == 'system') {
                theme = !!window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            return [theme, app.menu, app.layout].filter(Boolean);
        },
        get semiDarkMenu() {
            return this.$store.app.semiDark ? 'semi-dark' : '';
        },
        get navbarType() {
            return this.$store.app.navbar;
        },
        get footerType() {
            return this.$store.app.footer;
        },
        get fullScreenIcon() {
            return {
                'icon-[mdi--fullscreen]': this.$store.app.fullscreen == 'fullscreen',
                'icon-[mdi--fullscreen-exit]': this.$store.app.fullscreen !== 'fullscreen',
            };
        },
        get brightnessIcon() {
            return {
                'icon-[mdi--brightness-6]': this.appTheme === 'light',
                'icon-[mdi--brightness-2]': this.appTheme === 'dark',
                'icon-[mdi--brightness-auto]': this.appTheme === 'system',
            };
        },
        get themeIcon() {
            return this.appTheme == 'system' ? 'brightness_auto' : `${this.appTheme}_mode`;
        },
        get appName() {
            return 'Fleet<span class="text-primary">Metrics</span>';
        },
        get appLink() {
            return 'https://draftscripts.com/ui';
        },
        get themeDocs() {
            return 'https://draftscripts.com/docs';
        },
        get repoLink() {
            return 'https://github.com/kzamanbd/twilightui';
        },
    }));

    // Magic: $tooltip
    Alpine.magic('tooltip', el => (message, placement) => {
        let instance = tippy(el, {
            content: message,
            trigger: 'manual',
            placement: placement || undefined,
            allowHTML: true,
        });

        instance.show();
    });

    Alpine.directive('d-tooltip', (el, { expression }, { evaluate }) => {
        let string = evaluate(expression);
        tippy(el, {
            content: string.charAt(0).toUpperCase() + string.slice(1),
        });
    });

    // Directive: x-tooltip
    Alpine.directive('tooltip', (el, { expression }) => {
        tippy(el, {
            content: expression,
            placement: el.getAttribute('data-placement') || undefined,
            allowHTML: true,
            delay: el.getAttribute('data-delay') || 0,
            animation: el.getAttribute('data-animation') || 'fade',
            theme: el.getAttribute('data-theme') || '',
        });
    });

    // Magic: $popovers
    Alpine.magic('popovers', el => (message, placement) => {
        let instance = tippy(el, {
            content: message,
            placement: placement || undefined,
            interactive: true,
            allowHTML: true,
            delay: el.getAttribute('data-delay') || 0,
            animation: el.getAttribute('data-animation') || 'fade',
            theme: el.getAttribute('data-theme') || '',
            trigger: el.getAttribute('data-trigger') || 'click',
        });

        instance.show();
    });

    Alpine.start();
})();

/**
 * Ripples
 * @version 1.0.0
 * @description A simple ripples plugin for FleetMetrics
 */

(function () {
    // get all elements with ripple attribute
    const ripples = document.querySelectorAll('[data-ripple]');

    // add event listener to each element
    function debounce(func, delay) {
        let inDebounce;

        return function () {
            let args = arguments;
            let context = this;

            clearTimeout(inDebounce);
            return (inDebounce = setTimeout(() => {
                return func.apply(context, args);
            }, delay));
        };
    }

    // add event listener to each element
    function addRipple(e) {
        const rippleContainer = this.querySelector('.ripple--container');

        const size = rippleContainer.offsetWidth;
        const pos = rippleContainer.getBoundingClientRect();
        const rippler = document.createElement('span');
        const x = e.pageX - pos.left - size / 2;
        const y = e.pageY - pos.top - size / 2;
        let style = `top: ${y}px; left: ${x}px; height: ${size}px; width: ${size}px;`;

        // adding optional option for ripple
        if (this.getAttribute('ripple-color')) {
            style += `background-color: ${this.getAttribute('ripple-color')}`;
        }

        if (this.getAttribute('ripple-radius')) {
            style += `border-radius: ${this.getAttribute('ripple-radius')}`;
        }

        rippleContainer.appendChild(rippler);
        rippler.setAttribute('style', style);
    }

    // remove all ripples
    function cleanUp(e) {
        const rippleContainer = this.querySelector('.ripple--container');
        while (rippleContainer.firstChild) {
            rippleContainer.removeChild(rippleContainer.firstChild);
        }
    }
    // add event listener to each element
    ripples.forEach(ripple => {
        const rippleContainer = document.createElement('div');
        rippleContainer.className = 'ripple--container';

        // add ripple on mouse click
        ripple.addEventListener('mousedown', addRipple);
        // remove ripple after mouse click
        ripple.addEventListener('mouseup', debounce(cleanUp, 2000));

        ripple.rippleContainer = rippleContainer;
        ripple.appendChild(rippleContainer);
    });
})();
