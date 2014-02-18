// ==UserScript==
// @name       Update and Approve T4 content by pressing Ctrl-S
// @namespace  http://wolstenhol.me
// @version    0.2
// @description  Quickly publish T4 content
// @include      */SiteManager?ctfn=content&fnno=*&sid=*&svi=*
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

jQuery( ".tabButtons" ).append( "<div><button id='quickSaveApprove'>Press Ctrl+S or click here to Update and Approve</button></div>" );

jQuery( "#quickSaveApprove" ).click(function() {
  saveAndApprove();
});