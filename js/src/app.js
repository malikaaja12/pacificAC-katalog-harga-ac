import ResidentialAC from "../data/resident.js";
import CommercialAC from "../data/commercial.js";
import sewaStnading from "../data/sewa.js";

import { populateBrandGrid } from "../componnet/Card.js";
import adalah from "../data/adalah.js";

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("#fiter-product button");

  function resetButtons() {
    buttons.forEach((btn) => {
      btn.classList.remove(
        "bg-blue-900",
        "bg-blue-900",
        "bg-blue-900",
        "text-white",
      );
    });
  }
  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      resetButtons();

      if (index === 0) {
        // Tombol Residential
        button.classList.add("bg-blue-900", "text-white");

        populateBrandGrid(ResidentialAC);
      } else if (index === 1) {
        // Tombol Commercial
        button.classList.add("bg-blue-900", "text-white");

        populateBrandGrid(adalah);
      } else if (index === 2) {
        // Tombol Sewa
        button.classList.add("bg-blue-900", "text-white");

        populateBrandGrid(adalah);
      }
    });
  });

  buttons[0].classList.add("bg-blue-900", "text-white");
  populateBrandGrid(ResidentialAC);
});
