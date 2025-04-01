function dropdownHover() {
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');
    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('mouseenter', function () {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            const dropdown = new bootstrap.Dropdown(dropdownMenu);
            dropdown.show();
        });

        dropdown.addEventListener('mouseleave', function () {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            const dropdown = new bootstrap.Dropdown(dropdownMenu);
            dropdown.hide();
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    dropdownHover();
});
