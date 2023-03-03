CKEDITOR.plugins.add( 'enhancedblockquote', {
    icons: 'enhancedblockquote',
    init: function( editor ) {
        //Plugin logic goes here
        editor.addCommand( 'enhancedblockquote', new CKEDITOR.dialogCommand( 'enhancedblockquoteDialog' ) );
        editor.ui.addButton( 'enhancedblockquote', {
            label: 'Insert Blockquote',
            command: 'enhancedblockquote',
            toolbar: 'insert'
        });

        CKEDITOR.dialog.add( 'enhancedblockquoteDialog', this.path + 'dialogs/enhancedblockquote.js' );
    }
});