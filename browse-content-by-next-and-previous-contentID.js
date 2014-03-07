// ==UserScript==
// @name       Next and previous by contentID
// @namespace  http://wolstenhol.me
// @version    0.1
// @description  Jump between content items based on their ID
// @include      */SiteManager?ctfn=content*
// @copyright  2014+, Phil Wolstenholme
// ==/UserScript==

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

var currentCid = Number(getUrlVars()["cid"]);
var nextCid = Number(getUrlVars()["cid"])+1;
var previousCid = Number(getUrlVars()["cid"])-1;

function takeMeTo(command) {
	var URL = window.location.href;
	var location = URL.replace(currentCid, command);
	window.location.href = location;
	//console.log(location);
}

jQuery( "#tabs-2 .tabButtons #tab-button-dd-menu-wrap-top" ).first().append( "<div><button class='cancel' title='Last item of content' id='previousCid'> < </div>" );
jQuery( "#tabs-2 .tabButtons #tab-button-dd-menu-wrap-top" ).first().append( "<div><button class='cancel' title='Next item of content' id='nextCid'> > </div>" );

jQuery( "#previousCid" ).click(function( event ) {
	event.preventDefault();
	takeMeTo(previousCid);
});

jQuery( "#nextCid" ).click(function( event ) {
	event.preventDefault();
	takeMeTo(nextCid);
});