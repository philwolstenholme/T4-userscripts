// ==UserScript==
// @name       ACE editor for T4
// @namespace  http://wolstenhol.me
// @version    0.1
// @description  Use ACE editor when editing raw HTML/CSS/JS/PHP
// @include      */SiteManager?ctfn=content*
// @include      */SiteManager?ctfn=template*
// @copyright  2014+, Phil Wolstenholme
// ==/UserScript==

jQuery.ajax({
    url: '//ajaxorg.github.io/ace-builds/src-min-noconflict/ace.js',
    dataType: "script",
    success: success
});

function success() {
    
    if (jQuery('#t4_content_element_CodeBody').length === 1) { var textareaTarget = '#t4_content_element_CodeBody'; }
    if (jQuery('#t4_content_element_PHPcontent').length === 1) { var textareaTarget = '#t4_content_element_PHPcontent'; }
    if (jQuery('#t4_content_element_PHP').length === 1) { var textareaTarget = '#t4_content_element_PHP'; }
    if (jQuery('#t4CodeTemplateContent').length === 1) { var textareaTarget = '#t4CodeTemplateContent'; }
    if (jQuery('#t4_content_element_PHP').length === 1) { var textareaTarget = '#t4_content_element_PHP'; }
    
    if(codemirrors[0]) { codemirrors[0].toTextArea(); }
    
    jQuery( textareaTarget ).height(jQuery( textareaTarget ).height() * 2);
    
    var textareaWidth = jQuery(textareaTarget).parent().css( "width" );
    var textareaHeight = jQuery(textareaTarget).css( "height" );
    var textarea = jQuery(textareaTarget).hide();
 
    var d = document.createElement('div');
    jQuery(d).attr( "id", "editor" );
    jQuery(d).css( "width",  textareaWidth );
    jQuery(d).css( "height", textareaHeight );
    jQuery( d ).appendTo( jQuery( textarea ).parent() );
    
    var editor = ace.edit("editor");
    editor.getSession().setUseWorker(false);
    editor.setTheme("ace/theme/chrome");
    editor.setShowPrintMargin(false);
    editor.getSession().setUseWrapMode(true);
    editor.getSession().setMode("ace/mode/html");
    editor.getSession().setValue(textarea.val());
    editor.getSession().on('change', function(){
        textarea.val(editor.getSession().getValue());
    });
    
    // quick and dirty way of generating a select element, should really do this via document.createElement but hey
    var options = '<select id="mode" size="1"><option value="ace/mode/css">css</option><option value="ace/mode/html" selected>html</option><option value="ace/mode/javascript">js</option><option value="ace/mode/php">php</option></select>'
    jQuery( options ).prependTo( jQuery( "#editor" ).parent() );
    
    jQuery('#mode').change (function (ev) {
        var mode = jQuery('option:selected').attr('value');
        editor.getSession().setMode(mode);
    });
    
}