var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Testimonial Model
 * ==========
 */
var Testimo = new keystone.List('Testimo');

Testimo.add({
	name: { type: Types.Text, initial: true, required: true },
	company: { type: Types.Text, initial: true, required: true },
	message: { type: Types.Markdown, initial: true, required: true },
});

/**
 * Registration
 */
Testimo.defaultColumns = 'name, company, message';
Testimo.register();
