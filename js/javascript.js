const prev = document.querySelector('#testimonials .fa-chevron-circle-left');
const next = document.querySelector('#testimonials .fa-chevron-circle-right');
const testimonial = document.querySelector('#testimonials .passengers-container');
let count = 0;

// Gallery direction aware hover effect //
$(".snake").snakeify();


// Instagram Feed //
let feed = new Instafeed({
    get: 'user',
    resolution: 'standard_resolution',
    userId: '13959386828',
    accessToken: '13959386828.1677ed0.32fea37a52ae49e382924325ddbc1ca5',
    sortBy: 'most-recent',
    limit: 12,
    template: '<li class="col-lg-2 col-md-2 col-sm-3 col-4"><a href="{{link}}" target="_blank"><img src="{{image}}"></a></li>'
});
feed.run();


// Testimonials //
prev.addEventListener('click', ()=>{
	count--;
	if(count === -1){
       count = 2;
	   testimonial.style.left = '-200%';
	}
	testimonial.style.left = '-100' * count + '%';
})

next.addEventListener('click', ()=>{
	count++;
	if(count === 3){
       count = 0;
	   testimonial.style.left = '0';
	}
	testimonial.style.left = '-100' * count + '%';
})


// Carousel Gallery in Offer & Brand section//
if(window.innerWidth <= 1100 && window.innerWidth >= 811 ){
    $('.gallery-list').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    autoplay: true,
	    autoplaySpeed: 2000,
	    arrows: true,
	});
}else if(window.innerWidth <= 810 && window.innerWidth >= 581){
	 $('.gallery-list').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    autoplay: true,
	    autoplaySpeed: 2000,
	    arrows: true,
	});
}else if(window.innerWidth <= 580 && window.innerWidth >= 451){
	 $('.gallery-list').slick({
	    slidesToShow: 2,
	    slidesToScroll: 1,
	    autoplay: true,
	    autoplaySpeed: 2000,
	    arrows: true,
	});
}else if(window.innerWidth <= 450){
	 $('.gallery-list').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    autoplay: true,
	    autoplaySpeed: 2000,
	    arrows: true,
	});
}else{
	$('.gallery-list').slick({
	    slidesToShow: 5,
	    slidesToScroll: 1,
	    autoplay: true,
	    autoplaySpeed: 2000,
	    arrows: true,
	});
}