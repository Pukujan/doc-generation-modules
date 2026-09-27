/* DGM explore register — vanilla JS, no frameworks */
(function () {
  "use strict";

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.entries(attrs).forEach(function ([key, value]) {
        if (key === "text") node.textContent = value;
        else if (key === "html") node.innerHTML = value;
        else node.setAttribute(key, value);
      });
    }
    (children || []).forEach(function (child) {
      if (child) node.appendChild(child);
    });
    return node;
  }

  function renderFeature(feature) {
    const citations = el(
      "ul",
      { class: "citations", "data-testid": "citations-" + feature.id },
      (feature.citations || []).map(function (cite) {
        return el("li", null, [
          el("a", {
            href: cite.href,
            "data-testid": "cite-" + feature.id,
            text: cite.label,
          }),
        ]);
      })
    );

    const openLink = el("a", {
      href: feature.href,
      "data-testid": "open-feature-" + feature.id,
      text: "Open feature page",
    });

    return el("article", { class: "card", "data-feature-id": feature.id }, [
      el("h3", { text: feature.title }),
      el("p", { text: feature.summary || "" }),
      openLink,
      citations,
    ]);
  }

  async function loadRegister() {
    const root = document.getElementById("register-root");
    if (!root) return;
    try {
      const response = await fetch("data/register.json", { cache: "no-store" });
      if (!response.ok) throw new Error("HTTP " + response.status);
      const data = await response.json();
      root.textContent = "";
      (data.features || []).forEach(function (feature) {
        root.appendChild(renderFeature(feature));
      });
      root.setAttribute("data-loaded", "true");
    } catch (err) {
      root.textContent = "Could not load register.json (" + err.message + "). Serve explore/ over HTTP.";
      root.setAttribute("data-loaded", "false");
    }
  }

  document.addEventListener("DOMContentLoaded", loadRegister);
})();
