import ResidentialAC from "./resident.js";
import commercialAC from "./commercial.js";
import sewaStanding from "./sewa.js";

// Helper function to extract numeric price
function parsePrice(priceStr) {
  if (!priceStr) return 0;
  const cleaned = priceStr.replace(/[^0-9]/g, "");
  return parseInt(cleaned, 10) || 0;
}

// Helper function to extract numeric PK
function parsePK(productName, typeName) {
  const combined = (productName + " " + typeName).toLowerCase();
  const match = combined.match(/(\d+\.?\d*)\s*pk/i);
  if (match) {
    return parseFloat(match[1]);
  }
  if (combined.includes("1/2 pk") || combined.includes("0.5 pk")) return 0.5;
  if (combined.includes("3/4 pk") || combined.includes("0.7 pk") || combined.includes("0.7 pk")) return 0.7;
  if (combined.includes("1.5 pk") || combined.includes("1 1/2 pk")) return 1.5;
  if (combined.includes("2.5 pk")) return 2.5;
  if (combined.includes("1 pk")) return 1.0;
  if (combined.includes("2 pk")) return 2.0;
  if (combined.includes("3 pk")) return 3.0;
  if (combined.includes("5 pk")) return 5.0;
  return 1.0; // default
}

// Helper function to detect AC tech type
function parseTech(productName, typeName) {
  const str = (productName + " " + typeName).toLowerCase();
  if (str.includes("inverter")) return "Inverter";
  if (str.includes("low watt") || str.includes("low-watt") || str.includes("eco")) return "Low Watt";
  if (str.includes("standing") || str.includes("commercial") || str.includes("cassette")) return "Commercial";
  return "Standard";
}

// Clean brand name
function cleanBrand(brandName) {
  if (!brandName) return "Lainnya";
  let b = brandName.replace(/Standing/i, "").replace(/AC/i, "").trim();
  if (b.toLowerCase().includes("daikin")) return "Daikin";
  if (b.toLowerCase().includes("gree")) return "Gree";
  if (b.toLowerCase().includes("panasonic")) return "Panasonic";
  if (b.toLowerCase().includes("sharp")) return "Sharp";
  if (b.toLowerCase().includes("polytron")) return "Polytron";
  if (b.toLowerCase().includes("midea")) return "Midea";
  if (b.toLowerCase().includes("lg")) return "LG";
  if (b.toLowerCase().includes("aqua")) return "Aqua";
  return b || brandName;
}

// Helper to extract BTU from specs or name
function parseBTU(specs, pk) {
  if (specs && specs["Kapasitas Pendingin"]) {
    const match = specs["Kapasitas Pendingin"].match(/([\d,]+)\s*Btu/i);
    if (match) {
      return parseInt(match[1].replace(/,/g, ""), 10);
    }
  }
  // Fallback based on PK
  return Math.round(pk * 9000);
}

// Helper to extract Watt from specs
function parseWatt(specs) {
  if (specs && specs["Daya Listrik"]) {
    const match = specs["Daya Listrik"].match(/([\d,.]+)\s*Watt/i);
    if (match) {
      return parseFloat(match[1].replace(/,/g, ""));
    }
  }
  return null;
}

function processBrands(brandList, categoryName) {
  const products = [];
  if (!Array.isArray(brandList)) return products;

  brandList.forEach((brandItem, brandIdx) => {
    const brandName = brandItem.brand;
    const brandClean = cleanBrand(brandName);
    const brandLogo = brandItem.imageUrl;

    if (Array.isArray(brandItem.types)) {
      brandItem.types.forEach((typeItem, typeIdx) => {
        const typeName = typeItem.name;
        if (Array.isArray(typeItem.products)) {
          typeItem.products.forEach((prod, prodIdx) => {
            const priceNum = parsePrice(prod.price);
            const pk = parsePK(prod.name, typeName);
            const tech = parseTech(prod.name, typeName);
            const btu = parseBTU(prod.specs, pk);
            const watt = parseWatt(prod.specs);

            let finalPrice = prod.price || "Hubungi Admin";
            let finalPriceNum = priceNum;
            const originalPrice = prod.price || "Hubungi Admin";
            const originalPriceNum = priceNum;

            if (categoryName === "ResidentialAC" && priceNum > 0) {
              const mountingCost = pk > 1 ? 750000 : 500000;
              finalPriceNum = priceNum - mountingCost;
              finalPrice = "Rp " + finalPriceNum.toLocaleString("id-ID");
            }

            products.push({
              id: `${categoryName}-${brandClean}-${brandIdx}-${typeIdx}-${prodIdx}`,
              brand: brandClean,
              brandRaw: brandName,
              brandLogo: brandLogo,
              typeName: typeName,
              category: categoryName,
              name: prod.name,
              desc: prod.desc || "",
              price: finalPrice,
              priceNum: finalPriceNum,
              packagePrice: originalPrice,
              packagePriceNum: originalPriceNum,
              oldPrice: prod.oldPrice || null,
              imgList: prod.imgList || prod.imgDetail || "https://placehold.co/300x200/cccccc/ffffff?text=Pacific+AC",
              imgDetail: prod.imgDetail || prod.imgList || "https://placehold.co/400x300/cccccc/ffffff?text=Pacific+AC",
              features: prod.features || [],
              specs: prod.specs || {},
              pk: pk,
              tech: tech,
              btu: btu,
              watt: watt,
            });
          });
        }
      });
    }
  });

  return products;
}

let cachedProducts = null;

export function getAllProducts() {
  if (cachedProducts) {
    return cachedProducts;
  }

  const residential = processBrands(ResidentialAC, "ResidentialAC");
  const commercial = processBrands(commercialAC, "CommercialAC");
  const sewa = processBrands(sewaStanding, "SewaStandingAC");

  cachedProducts = [...residential, ...commercial, ...sewa];
  return cachedProducts;
}

/**
 * Updates prices dynamically in the cached products array.
 * Re-applies mounting cost logic for ResidentialAC matching processBrands logic.
 */
export function updatePricesFromAPI(apiPrices) {
  if (!Array.isArray(apiPrices)) return;

  // Initialize cachedProducts if it hasn't been loaded yet
  if (!cachedProducts) {
    getAllProducts();
  }

  apiPrices.forEach((update) => {
    const product = cachedProducts.find(p => p.id === update.id);
    if (product) {
      const priceNum = parsePrice(update.price);
      let finalPrice = update.price || "Hubungi Admin";
      let finalPriceNum = priceNum;
      const originalPrice = update.price || "Hubungi Admin";
      const originalPriceNum = priceNum;

      if (product.category === "ResidentialAC" && priceNum > 0) {
        const mountingCost = product.pk > 1 ? 750000 : 500000;
        finalPriceNum = priceNum - mountingCost;
        finalPrice = "Rp " + finalPriceNum.toLocaleString("id-ID");
      }

      product.price = finalPrice;
      product.priceNum = finalPriceNum;
      product.packagePrice = originalPrice;
      product.packagePriceNum = originalPriceNum;
      
      if (update.oldPrice !== undefined) {
        product.oldPrice = update.oldPrice;
      }
    }
  });
}

export function getAllBrands() {
  const products = getAllProducts();
  const brandSet = new Set(products.map((p) => p.brand));
  return Array.from(brandSet);
}

export function getMaxCatalogPrice() {
  const products = getAllProducts();
  let max = 0;
  products.forEach((p) => {
    if (p.priceNum > max) max = p.priceNum;
  });
  return max || 25000000;
}

