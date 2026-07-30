import { getAllProducts } from "../data/allProducts.js";

let wishlist = JSON.parse(localStorage.getItem("pacific_ac_wishlist")) || [];
let compareList = [];

function parsePrice(priceStr) {
  if (!priceStr) return 0;
  const cleaned = priceStr.replace(/[^0-9]/g, "");
  return parseInt(cleaned, 10) || 0;
}

// Extract model code dynamically from product name or specs
function extractModelCode(product) {
  const words = product.name.split(" ");
  for (let i = words.length - 1; i >= 0; i--) {
    const w = words[i].trim();
    // Match alphanumeric word (usually uppercase) containing at least one digit and letter
    if (/^[A-Z0-9-]{4,12}$/i.test(w) && /[0-9]/.test(w) && /[A-Z]/i.test(w)) {
      return w;
    }
  }
  if (product.specs && product.specs["Model"]) return product.specs["Model"];
  return product.typeName || "";
}

// Helper to save wishlist
function saveWishlist() {
  localStorage.setItem("pacific_ac_wishlist", JSON.stringify(wishlist));
  updateBadges();
}

// Update Wishlist and Compare Badges in UI
export function updateBadges() {
  const wishlistBadge = document.getElementById("wishlist-badge");
  if (wishlistBadge) {
    if (wishlist.length > 0) {
      wishlistBadge.textContent = wishlist.length;
      wishlistBadge.classList.remove("hidden");
    } else {
      wishlistBadge.classList.add("hidden");
    }
  }

  const compareBadge = document.getElementById("compare-badge");
  if (compareBadge) {
    if (compareList.length > 0) {
      compareBadge.textContent = compareList.length;
      compareBadge.classList.remove("hidden");
    } else {
      compareBadge.classList.add("hidden");
    }
  }
}

// Calculate mounting package price dynamically
export function getMountingDetails(product) {
  // If it's a rental/sewa or commercial, handling is different
  if (product.category === "SewaStandingAC") {
    return {
      title: "Paket Sewa",
      desc: "Termasuk Jasa Pasang & Perawatan Rutin (Belum Termasuk Genset)",
      unitOnlyPrice: "-",
      packagePrice: product.price
    };
  }

  if (product.category === "CommercialAC") {
    return {
      title: "Commercial Unit Only",
      desc: "Belum Termasuk Jasa Pasang & Material Standar",
      unitOnlyPrice: product.price,
      packagePrice: "Hubungi Admin untuk Paket Pasang"
    };
  }

  // Residential AC: price is unit only, packagePrice is package price
  return {
    title: "Residential AC Paket Pasang",
    desc: "Sudah Termasuk Jasa Pasang + Material Standar (Pipa 3m, Kabel 3m, Bracket, Duct Tape)",
    unitOnlyPrice: product.price,
    packagePrice: product.packagePrice
  };
}

