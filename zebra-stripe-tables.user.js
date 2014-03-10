// ==UserScript==
// @name       		Zebra stripe tables
// @namespace  		http://wolstenhol.me
// @version    		0.1
// @description 	Zebra stripe tables to make scanning across rows easier on the eye
// @include      	*/SiteManager*
// @exclude			*/SiteManager?ctfn=media*
// @copyright  		Philip Wolstenholme
// ==/UserScript==

jQuery("<style type=\"text/css\"> tr:nth-child(2n+1) { background-color: #efefef; } </style>").appendTo("head");