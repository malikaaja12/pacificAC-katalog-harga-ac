let mainContent,
  contactSection,
  contactLink,
  homeLink,
  homeNavLink,
  productModal,
  detailModal,
  currentAcData = []; // Store current data for modal access

// // --- DOM ELEMENTS ---
function initElements() {
  mainContent = document.getElementById("main-content");
  contactSection = document.getElementById("contact-section");
  contactLink = document.getElementById("contact-link");
  homeLink = document.getElementById("home-link");
  homeNavLink = document.getElementById("home-nav-link");
  productModal = document.getElementById("product-modal");
  detailModal = document.getElementById("product-detail-modal");

  if (
    mainContent &&
    contactSection &&
    contactLink &&
    homeLink &&
    homeNavLink &&
    productModal &&
    detailModal
  ) {
    contactLink.addEventListener("click", (e) => {
      e.preventDefault();
      showContactPage();
    });
    homeLink.addEventListener("click", (e) => {
      e.preventDefault();
      showHomePage();
    });
    homeNavLink.addEventListener("click", (e) => {
      e.preventDefault();
      showHomePage();
    });
  }
}

// --- NAVIGATION ---
function showContactPage() {
  mainContent.classList.add("hidden");
  contactSection.classList.remove("hidden");
  closeProductModal();
}

function showHomePage() {
  contactSection.classList.add("hidden");
  mainContent.classList.remove("hidden");
}

export function populateBrandGrid(acData) {
  currentAcData = acData; // Store for modal access
  const brandGrid = document.getElementById("brand-grid");

  if (!brandGrid) {
    console.error("brand-grid element not found!");
    return;
  }

  brandGrid.innerHTML = "";

  if (!acData || acData.length === 0) {
    console.error("No data to display!");
    return;
  }

  acData.forEach((brand) => {
    const brandCard = document.createElement("div");
    brandCard.className =
      "brand-card bg-white rounded-xl shadow-md overflow-hidden p-6 flex flex-col items-center text-center";
    brandCard.onclick = () => showProductModal(brand.brand);
    brandCard.innerHTML = `
                    <img src="${brand.imageUrl}" alt="Logo ${brand.brand}" class="w-48 h-32 object-contain rounded-lg mb-4" onerror="this.onerror=null;this.src='https://placehold.co/300x200/cccccc/ffffff?text=Image+Error';">
                    <h3 class="text-xl font-semibold text-gray-700">${brand.brand}</h3>
                `;
    brandGrid.appendChild(brandCard);
  });
}

function showProductModal(brandName) {
  const brand = currentAcData.find((b) => b.brand === brandName);
  if (!brand) return;

  document.getElementById("modal-brand-title").textContent =
    `Produk AC Split ${brand.brand}`;
  const productList = document.getElementById("modal-product-list");
  productList.innerHTML = "";

  const sortedTypes = [...brand.types].sort((a, b) => {
    const order = [
      "Standar Series",
      "SMS Series",
      "Inverter Series",
      "Beta Inverter Series",
      "Alpha Inverter Series",
      "Low Watt Series",
    ];
    return order.indexOf(a.name) - order.indexOf(b.name);
  });

  sortedTypes.forEach((type) => {
    const typeSection = document.createElement("div");
    typeSection.className = "mb-8";
    typeSection.innerHTML = `<h4 class="text-xl font-semibold text-gray-900 mb-4 ml-2 border-b border-gray-300 pb-1">Tipe: ${type.name}</h4>
                                             <div class="grid grid-cols sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6"></div>`;
    const productGrid = typeSection.querySelector(".grid");

    const sortedProducts = [...type.products].sort((a, b) => {
      // Check if the match is successful before accessing the elements
      const matchA = a.name.match(/(\d+\.?\d*)\s*PK/);
      const matchB = b.name.match(/(\d+\.?\d*)\s*PK/);

      // Handle cases where there is no match
      const pkA = matchA ? parseFloat(matchA[1]) : 0; // Assign a default value or handle as needed
      const pkB = matchB ? parseFloat(matchB[1]) : 0; // Assign a default value or handle as needed

      return pkA - pkB;
    });

    sortedProducts.forEach((product) => {
      const productCard = document.createElement("div");
      // Make the entire product card clickable
      productCard.className =
        "product-card bg-white rounded-xl shadow-sm overflow-hidden p-4 flex flex-col items-center text-center border border-gray-300";
      productCard.onclick = () =>
        showProductDetailModal(brand.brand, type.name, product.name); // Add click handler to the card
      productCard.innerHTML = `
                        <img src="${product.imgList}" alt="${
                          product.name
                        }" class="w-full h-48 md:h-32 object-cover rounded-lg mb-3" onerror="this.onerror=null;this.src='https://placehold.co/300x200/cccccc/ffffff?text=Image+Error';">
                        <h5 class="text-lg font-semibold text-gray-900 mb-2">${
                          product.name
                        }</h5>
                        <p class="text-gray-600 text-sm sm:text-md mb-3 line-clamp-2">${
                          product.desc
                        }</p>
                        <div class="flex items-baseline mb-3">
                            <span class="text-lg md:text-xl font-bold text-blue-700">${
                              product.price
                            }</span>
                             ${
                               product.oldPrice
                                 ? `<span class="text-sm text-gray-500 ml-3 line-through">${product.oldPrice}</span>`
                                 : ""
                             }
                           
                        </div>
                        <!-- Removed the separate "Lihat Detail" button as the whole card is clickable -->
                    `;
      productGrid.appendChild(productCard);
    });

    productList.appendChild(typeSection);
  });

  productModal.classList.add("show");
  productModal.classList.remove("hidden");
}

