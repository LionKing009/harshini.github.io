// ==============active Links=============

$(document).ready(function(){
    $('#navLinks').click(function(){
    $('#navLinks li a').removeClass("active")
        $(this).toggleClass("active");
    });
});

$('#testimonialReview').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    
})

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

// ==================Scrolling-top===========

// Get the element
let topBtn = document.querySelector(".top-scrolling");

// On Click, Scroll to the page's top, replace 'smooth' with 'instant' if you don't want smooth scrolling
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// On scroll, Show/Hide the btn with animation
window.onscroll = () => window.scrollY > 500 ? topBtn.style.opacity = 1 : topBtn.style.opacity = 0






// Toggle button

$("#toggle-btn").click(function(){
    $("ul").slideToggle();
});



// ============ Owl-carousel slider=====================

$('.owl-carousel').owlCarousel({
            loop:true,
            margin:25,
            nav:true,
            dots:false,
            autoplay: true,
            autoplayTimeout:2000,
            autoplayHoverPause: true,
            responsive:
            {
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                968:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })
      
// ==========================aos-animation================
AOS.init({
    duration: 2000,
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
})



// ===============CART IMAGE CHANGES============

function clickimg(imgBox){
    var fullImg = document.getElementById("imagebox");
    fullImg.src = imgBox.src
}

function openCart(){
    window.open("details.html");
}

function addCart(){
    window.open("cart.html");
}