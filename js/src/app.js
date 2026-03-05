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

  const categoryMap = {
    0: { descId: "desc-res", data: ResidentialAC },
    1: { descId: "pneglakan", data: adalah },
    2: { descId: "pneglakan", data: adalah },
  };
  const allDescIds = ["desc-res", "pneglakan", "desc-com", "desc-stand"];

  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      resetButtons();
      allDescIds.forEach((id) =>
        document.getElementById(id)?.classList.add("hidden"),
      );
      const config = categoryMap[index];
      if (config) {
        button.classList.add("bg-blue-900", "text-white");

        const targetDesc = document.getElementById(config.descId);
        if (targetDesc) targetDesc.classList.remove("hidden");

        populateBrandGrid(config.data);
      }
    });
  });

  populateBrandGrid("");
});
