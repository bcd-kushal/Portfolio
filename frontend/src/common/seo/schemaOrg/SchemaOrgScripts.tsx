import { BlogPostingSchemaType, BlogPostingType, BlogSchemaType, BreadcrumbsType, ContentSchemaType, FAQType, SchemaDataType, SchemaOrgSections, SchemaOrgType, WebpageSchemaType } from "./seoTypes";
import * as Schema from "schema-dts";
import { ABSOLUTE_FULL_NAME, MOBILE_NO } from "@/common/data/root/_personalDetails";



const DEFAULT_URL = `...`;
const MY_NAME = ABSOLUTE_FULL_NAME;
const ALTERNATE_NAME = `...`;
const MY_LOGO = `...`;
// const MY_MOBILE = MOBILE_NO;


export const SchemaOrgScripts = ({
  pageType,
  url,
  data: { Home, BlogArticle, BlogsPage, Category, Content, DynamicPage }
}: {
  pageType: keyof SchemaOrgSections;
  url: string;
  data: SchemaDataType;
}) => {
  const WEBSITE_SCHEMA: Schema.WebSite = {
    "@type": "WebSite",
    name: MY_NAME,
    alternateName: ALTERNATE_NAME,
    url: DEFAULT_URL,
    image: MY_LOGO,
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: { "@type": "Organization", name: MY_NAME }
  };

  const ORGANIZATION_SCHEMA: Schema.Organization = {
    "@type": "Organization",
    name: MY_NAME,
    alternateName: ALTERNATE_NAME,
    url: DEFAULT_URL,
    image: MY_LOGO,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: MOBILE_NO,
      contactType: "customer service",
      contactOption: "TollFree",
      areaServed: "IN"
    }
  };

  /* const CORPORATION_SCHEMA: Schema.Corporation = {
    "@type": "Corporation",
    name: MY_NAME,
    alternateName: ALTERNATE_NAME,
    url: DEFAULT_URL,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: MOBILE_NO,
      contactType: "customer service",
      contactOption: "TollFree",
      areaServed: "IN"
    }
  }; */

  // HOMEPAGE ############################################
  if (pageType === "Home") {
    const schema: SchemaOrgType<"Home"> = [
      faqSchema({ faqs: Home?.faqs || [], url }),
      WEBSITE_SCHEMA,
      ORGANIZATION_SCHEMA
    ];

    return jsonLDScripts(schema as object[]);
  }

  // CATEGORY ############################################
  if (pageType === "Category") {
    const schema: SchemaOrgType<"Category"> = [
      faqSchema({ faqs: Category?.faqs || [], url }),
      WEBSITE_SCHEMA,
      breadcrumbsSchema({ breadcrumbs: Category?.breadcrumbs || [], url }),
      productSchemaNew({
        name: Category?.product?.name || "Category",
        url,
        highPrice: Category?.product?.highPrice || 4999,
        lowPrice: Category?.product?.lowPrice || 499,
        ratingCount: Category?.product?.ratingCount || 999,
        ratingValue: Category?.product?.ratingValue || 4.9,
        reviewCount: Category?.product?.reviewCount || 349
      })
      // itemListSchema({
      //   name: Category?.name || "",
      //   contents: Category?.contents || [],
      //   url,
      //   description: Category?.description
      // })
    ];

    return jsonLDScripts(schema as object[]);
  }

  // CONTENT ############################################
  if (pageType === "Content") {
    const productSchemaData = {
      currency: Content?.content.currency || "INR",
      price: Content?.content.price || "",
      rating: Content?.content.rating || { avgRating: 5.0, count: 243 },
      reviews: Content?.content.reviews || [],
      sku: Content?.content.sku || "",
      url: Content?.content.url || "",
      validUntil: Content?.content.validUntil || "",
      description: Content?.content.description || ""
    };

    const schema: SchemaOrgType<"Content"> = [
      WEBSITE_SCHEMA,
      webpageSchema({
        alternateName: MY_NAME,
        image: Content?.webpage.image || "",
        name: Content?.webpage.name || "",
        url: Content?.webpage.url || "",
        description: Content?.webpage.description,
        productDetails: productSchemaData
      }),
      breadcrumbsSchema({ url, breadcrumbs: Content?.breadcrumbs || [] }),
      productSchema({
        ...productSchemaData,
        image: Content?.content.image || "",
        name: Content?.content.name || ""
      })
    ];

    return jsonLDScripts(schema as object[]);
  }

  // DYNAMIC PAGE ############################################
  if (pageType === "DynamicPage") {
    const schema: SchemaOrgType<"DynamicPage"> = [
      faqSchema({ faqs: DynamicPage?.faqs || [], url }),
      webpageSchema({
        alternateName: DynamicPage?.webpage.alternateName || MY_NAME,
        image: DynamicPage?.webpage.image || "",
        name: DynamicPage?.webpage.name || "",
        url: DynamicPage?.webpage.url || "",
        description: DynamicPage?.webpage.description
      }),
      WEBSITE_SCHEMA
    ];

    return jsonLDScripts(schema as object[]);
  }

  // BLOG ARTICLE ############################################
  if (pageType === "BlogArticle") {
    const schema: SchemaOrgType<"BlogArticle"> = [
      webpageSchema({
        alternateName: BlogArticle?.webpage.alternateName || MY_NAME,
        image: BlogArticle?.webpage.image || "",
        name: BlogArticle?.webpage.name || "",
        url: BlogArticle?.webpage.url || "",
        description: BlogArticle?.webpage.description
      }),
      WEBSITE_SCHEMA,
      ORGANIZATION_SCHEMA,
      blogPostingSchema(BlogArticle?.blogPosting)
    ];

    return jsonLDScripts(schema as object[]);
  }

  // BLOGS ############################################
  if (pageType === "BlogsPage") {
    const schema: SchemaOrgType<"BlogsPage"> = [
      webpageSchema({
        alternateName: BlogsPage?.webpage.alternateName || MY_NAME,
        image: BlogsPage?.webpage.image || "",
        name: BlogsPage?.webpage.name || "",
        url: BlogsPage?.webpage.url || "",
        description: BlogsPage?.webpage.description
      }),
      WEBSITE_SCHEMA,
      ORGANIZATION_SCHEMA,
      BlogsPage ? blogSchema(BlogsPage?.blog) : { "@type": "Blog" }
    ];

    return jsonLDScripts(schema as object[]);
  }
};

