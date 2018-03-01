var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Testimonial Model
 * ==========
 */
var Footer = new keystone.List('Footer', {
	nocreate: true,
	nodelete: true
});

Footer.add({
	address: { type: Types.Text, initial: true, required: true }
});

/**
 * Registration
 */
Footer.register();
