// ==UserScript==
// @name       Auto populate new section URI in T4
// @namespace  http://wolstenhol.me
// @version    0.4
// @description  Generates lowercase and SEO friendly URIs (for new sections) as you type, without affecting existing URIs
// @include      *SiteManager?ctfn=hierarchy&fnno=10*
// @copyright  2014+, Phil Wolstenholme
// ==/UserScript==

function URIasYouType() {
    var title = jQuery("input[name='sName']").val();
    title = title.replace(/\s+/g, '-').toLowerCase();
    jQuery("input[name='sURI']").val(title);
}

if( !jQuery("input[name='sName']").val() ) {
    jQuery("input[name='sName']").keypress(URIasYouType);
    jQuery("input[name='sName']").blur(URIasYouType);
}
