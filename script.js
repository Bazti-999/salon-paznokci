document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            const isInternalLink = href.startsWith("#") || href.endsWith(".html");

            if (!isInternalLink) {
                return;
            }

            event.preventDefault();

            const targetSection = isInternalLink ? document.querySelector(href) : null;
            if (targetSection) {
                scrollToTarget(targetSection);
            } else {
                window.location.href = href; // Navigate to the external link
            }
        });
    });

    function scrollToTarget(target) {
        const currentPosition = window.pageYOffset;
        const targetPosition = target.offsetTop;
        const distance = targetPosition - currentPosition;
        const duration = 300;
        const frames = 60;
        const distancePerFrame = distance / frames;

        function animateScroll(frame) {
            if (frame <= frames) {
                const scrollTo = currentPosition + (distancePerFrame * frame);
                window.scrollTo(0, scrollTo);
                setTimeout(() => {
                    animateScroll(frame + 1);
                }, duration / frames);
            }
        }
        animateScroll(1);
    }

    const scrollToTopBtn = document.createElement('div');
    scrollToTopBtn.classList.add('scroll-to-top-btn');
    scrollToTopBtn.innerHTML = '&uarr;';
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', function() {
        scrollToTarget(document.body);
    });
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
});