const isBlogPostingType = (
  props: BlogPostingType | BlogPostingSchemaType
): props is BlogPostingSchemaType =>
  (props as BlogPostingSchemaType).keywords !== undefined;

const faqSchema = ({
  faqs,
  url
}: {
  url: string;
  faqs: FAQType;
}): Schema.FAQPage => ({
  "@type": "FAQPage",
  name: "Frequently Asked Questions",
  url,
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    // text: q,
    acceptedAnswer: {
      "@type": "Answer",
      // name: a,
      text: a
    }
  })),
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": url,
    url
  },
  author: {
    "@type": "Organization",
    name: MY_NAME
  }
});

const breadcrumbsSchema = ({
  url,
  breadcrumbs
}: {
  url: string;
  breadcrumbs: BreadcrumbsType;
}): Schema.BreadcrumbList => ({
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map(({ label, url }, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: label,
    item: url
  })),
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": url,
    url
  }
});

const productSchemaNew = ({
  name,
  url,
  highPrice,
  lowPrice,
  ratingCount,
  ratingValue,
  reviewCount
}: {
  name: string;
  url: string;
  highPrice: number;
  lowPrice: number;
  ratingCount: number;
  ratingValue: number;
  reviewCount: number;
}): Schema.Product => ({
  "@type": "Product",
  name,
  offers: {
    "@type": "AggregateOffer",
    highPrice,
    lowPrice,
    priceValidUntil: "31 Dec 2100",
    priceCurrency: "INR",
    url
  },
  aggregateRating: {
    "@type": "AggregateRating",
    bestRating: 5.0,
    ratingCount,
    ratingValue,
    reviewCount
  }
});

/* const itemListSchema = ({
  name,
  description,
  url,
  contents
}: {
  name: string;
  description?: string;
  url: string;
  contents: ContentSchemaType[];
}): Schema.ItemList => ({
  "@type": "ItemList",
  name,
  description,
  url,
  itemListElement: contents.map((contentData) => productSchema(contentData))
}); */

