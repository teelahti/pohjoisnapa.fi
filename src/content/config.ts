import { z, defineCollection } from "astro:content";

const diaryCollection = defineCollection({
  type: "data",
  schema: z.object({
    Slug: z.string(),
    CreatedBy: z.string(),
    CreatedDate: z.string().datetime({ local: true }),
    DistanceTraveled: z.optional(z.number()),
    EntryDate: z.string().datetime({ local: true }),
    Images: z.array(
      z.object({
        Caption_en: z.string(),
        Caption_fi: z.string(),
        CreatedDate: z.string().datetime({ local: true }),
        Id: z.number(),
      }),
    ),
    LastModifiedBy: z.optional(z.string()),
    LastModifiedDate: z.optional(z.string().datetime({ local: true })),
    LocationLatitude: z.optional(z.number().int()),
    LocationLongitude: z.optional(z.number().int()),
    LocationLongitudeEastWest: z.optional(z.enum(["E", "W"])),
    Subject_en: z.string(),
    Subject_fi: z.string(),
    Temperature: z.optional(z.number()),
    Wind: z.optional(z.number()),
    Text_en: z.string(),
    Text_fi: z.string(),
    Previous: z.optional(z.string()),
    Next: z.optional(z.string()),
  }),
});

export const collections = {
  diary: diaryCollection,
};
