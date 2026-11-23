import type { MetadataRoute } from "next";
import { SITE_URL, routes } from "@/lib/links";
import { servicePages, servicePath } from "@/lib/service-pages";
import { getProducts, isShopifyConfigured } from "@/lib/shopify";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const entry = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority,
  });

  const core = [
    entry(routes.home, 1),
    entry(routes.services, 0.9),
    ...servicePages.map((p) => entry(servicePath(p.slug), 0.9)),
    entry(routes.hireUs, 0.9),
    entry(routes.investigations, 0.9),
    entry(routes.femaleEps, 0.8),
    entry(routes.training, 0.8),
    entry(routes.trainingPrivate, 0.7),
    entry(routes.trainingGroup, 0.7),
    entry("/training/eps", 0.7),
    entry(routes.trainingOnline, 0.7),
    entry(routes.videoLibrary, 0.7),
    entry(routes.workshops, 0.7),
    entry(routes.selfDefender, 0.7),
    entry(routes.shop, 0.7),
    entry(routes.ftsFork, 0.6),
    entry(routes.about, 0.6),
    entry(routes.contact, 0.6),
    entry(routes.vlog, 0.5),
  ];

  let products: MetadataRoute.Sitemap = [];
  if (isShopifyConfigured()) {
    try {
      const list = await getProducts();
      products = list.map((p) => entry(`/shop/products/${p.handle}`, 0.5));
    } catch {
      products = [];
    }
  }

  return [...core, ...products];
}
