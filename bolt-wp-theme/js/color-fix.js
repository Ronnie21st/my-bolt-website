/**
 * Color Fix Script - Ensures proper colors throughout the theme
 * Overrides any blue colors with white for readability
 */

(function() {
    'use strict';

    // Function to fix blue colors
    function fixBlueColors() {
        // Find all elements with inline blue text colors
        const blueTextSelectors = [
            '[style*="color: rgb(37, 99, 235)"]',
            '[style*="color: rgb(29, 78, 216)"]',
            '[style*="color:rgb(37, 99, 235)"]',
            '[style*="color:rgb(29, 78, 216)"]',
            '[style*="color:rgb(37,99,235)"]',
            '[style*="color:rgb(29,78,216)"]',
            '.text-blue-600',
            '.text-blue-700',
            '.text-blue-800',
            '.text-blue-900'
        ];

        blueTextSelectors.forEach(function(selector) {
            try {
                const elements = document.querySelectorAll(selector);
                elements.forEach(function(el) {
                    el.style.color = '#ffffff';
                    el.style.setProperty('color', '#ffffff', 'important');
                });
            } catch (e) {
                console.log('Error fixing selector:', selector);
            }
        });

        // Fix blue backgrounds
        const blueBackgroundSelectors = [
            '[style*="background-color: rgb(37, 99, 235)"]',
            '[style*="background-color: rgb(29, 78, 216)"]',
            '[style*="background:rgb(37, 99, 235)"]',
            '[style*="background:rgb(29, 78, 216)"]',
            '.bg-blue-600',
            '.bg-blue-700',
            '.bg-blue-800',
            '.bg-blue-900'
        ];

        blueBackgroundSelectors.forEach(function(selector) {
            try {
                const elements = document.querySelectorAll(selector);
                elements.forEach(function(el) {
                    el.style.backgroundColor = '#2d674d';
                    el.style.setProperty('background-color', '#2d674d', 'important');
                });
            } catch (e) {
                console.log('Error fixing bg selector:', selector);
            }
        });

        // Specific fix for hero headings
        const heroHeadings = document.querySelectorAll('.hero h1, .hero h2, [class*="hero"] h1, [class*="hero"] h2, section:first-of-type h1');
        heroHeadings.forEach(function(heading) {
            heading.style.color = '#ffffff';
            heading.style.setProperty('color', '#ffffff', 'important');
        });

        // Fix any span or div within hero that has blue
        const heroElements = document.querySelectorAll('.hero span, .hero div:not(.bg-gradient-to-r)');
        heroElements.forEach(function(el) {
            const computedColor = window.getComputedStyle(el).color;
            // Check if color is blue-ish (rgb values where blue is high)
            if (computedColor.includes('rgb(37') || computedColor.includes('rgb(29')) {
                el.style.color = '#ffffff';
                el.style.setProperty('color', '#ffffff', 'important');
            }
        });
    }

    // Run on DOM load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fixBlueColors);
    } else {
        fixBlueColors();
    }

    // Run after a short delay to catch dynamically loaded content
    setTimeout(fixBlueColors, 100);
    setTimeout(fixBlueColors, 500);
    setTimeout(fixBlueColors, 1000);

    // Watch for DOM changes
    if (window.MutationObserver) {
        const observer = new MutationObserver(function(mutations) {
            fixBlueColors();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'class']
        });
    }
})();
