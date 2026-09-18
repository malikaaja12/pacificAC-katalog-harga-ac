import { getAllProducts, getAllBrands, getMaxCatalogPrice, updatePricesFromAPI } from "../data/allProducts.js";
import { 
  renderProductGrid, 
  updateBadges, 
  renderCompareModal, 
  renderWishlistModal,
  showProductDetails 
} from "../componnet/Card.js";
import { fetchPriceUpdates } from "./apiService.js";

// Global Filter State
let state = {
  searchQuery: "",
  category: "all",
  selectedBrands: [],
  selectedPKs: [],
  selectedTechs: [],
  maxPrice: 35000000,
  sortBy: "popular"
};

// Initialize app
async function init() {
  // Try to load dynamic prices from API
  try {
    const updates = await fetchPriceUpdates();
    if (updates) {
      updatePricesFromAPI(updates);
    }
  } catch (e) {
    console.error("API Service Error: unexpected error in init()", e);
  }

  // Populate brand checkboxes
  buildBrandFilters();

  // Load initial badges
  updateBadges();

  // Initial render
  filterAndRender();

  // Populate AC dropdown for simulation
  populateACDropdown();

  // Run initial simulation calculation
  runSimulation();

  // Attach event listeners
  setupEventListeners();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}


// Build brand checkboxes dynamically in the sidebar
function buildBrandFilters() {
  const container = document.getElementById("filter-brand-container");
  if (!container) return;

  const brands = getAllBrands().sort();
  container.innerHTML = "";

  brands.forEach((brand) => {
    const label = document.createElement("label");
    label.className = "flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer hover:text-slate-900";
    label.innerHTML = `
      <input 
        type="checkbox" 
        value="${brand}" 
        class="filter-brand-checkbox rounded text-blue-600 focus:ring-blue-500" 
      />
      ${brand}
    `;
    container.appendChild(label);

    // Watch for changes
    label.querySelector("input").addEventListener("change", (e) => {
      const val = e.target.value;
      if (e.target.checked) {
        state.selectedBrands.push(val);
      } else {
        state.selectedBrands = state.selectedBrands.filter((b) => b !== val);
      }
      filterAndRender();
    });
  });
}

// Global Filter & Sort Logic
function filterAndRender() {
  const mainLayout = document.getElementById("catalog-main-layout");
  const paketPasangSection = document.getElementById("paket-pasang-section");

  if (state.category === "PaketPasang") {
    if (mainLayout) mainLayout.classList.add("hidden");
    if (paketPasangSection) paketPasangSection.classList.remove("hidden");
    return;
  }

  if (mainLayout) mainLayout.classList.remove("hidden");
  if (paketPasangSection) paketPasangSection.classList.add("hidden");

  let products = getAllProducts();

  // 1. Search Query Filter
  if (state.searchQuery.trim() !== "") {
    const q = state.searchQuery.toLowerCase();
    products = products.filter((p) => {
      return (
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.typeName.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        (p.specs && Object.values(p.specs).some(val => String(val).toLowerCase().includes(q)))
      );
    });
  }

  // 2. Category Tab Filter
  if (state.category !== "all") {
    products = products.filter((p) => p.category === state.category);
  }

  // 3. Brand Checkbox Filter
  if (state.selectedBrands.length > 0) {
    products = products.filter((p) => state.selectedBrands.includes(p.brand));
  }

  // 4. Capacity (PK) Checkbox Filter
  if (state.selectedPKs.length > 0) {
    products = products.filter((p) => {
      // Map checkbox value "3" to PK >= 3.0
      return state.selectedPKs.some((pkVal) => {
        if (pkVal === 3) {
          return p.pk >= 3.0;
        }
        return p.pk === pkVal;
      });
    });
  }

  // 5. Tech Checkbox Filter
  if (state.selectedTechs.length > 0) {
    products = products.filter((p) => state.selectedTechs.includes(p.tech));
  }

  // 6. Max Price Slider Filter
  products = products.filter((p) => {
    // If the price is call admin or zero, include it so it's not hidden
    if (p.priceNum === 0) return true;
    return p.priceNum <= state.maxPrice;
  });

  // 7. Sorting
  if (state.sortBy === "price-asc") {
    products.sort((a, b) => (a.priceNum || 99999999) - (b.priceNum || 99999999));
  } else if (state.sortBy === "price-desc") {
    products.sort((a, b) => (b.priceNum || 0) - (a.priceNum || 0));
  } else if (state.sortBy === "pk-asc") {
    products.sort((a, b) => a.pk - b.pk);
  } else if (state.sortBy === "pk-desc") {
    products.sort((a, b) => b.pk - a.pk);
  } else {
    // "popular" / Default: Sort by brand name, then PK asc
    products.sort((a, b) => {
      if (a.brand !== b.brand) {
        return a.brand.localeCompare(b.brand);
      }
      return a.pk - b.pk;
    });
  }

  // Render to grid
  renderProductGrid(products);

  // Update mobile active filter badge
  const activeCount = state.selectedBrands.length + state.selectedPKs.length + state.selectedTechs.length + (state.maxPrice < 35000000 ? 1 : 0);
  const mobileBadge = document.getElementById("mobile-filter-badge");
  if (mobileBadge) {
    if (activeCount > 0) {
      mobileBadge.textContent = activeCount;
      mobileBadge.classList.remove("hidden");
    } else {
      mobileBadge.classList.add("hidden");
    }
  }
}

