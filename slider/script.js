const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 0;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide () {
	// aniamate
	container.animate([ { opacity: '0.2' }, { opacity: '1.0' } ], { duration: 300, fill: 'forwards' });

	counter++;
	if(counter === 7) {
		counter = 1;
	}
	container.style.backgroundImage = `url(img/img-${counter}.avif)`;
}

function prevSlide () {
	// aniamate
	container.animate([ { opacity: '0.2' }, { opacity: '1.0' } ], { duration: 300, fill: 'forwards' });

	counter--;
	if(counter === 0) {
		counter = 6;
	}
	container.style.backgroundImage = `url(img/img-${counter}.avif)`;
}