const webpageSchema = ({
  alternateName,
  image,
  name,
  url,
  description,
  productDetails
}: WebpageSchemaType): Schema.WebPage => ({
  "@type": "WebPage",
  name,
  alternateName,
  url,
  image,
  description,
  primaryImageOfPage: {
    "@type": "ImageObject",
    url
  },
  mainEntity: productDetails
    ? {
      "@type": "Product",
      name,
      image,
      offers: {
        "@type": "Offer",
        url,
        price: productDetails.price,
        priceCurrency: productDetails.currency,
        priceValidUntil: productDetails.validUntil,
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          returnPolicyCategory:
            "https://schema.org/MerchantReturnFiniteReturnWindow",
          merchantReturnDays: 1,
          returnMethod: "https://schema.org/ReturnByMail",
          returnFees: "https://schema.org/FreeReturn",
          applicableCountry: {
            "@type": "Country",
            name: "IN"
          }
        },
        /* shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingRate: {
            "@type": "MonetaryAmount",
            value: 0,
            currency: "INR"
          },
          shippingDestination: {
            "@type": "DefinedRegion",
            addressCountry: {
              "@type": "Country",
              name: "IN"
            }
          }
        },
        deliveryLeadTime: {
          "@type": "QuantitativeValue",
          minValue: 0,
          maxValue: 1,
          unitCode: "DAY"
        } */
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: productDetails.rating.avgRating,
        reviewCount: productDetails.rating.count
      },
      review: productDetails.reviews.map(
        ({ name, saidReview, date, rated, maxRate }) => ({
          "@type": "UserReview",
          author: {
            "@type": "Person",
            name
          },
          datePublished: date,
          reviewBody: saidReview,
          reviewRating: {
            "@type": "Rating",
            bestRating: maxRate,
            worstRating: 1,
            ratingValue: rated
          }
        })
      )
    }
    : undefined
});

const productSchema = ({
  url,
  currency,
  image,
  name,
  price,
  rating,
  reviews,
  description,
  sku,
  validUntil
}: ContentSchemaType): Schema.Product => ({
  "@type": "Product",
  name,
  description,
  image,
  sku,
  brand: {
    "@type": "Brand",
    name: MY_NAME
  },
  offers: {
    "@type": "Offer",
    url,
    price,
    priceCurrency: currency,
    priceValidUntil: validUntil,
    itemCondition: "https://schema.org/NewCondition",
    availability: "https://schema.org/InStock",
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      returnPolicyCategory:
        "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 3,
      returnMethod: "https://schema.org/ReturnByMail",
      returnFees: "https://schema.org/FreeReturn",
      applicableCountry: {
        "@type": "Country",
        name: "IN"
      }
    },
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: {
        "@type": "MonetaryAmount",
        value: 0,
        currency: "INR"
      },
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: {
          "@type": "Country",
          name: "IN"
        }
      }
    },
    /* deliveryLeadTime: {
      "@type": "QuantitativeValue",
      minValue: 0,
      maxValue: 1,
      unitCode: "DAY"
    } */
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: rating.avgRating,
    reviewCount: rating.count
  },
  review: reviews.map(({ name, saidReview, date, rated, maxRate }) => ({
    "@type": "UserReview",
    author: {
      "@type": "Person",
      name
    },
    datePublished: date,
    reviewBody: saidReview,
    reviewRating: {
      "@type": "Rating",
      bestRating: maxRate,
      worstRating: 1,
      ratingValue: rated
    }
  }))
});

const blogSchema = ({
  url,
  description,
  name,
  posts,
  publisherName
}: BlogSchemaType): Schema.Blog => ({
  "@type": "Blog",
  name,
  description,
  url,
  publisher: {
    "@type": "Organization",
    name: publisherName
  },
  author: {
    "@type": "Organization",
    name: MY_NAME
  },
  blogPost: posts.map((post) => blogPostingSchema(post))
});

const blogPostingSchema = (
  props: BlogPostingType | BlogPostingSchemaType | undefined
): Schema.BlogPosting => {
  if (props === undefined)
    return {
      "@type": "BlogPosting"
    };

  const { authorName, description, headline, publishedOn, url } = props;

  const blogSchema: Schema.BlogPosting = {
    "@type": "BlogPosting",
    headline,
    description,
    author: {
      "@type": "Person",
      name: authorName
    },
    publisher: {
      "@type": "Organization",
      name: MY_NAME
    },
    datePublished: publishedOn,
    url
  };

  if (!isBlogPostingType(props)) return blogSchema;

  const { keywords, image, body, wordCount } = props;

  return {
    ...blogSchema,
    keywords: keywords.join(", "),
    image: {
      "@type": "ImageObject",
      url: image
    },
    wordCount,
    articleBody: body
  } as Schema.BlogPosting;
};

const jsonLDScripts = (schema: object[]) =>
  schema.map((jsonLd, index) => (
    <script
      type="application/ld+json"
      key={index}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", ...jsonLd })
      }}
    />
  ));