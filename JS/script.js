// side bar start

function openNav () {
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if(sidepanel){
        sidepanel.style.left = '0';
    } else {
        console.error('error: side panel not found');
    }
}

function closeNav () {
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if(sidepanel){
        sidepanel.style.left = '-320px';
    } else {
        console.error('error: side panel not found');
    }
}

// search bar

function open_search() {
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if(searchpanel){
        searchpanel.style.height = '100vh';
        searchpanel.style.borderRadius = '0';
    }else {
        console.error('error: search panel not found');
    }
}

function close_search() {
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if(searchpanel){
        searchpanel.style.height = '0';
        searchpanel.style.borderTopLeftRadius = '100%';
        searchpanel.style.borderTopRighttRadius = '100%';
    }else {
        console.error('error: search panel not found');
    }
}

// Portfolio gallary tab
function open_img(evt, cityName){
    let i, tabcontent, tablinks;

    // hide all tab content
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = 'none';
    }

    // remove active class from all tab links
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++){
        tablinks[i].classList.remove("active");

        // show the selected tab content and mark the corresponding tab link
        document.getElementById(cityName).style.display = 'block';
        evt.currentTarget.classList.add("active");
    }
}


//responsive team slider

$('.team-slider').slick({
    arrows: false,
    dots: true,
    infinite: false,
    speed: 300,
    autoplay: true,
    slidesToShow: 4,
    sliderToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            sliderToScroll: 4,
            infinite: true,
            dots: true,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            sliderToScroll: 1,
        }
    },
    {
    breakpoint: 600,
    settings: {
        slidesToShow: 2,
        sliderToScroll: 1,
    }
    }
]
})


// faq section
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    let accordionButtons = document.querySelectorAll('.accordion-button');
    let acoimg = document.querySelectorAll('.accordion-button img');

    if (accordionButtons.length === 0) {
        console.error('No accordion buttons found');
    }

    accordionButtons.forEach(function(button, index) {
        console.log('Adding click listener to button', index);

        button.addEventListener('click', function() {
            console.log('Button clicked', index);

            let collapse = this.parentElement.nextElementSibling;

            // Close all other accordion items
            accordionButtons.forEach(function(otherButton, otherIndex) {
                if (otherButton !== button) {
                    let otherCollapse = otherButton.parentElement.nextElementSibling;
                    if (otherCollapse.style.maxHeight) {
                        otherCollapse.style.maxHeight = null;
                        acoimg[otherIndex].src = 'Images/icon/plus.png';
                        acoimg[otherIndex].style.transform = 'rotate(0deg)';
                        otherButton.style.backgroundColor = '';
                    }
                }
            });

            // Toggle the clicked accordion item
            if (collapse.style.maxHeight) {
                collapse.style.maxHeight = null;
                acoimg[index].src = 'Images/icon/plus.png';
                acoimg[index].style.transform = 'rotate(90deg)';
                button.style.backgroundColor = '';
            } else {
                collapse.style.maxHeight = collapse.scrollHeight + "px";
                acoimg[index].src = 'Images/icon/menus.png';
                acoimg[index].style.transform = 'rotate(180deg)';
                button.style.backgroundColor = '#c1b0b5';
            }
        });
    });
});


// button back to top
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('backToTopBtn').style.display = 'block';
    } else {
        document.getElementById('backToTopBtn').style.display = 'none';
    }
}

function scrollToTop() {
    const scrollToTop = document.documentElement || document.body;
    scrollToTop.scrollIntoView({
        behavior: 'smooth'
    });
}










// responsive logoipsum slider

$('.sliderlogo').slick({
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: false,
  speed: 300,
  sliderToScroll: 1,
  slidesToShow: 5,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            sliderToScroll: 1,
            infinite: true,
            dots: false,

        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            sliderToScroll: 1,
        }
    },
]
});