// Reset all filters in sidebar
function resetAllFilters() {
  state.selectedBrands = [];
  state.selectedPKs = [];
  state.selectedTechs = [];
  state.maxPrice = 35000000;
  state.searchQuery = "";

  // Reset inputs
  document.getElementById("global-search").value = "";
  document.getElementById("price-range").value = 35000000;
  document.getElementById("price-slider-val").textContent = "Rp 35.000.000+";

  document.querySelectorAll(".filter-brand-checkbox").forEach((cb) => (cb.checked = false));
  document.querySelectorAll(".filter-pk-checkbox").forEach((cb) => (cb.checked = false));
  document.querySelectorAll(".filter-tech-checkbox").forEach((cb) => (cb.checked = false));

  filterAndRender();
}

// Setup App Events listeners
function setupEventListeners() {
  // 1. Search Bar
  const searchInput = document.getElementById("global-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      filterAndRender();
    });
  }

  // 2. Category Tabs
  document.querySelectorAll(".cat-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cat-tab-btn").forEach((b) => {
        b.classList.remove("active", "bg-blue-600", "bg-cyan-600", "text-gray-400");
        b.classList.add("bg-white", "text-slate-700", "border", "border-slate-200");
      });
      btn.classList.add("active", "bg-blue-600", "text-gray-900");
      btn.classList.remove("bg-white", "text-slate-700", "border", "border-slate-200");

      state.category = btn.getAttribute("data-cat");
      filterAndRender();
    });
  });

  // 3. Reset Button
  const resetBtn = document.getElementById("btn-reset-filters");
  if (resetBtn) {
    resetBtn.addEventListener("click", resetAllFilters);
  }

  const resetEmptyBtn = document.getElementById("btn-reset-empty");
  if (resetEmptyBtn) {
    resetEmptyBtn.addEventListener("click", resetAllFilters);
  }

  // 4. PK Capacity Checkboxes
  document.querySelectorAll(".filter-pk-checkbox").forEach((cb) => {
    cb.addEventListener("change", (e) => {
      const val = parseFloat(e.target.value);
      if (e.target.checked) {
        state.selectedPKs.push(val);
      } else {
        state.selectedPKs = state.selectedPKs.filter((p) => p !== val);
      }
      filterAndRender();
    });
  });

  // 5. Tech Checkboxes
  document.querySelectorAll(".filter-tech-checkbox").forEach((cb) => {
    cb.addEventListener("change", (e) => {
      const val = e.target.value;
      if (e.target.checked) {
        state.selectedTechs.push(val);
      } else {
        state.selectedTechs = state.selectedTechs.filter((t) => t !== val);
      }
      filterAndRender();
    });
  });

  // 6. Price range slider
  const priceSlider = document.getElementById("price-range");
  const priceSliderVal = document.getElementById("price-slider-val");
  if (priceSlider && priceSliderVal) {
    priceSlider.addEventListener("input", (e) => {
      const val = parseInt(e.target.value, 10);
      state.maxPrice = val;

      if (val >= 35000000) {
        priceSliderVal.textContent = "Rp 35.000.000+";
      } else {
        const formatted = new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(val);
        priceSliderVal.textContent = formatted;
      }
      filterAndRender();
    });
  }

  // 7. Sort selector
  const sortSelector = document.getElementById("sort-selector");
  if (sortSelector) {
    sortSelector.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      filterAndRender();
    });
  }

  // 7.5. Mobile Filter Sidebar Drawer Toggle & Overlay
  const btnToggleFilterMobile = document.getElementById("btn-toggle-filter-mobile");
  const btnCloseFilterMobile = document.getElementById("btn-close-filter-mobile");
  const btnApplyFilterMobile = document.getElementById("btn-apply-filter-mobile");
  const filterSidebar = document.getElementById("catalog-filter-sidebar");
  const filterBackdrop = document.getElementById("filter-sidebar-backdrop");

  const openMobileFilter = () => {
    if (filterSidebar) filterSidebar.classList.add("open");
    if (filterBackdrop) {
      filterBackdrop.classList.add("show");
      filterBackdrop.classList.remove("hidden");
    }
    document.body.style.overflow = "hidden";
  };

  const closeMobileFilter = () => {
    if (filterSidebar) filterSidebar.classList.remove("open");
    if (filterBackdrop) {
      filterBackdrop.classList.remove("show");
      filterBackdrop.classList.add("hidden");
    }
    document.body.style.overflow = "";
  };

  if (btnToggleFilterMobile) {
    btnToggleFilterMobile.addEventListener("click", openMobileFilter);
  }
  if (btnCloseFilterMobile) {
    btnCloseFilterMobile.addEventListener("click", closeMobileFilter);
  }
  if (btnApplyFilterMobile) {
    btnApplyFilterMobile.addEventListener("click", closeMobileFilter);
  }
  if (filterBackdrop) {
    filterBackdrop.addEventListener("click", closeMobileFilter);
  }

  // 8. Navigation Links (Home)
  const homeLink = document.getElementById("home-link");
  if (homeLink) {
    homeLink.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("contact-section").classList.add("hidden");
      document.getElementById("main-content").classList.remove("hidden");
      
      // Reset active tab class
      document.querySelectorAll(".cat-tab-btn").forEach((b) => {
        b.classList.remove("active", "bg-blue-600", "bg-cyan-600", "text-white");
        b.classList.add("bg-white", "text-slate-700", "border", "border-slate-200");
      });
      const firstTab = document.querySelector('.cat-tab-btn[data-cat="all"]');
      if (firstTab) {
        firstTab.classList.add("active", "bg-blue-600", "text-white");
        firstTab.classList.remove("bg-white", "text-slate-700", "border", "border-slate-200");
      }
      
      state.category = "all";
      resetAllFilters();
    });
  }

  const contactLink = document.getElementById("contact-link");
  if (contactLink) {
    contactLink.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("main-content").classList.add("hidden");
      document.getElementById("contact-section").classList.remove("hidden");
    });
  }

  // 9. Modals Open triggers
  const btnPkCalcHeader = document.getElementById("btn-pk-calc-header");
  const btnHeroPkCalc = document.getElementById("btn-hero-pk-calc");
  const pkModal = document.getElementById("pk-calc-modal");

  const openPkModal = (e) => {
    e.preventDefault();
    if (pkModal) {
      pkModal.classList.add("show");
      pkModal.classList.remove("hidden");
      document.getElementById("pk-calc-result").classList.add("hidden");
      document.getElementById("pk-calc-form").reset();
    }
  };

  if (btnPkCalcHeader) btnPkCalcHeader.addEventListener("click", openPkModal);
  if (btnHeroPkCalc) btnHeroPkCalc.addEventListener("click", openPkModal);

  const btnCompareHeader = document.getElementById("btn-compare-header");
  if (btnCompareHeader) {
    btnCompareHeader.addEventListener("click", (e) => {
      e.preventDefault();
      renderCompareModal();
    });
  }

  const btnWishlistHeader = document.getElementById("btn-wishlist-header");
  if (btnWishlistHeader) {
    btnWishlistHeader.addEventListener("click", (e) => {
      e.preventDefault();
      renderWishlistModal();
    });
  }

  // 10. PK Calculator Form Submission
  const pkForm = document.getElementById("pk-calc-form");
  if (pkForm) {
    pkForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const length = parseFloat(document.getElementById("calc-length").value);
      const width = parseFloat(document.getElementById("calc-width").value);
      const height = parseFloat(document.getElementById("calc-height").value);
      const factor = parseFloat(document.getElementById("calc-sun").value);

      // Formula: Room volume or area conversion. Standard BTU calculation: Area (L x W) * HeightFactor * SunFactor
      // Standard Indonesian rule of thumb: (Length * Width * 500) with adjustments.
      // If we calculate volume: Length * Width * Height * 200 BTU/m3 (adapted for average insulation)
      const btu = Math.round(length * width * height * factor * 0.15); // scaled standard
      const calculatedBtu = Math.round(length * width * factor);

      let recommendedPk = 0.5;
      let pkLabel = "1/2 PK (0.5 PK)";

      if (calculatedBtu < 6000) {
        recommendedPk = 0.5;
        pkLabel = "1/2 PK (0.5 PK)";
      } else if (calculatedBtu < 8000) {
        recommendedPk = 0.75;
        pkLabel = "3/4 PK (0.75 PK)";
      } else if (calculatedBtu < 10000) {
        recommendedPk = 1.0;
        pkLabel = "1 PK (1.0 PK)";
      } else if (calculatedBtu < 14000) {
        recommendedPk = 1.5;
        pkLabel = "1 1/2 PK (1.5 PK)";
      } else if (calculatedBtu < 19000) {
        recommendedPk = 2.0;
        pkLabel = "2 PK (2.0 PK)";
      } else {
        recommendedPk = 3.0; // represent 3 PK or higher
        pkLabel = "3+ PK (Kapasitas Besar)";
      }

      // Display result
      document.getElementById("res-btu").textContent = `${calculatedBtu.toLocaleString("id-ID")} BTU/h`;
      document.getElementById("res-pk").textContent = `Rekomendasi: ${pkLabel}`;
      document.getElementById("pk-calc-result").classList.remove("hidden");

      // Filter button event mapping
      const filterBtn = document.getElementById("btn-apply-pk-filter");
      filterBtn.onclick = () => {
        // Close modal
        document.getElementById("pk-calc-modal").classList.remove("show");
        document.getElementById("pk-calc-modal").classList.add("hidden");

        // Reset and check matching PK capacity
        resetAllFilters();
        
        const cb = Array.from(document.querySelectorAll(".filter-pk-checkbox")).find(
          (c) => parseFloat(c.value) === recommendedPk || (recommendedPk === 3 && parseFloat(c.value) === 3)
        );
        if (cb) {
          cb.checked = true;
          state.selectedPKs.push(recommendedPk);
        }
        filterAndRender();
      };
    });
  }

  // 11. Simulation Calculator change listeners
  const simAcSelect = document.getElementById("sim-ac-select");
  const simPkSelect = document.getElementById("sim-pk-select");
  const simPackageSelect = document.getElementById("sim-package-select");
  const simPipaInput = document.getElementById("sim-pipa-input");
  const simKabelInput = document.getElementById("sim-kabel-input");
  const simDrainInput = document.getElementById("sim-drain-input");

  if (simAcSelect) {
    simAcSelect.addEventListener("change", () => {
      const selectedOption = simAcSelect.options[simAcSelect.selectedIndex];
      const acPk = parseFloat(selectedOption.getAttribute("data-pk") || "1");
      if (simPkSelect && simAcSelect.value !== "0") {
        if (acPk <= 1.0) {
          simPkSelect.value = "1";
        } else {
          simPkSelect.value = "2";
        }
      }
      runSimulation();
    });
  }

  if (simPkSelect) simPkSelect.addEventListener("change", runSimulation);
  if (simPackageSelect) simPackageSelect.addEventListener("change", runSimulation);
  if (simPipaInput) simPipaInput.addEventListener("input", runSimulation);
  if (simKabelInput) simKabelInput.addEventListener("input", runSimulation);
  if (simDrainInput) simDrainInput.addEventListener("input", runSimulation);
}

