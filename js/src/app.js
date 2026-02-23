import ResidentialAC from "../data/resident.js";
import commercialAC from "../data/commercial.js";
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

        document.getElementById("desc-res").classList.remove("hidden")
      
        document.getElementById("pneglakan").classList.add("hidden");
        // document.getElementById("desc-com").classList.add("hidden");
        //   document.getElementById("desc-stand").classList.add("hidden");
      
        populateBrandGrid(ResidentialAC);
      } else if (index === 1) {
        // Tombol Commercial
        button.classList.add("bg-blue-900", "text-white");

        document.getElementById("pneglakan").classList.remove("hidden");
        
          document.getElementById("desc-res").classList.add("hidden");
          // document.getElementById("desc-stand").classList.add("hidden");
        
        populateBrandGrid(adalah);
      } else if (index === 2) {
        // Tombol Sewa
        button.classList.add("bg-blue-900", "text-white");
        
          document.getElementById("pneglakan").classList.remove("hidden")

          document.getElementById("desc-res").classList.add("hidden");
          // document.getElementById("desc-com").classList.add("hidden");
        
        populateBrandGrid(adalah);
      }
    });
  });

  populateBrandGrid("");
});
