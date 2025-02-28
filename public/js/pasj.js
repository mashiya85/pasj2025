function dropdownHover() {
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');
    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('mouseenter', function () {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            dropdownMenu.classList.add('show');
        });

        dropdown.addEventListener('mouseleave', function () {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            dropdownMenu.classList.remove('show');
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    dropdownHover();
});
