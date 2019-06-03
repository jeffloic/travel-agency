import $ from 'jquery';
import MobileMenu from './components/MobileMenu';
import OnScroll from './components/OnScroll';
import StickyHeader from './components/StickyHeader';

var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();
new OnScroll($('.feature-item'), '85%');
new OnScroll($('.testimonial'), '60%');
