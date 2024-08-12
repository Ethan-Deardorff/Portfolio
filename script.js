const images = document.querySelectorAll('img');
const imageContainer = document.querySelectorAll('.img-container');
const header = document.querySelector('header');
const nav = header.querySelector('nav');
const headerMenuButton = header.querySelector('.mobile-nav-btn');
const html = document.querySelector('html');
const hoverElements = document.querySelectorAll('.container, .hover-text-block');
const scrollControls = document.querySelectorAll('.scroll-controls');

// Fade out preview images
setInterval(() => {
    imageContainer.forEach((container) => {
        const img = container.querySelector('.img');
        const imgPreview = container.querySelector('.img-preview');

        if (img.complete) {
            imgPreview.classList.add('inactive');
        } else {
            img.addEventListener('load', () => {
                imgPreview.classList.add('inactive');
            });
            img.addEventListener('error', (error) => {
                console.error('Image loading error:', error);
            });
        }
    });
}, 1000);



// Add presentation role to images without alt
images.forEach((image) => {
    if (!image.alt) {
        image.role = 'presentation';
    }
});



// Header functions
function handleNav(action) {
    if (action === 'add') {
        nav.classList.add('active');
        html.classList.add('no-scroll');
        headerMenuButton.classList.add('active');
        headerMenuButton.setAttribute('aria-expanded', 'true');
    } else if (action === 'remove') {
        nav.classList.remove('active');
        html.classList.remove('no-scroll');
        headerMenuButton.classList.remove('active');
        headerMenuButton.setAttribute('aria-expanded', 'false');
    }
}

headerMenuButton.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
        handleNav('remove');
    } else if (!nav.classList.contains('active')) {
        handleNav('add');
    }
});

nav.addEventListener('click', (event) => {
    if (event.target.tagName === 'UL') {
        return;
    } else {
        handleNav('remove');
    }
});



// Add "active" class on touch
hoverElements.forEach((e) => {
    e.addEventListener('touchstart', (event) => {
        event.target.classList.add('active');
    });
    e.addEventListener('touchend', (event) => {
        event.target.classList.remove('active');
    });
});



// Scrollable sections functions
scrollControls.forEach((container) => {
    const scrollContainer = container.previousElementSibling;
    const scrollBtns = container.querySelectorAll('.scroll-btn');

    const updateButtonStates = () => {
        const totalWidth = window.innerWidth;
        const currentSection = Math.floor((scrollContainer.scrollLeft + (totalWidth / 2)) / totalWidth);
        scrollBtns.forEach((btn, index) => {
            btn.classList.toggle('active', index === currentSection);
        });
    };

    updateButtonStates();

    scrollContainer.addEventListener('scroll', () => {
        updateButtonStates();
    });

    window.addEventListener('resize', () => {
        updateButtonStates();
    });

    scrollBtns.forEach((btn, index) => {
        btn.ariaLabel = `Scroll to section ${index + 1} out of ${scrollBtns.length}`;
        btn.addEventListener('click', () => {
            requestAnimationFrame(() => {
                scrollContainer.scrollLeft = index * window.innerWidth;
            })
            btn.classList.add('active');
            scrollBtns.forEach((otherBtn, otherIndex) => {
                if (otherIndex !== index) {
                    otherBtn.classList.remove('active');
                }
            });
        });
    });
});

