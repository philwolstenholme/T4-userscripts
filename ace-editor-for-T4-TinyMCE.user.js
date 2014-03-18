// ==UserScript==
// @name       ACE editor for T4 TinyMCE
// @namespace  http://wolstenhol.me
// @version    0.1
// @description  Use ACE editor for HTML view within TinyMCE
// @include      */skin/SM/static/common/tiny_mce/themes/advanced/source_editor.htm
// @copyright  2014+, Phil Wolstenholme
// ==/UserScript==

// Load jQuery

var scr  = document.createElement('script'),
head = document.head || document.getElementsByTagName('head')[0];
scr.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js';
scr.async = false;
head.insertBefore(scr, head.firstChild);

var delay=200
setTimeout(function(){
	jQuery.ajax({
		url: '//ajaxorg.github.io/ace-builds/src-min-noconflict/ace.js',
		dataType: "script",
		success: success
	});
},delay)

function success() {
    
    if (jQuery('#htmlSource').length === 1) { var textareaTarget = '#htmlSource'; }
    
    var textareaWidth = jQuery(textareaTarget).css( "width" )
    var textareaHeight = jQuery(textareaTarget).css( "height" )
    var textarea = jQuery(textareaTarget).hide();
    
    var d = document.createElement('div');
    jQuery(d).attr( "id", "editor" );
    jQuery(d).css( "width", textareaWidth );
    jQuery(d).css( "height", textareaHeight );
    jQuery( d ).appendTo( jQuery( textarea ).parent() );
    
    var editor = ace.edit("editor");
    editor.getSession().setUseWorker(false);
    editor.setTheme("ace/theme/chrome");
    editor.setShowPrintMargin(false);
    editor.getSession().setMode("ace/mode/html");
    editor.getSession().setValue(textarea.val());
    editor.getSession().setUseWrapMode(true);
    editor.getSession().on('change', function(){
        textarea.val(editor.getSession().getValue());
    });
    
    // quick and dirty way of generating a select element, should really do this via document.createElement but hey
    var options = ' <select id="mode" size="1"><option value="ace/mode/css">css</option><option value="ace/mode/html" selected>html</option><option value="ace/mode/javascript">js</option><option value="ace/mode/php">php</option></select>'
    jQuery( options ).prependTo( jQuery( "#editor" ).parent() );
    
    jQuery('#mode').change (function (ev) {
        var mode = jQuery('option:selected').attr('value');
        editor.getSession().setMode(mode);
    });
}