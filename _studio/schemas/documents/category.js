// schemas/Category.js

export default {
	name: 'category',
	title: 'Category',
	type: 'document',
	fields: [
	  {
		 name: 'title',
		 title: 'Category Title',
		 type: 'string',
	  },
	  {
		 name: 'description',
		 title: 'Description',
		 type: 'text',
	  },
	],
 }
 