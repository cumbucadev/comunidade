(function () {
    'use strict';

    const STORAGE_KEY = 'font-dyslexic';
    const FONT_ATTRIBUTE = 'data-font-dyslexic';
    const BUTTON_ID = 'font-toggle-btn';

    let isDyslexicFont = false;
    let button = null;

    function init() {
        loadFontPreference();
        applyFontState();
        setupButton();
    }

    function loadFontPreference() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            isDyslexicFont = stored === 'true';
        } catch (e) {
            console.warn('Could not load font preference:', e);
            isDyslexicFont = false;
        }
    }

    function saveFontPreference() {
        try {
            localStorage.setItem(STORAGE_KEY, isDyslexicFont.toString());
        } catch (e) {
            console.warn('Could not save font preference:', e);
        }
    }

    function applyFontState() {
        const html = document.documentElement;

        if (isDyslexicFont) {
            html.setAttribute(FONT_ATTRIBUTE, 'true');
        } else {
            html.removeAttribute(FONT_ATTRIBUTE);
        }
    }

    function updateButtonState() {
        if (!button) return;

        const title = isDyslexicFont
            ? 'Switch to default font'
            : 'Switch to dyslexic-friendly font';

        button.setAttribute('title', title);
        button.setAttribute('aria-label', title);

        button.style.opacity = isDyslexicFont ? '0.7' : '1';

        button.classList.toggle('font-toggle--active', isDyslexicFont);
    }

    function toggleFont() {
        isDyslexicFont = !isDyslexicFont;

        applyFontState();
        updateButtonState();
        saveFontPreference();

        console.log(`Font toggle: ${isDyslexicFont ? 'Open Dyslexic' : 'Default'}`);
    }

    function setupButton() {
        button = document.getElementById(BUTTON_ID);

        if (button) {
            button.removeEventListener('click', toggleFont);
            button.addEventListener('click', toggleFont);
            updateButtonState();
        }
    }

    function handleNavigation() {
        applyFontState();
        setupButton();
    }

    function onDOMReady() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
    }

    function setupNavigationWatcher() {
        const observer = new MutationObserver(function (mutations) {
            let shouldUpdate = false;

            mutations.forEach(function (mutation) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    for (let node of mutation.addedNodes) {
                        if (node.nodeType === 1 &
                            (node.matches && node.matches('.md-header') ||
                                node.querySelector && node.querySelector('.md-header'))) {
                            shouldUpdate = true;
                            break;
                        }
                    }
                }
            });

            if (shouldUpdate) {
                setTimeout(handleNavigation, 10);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        window.addEventListener('popstate', handleNavigation);
    }

    onDOMReady();
    setupNavigationWatcher();

    if (typeof window !== 'undefined') {
        window.fontToggleDebug = {
            toggle: toggleFont,
            getState: () => isDyslexicFont,
            reinit: init
        };
    }
})();
