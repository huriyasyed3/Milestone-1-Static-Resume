document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.resume-section');

    sections.forEach(section => {
        const header = section.querySelector('h2');
        const content = section.querySelector('.section-content');

        if (header && content) {
            header.addEventListener('click', () => {
                content.classList.toggle('collapsed');
                header.classList.toggle('collapsed');
            });
        }
    });
});