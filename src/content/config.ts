// // 1. Import utilities from `astro:content`
// import { defineCollection } from 'astro:content';
// // 2. Define your collection(s)
// const blogCollection = defineCollection({ /* ... */ });
// // 3. Export a single `collections` object to register your collection(s)
// //    This key should match your collection directory name in "src/content"
// export const collections = {
//   'blog': blogCollection,
// };

import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };
