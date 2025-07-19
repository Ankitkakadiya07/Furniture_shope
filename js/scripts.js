$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3500,
        nav: true,
        dots: true,
        navText: [, $('.nav-prev')],
        responsive: {
            0: {
                items: 1
            },
        }
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoplayTimeout: 3500,

        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    })
});

let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));

        cart.push({ name, price });
        document.querySelector('.cart-items').innerHTML = cart.map(item =>`<li>${item.name} - $${item.price.toFixed(2)}</li>`).join('');
        document.querySelector('.total-amount').textContent = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    });
});
   

    





