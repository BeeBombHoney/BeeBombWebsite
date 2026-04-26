/**
 * JSON-LD structured data for Google rich results and local SEO.
 *
 * dangerouslySetInnerHTML is intentional and safe here: all values are
 * hardcoded constants or come from our own data files (no user input),
 * and JSON.stringify on a plain object cannot produce XSS.
 * This pattern is the official Next.js recommendation for JSON-LD.
 */

import { products } from "@/data/products";

const SITE_URL = "https://bee-bomb-website.vercel.app";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bee Bomb Honey",
  description:
    "Pure, raw mountain wildflower honey from the Yampa Valley. Honey, honeycomb, jams & butters crafted by Bee Bomb Honey in Steamboat Springs, Colorado.",
  url: SITE_URL,
  image: `${SITE_URL}/photos/frame-held-wide.jpg`,
  telephone: "+1-303-641-1659",
  email: "beebombhoneyco@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2130 Resort Drive, Unit E",
    addressLocality: "Steamboat Springs",
    addressRegion: "CO",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.485,
    longitude: -106.8317,
  },
  sameAs: [
    "https://www.facebook.com/people/Bee-Bomb-Honey/61552058123683/",
  ],
};

const productList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Bee Bomb Honey Products",
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: product.name,
      description: product.description,
      image: `${SITE_URL}${product.image}`,
      brand: {
        "@type": "Brand",
        name: "Bee Bomb Honey",
      },
    },
  })),
};

// All data is static — safe to pass directly to the script tag.
const localBusinessJson = JSON.stringify(localBusiness);
const productListJson = JSON.stringify(productList);

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        // Safe: static data only, no user input
        dangerouslySetInnerHTML={{ __html: localBusinessJson }}
      />
      <script
        type="application/ld+json"
        // Safe: static data only, no user input
        dangerouslySetInnerHTML={{ __html: productListJson }}
      />
    </>
  );
}
