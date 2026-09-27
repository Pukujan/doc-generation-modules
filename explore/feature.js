/* DGM feature page loader - glossary then files.
 * Loads JSON synchronously so list items exist before the page is interactable
 * for observe/click gates (no DOMContentLoaded + async fetch race).
 */
(function () {
  "use strict";

  function stripBom(text) {
    return text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
  }

  function setReady(ready) {
    document.documentElement.setAttribute("data-dgm-ready", ready ? "true" : "false");
  }

  function render(data, glossaryRoot, filesRoot) {
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
    setReady(true);
  }

  function loadPayloadSync(id) {
    if (
      window.DGM_FEATURE_PAYLOAD &&
      typeof window.DGM_FEATURE_PAYLOAD === "object" &&
      window.DGM_FEATURE_PAYLOAD.id === id
    ) {
      return window.DGM_FEATURE_PAYLOAD;
    }
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../data/" + id + ".json", false);
    xhr.send(null);
    if (xhr.status < 200 || xhr.status >= 300) {
      throw new Error("HTTP " + xhr.status);
    }
    return JSON.parse(stripBom(xhr.responseText));
  }

  function loadFeature() {
    const id = window.DGM_FEATURE_DATA;
    const glossaryRoot = document.getElementById("glossary-root");
    const filesRoot = document.getElementById("files-root");
    if (!id || !glossaryRoot || !filesRoot) return;
    setReady(false);
    try {
      render(loadPayloadSync(id), glossaryRoot, filesRoot);
    } catch (err) {
      glossaryRoot.textContent = "Could not load feature data: " + err.message;
      filesRoot.textContent = "";
      glossaryRoot.setAttribute("data-loaded", "error");
      filesRoot.setAttribute("data-loaded", "error");
      setReady(true);
    }
  }

  loadFeature();
})();