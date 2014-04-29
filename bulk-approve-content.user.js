// ==UserScript==
// @name       Bulk approve items within the Approve Content area
// @namespace  http://wolstenhol.me
// @version    0.1
// @description  Quickly bulk approve content. Useful after duplicating/moving content.
// @include      */SiteManager?ctfn=status*
// @copyright  2014+, Phil Wolstenholme
// ==/UserScript==

jQuery(".tabButtons").prepend('<div id="tab-button-dd-menu-wrap-top" class="bulk-approve-button"><div><button style="cursor:pointer;cursor:hand;">Select all between two checked items</button></div></div>');
jQuery(".bulk-approve-button").hide();

$checkboxes = jQuery("#tabs-1 form input[name='approval']:not([type=hidden])")
$checkboxes.change(function() {
	if (jQuery("#tabs-1 form input[name='approval']:not([type=hidden]):checked").length === 2) {
		jQuery(".bulk-approve-button").show();
	} else {
		jQuery(".bulk-approve-button").hide();
	}
});

function bulkApprove() {
    var firstChecked = jQuery("#tabs-1 form input[name='approval']:not([type=hidden]):checked").first();
    var lastChecked = jQuery("#tabs-1 form input[name='approval']:not([type=hidden]):checked").last();
    var firstCheckedIndex = jQuery("#tabs-1 form input[name='approval']:not([type=hidden])").index(firstChecked);
    var lastCheckedIndex = jQuery("#tabs-1 form input[name='approval']:not([type=hidden])").index(lastChecked);
    jQuery("#tabs-1 form input[name='approval']:not([type=hidden])").slice(firstCheckedIndex + 1, lastCheckedIndex).each(function (index) {
        jQuery(this).click();
    })
}

jQuery( ".bulk-approve-button" ).click(function() {
	bulkApprove();
});

