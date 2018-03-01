var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Post = new keystone.List('Post', {
    map: { name: 'title' }
});
 
Post.add({
    title: { type: String },
    state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
    author: { type: Types.Relationship, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    publishedAt: Date,
    content: {
        brief: { type: Types.Html, wysiwyg: true, height: 150 },
        extended: { type: Types.Html, wysiwyg: true, height: 400 }
    }
});
 
Post.defaultColumns = 'title, state|20%, author, publishedAt|15%'
Post.register();