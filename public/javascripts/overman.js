/**
* overman.js v0.0.1 by @guysheep
* http://www.gnu.org/licenses/gpl-2.0.html
*/
if (!jQuery) { throw new Error("The overman requires jQuery") }

+function($) {
	
	"use restrict";
	$(document).ready(function() { 
		
		$('.content').on('custom-update', function() {
			console.log($(this));
			$(this).text('test');	
		});
		
		$('.label').on('custom-update', function() {
			$(this).text('label');
		});
		
		$(function() {
			$('.content').trigger('custom-update');
			$('.label').trigger('custom-update');	
		});
		
	});	
}(window.jQuery);