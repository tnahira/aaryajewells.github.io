let section = document.querySelectorAll('section');

window.onscroll = () =>{

    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
    }
    else{
        document.querySelector('#scroll-top').classList.remove('active');
    }

    section.forEach(sec =>{
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            });
        };
    });
}

  const swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
  });

  window.onscroll();