// Render Product Cards Grid
export function renderProductGrid(products) {
  const grid = document.getElementById("catalog-products-grid");
  const emptyState = document.getElementById("empty-state");
  const countBadge = document.getElementById("product-count-badge");

  if (!grid) return;

  grid.innerHTML = "";

  if (countBadge) {
    countBadge.textContent = `${products.length} Unit`;
  }

  if (products.length === 0) {
    grid.classList.add("hidden");
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  grid.classList.remove("hidden");
  if (emptyState) emptyState.classList.add("hidden");

  products.forEach((product) => {
    const isWishlisted = wishlist.some((item) => item.id === product.id);
    const isCompared = compareList.some((item) => item.id === product.id);
    const mDetails = getMountingDetails(product);

    // Calculate Unit Only prices and discount details
    let oldPriceHtml = "";
    const currentPriceNum = product.priceNum; // already Unit Only price
    
    if (currentPriceNum > 0) {
      let rawOldPrice = product.oldPrice ? parsePrice(product.oldPrice) : 0;
      let unitOldPriceNum = 0;
      
      if (rawOldPrice > 0) {
        if (product.category === "ResidentialAC") {
          const mountingCost = product.pk > 1 ? 750000 : 500000;
          unitOldPriceNum = rawOldPrice - mountingCost;
        } else {
          unitOldPriceNum = rawOldPrice;
        }
      } else {
        unitOldPriceNum = Math.ceil((currentPriceNum * 1.06) / 50000) * 50000;
      }
      
      if (unitOldPriceNum > currentPriceNum) {
        const discountAmount = unitOldPriceNum - currentPriceNum;
        const discountPct = Math.round((discountAmount / unitOldPriceNum) * 100);
        oldPriceHtml = `
          <div class="flex items-center gap-1.5 flex-wrap mt-0.5">
            <span class="text-xs text-slate-400 line-through">Rp ${unitOldPriceNum.toLocaleString("id-ID")}</span>
            <span class="text-[9px] font-extrabold text-rose-600 bg-rose-50 border border-rose-100 px-1.5 py-0.5 rounded shrink-0">
              -${discountPct}% (Hemat Rp ${discountAmount.toLocaleString("id-ID")})
            </span>
          </div>
        `;
      }
    }

    // Get dynamic model code
    const modelCode = extractModelCode(product);

    // Setup dynamic badges based on tech
    let badgePopularText = "POPULAR";
    let badgePopularBg = "bg-cyan-600";
    if (product.tech === "Low Watt") {
      badgePopularText = "HEMAT";
      badgePopularBg = "bg-emerald-600";
    } else if (product.category === "SewaStandingAC") {
      badgePopularText = "RENTAL";
      badgePopularBg = "bg-amber-500";
    }

    const card = document.createElement("div");
    card.className = "product-card bg-white rounded-3xl border border-slate-100 p-3 sm:p-4 hover:shadow-lg hover:border-cyan-400 transition-all relative flex flex-col justify-between w-full";

    card.innerHTML = `
      <!-- Thumbnail Section -->
      <div class="relative w-full h-36 sm:h-44 bg-slate-50 rounded-2xl flex items-center justify-center p-3">
        <!-- Badges on top-left of thumbnail -->
       
        
        <!-- Top-Right Actions -->
        <div class="absolute top-3 right-3 z-10 flex items-center gap-2">
          <!-- Wishlist heart button -->
          <button 
            data-id="${product.id}" 
            class="btn-toggle-wishlist w-8 h-8 rounded-full bg-white/90 text-slate-500 hover:text-rose-500 flex items-center justify-center shadow-md border border-slate-100/50 transition-all hover:scale-105 cursor-pointer focus:outline-none"
            title="Simpan ke Wishlist"
          >
            <svg class="w-4 h-4 ${isWishlisted ? "text-rose-500 fill-rose-500" : "fill-transparent"}" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          <!-- Compare button -->
          <input 
            type="checkbox" 
            data-id="${product.id}" 
            id="compare-${product.id}" 
            class="btn-toggle-compare hidden" 
            ${isCompared ? "checked" : ""}
          />
          <label 
            for="compare-${product.id}" 
            class="compare-label w-8 h-8 rounded-full bg-white/90 text-slate-500 hover:text-cyan-600 flex items-center justify-center shadow-md border border-slate-100/50 transition-all hover:scale-105 cursor-pointer"
            title="Bandingkan"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </label>
        </div>

        <!-- Product Image -->
        <img 
          src="${product.imgList}" 
          alt="${product.name}" 
          class="btn-view-detail h-full w-full object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
          data-id="${product.id}"
          onerror="this.onerror=null;this.src='https://placehold.co/300x200/cccccc/ffffff?text=Image+Error';"
        >
      </div>

      <!-- Info & Details Section -->
      <div class="flex-grow flex flex-col justify-between pt-3 sm:pt-4">
        <div>
          <!-- Model Code only (brand logo removed) -->
          <div class="flex items-center justify-end text-[10px] sm:text-[11px] font-extrabold tracking-wider text-slate-400 mb-0.5 sm:mb-1">
            <span class="font-semibold normal-case">${modelCode}</span>
          </div>

          <!-- Product Name -->
          <h4 class="btn-view-detail font-bold text-slate-800 text-xs sm:text-sm mb-2 sm:mb-3 leading-snug line-clamp-2 hover:text-cyan-600 transition-colors cursor-pointer" data-id="${product.id}" title="${product.name}">
            ${product.name}
          </h4>

          <!-- Price Block -->
          <div class="space-y-0.5 mb-2 sm:mb-3">
            <div class="text-[10px] sm:text-xs text-slate-400 font-bold">Harga Unit AC Only:</div>
            <div class="text-md sm:text-lg md:text-xl font-extrabold text-slate-900 leading-none">
              ${product.price}
            </div>
           ${oldPriceHtml}
            ${product.category === "ResidentialAC" ? `
            ` : ""}
          </div>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Attach event listeners inside grid container dynamically
  attachCardEvents();
}

// Attach event listeners to buttons within the rendered cards
function attachCardEvents() {
  const allProducts = getAllProducts();

  // Wishlist toggle click
  document.querySelectorAll(".btn-toggle-wishlist").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      const prod = allProducts.find((p) => p.id === id);
      if (!prod) return;

      const index = wishlist.findIndex((item) => item.id === id);
      if (index > -1) {
        wishlist.splice(index, 1);
        btn.querySelector("svg").classList.remove("text-rose-500", "fill-rose-500");
        btn.querySelector("svg").classList.add("fill-transparent");
      } else {
        wishlist.push(prod);
        btn.querySelector("svg").classList.add("text-rose-500", "fill-rose-500");
        btn.querySelector("svg").classList.remove("fill-transparent");
      }
      saveWishlist();
    });
  });

  // Compare checkbox change
  document.querySelectorAll(".btn-toggle-compare").forEach((input) => {
    input.addEventListener("change", (e) => {
      const id = input.getAttribute("data-id");
      const prod = allProducts.find((p) => p.id === id);
      if (!prod) return;

      if (input.checked) {
        if (compareList.length >= 4) {
          alert("Anda hanya dapat membandingkan maksimal 4 produk sekaligus.");
          input.checked = false;
          return;
        }
        if (!compareList.some((item) => item.id === id)) {
          compareList.push(prod);
        }
      } else {
        compareList = compareList.filter((item) => item.id !== id);
      }
      updateBadges();
    });
  });

  // Product detail view click
  document.querySelectorAll(".btn-view-detail").forEach((element) => {
    element.addEventListener("click", (e) => {
      e.stopPropagation();
      // Don't trigger if click was on wishlist button or compare checkbox
      if (e.target.closest(".btn-toggle-wishlist") || e.target.closest("input[type='checkbox']")) {
        return;
      }
      const id = element.getAttribute("data-id");
      showProductDetails(id);
    });
  });
}

// Show Product Details Modal
export function showProductDetails(id) {
  const allProducts = getAllProducts();
  const product = allProducts.find((p) => p.id === id);
  if (!product) return;

  const mDetails = getMountingDetails(product);
  const detailModal = document.getElementById("product-detail-modal");
  const detailContent = document.getElementById("product-detail-content");

  if (!detailModal || !detailContent) return;

  detailContent.innerHTML = `
    <button class="close-button" onclick="closeDetailModal()">&times;</button>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mt-8 sm:mt-4">
      
      <!-- Left side: Image Gallery -->
      <div class="detail-image-container group">
        <img 
          id="detail-product-image"
          src="${product.imgDetail}" 
          alt="${product.name}" 
          class="detail-image-img"
          onerror="this.onerror=null;this.src='https://placehold.co/400x300/cccccc/ffffff?text=Image+Error';"
        >
        <div class="absolute top-3 left-3 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm z-10">
          ${product.brand}
        </div>
        <!-- Hover indicator badge -->
        <div class="absolute bottom-3 right-3 bg-slate-900/75 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1.5 rounded-lg shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center gap-1.5 z-10">
          <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
          </svg>
          Klik untuk memperbesar
        </div>
      </div>

      <!-- Right side: Specifications & Meta -->
      <div class="space-y-5">
        <div>
          <div class="flex items-center gap-2 mb-2 flex-wrap">
            <span class="bg-cyan-50 text-cyan-700 border border-cyan-100 text-xs font-bold px-2.5 py-1 rounded-lg">
              ${product.tech}
            </span>
            <span class="bg-slate-100 text-slate-700 text-xs font-bold px-2.5 py-1 rounded-lg">
              ${product.pk} PK
            </span>
          </div>
          <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900">${product.name}</h3>
          <p class="text-xs text-slate-400 mt-1">Series: ${product.typeName}</p>
        </div>

        <!-- Description -->
        <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">${product.desc}</p>

        <!-- Pricing details -->
        <div class="bg-slate-50 border border-slate-200/60 rounded-2xl p-4 space-y-2">
          <div class="text-xs text-slate-400 font-bold uppercase tracking-wider">Detail Harga AC (Unit Only):</div>
          <div class="flex items-baseline gap-2">
            <span class="text-xl sm:text-2xl font-extrabold text-cyan-600">${product.price}</span>
            ${product.oldPrice ? `
              <span class="text-xs sm:text-sm text-slate-400 line-through">
                ${
                  product.category === "ResidentialAC" && parsePrice(product.oldPrice) > 0 
                  ? "Rp " + (parsePrice(product.oldPrice) - (product.pk > 1 ? 750000 : 500000)).toLocaleString("id-ID")
                  : product.oldPrice
                }
              </span>
            ` : ""}
          </div>
          <p class="text-[10px] sm:text-[11px] text-slate-500 font-medium">Harga di atas adalah unit saja (tidak termasuk pipa, kabel, bracket, dan jasa pasang).</p>
          
          ${product.category === "ResidentialAC" ? `
            <div class="flex justify-between text-[10px] sm:text-xs  text-slate-500 border-t border-slate-200/50 pt-2 mt-2">
              <span>Harga + Paket Pasang (Hemat):</span>
              <span class="font-extrabold text-xs sm:text-md text-slate-800">${product.packagePrice}</span>
            </div>
          ` : ""}
        </div>

        <!-- Features list -->
        ${product.features && product.features.length > 0 ? `
          <div>
            <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Fitur Unggulan:</h4>
            <ul class="grid grid-cols-2 gap-2 text-xs text-slate-600">
              ${product.features.map(f => `
                <li class="flex items-center gap-1.5">
                  <svg class="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  ${f}
                </li>
              `).join("")}
            </ul>
          </div>
        ` : ""}

      </div>
    </div>

    <!-- Technical Specs Table -->
    ${product.specs && Object.keys(product.specs).length > 0 ? `
      <div class="mt-8 border-t border-slate-200 pt-6">
        <h4 class="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">Spesifikasi Lengkap:</h4>
        <div class="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-inner">
          <table class="spec-table text-xs sm:text-sm">
            <tbody>
              ${Object.entries(product.specs).map(([k, v]) => `
                <tr class="hover:bg-slate-100/50 transition-colors">
                  <td class="font-semibold text-slate-500 py-3 px-4">${k}</td>
                  <td class="text-slate-800 text-[10px] sm:text-xs py-3 px-4 font-medium">${v}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    ` : ""}
  `;

  // Attach click zoom event for the detail image
  const imgEl = detailContent.querySelector("#detail-product-image");
  if (imgEl) {
    imgEl.addEventListener("click", () => {
      openImageLightbox(product.imgDetail, product.name);
    });
  }

  detailModal.classList.add("show");
  detailModal.classList.remove("hidden");
}

// Show Product Comparison Modal
export function renderCompareModal() {
  const modal = document.getElementById("compare-modal");
  const container = document.getElementById("compare-table-container");

  if (!modal || !container) return;

  if (compareList.length === 0) {
    container.innerHTML = `<div class="text-center py-10 text-slate-500 text-sm">Pilih minimal 1 produk AC untuk dibandingkan dengan mencentang kotak "Bandingkan" pada kartu produk.</div>`;
    modal.classList.add("show");
    modal.classList.remove("hidden");
    return;
  }

  let tableHeaderHtml = `<th>Spesifikasi / Fitur</th>`;
  let imageRow = `<td>Foto / Unit</td>`;
  let brandRow = `<td>Merk / Brand</td>`;
  let priceRow = `<td>Harga Unit Only</td>`;
  let packagePriceRow = `<td>Harga Paket Pasang</td>`;
  let pkRow = `<td>Kapasitas PK</td>`;
  let techRow = `<td>Teknologi</td>`;
  let wattRow = `<td>Daya Listrik</td>`;
  let btuRow = `<td>Kapasitas Dingin</td>`;
  let freonRow = `<td>Bahan Pendingin (Freon)</td>`;
  let garansiRow = `<td>Garansi Resmi</td>`;
  let actionRow = `<td>Aksi</td>`;

  compareList.forEach((prod) => {
    tableHeaderHtml += `<th class="min-w-[180px] font-bold text-slate-800 text-sm">${prod.name}</th>`;
    imageRow += `
      <td>
        <div class="flex justify-center p-2"><img src="${prod.imgList}" class="h-24 object-contain" alt=""></div>
      </td>`;
    brandRow += `<td><span class="font-bold text-slate-700">${prod.brand}</span></td>`;
    priceRow += `<td><span class="font-bold text-cyan-600 text-sm">${prod.price}</span></td>`;
    packagePriceRow += `<td><span class="font-semibold text-slate-700 text-xs">${prod.category === "ResidentialAC" ? prod.packagePrice : "-"}</span></td>`;
    pkRow += `<td><span class="bg-slate-100 text-slate-700 text-xs px-2 py-0.5 rounded font-semibold">${prod.pk} PK</span></td>`;
    techRow += `<td><span class="bg-cyan-50 text-cyan-700 text-xs px-2 py-0.5 rounded font-semibold">${prod.tech}</span></td>`;
    wattRow += `<td>${prod.specs["Daya Listrik"] || "-"}</td>`;
    btuRow += `<td>${prod.specs["Kapasitas Pendingin"] || "-"}</td>`;
    freonRow += `<td>${prod.specs["Tipe Freon"] || "R32"}</td>`;
    garansiRow += `<td><span class="text-xs leading-tight">${prod.specs["Garansi"] || "-"}</span></td>`;
    actionRow += `
      <td>
        <div class="flex flex-col gap-1.5 items-center p-2">
          <button data-id="${prod.id}" class="btn-remove-compare bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-600 text-xs font-bold px-3 py-1.5 rounded-lg text-center w-full">Hapus</button>
        </div>
      </td>`;
  });

  container.innerHTML = `
    <table class="compare-table text-xs sm:text-sm">
      <thead>
        <tr>${tableHeaderHtml}</tr>
      </thead>
      <tbody>
        <tr>${imageRow}</tr>
        <tr>${brandRow}</tr>
        <tr>${priceRow}</tr>
        <tr>${packagePriceRow}</tr>
        <tr>${pkRow}</tr>
        <tr>${techRow}</tr>
        <tr>${wattRow}</tr>
        <tr>${btuRow}</tr>
        <tr>${freonRow}</tr>
        <tr>${garansiRow}</tr>
        <tr>${actionRow}</tr>
      </tbody>
    </table>
  `;

  // Attach compare table remove actions
  container.querySelectorAll(".btn-remove-compare").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      compareList = compareList.filter((item) => item.id !== id);
      
      // Update checkmark state in catalog grid cards if they are rendered
      const checkbox = document.querySelector(`.btn-toggle-compare[data-id="${id}"]`);
      if (checkbox) checkbox.checked = false;

      updateBadges();
      renderCompareModal(); // Re-render comparison layout
    });
  });

  modal.classList.add("show");
  modal.classList.remove("hidden");
}

