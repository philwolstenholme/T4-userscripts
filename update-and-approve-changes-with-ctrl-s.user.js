// ==UserScript==
// @name       Update and Approve T4 content by pressing Ctrl-S
// @namespace  http://wolstenhol.me
// @version    0.5
// @description  Quickly publish T4 content
// @include      */SiteManager?ctfn=content*
// @copyright  2014+, Phil Wolstenholme
// ==/UserScript==

function saveAndApprove() {
	jQuery( ".tab-button-dd-submenu li a" ).first().click();
}

jQuery(document).keydown(function(event) {
    //19 for Mac Command+S
    if (!( String.fromCharCode(event.which).toLowerCase() == 's' && event.ctrlKey) && !(event.which == 19)) return true;
	saveAndApprove();
	event.preventDefault();
	return false;
});

jQuery( "#tabs-2 .tabButtons" ).first().append( "<button id='quickSaveApprove'>Press Ctrl+S or click here to Update and Approve</button>" );

jQuery( "#quickSaveApprove" ).click(function() {
  saveAndApprove();
});
