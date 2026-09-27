/* DGM feature page loader — glossary then files */
(function () {
  "use strict";

  async function loadFeature() {
    const id = window.DGM_FEATURE_DATA;
    const glossaryRoot = document.getElementById("glossary-root");
    const filesRoot = document.getElementById("files-root");
    if (!id || !glossaryRoot || !filesRoot) return;
    try {
      const response = await fetch("../data/" + id + ".json", { cache: "no-store" });
      if (!response.ok) throw new Error("HTTP " + response.status);
      const data = await response.json();
      glossaryRoot.textContent = "";
      (data.glossary || []).forEach(function (entry) {
        const dt = document.createElement("dt");
        dt.textContent = entry.term;
        const dd = document.createElement("dd");
        dd.textContent = entry.definition;
        glossaryRoot.appendChild(dt);
        glossaryRoot.appendChild(dd);
      });
      filesRoot.textContent = "";
      (data.files || []).forEach(function (file) {
        const li = document.createElement("li");
        const path = document.createElement("span");
        path.textContent = file.path;
        const role = document.createElement("span");
        role.className = "role";
        role.textContent = file.role || "";
        li.appendChild(path);
        li.appendChild(role);
        filesRoot.appendChild(li);
      });
      glossaryRoot.setAttribute("data-loaded", "true");
      filesRoot.setAttribute("data-loaded", "true");
    } catch (err) {
      glossaryRoot.textContent = "Could not load feature data: " + err.message;
    }
  }

  document.addEventListener("DOMContentLoaded", loadFeature);
})();
