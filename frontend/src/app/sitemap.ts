import { DOMAIN } from '@/common/constants/environmentVariables';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/portfolio", "/projects"];

  return routes.map((url) => ({
    url: `${DOMAIN}${url}`,
    priority: url === "" ? 1.0 : 0.9,
    lastModified: new Date()
  }));
}