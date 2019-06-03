import $ from 'jquery';
import MobileMenu from './components/MobileMenu';
import OnScroll from './components/OnScroll';
import StickyHeader from './components/StickyHeader';
import Modal from './components/Modal';


var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();
var modal = new Modal;
new OnScroll($('.feature-item'), '85%');
new OnScroll($('.testimonial'), '60%');
