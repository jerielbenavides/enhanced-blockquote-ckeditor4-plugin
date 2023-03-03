CKEDITOR.dialog.add( 'enhancedblockquoteDialog', function ( editor ) {
    return {
        title: 'Insert Blockquote',
        minWidth: 400,
        minHeight: 200,

        contents: [
            {
                id: 'tab-basic',
                label: 'Insert Blockquote',
                elements: [
                    {
                        type: 'text',
                        id: 'quote_text',
                        label: 'Quote',
                        validate: CKEDITOR.dialog.validate.notEmpty( "The quote field cannot be empty." )
                    },
                    {
                        type: 'text',
                        id: 'quote_author',
                        label: 'Author',
                    },
                    {
                        type: 'text',
                        id: 'author_avatar',
                        label: 'Avatar URL',
                    },
                    {
                        type: 'checkbox',
                        id: 'use_default_avatar',
                        label: 'Use default avatar (ignores avatar URL field)',
                        default: 0,
                    }
                ]
            },
        ],
        onOk: function() {
            var dialog = this;
            
            let quoteText = dialog.getValueOf( 'tab-basic', 'quote_text' );
            let quoteAuthor = dialog.getValueOf( 'tab-basic', 'quote_author' );
            let hasAvatar = dialog.getValueOf( 'tab-basic', 'author_avatar' ) ? true : false;
            let useDefaultAvatar = dialog.getValueOf( 'tab-basic', 'use_default_avatar' );
            
            let avatarSrc =  "/images/avatar-default.png";
            if (!useDefaultAvatar && hasAvatar){
                avatarSrc = dialog.getValueOf( 'tab-basic', 'author_avatar' );
            }
            if(!useDefaultAvatar && !hasAvatar){
                avatarSrc = "";
            }
               editor.insertHtml(
                   `<blockquote>
                       <p>${quoteText}</p>`);
                if(quoteAuthor){
                    editor.insertHtml(`                       
                        <footer>
                            <img src="${avatarSrc}" alt="" role="presentation">
                            <cite>${quoteAuthor}</cite>
                        </footer>`);
                }
                editor.insertHtml(`</blockquote>`);
        }
    };
});