function showProductDetailModal(brandName, typeName, productName) {
  const brand = currentAcData.find((b) => b.brand === brandName);
  const type = brand?.types.find((t) => t.name === typeName);
  const product = type?.products.find((p) => p.name === productName);
  if (!product) return;

  const detailContent = document.getElementById("product-detail-content");
  // Modified structure to ensure image is always at the top and fills its column
  detailContent.innerHTML = `
                <button class="close-button" onclick="closeDetailModal()">&times;</button>
                <div class="flex flex-col md:flex-col items-center"> <!-- Changed to flex-col for consistent stacking -->
                    <div class="w-full mb-6"> <!-- Image always takes full width and has bottom margin -->
                        <img src="${product.imgDetail}" alt="${
                          product.name
                        }" class="w-full h-auto object-cover rounded-lg shadow-md" onerror="this.onerror=null;this.src='https://placehold.co/400x300/cccccc/ffffff?text=Image+Error';">
                    </div>
                    <div class="w-full"> <!-- Details section also takes full width -->
                        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">${
                          product.name
                        }</h3>
                        <p class="text-gray-700 text-sm md:text-lg mb-4">${
                          product.desc
                        }</p>
                        <div class="flex items-baseline mb-4">
                            <span class="text-xl md:text-2xl  font-extrabold text-blue-700">${
                              product.price
                            }</span>
                            ${
                              product.oldPrice
                                ? `<span class="text-lg text-gray-500 ml-3 line-through">${product.oldPrice}</span>`
                                : ""
                            }
                        </div>

                        ${
                          product.features && product.features.length > 0
                            ? `
                            <h4 class="text-lg md:text-lg font-semibold text-gray-800 mb-3">Fitur Unggulan:</h4>
                            <ul class="text-sm md:text-lg list-disc list-inside text-gray-700 mb-5 pl-4">
                                ${product.features
                                  .map((feature) => `<li>${feature}</li>`)
                                  .join("")}
                            </ul>
                        `
                            : ""
                        }

                        ${
                          product.specs
                            ? `
                            <h4 class="text-lg md:text-xl font-semibold text-gray-800 mb-3">Spesifikasi:</h4>
                            <table class="text-xs md:text-sm spec-table text-gray-700 rounded-lg overflow-hidden">
                                <tbody>
                                    ${Object.entries(product.specs)
                                      .map(
                                        ([key, value]) => `
                                        <tr>
                                            <td>${key}</td>
                                            <td>${value}</td>
                                        </tr>
                                    `,
                                      )
                                      .join("")}
                                </tbody>
                            </table>
                        `
                            : ""
                        }
                    </div>
                </div>
            `;

  detailModal.classList.add("show");
  detailModal.classList.remove("hidden");
}

function closeProductModal() {
  if (productModal) {
    productModal.classList.remove("show");
    productModal.classList.add("hidden");
  }
}

function closeDetailModal() {
  if (detailModal) {
    detailModal.classList.remove("show");
    detailModal.classList.add("hidden");
  }
}

// Make functions globally accessible for onclick handlers in HTML
window.closeProductModal = closeProductModal;
window.closeDetailModal = closeDetailModal;

// Event listeners to close modals when clicking outside
function initModalListeners() {
  if (productModal) {
    productModal.addEventListener("click", (e) => {
      if (e.target === productModal) {
        closeProductModal();
      }
    });
  }

  if (detailModal) {
    detailModal.addEventListener("click", (e) => {
      if (e.target === detailModal) {
        closeDetailModal();
      }
    });
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  initElements();
  initModalListeners();
});
