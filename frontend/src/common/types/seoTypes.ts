/* eslint-disable @typescript-eslint/no-explicit-any */
import { MetadataRoute } from "next"
import * as Schema from "schema-dts"

// =====[ SCHEMA ORG ]==========================================
type SchemaUnit<T> = T extends any ? T : never;

type SchemaOrgLayouts<T, K extends keyof T> = T[K] extends any[]
  ? { [Index in keyof T[K]]: SchemaUnit<T[K][Index]> }
  : SchemaOrgLayouts<T[K], keyof T[K]>

// precise data filling is left ...
type SchemaOrgSections = {
  Home: [Schema.FAQPage, Schema.WebSite]
  Category: [Schema.FAQPage, Schema.WebSite]
  Product: [Schema.FAQPage, Schema.WebSite]
  Service: [Schema.FAQPage, Schema.WebSite]
  DynamicPage: [Schema.FAQPage, Schema.WebSite]
  BlogArticle: [Schema.FAQPage, Schema.WebSite]
  BlogMainPage: [Schema.FAQPage, Schema.WebSite]
};

export type SchemaOrgType<K extends keyof SchemaOrgSections> = SchemaOrgLayouts<
  SchemaOrgSections,
  K
>

// =====[ SITEMAP ]==========================================
export type SitemapType = MetadataRoute.Sitemap