import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.headerSection = $('.header-section');
		this.menuIcon = $('.header-section__menu-icon');
		this.menuContent = $('.header-section__menu-content');
		this.events();
	}

	events() {
		this.menuIcon.click(this.toggleMenu.bind(this));
	}

	toggleMenu() {
		this.menuContent.toggleClass('header-section__menu-content--visible');	
		this.headerSection.toggleClass('header-section--expanded');
		this.menuIcon.toggleClass('header-section__menu-icon--close-x');
	}
}

export default MobileMenu;


