var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Testimonial Model
 * ==========
 */
var Testimonial = new keystone.List('Testimonial');

Testimonial.add({
	name: { type: Types.Text, initial: true, required: true },
	company: { type: Types.Text, initial: true, required: true },
	message: { type: Types.Markdown, initial: true, required: true },
});

/**
 * Registration
 */
Testimonial.defaultColumns = 'name, company, message';
Testimonial.register();
