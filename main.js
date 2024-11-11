document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('.resume-section');
    sections.forEach(function (section) {
        var header = section.querySelector('h2');
        var content = section.querySelector('.section-content');
        if (header && content) {
            header.addEventListener('click', function () {
                content.classList.toggle('collapsed');
                header.classList.toggle('collapsed');
            });
        }
    });
});
