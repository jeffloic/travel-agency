import $ from 'jquery';

class Modal {
	constructor() {
		this.openModal = $('.open-modal');
		this.modal = $('.modal');
		this.closeModal = $('.modal__close');
		this.events();
	}

	events() {
		//clicking the open modal button
		this.openModal.click(this.open.bind(this));

		//clicking the x close modal button
		this.closeModal.click(this.close.bind(this));


		//pushing the escape key
		$(document).keyup(this.keyEvent.bind(this))
	}

	keyEvent(e) {
		if (e.keyCode == 27) {
			this.close();
		}
	}

	open() {
		this.modal.addClass('modal--visible');
		return false;
	}

	close() {
		this.modal.removeClass('modal--visible');
	}
}


export default Modal;

