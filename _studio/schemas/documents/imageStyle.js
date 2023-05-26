export default {
	name: 'imageStyle',
	title: 'Image Style',
	type: 'document',
	fields: [
	  {
		 name: 'name',
		 title: 'Name',
		 type: 'string',
		 description: 'Name of the image style',
	  },
	  {
		 name: 'slug',
		 title: 'Slug',
		 type: 'slug',
		 options: {
			source: 'name',
			maxLength: 200,
		 },
		 description: 'Slug for the image style',
	  },
	  {
		 name: 'description',
		 title: 'Description',
		 type: 'text',
		 description: 'Description of the image style',
	  },
	  {
		 name: 'transformationImages',
		 title: 'Transformation Image',
		 type: 'reference',
		 to: [{ type: 'transformationImages' }],
		 description: 'Transformation image associated with the image style',
	  },
	  // Add more fields as needed
	],
 }; 