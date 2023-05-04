import Contentful from "contentful";

export const contentfulClient = Contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

export type Tag = {
  contentTypeId: "tag";
  fields: {
    name: Contentful.EntryFieldTypes.Text;
    slug: Contentful.EntryFieldTypes.Text;
  };
};

export type BlogPost = {
  contentTypeId: "blogPost";
  fields: {
    title: Contentful.EntryFieldTypes.Text;
    date: Contentful.EntryFieldTypes.Date;
    description?: Contentful.EntryFieldTypes.Text;
    content: Contentful.EntryFieldTypes.Text;
    slug: Contentful.EntryFieldTypes.Text;
    tags?: Contentful.EntryFieldTypes.Array<
      Contentful.EntryFieldTypes.EntryLink<Tag>
    >;
  };
};
