/* ==========================================================================
   Portfolio behaviour. Content lives in js/data.js; this file only renders it.
   ========================================================================== */
(function () {
  "use strict";

  var D = window.PORTFOLIO || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Escape text from data.js before injecting as HTML
  function esc(v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // Only allow http(s) and mailto URLs from the data file
  function safeUrl(u) { return /^(https?:\/\/|mailto:)/i.test(u || "") ? u : ""; }
  // Handles spaces / special characters in file names
  function path(p) { return encodeURI(p); }

  /* ---------- Language (en / sq) ---------- */
  var I18N = window.I18N || { en: {} };
  var lang = "en";
  var initialized = false;
  function t(key) { return (I18N[lang] && I18N[lang][key]) || (I18N.en && I18N.en[key]) || key; }
  // Text field of a data item in the current language, falling back to English
  function tr(obj, key) {
    if (lang !== "en" && obj && obj.sq && obj.sq[key] !== undefined) return obj.sq[key];
    return obj ? obj[key] : undefined;
  }
  // The site always starts in English; visitors switch with the EN | SQ buttons
  function detectLang() { return "en"; }
  function revealClass() { return initialized ? " reveal in" : " reveal"; }

  var ICONS = {
    code: '<path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"/>',
    server: '<rect x="3" y="4" width="18" height="6" rx="1"/><rect x="3" y="14" width="18" height="6" rx="1"/><path d="M7 7h.01M7 17h.01"/>',
    database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    pen: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/>',
    layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
    spark: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',
    arrow: '<path d="M7 17L17 7M8 7h9v9"/>'
  };
  function icon(name, size) {
    return '<svg viewBox="0 0 24 24" width="' + (size || 20) + '" height="' + (size || 20) +
      '" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (ICONS[name] || "") + "</svg>";
  }

  /* ---------- Skills ---------- */
  function renderSkills() {
    var el = $("#skills-list");
    if (!el || !D.skills) return;
    el.innerHTML = D.skills.map(function (g, i) {
      return '<li class="skill-row' + revealClass() + '" style="--d:' + i * 40 + 'ms">' +
        '<h3 class="skill-title">' + icon(g.icon) + "<span>" + esc(tr(g, "title")) + "</span></h3>" +
        '<ul class="skill-items">' + tr(g, "items").map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul></li>";
    }).join("");
  }

  /* ---------- Placeholder illustrations (abstract, not screenshots) ---------- */
  var ART = {
    schedule: function () {
      var g = '<path class="l" d="M20 14h280"/>';
      for (var i = 0; i < 8; i++) g += '<path class="l" d="M' + (20 + i * 40) + ' 10v8"/>';
      var rows = [[40, 90, 0], [110, 120, 0], [70, 60, 0, 200, 70], [150, 100, 1], [30, 70, 0, 180, 90]];
      rows.forEach(function (r, i) {
        var y = 40 + i * 24;
        g += '<path class="l d" d="M20 ' + (y + 6) + 'h280"/><rect class="' + (r[2] ? "af" : "f") + '" x="' + r[0] + '" y="' + y + '" width="' + r[1] + '" height="12" rx="2"/>';
        if (r[3]) g += '<rect class="f" x="' + r[3] + '" y="' + y + '" width="' + r[4] + '" height="12" rx="2"/>';
      });
      return g;
    },
    calendar: function () {
      var g = "";
      for (var r = 0; r < 4; r++) for (var c = 0; c < 7; c++) {
        var hit = (r === 1 && c === 2) || (r === 2 && c === 4);
        g += '<rect class="' + (hit ? "a" : "l") + '" x="' + (20 + c * 40) + '" y="' + (14 + r * 34) + '" width="34" height="28" rx="3"/>';
        if (hit) g += '<rect class="af" x="' + (26 + c * 40) + '" y="' + (22 + r * 34) + '" width="22" height="5" rx="2"/>';
        else if ((r + c) % 3 === 0) g += '<rect class="f" x="' + (26 + c * 40) + '" y="' + (22 + r * 34) + '" width="14" height="5" rx="2"/>';
      }
      return g;
    },
    code: function () {
      return '<rect class="l" x="20" y="14" width="170" height="112" rx="6"/><path class="l" d="M20 32h170"/>' +
        '<rect class="af" x="34" y="48" width="70" height="8" rx="2"/><rect class="f" x="34" y="64" width="110" height="6" rx="2"/><rect class="f" x="34" y="78" width="90" height="6" rx="2"/><rect class="l" x="34" y="94" width="60" height="22" rx="3"/>' +
        '<rect class="l" x="206" y="40" width="62" height="86" rx="6"/><rect class="f" x="216" y="54" width="42" height="6" rx="2"/><rect class="f" x="216" y="68" width="30" height="6" rx="2"/><rect class="l" x="216" y="86" width="42" height="28" rx="3"/>' +
        '<rect class="l" x="284" y="62" width="26" height="64" rx="5"/><rect class="f" x="289" y="72" width="16" height="5" rx="2"/><rect class="l" x="289" y="86" width="16" height="22" rx="2"/>';
    },
    frames: function () {
      var g = "";
      [20, 120, 220].forEach(function (x, i) {
        g += '<rect class="' + (i === 1 ? "a" : "l") + '" x="' + x + '" y="20" width="80" height="106" rx="4"/>' +
          '<rect class="f" x="' + (x + 8) + '" y="30" width="40" height="6" rx="2"/><rect class="l" x="' + (x + 8) + '" y="46" width="64" height="36" rx="2"/>' +
          '<rect class="f" x="' + (x + 8) + '" y="92" width="64" height="5" rx="2"/><rect class="' + (i === 1 ? "af" : "f") + '" x="' + (x + 8) + '" y="106" width="26" height="9" rx="4"/>';
      });
      return g + '<path class="l d" d="M100 73h20M200 73h20"/><path class="af" d="M150 64l0 20 5-5 4 9 3-1-4-9 7 0z"/>';
    }
  };

  /* ---------- Projects ---------- */
  function renderProjects() {
    var el = $("#projects-list");
    if (!el || !D.projects) return;
    el.innerHTML = D.projects.map(function (p) {
      var live = safeUrl(p.live), gh = safeUrl(p.github);
      var status = tr(p, "status"), subtitle = tr(p, "subtitle"), stage = tr(p, "stage"), note = tr(p, "caseStudy");
      var media = p.image
        ? '<img src="' + path(p.image) + '" alt="' + esc(tr(p, "alt") || p.title) + '" loading="lazy" decoding="async">'
        : '<div class="ph" aria-hidden="true"><div class="ph-top"><span>' + esc(t("projects.ph1")) + "</span><span>" + esc(t("projects.ph2")) + "</span></div>" +
          '<svg class="ph-art" viewBox="0 0 320 156" preserveAspectRatio="xMidYMid meet">' + (ART[p.visual] ? ART[p.visual]() : "") + '</svg><div class="ph-bottom"><span>' + esc(status) + '</span><span class="ph-ttl">' + esc(subtitle || p.title) + "</span></div></div>";
      var links = "";
      if (live) links += '<a class="btn btn-primary btn-sm" href="' + esc(live) + '" target="_blank" rel="noopener noreferrer">' + esc(tr(p, "liveLabel") || t("projects.liveDefault")) + " " + icon("arrow", 14) + "</a>";
      if (gh) links += '<a class="btn btn-ghost btn-sm" href="' + esc(gh) + '" target="_blank" rel="noopener noreferrer">' + esc(t("projects.source")) + " " + icon("arrow", 14) + "</a>";
      var tech = tr(p, "tech");
      return '<article class="project' + revealClass() + '">' +
        '<div class="project-media' + (p.image ? " has-image" : "") + '">' + media + "</div>" +
        '<div class="project-info">' +
        '<p class="project-status">' + esc(status) + (stage ? ' <span class="stage">' + esc(stage) + "</span>" : "") + "</p>" +
        '<h3 class="project-title">' + esc(p.title) + "</h3>" +
        (subtitle ? '<p class="project-sub">' + esc(subtitle) + "</p>" : "") +
        '<p class="project-desc">' + esc(tr(p, "description")) + "</p>" +
        (tech && tech.length ? '<ul class="tags" aria-label="' + esc(t("projects.tech")) + '">' + tech.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "") +
        (note ? '<p class="project-case">' + esc(note) + "</p>" : "") +
        (links ? '<div class="project-links">' + links + "</div>" : (!p.image ? '<p class="project-pending">' + esc(t("projects.pending")) + "</p>" : "")) +
        "</div></article>";
    }).join("");
  }

  /* ---------- Certificates + lightbox ---------- */
  var certs = (D.certificates || []).slice();
  var visible = certs.slice();
  var lbIndex = 0, lastTrigger = null;
  var currentFilter = "all";

  function renderCerts() {
    var grid = $("#cert-grid"), filters = $("#cert-filters");
    if (!grid) return;
    grid.innerHTML = certs.map(function (c, i) {
      var title = tr(c, "title");
      return '<li class="cert' + (c.featured ? " featured" : "") + revealClass() + '" data-group="' + esc(c.group) + '" data-i="' + i + '">' +
        '<button class="cert-btn" type="button" data-i="' + i + '" aria-haspopup="dialog">' +
        '<span class="cert-thumb"><img src="' + path(c.thumb) + '" alt="" loading="lazy" decoding="async" width="720"></span>' +
        '<span class="cert-meta"><span class="cert-date">' + esc(tr(c, "date")) + "</span>" +
        '<span class="cert-title" style="display:block">' + esc(title) + "</span>" +
        '<span class="cert-issuer" style="display:block">' + esc(c.issuer) + "</span>" +
        (tr(c, "detail") ? '<span class="cert-detail" style="display:block">' + esc(tr(c, "detail")) + "</span>" : "") +
        "</span></button></li>";
    }).join("");

    var groups = lang === "sq" && D.certificateGroupsSq ? D.certificateGroupsSq : (D.certificateGroups || { all: "All" });
    filters.innerHTML = Object.keys(groups).filter(function (k) {
      return k === "all" || certs.some(function (c) { return c.group === k; });
    }).map(function (k) {
      var n = k === "all" ? certs.length : certs.filter(function (c) { return c.group === k; }).length;
      return '<button type="button" data-filter="' + esc(k) + '" aria-pressed="' + (k === currentFilter) + '">' + esc(groups[k]) + '<span class="n">' + n + "</span></button>";
    }).join("");
    applyFilter(currentFilter);
  }

  function setupCerts() {
    var grid = $("#cert-grid"), filters = $("#cert-filters");
    if (!grid) return;
    filters.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-filter]");
      if (!b) return;
      $$("button", filters).forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      applyFilter(b.getAttribute("data-filter"));
    });
    grid.addEventListener("click", function (e) {
      var b = e.target.closest(".cert-btn");
      if (b) openLightbox(+b.getAttribute("data-i"), b);
    });
  }

  function applyFilter(key) {
    currentFilter = key;
    var shown = 0;
    $$(".cert", $("#cert-grid")).forEach(function (li) {
      var on = key === "all" || li.getAttribute("data-group") === key;
      li.hidden = !on;
      if (on) { shown++; li.classList.add("in"); }
    });
    // When filtering, nothing needs to span two columns
    $("#cert-grid").classList.toggle("filtered", key !== "all");
    visible = certs.filter(function (c) { return key === "all" || c.group === key; });
    $("#cert-count").textContent = shown === 1 ? t("certs.shownOne") : t("certs.shownMany").replace("{n}", shown);
  }

  var lb, lbImg;
  function setupLightbox() {
    lb = $("#lightbox"); lbImg = $("#lb-img");
    if (!lb) return;
    lb.addEventListener("click", function (e) {
      var act = e.target.closest("[data-lb]");
      if (act) {
        var a = act.getAttribute("data-lb");
        if (a === "close") lb.close();
        if (a === "prev") step(-1);
        if (a === "next") step(1);
        return;
      }
      // click on the backdrop area (outside frame content) closes
      if (e.target === lb || e.target.classList.contains("lb-frame") || e.target.classList.contains("lb-stage")) lb.close();
    });
    lb.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
      if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
    });
    lb.addEventListener("close", function () {
      document.body.classList.remove("no-scroll");
      if (lastTrigger) lastTrigger.focus();
    });
  }
  function openLightbox(i, trigger) {
    lastTrigger = trigger;
    lbIndex = Math.max(0, visible.indexOf(certs[i]));
    showCert();
    document.body.classList.add("no-scroll");
    if (!lb.open) lb.showModal();
  }
  function step(d) {
    lbIndex = (lbIndex + d + visible.length) % visible.length;
    showCert();
  }
  function showCert() {
    var c = visible[lbIndex];
    lbImg.src = path(c.file);
    lbImg.alt = tr(c, "alt") || tr(c, "title");
    $("#lb-title").textContent = tr(c, "title");
    $("#lb-meta").textContent = [c.issuer, tr(c, "date")].filter(Boolean).join(" · ");
    $("#lb-count").textContent = (lbIndex + 1) + " / " + visible.length;
    $("#lb-open").href = path(c.file);
    var single = visible.length < 2;
    $$(".lb-prev, .lb-next").forEach(function (b) { b.hidden = single; });
    // Preload neighbours
    [1, -1].forEach(function (d) {
      var n = visible[(lbIndex + d + visible.length) % visible.length];
      if (n) new Image().src = path(n.file);
    });
  }

  /* ---------- Experience & Education ---------- */
  function renderExperience() {
    var el = $("#experience-list"), x = D.experience;
    if (!el || !x) return;
    var a = x.activities, rc = revealClass();
    el.innerHTML =
      '<li class="tl-item' + rc + '"><div class="tl-meta"><strong>' + esc(tr(x, "duration")) + "</strong><span>" + esc(t("exp.teaching")) + "</span></div>" +
      '<div class="tl-main"><h3 class="tl-title">' + esc(tr(x, "role")) + '</h3><p class="tl-org">' + esc(x.org) + "</p>" +
      '<p class="tl-desc">' + esc(tr(x, "description")) + "</p>" +
      (x.focus ? '<ul class="tags" aria-label="' + esc(t("exp.topics")) + '">' + x.focus.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" : "") +
      "</div></li>" +
      (a ? '<li class="tl-item activity' + rc + '"><div class="tl-meta"><strong>' + esc(t("exp.activities")) + "</strong><span>" + esc(t("exp.community")) + "</span></div>" +
        '<div class="tl-main"><h3 class="tl-title">' + esc(tr(a, "title")) + '</h3><p class="tl-org">' + esc(a.org) + "</p>" +
        '<p class="tl-desc">' + esc(tr(a, "description")) + "</p></div></li>" : "");
  }
  function renderEducation() {
    var el = $("#education-list");
    if (!el || !D.education) return;
    el.innerHTML = D.education.map(function (e) {
      var note = tr(e, "note");
      return '<li class="edu-item' + revealClass() + '"><p class="edu-years">' + esc(e.years) + "</p>" +
        '<h3 class="edu-school">' + esc(tr(e, "school")) + '<span class="edu-field">' + esc(tr(e, "field")) + "</span></h3>" +
        (note ? '<p class="edu-note">' + esc(note) + "</p>" : "") + "</li>";
    }).join("");
  }

  /* ---------- Contact: only configured links are shown ---------- */
  function renderContact() {
    var c = D.contact || {}, rows = [];
    function row(label, text, href, ext) {
      rows.push('<li><a href="' + esc(href) + '"' + (ext ? ' target="_blank" rel="noopener noreferrer"' : "") + '><span class="l"><span class="k">' + esc(label) + '</span><span class="v">' + esc(text) + "</span></span>" + icon("arrow", 22) + "</a></li>");
    }
    if (c.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email)) row(t("contact.email"), c.email, "mailto:" + c.email, false);
    if (c.phone && /^[+\d][\d\s()-]{5,}$/.test(c.phone)) row(t("contact.phone"), c.phone, "tel:" + c.phone.replace(/[^\d+]/g, ""), false);
    if (safeUrl(c.linkedin)) row("LinkedIn", c.linkedin.replace(/^https?:\/\/(www\.)?/, "").split("?")[0], c.linkedin, true);
    if (safeUrl(c.github)) row("GitHub", c.github.replace(/^https?:\/\/(www\.)?/, "").split("?")[0], c.github, true);
    if (safeUrl(c.portfolio)) row("Portfolio", c.portfolio.replace(/^https?:\/\/(www\.)?/, "").split("?")[0], c.portfolio, true);
    $("#contact-links").innerHTML = rows.join("");
    $("#contact-links").hidden = !rows.length;
    $("#contact-empty").hidden = rows.length > 0;
  }

  /* ---------- Navigation ---------- */
  function setupNav() {
    var header = $(".site-header"), toggle = $(".menu-toggle"), nav = $("#site-nav");
    var mq = window.matchMedia("(max-width: 900px)");

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", open);
      toggle.querySelector(".menu-toggle-label").textContent = t(open ? "menu.close" : "menu.open");
      nav.classList.toggle("open", open);
      document.body.classList.toggle("no-scroll", open);
      // Keep hidden mobile menu out of the tab order / a11y tree
      if (mq.matches) { if (open) nav.removeAttribute("inert"); else nav.setAttribute("inert", ""); }
    }
    function sync() { if (mq.matches) { setOpen(false); } else { nav.removeAttribute("inert"); nav.classList.remove("open"); document.body.classList.remove("no-scroll"); } }
    sync();
    (mq.addEventListener ? mq.addEventListener("change", sync) : mq.addListener(sync));

    toggle.addEventListener("click", function () { setOpen(toggle.getAttribute("aria-expanded") !== "true"); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a") && mq.matches) setOpen(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { setOpen(false); toggle.focus(); }
    });

    // Header surface, scroll progress line and back-to-top button
    var top = $("#to-top");
    function onScroll() {
      var y = window.scrollY;
      header.classList.toggle("scrolled", y > 24);
      var max = document.documentElement.scrollHeight - window.innerHeight;
      header.style.setProperty("--p", max > 0 ? (y / max).toFixed(3) : 0);
      var show = y > window.innerHeight * 0.8;
      top.hidden = false;
      top.classList.toggle("visible", show);
      top.tabIndex = show ? 0 : -1;
      top.setAttribute("aria-hidden", show ? "false" : "true");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    top.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }); });

    // Active section indicator
    var links = $$("a[data-nav]", nav), map = {};
    links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting && map[en.target.id]) {
            links.forEach(function (l) { l.classList.remove("active"); l.removeAttribute("aria-current"); });
            map[en.target.id].classList.add("active");
            map[en.target.id].setAttribute("aria-current", "true");
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
    }
  }

  /* ---------- Scroll reveal ---------- */
  function setupReveal() {
    var els = $$(".reveal");
    if (!("IntersectionObserver" in window) || reduceMotion) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    // Stagger hero items
    $$(".hero .reveal").forEach(function (e, i) { e.style.setProperty("--d", i * 90 + "ms"); });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- Apply language to static markup ---------- */
  function applyStatic() {
    $$("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $$("[data-i18n-html]").forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
    $$("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var kv = pair.split(":");
        if (kv.length === 2) el.setAttribute(kv[0].trim(), t(kv[1].trim()));
      });
    });
    document.documentElement.lang = lang;
    document.title = t("meta.title");
    var set = function (sel, v) { var m = $(sel); if (m) m.setAttribute("content", v); };
    set('meta[name="description"]', t("meta.description"));
    set('meta[property="og:title"]', t("meta.title"));
    set('meta[property="og:description"]', t("meta.ogDescription"));
    var ft = $("#footer-text"); if (ft) ft.textContent = t("footer").replace("{y}", new Date().getFullYear());
    $$(".lang-switch button").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false"); });
    var toggle = $(".menu-toggle");
    if (toggle) toggle.querySelector(".menu-toggle-label").textContent = t(toggle.getAttribute("aria-expanded") === "true" ? "menu.close" : "menu.open");
  }

  function renderAll() {
    renderSkills();
    renderProjects();
    renderCerts();
    renderExperience();
    renderEducation();
    renderContact();
  }

  function setLang(l) {
    lang = l;
    applyStatic();
    renderAll();
    if (lb && lb.open) showCert();
  }

  /* ---------- Init ---------- */
  lang = detectLang();
  applyStatic();
  renderAll();
  setupCerts();
  setupLightbox();
  setupNav();
  setupReveal();
  initialized = true;
  $$(".lang-switch button").forEach(function (b) {
    b.addEventListener("click", function () {
      var l = b.getAttribute("data-lang");
      if (l !== lang) setLang(l);
    });
  });
})();
