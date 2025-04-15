const linkListHeaders = document.querySelectorAll('.link-header');

        linkListHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const arrow = header.querySelector('.arrow');
                content.classList.toggle('show');
                arrow.classList.toggle('open');
            });
        });