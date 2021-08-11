/* eslint-disable no-new */
$(document).ready(() => {
    $(".glider").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: ".arrow-left",
        nextArrow: ".arrow-right",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    // smooth scroll
    const sticky = $(".main-header");

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
        // On-page links
            if (
                location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "")
          && location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                let target = $(this.hash);
                target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $("html, body").animate({
                        scrollTop: target.offset().top - sticky.outerHeight(),
                    }, 0.5);
                }
            }
        });

    // Mobile menu
    const mobileMenu = $("#mobile-menu");
    const mobileMenuItem = $("#mobile-menu .main-heder--nav-menu__item");
    const mobileMenuBtn = $("#mobile-btn");
    const mobileMenuClose = $("#mobile-menu--close");

    const toggleMobileMenu = (item) => {
        item.on("click", () => {
            mobileMenu.toggleClass("menu-on");
        });
    };

    toggleMobileMenu(mobileMenuBtn);
    toggleMobileMenu(mobileMenuItem);
    toggleMobileMenu(mobileMenuClose);

    // scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const card1 = entry.target.querySelector("#card1");
            const card2 = entry.target.querySelector("#card2");
            const card3 = entry.target.querySelector("#card3");
            const card4 = entry.target.querySelector("#card4");

            if (entry.isIntersecting) {
                card1.classList.add("animate__slideInLeft");
                card2.classList.add("animate__slideInLeft");
                card3.classList.add("animate__slideInLeft");
                card4.classList.add("animate__slideInLeft");
                return; // if we added the class, exit the function
            }

            // We're not intersecting, so remove the class!
            card1.classList.remove("animate__slideInLeft");
            card2.classList.remove("animate__slideInLeft");
            card3.classList.remove("animate__slideInLeft");
            card4.classList.remove("animate__slideInLeft");
        });
    });

    observer.observe(document.querySelector(".bottom-text--img"));

    // active class for menu

    const menuItem = $(".main-heder--nav-menu__item a");
    menuItem.on("click", function () {
        menuItem.removeClass("active");
        $(this).addClass("active");
    });
});