// Populate Unit AC Dropdown dynamically
function populateACDropdown() {
  const acSelect = document.getElementById("sim-ac-select");
  if (!acSelect) return;

  const products = getAllProducts().filter(p => p.priceNum > 0);
  
  // Clear any existing options except the first one
  acSelect.innerHTML = '<option value="0" data-price="0" data-pk="1">-- Tanpa Unit AC (Jasa & Paket Pasang Saja) --</option>';

  // Sort products by brand and then name
  products.sort((a, b) => {
    if (a.brand !== b.brand) return a.brand.localeCompare(b.brand);
    return a.name.localeCompare(b.name);
  });

  products.forEach(p => {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.setAttribute("data-price", p.priceNum);
    opt.setAttribute("data-pk", p.pk);
    opt.textContent = `[${p.brand}] ${p.name} (${p.pk} PK) - Rp ${p.priceNum.toLocaleString("id-ID")}`;
    acSelect.appendChild(opt);
  });
}

// Run Simulation Calculations and Update Displays
function runSimulation() {
  const acSelect = document.getElementById("sim-ac-select");
  const pkSelect = document.getElementById("sim-pk-select");
  const packageSelect = document.getElementById("sim-package-select");
  const pipaInput = document.getElementById("sim-pipa-input");
  const kabelInput = document.getElementById("sim-kabel-input");
  const drainInput = document.getElementById("sim-drain-input");

  if (!acSelect || !pkSelect || !packageSelect || !pipaInput || !kabelInput || !drainInput) return;

  // 1. Get Unit AC price
  const selectedOption = acSelect.options[acSelect.selectedIndex];
  const acPrice = parseInt(selectedOption.getAttribute("data-price") || "0", 10);
  const acName = selectedOption.value !== "0" ? selectedOption.textContent.split(" - Rp")[0] : "Tanpa Unit AC";

  // 2. Get PK type (1 = 1/2-1 PK, 2 = 1.5-2 PK)
  const pkType = pkSelect.value;
  const pkLabel = pkType === "1" ? "1/2 PK - 1 PK" : "1.5 PK - 2 PK";

  // 3. Get Package price
  const packageType = packageSelect.value;
  let packageCost = 0;
  let packageName = "";

  if (packageType === "hemat") {
    packageName = "Paket Hemat";
    packageCost = pkType === "1" ? 500000 : 750000;
  } else if (packageType === "nyaman") {
    packageName = "Paket Nyaman";
    packageCost = pkType === "1" ? 750000 : 1000000;
  } else if (packageType === "premium") {
    packageName = "Paket Premium";
    packageCost = pkType === "1" ? 1250000 : 1500000;
  }

  // 4. Get Extra Material cost
  const pipaLen = Math.max(0, parseFloat(pipaInput.value) || 0);
  const kabelLen = Math.max(0, parseFloat(kabelInput.value) || 0);
  const drainLen = Math.max(0, parseFloat(drainInput.value) || 0);

  const pipaRate = pkType === "1" ? 110000 : 130000;
  const kabelRate = pkType === "1" ? 20000 : 30000;
  const drainRate = pkType === "1" ? 10000 : 10000;

  const extraCost = (pipaLen * pipaRate) + (kabelLen * kabelRate) + (drainLen * drainRate);

  // 5. Calculate Grand Total
  const grandTotal = acPrice + packageCost + extraCost;

  // 6. Update displays safely
  const displayUnit = document.getElementById("sim-display-unit-price");
  const displayPkg = document.getElementById("sim-display-package-cost");
  const displayExtra = document.getElementById("sim-display-extra-cost");
  const displayGrand = document.getElementById("sim-display-grand-total");

  if (displayUnit) displayUnit.textContent = `Rp ${acPrice.toLocaleString("id-ID")}`;
  if (displayPkg) displayPkg.textContent = `Rp ${packageCost.toLocaleString("id-ID")}`;
  if (displayExtra) displayExtra.textContent = `Rp ${extraCost.toLocaleString("id-ID")}`;
  if (displayGrand) displayGrand.textContent = `Rp ${grandTotal.toLocaleString("id-ID")}`;

  // 7. Update WA button link with summary message
  const waBtn = document.getElementById("sim-wa-btn");
  if (waBtn) {
    let messageText = `Halo Admin Pacific AC, saya ingin memesan unit AC & paket pasang dengan rincian simulasi berikut:\n\n`;
    if (acSelect.value !== "0") {
      messageText += `- Unit AC: ${acName} (Rp ${acPrice.toLocaleString("id-ID")})\n`;
    } else {
      messageText += `- Unit AC: Tanpa Unit AC (Jasa & Paket Pasang Saja)\n`;
    }
    messageText += `- Paket Pasang: ${packageName} (${pkLabel}) - Rp ${packageCost.toLocaleString("id-ID")}\n`;
    
    if (extraCost > 0) {
      messageText += `- Ekstra Material:\n`;
      if (pipaLen > 0) messageText += `  * Pipa: ${pipaLen} m x Rp ${pipaRate.toLocaleString("id-ID")} = Rp ${(pipaLen * pipaRate).toLocaleString("id-ID")}\n`;
      if (kabelLen > 0) messageText += `  * Kabel: ${kabelLen} m x Rp ${kabelRate.toLocaleString("id-ID")} = Rp ${(kabelLen * kabelRate).toLocaleString("id-ID")}\n`;
      if (drainLen > 0) messageText += `  * Drain: ${drainLen} m x Rp ${drainRate.toLocaleString("id-ID")} = Rp ${(drainLen * drainRate).toLocaleString("id-ID")}\n`;
    }
    
    messageText += `\n*Grand Total Estimasi: Rp ${grandTotal.toLocaleString("id-ID")}*`;
    
    const encodedMsg = encodeURIComponent(messageText);
    waBtn.href = `https://wa.me/6285799289354?text=${encodedMsg}`;
  }
}
