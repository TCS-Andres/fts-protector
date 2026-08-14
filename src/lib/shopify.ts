// Shopify Storefront API (headless) client.
// Credentials come from environment variables so no secrets live in the repo:
//   SHOPIFY_STORE_DOMAIN            e.g. franckthesolution.myshopify.com
//   SHOPIFY_STOREFRONT_API_TOKEN    the Headless channel PUBLIC access token
//   SHOPIFY_STOREFRONT_API_VERSION  e.g. 2026-07 (optional)
// When the env vars are absent the site falls back to its curated Shop content,
// so the build never fails just because the store isn't wired up yet.

const DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const TOKEN = process.env.SHOPIFY_STOREFRONT_API_TOKEN;
const API_VERSION = process.env.SHOPIFY_STOREFRONT_API_VERSION || "2026-07";

export function isShopifyConfigured(): boolean {
  return Boolean(DOMAIN && TOKEN);
}

function endpoint(): string {
  return `https://${DOMAIN}/api/${API_VERSION}/graphql.json`;
}

type GraphQLResponse<T> = { data?: T; errors?: { message: string }[] };

async function shopifyFetch<T>(
  query: string,
  variables: Record<string, unknown> = {},
  opts: { revalidate?: number; noStore?: boolean } = {}
): Promise<T> {
  if (!isShopifyConfigured()) {
    throw new Error("Shopify is not configured");
  }
  const res = await fetch(endpoint(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": TOKEN as string,
    },
    body: JSON.stringify({ query, variables }),
    ...(opts.noStore
      ? { cache: "no-store" as RequestCache }
      : { next: { revalidate: opts.revalidate ?? 60 } }),
  });
  if (!res.ok) {
    throw new Error(`Shopify request failed with HTTP ${res.status}`);
  }
  const json = (await res.json()) as GraphQLResponse<T>;
  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join("; "));
  }
  if (!json.data) {
    throw new Error("Shopify returned no data");
  }
  return json.data;
}

export type Money = { amount: string; currencyCode: string };
export type ShopifyImage = {
  url: string;
  altText: string | null;
  width?: number | null;
  height?: number | null;
};

export type ProductListItem = {
  id: string;
  title: string;
  handle: string;
  availableForSale: boolean;
  featuredImage: ShopifyImage | null;
  price: Money;
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  price: Money;
};

export type Product = {
  id: string;
  title: string;
  handle: string;
  descriptionHtml: string;
  availableForSale: boolean;
  images: ShopifyImage[];
  variants: ProductVariant[];
  price: Money;
};

export function formatMoney(m: Money): string {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: m.currencyCode,
    }).format(parseFloat(m.amount));
  } catch {
    return `${m.amount} ${m.currencyCode}`;
  }
}

type ProductNode = {
  id: string;
  title: string;
  handle: string;
  availableForSale: boolean;
  featuredImage: ShopifyImage | null;
  priceRange: { minVariantPrice: Money };
};

const PRODUCTS_QUERY = /* GraphQL */ `
  query Products($first: Int!) {
    products(first: $first, sortKey: CREATED_AT, reverse: true) {
      edges {
        node {
          id
          title
          handle
          availableForSale
          featuredImage { url altText width height }
          priceRange { minVariantPrice { amount currencyCode } }
        }
      }
    }
  }
`;

export async function getProducts(first = 30): Promise<ProductListItem[]> {
  const data = await shopifyFetch<{ products: { edges: { node: ProductNode }[] } }>(
    PRODUCTS_QUERY,
    { first }
  );
  return data.products.edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    handle: node.handle,
    availableForSale: node.availableForSale,
    featuredImage: node.featuredImage,
    price: node.priceRange.minVariantPrice,
  }));
}

type ProductDetailNode = {
  id: string;
  title: string;
  handle: string;
  descriptionHtml: string;
  availableForSale: boolean;
  images: { edges: { node: ShopifyImage }[] };
  priceRange: { minVariantPrice: Money };
  variants: {
    edges: {
      node: { id: string; title: string; availableForSale: boolean; price: Money };
    }[];
  };
};

const PRODUCT_QUERY = /* GraphQL */ `
  query Product($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      descriptionHtml
      availableForSale
      images(first: 8) {
        edges { node { url altText width height } }
      }
      priceRange { minVariantPrice { amount currencyCode } }
      variants(first: 25) {
        edges {
          node {
            id
            title
            availableForSale
            price { amount currencyCode }
          }
        }
      }
    }
  }
`;

export async function getProduct(handle: string): Promise<Product | null> {
  const data = await shopifyFetch<{ product: ProductDetailNode | null }>(PRODUCT_QUERY, {
    handle,
  });
  const p = data.product;
  if (!p) return null;
  return {
    id: p.id,
    title: p.title,
    handle: p.handle,
    descriptionHtml: p.descriptionHtml,
    availableForSale: p.availableForSale,
    images: p.images.edges.map((e) => e.node),
    variants: p.variants.edges.map((e) => e.node),
    price: p.priceRange.minVariantPrice,
  };
}

const CART_CREATE = /* GraphQL */ `
  mutation CartCreate($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart { checkoutUrl }
      userErrors { message }
    }
  }
`;

// Creates a Shopify cart for a single variant and returns the hosted checkout URL.
export async function createCartCheckoutUrl(
  variantId: string,
  quantity = 1
): Promise<string> {
  const data = await shopifyFetch<{
    cartCreate: {
      cart: { checkoutUrl: string } | null;
      userErrors: { message: string }[];
    };
  }>(CART_CREATE, { lines: [{ merchandiseId: variantId, quantity }] }, { noStore: true });

  const { cart, userErrors } = data.cartCreate;
  if (userErrors?.length) {
    throw new Error(userErrors.map((e) => e.message).join("; "));
  }
  if (!cart?.checkoutUrl) {
    throw new Error("Shopify did not return a checkout URL");
  }
  return cart.checkoutUrl;
}
