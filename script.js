$(document).ready(function() {
    // Example: Highlight current page link in navigation
    $('nav ul li a').each(function() {
        if (this.href == window.location.href) {
            $(this).addClass('active');
        }
    });
});
