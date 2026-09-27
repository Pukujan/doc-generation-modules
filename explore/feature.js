/* DGM feature page loader - glossary then files.
 * HTML ships a static skeleton (terms + file paths) so observe gates see content
 * even if scripts have not finished. Script then sync-refreshes from JSON and
 * sets data-dgm-ready / data-loaded=true.
 * A compact header file-path strip keeps at least one path in the Ultrafast
 * viewport (snapshot.js only joins text intersecting the viewport).
 */
(function () {
  "use strict";

  function stripBom(text) {
    return text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
  }

  function setReady(ready) {
    document.documentElement.setAttribute("data-dgm-ready", ready ? "true" : "false");
  }

  function renderFileStrip(files) {
    const strip = document.getElementById("file-path-strip");
    if (!strip) return;
    const paths = (files || []).map(function (f) { return f.path; }).filter(Boolean);
    strip.textContent = "";
    const label = document.createElement("span");
    label.className = "strip-label";
    label.textContent = "Paths:";
    strip.appendChild(label);
    if (!paths.length) {
      strip.appendChild(document.createTextNode(" (none)"));
      return;
    }
    paths.slice(0, 4).forEach(function (path, i) {
      if (i) strip.appendChild(document.createTextNode(" · "));
      const code = document.createElement("code");
      code.textContent = path;
      strip.appendChild(code);
    });
    if (paths.length > 4) {
      strip.appendChild(document.createTextNode(" · +" + (paths.length - 4) + " more"));
    }
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
    renderFileStrip(data.files || []);
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
    // Static HTML already has list items; mark ready for observe before network refresh.
    if (glossaryRoot.children.length || filesRoot.children.length) {
      setReady(true);
    } else {
      setReady(false);
    }
    try {
      render(loadPayloadSync(id), glossaryRoot, filesRoot);
    } catch (err) {
      if (!glossaryRoot.children.length) {
        glossaryRoot.textContent = "Could not load feature data: " + err.message;
      }
      glossaryRoot.setAttribute("data-loaded", glossaryRoot.children.length ? "static" : "error");
      filesRoot.setAttribute("data-loaded", filesRoot.children.length ? "static" : "error");
      setReady(true);
    }
  }

  loadFeature();
})();