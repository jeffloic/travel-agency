import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';


class StickyHeader {
	constructor() {
		this.lazyImages = $('.lazyload');
		this.headerSection = $('.header-section');
		this.headerTrigger = $('.large-header__title');
		this.createHeaderWaypoint();
		this.pageSections = $('.page-section');
		this.headerLinks = $('.primary-nav a');
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
		this.refreshWaypoints();
	}

	refreshWaypoints() {
		this.lazyImages.on('load', function() {
			Waypoint.refreshAll();
		});
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.headerTrigger[0],
			handler: function(direction) {
				if (direction == 'down') {
					that.headerSection.addClass('header-section--dark');
				} else {
					that.headerSection.removeClass('header-section--dark');
				}
			}
		});
	}

	createPageSectionWaypoints() {
		var that = this;
		this.pageSections.each(function() {
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == 'down') {
						var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
						that.headerLinks.removeClass('current-link');
						$(matchingHeaderLink).addClass('current-link');
					}
				},
				offset: "18%"
			});
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == 'up') {
						var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
						that.headerLinks.removeClass('current-link');
						$(matchingHeaderLink).addClass('current-link');
					}
				},
				offset: "-40%"
			});
		});
	}
}

export default StickyHeader;