const burguer = document.querySelector('.navegation .nav .navbar .burguer');
const mobile_menu = document.querySelector('.navegation .nav .navbar ul');
const menu_item = document.querySelectorAll('.navegation .nav .navbar ul li a');
const navegation = document.querySelector('.navegation.container');

burguer.addEventListener('click', () => {
	burguer.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		navegation.style.backgroundColor = 'transparent';
	} else {
		navegation.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		burguer.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});