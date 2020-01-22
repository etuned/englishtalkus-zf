import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();
var prev = 0;
var $window = $(window);
var nav = $('.menu-bar-fixed');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});

$(document).ready(function() {
  $("body").on("mousedown", "*", function(e) {
      if (($(this).is(":focus") || $(this).is(e.target)) && $(this).css("outline-style") == "none") {
          $(this).css("outline", "none").on("blur", function() {
              $(this).off("blur").css("outline", "");
          });
      }
  });
});