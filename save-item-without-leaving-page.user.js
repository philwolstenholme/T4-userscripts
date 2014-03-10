// ==UserScript==
// @name       Allow T4 to save items without taking you off your current page
// @namespace  http://wolstenhol.me
// @version    0.5
// @description  The form is submitted to a new window
// @include      */SiteManager?ctfn=content*
// @copyright  2014+, Phil Wolstenholme
// ==/UserScript==

jQuery( "#tabs-2 .tabButtons .tab-button-dd-submenu" ).prepend('<li><a href="javascript:;" id="useANewWindow">Save to new window</a></li>');

jQuery( "#useANewWindow" ).click(function( event ) {
	jQuery( "#contentForm" ).attr( "target", "_blank" );
	jQuery( ".tab-button-dd-submenu li a" ).first().click();
});

jQuery(document).keydown(function(event) {
    //19 for Mac Command+S
    if (!( String.fromCharCode(event.which).toLowerCase() == 'e' && event.ctrlKey)) return true;
	jQuery( "#useANewWindow" ).first().click();
	event.preventDefault();
	return false;
});