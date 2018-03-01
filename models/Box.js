const keystone = require('keystone');

const Types = keystone.Field.Types;

const Box = new keystone.List('Box', {
  autokey: { from: 'name', path: 'key', unique: true }
});

Box.add({
  name: { type: String, required: true },

  // corresponds to the icon placed in front of the title, optional
  // https://projects.invisionapp.com/share/RW5H6N028#/screens/126130147
  icon: { type: Types.Select, options: 'mobile, browser, loop, cloud, eye, picture' },

  title: { type: Types.Html },
  text: { type: Types.Html },
  style: { type: Types.Select, options: 'orange, white', default: 'orange' },
});

Box.register();