declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		
	};

	type DataEntryMap = {
		"diary": {
"2005-05-03": {
	id: "2005-05-03";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2005-11-02": {
	id: "2005-11-02";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2005-11-08": {
	id: "2005-11-08";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2005-11-21": {
	id: "2005-11-21";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2005-12-03": {
	id: "2005-12-03";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-01-06": {
	id: "2006-01-06";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-01-07": {
	id: "2006-01-07";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-01-09": {
	id: "2006-01-09";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-01-20": {
	id: "2006-01-20";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-01-21": {
	id: "2006-01-21";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-01-22": {
	id: "2006-01-22";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-02-13": {
	id: "2006-02-13";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-02-14": {
	id: "2006-02-14";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-02-15": {
	id: "2006-02-15";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-02-16": {
	id: "2006-02-16";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-02-22": {
	id: "2006-02-22";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-02-23": {
	id: "2006-02-23";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-02-24": {
	id: "2006-02-24";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-02-25": {
	id: "2006-02-25";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-02-26": {
	id: "2006-02-26";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-02-27": {
	id: "2006-02-27";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-02-28": {
	id: "2006-02-28";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-01": {
	id: "2006-03-01";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-02": {
	id: "2006-03-02";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-03": {
	id: "2006-03-03";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-04": {
	id: "2006-03-04";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-05": {
	id: "2006-03-05";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-06": {
	id: "2006-03-06";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-07": {
	id: "2006-03-07";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-08": {
	id: "2006-03-08";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-09": {
	id: "2006-03-09";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-10": {
	id: "2006-03-10";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-11": {
	id: "2006-03-11";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-12": {
	id: "2006-03-12";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-13": {
	id: "2006-03-13";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-14": {
	id: "2006-03-14";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-15": {
	id: "2006-03-15";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-16": {
	id: "2006-03-16";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-17": {
	id: "2006-03-17";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-18": {
	id: "2006-03-18";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-19": {
	id: "2006-03-19";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-20": {
	id: "2006-03-20";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-21": {
	id: "2006-03-21";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-22": {
	id: "2006-03-22";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-23": {
	id: "2006-03-23";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-24": {
	id: "2006-03-24";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-25": {
	id: "2006-03-25";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-26": {
	id: "2006-03-26";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-27": {
	id: "2006-03-27";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-28": {
	id: "2006-03-28";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-29": {
	id: "2006-03-29";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-30": {
	id: "2006-03-30";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-03-31": {
	id: "2006-03-31";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-01": {
	id: "2006-04-01";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-02": {
	id: "2006-04-02";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-03": {
	id: "2006-04-03";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-04": {
	id: "2006-04-04";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-05": {
	id: "2006-04-05";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-06": {
	id: "2006-04-06";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-07": {
	id: "2006-04-07";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-08": {
	id: "2006-04-08";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-09": {
	id: "2006-04-09";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-10": {
	id: "2006-04-10";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-11": {
	id: "2006-04-11";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-12": {
	id: "2006-04-12";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-13": {
	id: "2006-04-13";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-14": {
	id: "2006-04-14";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-15": {
	id: "2006-04-15";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-16": {
	id: "2006-04-16";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-17": {
	id: "2006-04-17";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-18": {
	id: "2006-04-18";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-19": {
	id: "2006-04-19";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-20": {
	id: "2006-04-20";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-21": {
	id: "2006-04-21";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-22": {
	id: "2006-04-22";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-23": {
	id: "2006-04-23";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-24": {
	id: "2006-04-24";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-25": {
	id: "2006-04-25";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-26": {
	id: "2006-04-26";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-27": {
	id: "2006-04-27";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-28": {
	id: "2006-04-28";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-29": {
	id: "2006-04-29";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-04-30": {
	id: "2006-04-30";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-05-01": {
	id: "2006-05-01";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-05-02": {
	id: "2006-05-02";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-05-03": {
	id: "2006-05-03";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
"2006-05-05": {
	id: "2006-05-05";
  collection: "diary";
  data: InferEntrySchema<"diary">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
