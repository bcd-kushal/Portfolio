/* eslint-disable @typescript-eslint/no-explicit-any */
import { MetadataRoute } from "next";
import * as Schema from "schema-dts";

// =====[ SCHEMA ORG ]==========================================
type SchemaUnit<T> = T extends any ? T : never;

type SchemaOrgLayouts<T, K extends keyof T> = T[K] extends any[]
  ? { [Index in keyof T[K]]: SchemaUnit<T[K][Index]> }
  : SchemaOrgLayouts<T[K], keyof T[K]>;

// precise data filling is left ...
export type SchemaOrgSections = {
  Home: [Schema.FAQPage, Schema.WebSite, Schema.Organization];
  Category: [
    Schema.FAQPage,
    Schema.WebSite,
    Schema.BreadcrumbList,
    Schema.Product
  ];
  Content: [
    Schema.WebSite,
    Schema.WebPage,
    Schema.BreadcrumbList,
    Schema.Product
  ];
  DynamicPage: [Schema.FAQPage, Schema.WebPage, Schema.WebSite];
  BlogArticle: [
    Schema.WebPage,
    Schema.WebSite,
    Schema.Organization,
    Schema.BlogPosting
  ];
  BlogsPage: [Schema.WebPage, Schema.WebSite, Schema.Organization, Schema.Blog];
};

export type SchemaOrgType<K extends keyof SchemaOrgSections> = SchemaOrgLayouts<
  SchemaOrgSections,
  K
>;

// ---------------------------------------------------------

export type ProductSchemaType = {
  name: string;
  highPrice: number;
  lowPrice: number;
  ratingCount: number;
  ratingValue: number;
  reviewCount: number;
};

export type ContentSchemaType = {
  name: string;
  image: string;
  sku: string;
  url: string;
  price: string;
  currency: string;
  validUntil: string;
  rating: { count: number; avgRating: number };
  description: string;
  reviews: {
    name: string;
    saidReview: string;
    date: string;
    rated: number;
    maxRate: number;
  }[];
};

export type WebpageSchemaType = {
  url: string;
  name: string;
  alternateName: string;
  image: string;
  description?: string;
  productDetails?: {
    sku: string;
    url: string;
    price: string;
    currency: string;
    validUntil: string;
    rating: { count: number; avgRating: number };
    reviews: {
      name: string;
      saidReview: string;
      date: string;
      rated: number;
      maxRate: number;
    }[];
  };
};

export type FAQType = { q: string; a: string }[];

export type BreadcrumbsType = { label: string; url: string }[];

export type BlogPostingType = {
  headline: string;
  url: string;
  publishedOn: string;
  authorName: string;
  description: string;
};

export type BlogPostingSchemaType = BlogPostingType & {
  keywords: string[];
  body: string;
  image: string;
  wordCount: number;
};

export type BlogSchemaType = {
  name: string;
  url: string;
  description: string;
  publisherName: string;
  posts: BlogPostingType[];
};

export type SchemaDataType = {
  [k in keyof SchemaOrgSections]?: k extends "Home"
    ? { faqs: FAQType }
    : k extends "Category"
      ? {
          faqs: FAQType;
          breadcrumbs: BreadcrumbsType;
          name: string;
          description?: string;
          // contents: ContentSchemaType[];
          product: ProductSchemaType;
        }
      : k extends "Content"
        ? {
            content: ContentSchemaType;
            breadcrumbs: BreadcrumbsType;
            webpage: WebpageSchemaType;
          }
        : k extends "DynamicPage"
          ? { faqs: FAQType; webpage: WebpageSchemaType }
          : k extends "BlogArticle"
            ? {
                webpage: WebpageSchemaType;
                blogPosting: BlogPostingSchemaType;
              }
            : {
                webpage: WebpageSchemaType;
                blog: BlogSchemaType;
              };
};

// =====[ SITEMAP ]==========================================
export type SitemapType = MetadataRoute.Sitemap;