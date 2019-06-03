import $ from 'jquery';
import MobileMenu from './components/MobileMenu';
import OnScroll from './components/OnScroll';

var mobileMenu = new MobileMenu();

new OnScroll($('.feature-item'), '85%');
new OnScroll($('.testimonial'), '60%');
