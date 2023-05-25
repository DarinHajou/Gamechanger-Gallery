export default {
	name: 'athlete',
	title: 'Athlete',
	type: 'document',
	fields: [
	  {
		 name: 'name',
		 title: 'Name',
		 type: 'string',
		 description: 'Name of the athlete',
	  },
	  {
		 name: 'slug',
		 title: 'Slug',
		 type: 'slug',
		 options: {
			source: 'name',
			maxLength: 96,
		 },
		 description: 'URL-friendly slug for the athlete',
	  },
	  {
		 name: 'sport',
		 title: 'Sport',
		 type: 'reference',
		 to: [{ type: 'sport' }],
		 description: 'Sport associated with the athlete',
	  },
	  {
		 name: 'image',
		 title: 'Image',
		 type: 'image',
		 options: {
			hotspot: true,
		 },
		 description: 'Image of the athlete',
	  },
	  {
		 name: 'bio',
		 title: 'Biography',
		 type: 'text',
		 description: 'Biography or description of the athlete',
	  },
	  {
		 name: 'birthDate',
		 title: 'Birth Date',
		 type: 'date',
		 description: 'Date of birth of the athlete',
	  },
	  {
		 name: 'nationality',
		 title: 'Nationality',
		 type: 'string',
		 description: 'Nationality of the athlete',
	  },
	],
 };
 