// Render Wishlist items Modal / Drawer
export function renderWishlistModal() {
  const modal = document.getElementById("wishlist-modal");
  const container = document.getElementById("wishlist-items-container");

  if (!modal || !container) return;

  if (wishlist.length === 0) {
    container.innerHTML = `<div class="text-center py-10 text-slate-500 text-sm">Belum ada AC dalam daftar wishlist Anda. Tambahkan dengan menekan tombol hati pada kartu produk.</div>`;
    modal.classList.add("show");
    modal.classList.remove("hidden");
    return;
  }

  container.innerHTML = "";

  wishlist.forEach((item) => {
    const mDetails = getMountingDetails(item);
    const itemEl = document.createElement("div");
    itemEl.className = "flex items-center gap-3.5 bg-slate-50 border border-slate-200/80 p-3 rounded-xl justify-between";
    itemEl.innerHTML = `
      <div class="flex items-center gap-3 cursor-pointer btn-wishlist-view" data-id="${item.id}">
        <img src="${item.imgList}" alt="" class="w-12 h-12 object-contain bg-white border border-slate-100 rounded-lg p-1 shrink-0">
        <div>
          <h4 class="font-bold text-slate-800 text-xs sm:text-sm line-clamp-1">${item.name}</h4>
          <div class="flex gap-2 items-center mt-0.5">
            <span class="text-[10px] font-bold text-cyan-600">${item.price} (Unit Only)</span>
            <span class="bg-slate-200 text-slate-700 text-[9px] font-bold px-1.5 py-0.2 rounded">${item.pk} PK</span>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button 
          data-id="${item.id}" 
          class="btn-remove-wishlist text-slate-400 hover:text-rose-500 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          title="Hapus"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    `;

    // Click to view detail modal
    itemEl.querySelector(".btn-wishlist-view").addEventListener("click", () => {
      closeWishlistModal();
      showProductDetails(item.id);
    });

    // Delete item from wishlist
    itemEl.querySelector(".btn-remove-wishlist").addEventListener("click", () => {
      wishlist = wishlist.filter((w) => w.id !== item.id);
      saveWishlist();

      // Update check icon inside catalog grid cards if they are rendered
      const heartBtn = document.querySelector(`.btn-toggle-wishlist[data-id="${item.id}"]`);
      if (heartBtn) {
        heartBtn.querySelector("svg").classList.remove("text-rose-500", "fill-rose-500");
        heartBtn.querySelector("svg").classList.add("fill-transparent");
      }

      renderWishlistModal(); // Re-render wishlist drawer
    });

    container.appendChild(itemEl);
  });

  modal.classList.add("show");
  modal.classList.remove("hidden");
}

