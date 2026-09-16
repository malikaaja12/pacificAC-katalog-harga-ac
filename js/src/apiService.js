/**
 * API Service for Pacific AC Price Catalog
 * Handles dynamic price fetching from an external source (like Google Sheets web app)
 * with a built-in safety fallback to local hardcoded data.
 */

// Replace this URL with your actual Google Apps Script web app URL or REST API endpoint.
// For now, it is empty, so it will trigger the fallback instantly.
export const API_ENDPOINT = ""; 

// Timeout duration in milliseconds (3 seconds)
const FETCH_TIMEOUT_MS = 3000;

/**
 * Helper to parse row-based array data (e.g. raw Google Sheets rows) into objects.
 * If the data is already an array of objects, it returns it directly.
 */
function parseApiResponse(data) {
  if (!Array.isArray(data)) return [];

  // Check if it's already an array of objects
  if (data.length > 0 && typeof data[0] === "object" && !Array.isArray(data[0])) {
    return data;
  }

  // Handle array of arrays (raw spreadsheet rows: first row is headers)
  if (data.length > 1 && Array.isArray(data[0])) {
    const headers = data[0].map(h => String(h).trim().toLowerCase());
    const idIdx = headers.indexOf("id");
    const priceIdx = headers.indexOf("price");
    const oldPriceIdx = headers.indexOf("oldprice"); // or "old_price"

    if (idIdx === -1 || priceIdx === -1) {
      console.warn("API Service: Google Sheet header must contain at least 'id' and 'price' columns.");
      return [];
    }

    const parsed = [];
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (!row[idIdx]) continue;
      parsed.push({
        id: String(row[idIdx]).trim(),
        price: row[priceIdx] ? String(row[priceIdx]).trim() : null,
        oldPrice: oldPriceIdx !== -1 && row[oldPriceIdx] ? String(row[oldPriceIdx]).trim() : null
      });
    }
    return parsed;
  }

  return [];
}

/**
 * Fetches prices from the API endpoint with a timeout.
 * Returns a list of price updates or null if the request failed/timed out.
 */
export async function fetchPriceUpdates() {
  if (!API_ENDPOINT) {
    console.info("API Service: No API endpoint defined. Using offline/local fallback prices.");
    return null;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(API_ENDPOINT, {
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    const parsedPrices = parseApiResponse(json);
    console.info("API Service: Successfully loaded dynamic prices from API.", parsedPrices.length, "items updated.");
    return parsedPrices;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === "AbortError") {
      console.warn(`API Service Timeout: API request timed out after ${FETCH_TIMEOUT_MS}ms.`);
    } else {
      console.warn("API Service Error: Failed to fetch dynamic prices.", error.message);
    }
    // Fallback: Return null to signal using local static data
    return null;
  }
}
