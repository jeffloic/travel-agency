import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class StickyHeader {
	constructor() {
		this.headerSection = $('.header-section');
		this.headerTrigger = $('.large-header__title');
		this.createHeaderWaypoint();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.headerTrigger[0],
			handler: function() {
				that.headerSection.toggleClass('header-section--dark');

			}
		});
	}
}

export default StickyHeader;