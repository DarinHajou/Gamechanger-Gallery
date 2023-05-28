//transformationImages.js

export default {
	name: 'transformationImages',
	title: 'Transformation Images',
	type: 'document',
	fields: [
	{
		name: 'name',
		title: 'Name',
		type: 'string',
		description: 'Name of the transformation image',
	},
	{
		name: 'slug',
		title: 'Slug',
		type: 'slug',
		options: {
			source: 'name',
			maxLength: 200,
		},
		description: 'URL-friendly version of the name',
	},
	{
		name: 'image',
		title: 'Image',
		type: 'image',
		options: {
			hotspot: true,
		},
		description: 'Image of the transformation',
	},
	{
		name: 'athlete',
		title: 'Athlete',
		type: 'reference',
		to: [{ type: 'athlete' }],
		description: 'Athlete associated with the transformation image',
	},
	{
		name: 'sport',
		title: 'Sport',
		type: 'reference',
		to: [{ type: 'sport' }],
		description: 'Sport associated with the transformation image',
	},
	{
		name: 'imageStyle',
		title: 'Image Style',
		type: 'reference',
		to: [{ type: 'imageStyle' }],
		description: 'Image style associated with the transformation image',
	},
	],
};

 