// Modal closing helpers
export function closeDetailModal() {
  const modal = document.getElementById("product-detail-modal");
  if (modal) {
    modal.classList.remove("show");
    modal.classList.add("hidden");
  }
}

export function closeCompareModal() {
  const modal = document.getElementById("compare-modal");
  if (modal) {
    modal.classList.remove("show");
    modal.classList.add("hidden");
  }
}

export function closeWishlistModal() {
  const modal = document.getElementById("wishlist-modal");
  if (modal) {
    modal.classList.remove("show");
    modal.classList.add("hidden");
  }
}

export function closePkCalcModal() {
  const modal = document.getElementById("pk-calc-modal");
  if (modal) {
    modal.classList.remove("show");
    modal.classList.add("hidden");
  }
}

// Global modal dismiss listeners
window.closeDetailModal = closeDetailModal;
window.closeCompareModal = closeCompareModal;
window.closeWishlistModal = closeWishlistModal;
window.closePkCalcModal = closePkCalcModal;

function initCardDismiss() {
  const modals = ["product-detail-modal", "compare-modal", "wishlist-modal", "pk-calc-modal"];
  modals.forEach((mid) => {
    const el = document.getElementById(mid);
    if (el) {
      el.addEventListener("click", (e) => {
        if (e.target === el) {
          el.classList.remove("show");
          el.classList.add("hidden");
        }
      });
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCardDismiss);
} else {
  initCardDismiss();
}

// Fullscreen Image Lightbox Functions
function openImageLightbox(src, alt) {
  let lightbox = document.getElementById("image-lightbox");
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "image-lightbox";
    lightbox.className = "image-lightbox";
    lightbox.innerHTML = `
      <button class="image-lightbox-close" aria-label="Tutup Galeri">&times;</button>
      <img id="lightbox-img" class="image-lightbox-img" src="" alt="">
    `;
    document.body.appendChild(lightbox);

    // Close lightbox when clicking outside the image or on the close button
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target.classList.contains("image-lightbox-close")) {
        closeImageLightbox();
      }
    });

    // Close lightbox on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeImageLightbox();
      }
    });
  }

  const img = lightbox.querySelector("#lightbox-img");
  img.src = src;
  img.alt = alt;

  // Show the lightbox overlay
  lightbox.classList.add("show");
}

function closeImageLightbox() {
  const lightbox = document.getElementById("image-lightbox");
  if (lightbox) {
    lightbox.classList.remove("show");
  }
}

// Make globally accessible if needed
window.openImageLightbox = openImageLightbox;
window.closeImageLightbox = closeImageLightbox;


