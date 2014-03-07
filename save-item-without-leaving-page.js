jQuery( "#tabs-2 .tabButtons .tab-button-dd-submenu" ).prepend('<li><a href="javascript:;" id="useANewWindow">Save to new window</a></li>');

jQuery( "#useANewWindow" ).click(function( event ) {
	jQuery( "#contentForm" ).attr( "target", "_blank" );
	jQuery( ".tab-button-dd-submenu li a" ).first().click();
});