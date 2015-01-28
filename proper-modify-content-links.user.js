// ==UserScript==
// @name       Proper links to edit content rather than relying on onclick="T4_ChangePage(...)"
// @namespace  http://wolstenhol.me
// @version    0.1
// @description  Rather than use a T4 function to take you to an edit/modify content page this creates a link with a href value. The advantage is that these can be opened in new tabs whereas links with the T4_ChangePage method can't
// @include      */SiteManager?ctfn=hierarchy&fnno=130*
// @copyright  2015+, Phil Wolstenholme
// ==/UserScript==

var sid = jQuery("input[name=sid]").attr("value");

jQuery('tr[id^="ReOrderable"]').each(function( index ) {
  var $tr = jQuery( this );
  var id = this.id.slice(-6);
  var editLink = '/terminalfour/SiteManager?ctfn=content&fnno=30&sid=' + sid + '&svi=hierarchy:false:20&cid=' + id;
  var $target = $tr.find("td:nth-child(2) div");
  var editLinkText = $target.contents().get(0).nodeValue;
  $target.replaceWith( "<a href=\"" + editLink + "\">" + editLinkText + "</a>" );
});
