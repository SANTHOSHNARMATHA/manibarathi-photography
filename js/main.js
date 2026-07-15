/* =====================================================================
   ManiBarathi Photography — main.js
   ===================================================================== */
(function () {
  "use strict";

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const IMG = "assets/images/";

  /* ---------------- DATA ---------------- */
  const services = [
    { icon: "fa-ring",           title: "Wedding Photography",   desc: "Candid and traditional coverage that captures every ritual, tear and smile." },
    { icon: "fa-film",           title: "Cinematic Wedding Films", desc: "Story-driven 4K films with cinematic grading, music and same-day teasers." },
    { icon: "fa-heart",          title: "Pre-Wedding Shoots",    desc: "Location shoots that reflect your story — from heritage sites to the sea." },
    { icon: "fa-gem",            title: "Engagement",            desc: "Elegant coverage of your ring ceremony, styled and lit to perfection." },
    { icon: "fa-hand-sparkles",  title: "Mehendi & Haldi",       desc: "Vibrant, detail-rich frames of the henna, colour and joy before the big day." },
    { icon: "fa-cake-candles",   title: "Birthday Events",       desc: "Playful, colourful photography for birthdays and family celebrations." },
    { icon: "fa-baby",           title: "Baby & Maternity",      desc: "Tender maternity and newborn portraits in a calm studio setting." },
    { icon: "fa-helicopter",     title: "Drone Photography",     desc: "Sweeping aerial shots and cinematic fly-throughs of your venue." },
    { icon: "fa-mountain-sun",   title: "Outdoor & Corporate",   desc: "Outdoor lifestyle shoots and polished corporate event coverage." }
  ];

  const gallery = [
    { img: "wedding-ceremony.jpeg",    cat: "wedding",    tag: "Wedding",     title: "The Sacred Vows" },
    { img: "baby-pool.jpeg",           cat: "baby",       tag: "Baby",        title: "Splash & Smiles" },
    { img: "prewedding-forest.jpeg",   cat: "prewedding", tag: "Pre-Wedding", title: "The Fallen Log" },
    { img: "bride-pearls.jpeg",        cat: "portrait",   tag: "Bridal",      title: "Pearls & Silk" },
    { img: "prewedding-stream.jpeg",   cat: "prewedding", tag: "Pre-Wedding", title: "By the Stream" },
    { img: "baby-lying.jpeg",          cat: "baby",       tag: "Baby",        title: "First Curls" },
    { img: "mehendi-01.jpg",           cat: "mehendi",    tag: "Mehendi",     title: "Henna & Petals" },
    { img: "cinematic-arch.jpg",       cat: "cinematic",  tag: "Cinematic",   title: "The Archway" },
    { img: "mehendi-02.jpg",           cat: "mehendi",    tag: "Bridal",      title: "Karthik & Vishnu" },
    { img: "bride-portrait.jpg",       cat: "portrait",   tag: "Portrait",    title: "The Green Silk" },
    { img: "groom-detail.jpg",         cat: "wedding",    tag: "Groom",       title: "Details in Navy" },
    { img: "bride-makeup.jpg",         cat: "portrait",   tag: "Getting Ready", title: "Final Touches" },
    { img: "prewedding-bookshelf.jpg", cat: "prewedding", tag: "Pre-Wedding", title: "Between the Pages" },
    { img: "mehendi-03.jpg",           cat: "mehendi",    tag: "Mehendi",     title: "First Look" },
    { img: "cinematic-arch-2.jpg",     cat: "cinematic",  tag: "Cinematic",   title: "Golden Hour" }
  ];

  const CONTACT = {
    phone:    "+91 87540 45410",
    phoneRaw: "918754045410",
    igUser:   "mani_bharathi_photography",
    ig:       "https://www.instagram.com/mani_bharathi_photography?igsh=amxqd3ZtMXVub3U2"
  };

  const team = [
    { img: "mani-barathi.jpeg", name: "Mani Barathi", role: "Founder & Lead Photographer" }
  ];

  /* ---------------- RENDER ---------------- */
  function render() {
    // Services
    $("#svcGrid").innerHTML = services.map((s, i) => `
      <article class="svc-card" data-aos="fade-up" data-aos-delay="${(i % 3) * 70}">
        <div class="svc-icon"><i class="fa-solid ${s.icon}"></i></div>
        <h3>${s.title}</h3><p>${s.desc}</p>
      </article>`).join("");

    // Gallery
    $("#gallery").innerHTML = gallery.map((g, i) => `
      <figure class="gallery-item" data-cat="${g.cat}" data-index="${i}">
        <img src="${IMG}${g.img}" alt="${g.title} — ${g.tag}" loading="lazy">
        <figcaption class="ov">
          <span class="zoom"><i class="fa-solid fa-expand"></i></span>
          <span class="cat">${g.tag}</span><span class="ttl">${g.title}</span>
        </figcaption>
      </figure>`).join("");

    // Team / Leadership
    const grid = $("#teamGrid");
    grid.classList.toggle("solo", team.length === 1);
    grid.innerHTML = team.map((m, i) => `
      <div class="member" data-aos="fade-up" data-aos-delay="${i * 70}">
        <div class="ph">
          <img src="${IMG}${m.img}" alt="${m.name}, ${m.role}" loading="lazy">
          <div class="social">
            <a href="${CONTACT.ig}" target="_blank" rel="noopener" aria-label="${m.name} on Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://wa.me/${CONTACT.phoneRaw}" target="_blank" rel="noopener" aria-label="Chat with ${m.name} on WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
            <a href="tel:+${CONTACT.phoneRaw}" aria-label="Call ${m.name}"><i class="fa-solid fa-phone"></i></a>
          </div>
        </div>
        <h4>${m.name}</h4><p>${m.role}</p>
        <div class="member-contact">
          <a href="tel:+${CONTACT.phoneRaw}"><i class="fa-solid fa-phone"></i> ${CONTACT.phone}</a>
          <a href="${CONTACT.ig}" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i> @${CONTACT.igUser}</a>
        </div>
      </div>`).join("");
  }

  /* ---------------- LOADER ---------------- */
  function initLoader() {
    window.addEventListener("load", () => {
      setTimeout(() => $("#loader").classList.add("done"), 700);
    });
    // Safety fallback
    setTimeout(() => $("#loader")?.classList.add("done"), 3500);
  }

  /* ---------------- NAVBAR ---------------- */
  function initNav() {
    const nav = $("#navbar");
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const mobileNav = $("#mobileNav");
    $("#navToggle").addEventListener("click", () => mobileNav.classList.add("open"));
    $("#navClose").addEventListener("click", () => mobileNav.classList.remove("open"));
    $$(".mobile-nav a").forEach(a => a.addEventListener("click", () => mobileNav.classList.remove("open")));

    // Active link on scroll (scroll-spy)
    const sections = $$("section[id]");
    const links = $$(".nav-links a");
    const spy = () => {
      let cur = "";
      const y = window.scrollY + 130;
      sections.forEach(sec => { if (y >= sec.offsetTop) cur = sec.id; });
      links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + cur));
    };
    window.addEventListener("scroll", spy, { passive: true });
    spy();
  }

  /* ---------------- THEME ---------------- */
  function initTheme() {
    const root = document.documentElement;
    const btn = $("#themeToggle");
    const icon = btn.querySelector("i");
    const set = (t) => {
      root.setAttribute("data-theme", t);
      icon.className = t === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    };
    // default dark (no persistent storage available in-artifact; in-memory only)
    let current = "dark";
    set(current);
    btn.addEventListener("click", () => { current = current === "dark" ? "light" : "dark"; set(current); });
  }

  /* ---------------- PORTFOLIO FILTER ---------------- */
  function initFilter() {
    const btns = $$(".filter-btn");
    const items = $$(".gallery-item");
    const gallery = $("#gallery");
    btns.forEach(btn => btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      items.forEach(it => it.classList.toggle("hide", !(f === "all" || it.dataset.cat === f)));
      // On mobile the gallery is a horizontal carousel — restart from the first photo
      gallery.scrollTo({ left: 0, behavior: "smooth" });
    }));
  }

  /* ---------------- LIGHTBOX ---------------- */
  function initLightbox() {
    const lb = $("#lightbox"), img = $("#lbImg"), cap = $("#lbCaption");
    let list = [], idx = 0;

    const visible = () => $$(".gallery-item").filter(i => !i.classList.contains("hide"));
    const show = (i) => {
      idx = (i + list.length) % list.length;
      const g = gallery[+list[idx].dataset.index];
      img.src = IMG + g.img; img.alt = g.title;
      cap.textContent = `${g.title} — ${g.tag}`;
    };

    $("#gallery").addEventListener("click", (e) => {
      const item = e.target.closest(".gallery-item");
      if (!item) return;
      list = visible();
      show(list.indexOf(item));
      lb.classList.add("open");
    });
    $("#lbClose").addEventListener("click", () => lb.classList.remove("open"));
    $("#lbNext").addEventListener("click", () => show(idx + 1));
    $("#lbPrev").addEventListener("click", () => show(idx - 1));
    lb.addEventListener("click", (e) => { if (e.target === lb) lb.classList.remove("open"); });
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") lb.classList.remove("open");
      if (e.key === "ArrowRight") show(idx + 1);
      if (e.key === "ArrowLeft") show(idx - 1);
    });
  }

  /* ---------------- COUNTERS ---------------- */
  function initCounters() {
    const nums = $$(".num[data-count]");
    const run = (el) => {
      const target = +el.dataset.count;
      const dur = 1600, start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.floor(p * target) + (p === 1 && target >= 100 && el.nextElementSibling?.textContent.includes("%") ? "" : (p === 1 ? "+" : ""));
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target + (el.nextElementSibling?.textContent.includes("%") ? "" : "+");
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
    }, { threshold: .5 });
    nums.forEach(n => io.observe(n));
  }

  /* ---------------- BEFORE / AFTER ---------------- */
  function initBeforeAfter() {
    const ba = $("#ba"); if (!ba) return;
    const range = $("#baRange"), after = $(".after", ba), div = $("#baDivider"), handle = $("#baHandle");
    const upd = (v) => {
      after.style.clipPath = `inset(0 0 0 ${v}%)`;
      div.style.left = v + "%"; handle.style.left = v + "%";
    };
    range.addEventListener("input", (e) => upd(e.target.value));
    upd(50);
  }

  /* ---------------- PACKAGE -> FORM ---------------- */
  function initPackageLinks() {
    $$("[data-package]").forEach(btn => btn.addEventListener("click", () => {
      const sel = $("#f-event");
      // pre-fill message with chosen package
      const msg = $("#f-message");
      msg.value = `I'm interested in the ${btn.dataset.package} package. ` + (msg.value || "");
    }));
  }

  /* ---------------- FORM VALIDATION + MAILTO ---------------- */
  function initForm() {
    const form = $("#inquiryForm");
    const STUDIO_EMAIL = "manibharathiphotography@gmail.com";
    const required = ["f-name", "f-mobile", "f-email", "f-event", "f-date"];

    const validateField = (id) => {
      const el = $("#" + id), field = el.closest(".field");
      let ok = el.value.trim() !== "";
      if (ok && id === "f-email") ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value);
      if (ok && id === "f-mobile") ok = /^[0-9+\s\-]{8,15}$/.test(el.value.trim());
      field.classList.toggle("invalid", !ok);
      return ok;
    };

    required.forEach(id => $("#" + id).addEventListener("blur", () => validateField(id)));

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const valid = required.map(validateField).every(Boolean);
      if (!valid) { form.querySelector(".invalid input, .invalid select")?.focus(); return; }

      const v = (id) => $("#" + id).value.trim();
      const subject = `New Inquiry — ${v("f-event")} (${v("f-name")})`;
      const body =
`Hello ManiBarathi Photography,

I would like to inquire about your services.

Name: ${v("f-name")}
Mobile: ${v("f-mobile")}
Email: ${v("f-email")}
Event Type: ${v("f-event")}
Event Date: ${v("f-date")}
Location: ${v("f-location") || "-"}
Budget: ${v("f-budget") || "-"}

Message:
${v("f-message") || "-"}

Thank you!`;

      const mailto = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      $("#formOk").classList.add("show");
    });
  }

  /* ---------------- FLOATING BUTTONS ---------------- */
  function initFloating() {
    const top = $("#toTop");
    window.addEventListener("scroll", () => top.classList.toggle("show", window.scrollY > 600), { passive: true });
    top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------------- IMAGE FALLBACK ----------------
     Until the new photo files are dropped in, swap any missing
     image to an existing one so previews never show a broken icon. */
  function initImageFallback() {
    const FALLBACK = IMG + "cinematic-arch.jpg";
    $$("img").forEach(img => {
      if (img.classList.contains("brand") || img.closest(".brand-logo") || img.classList.contains("loader-logo")) return;
      img.addEventListener("error", function onErr() {
        this.removeEventListener("error", onErr);
        this.src = FALLBACK;
      });
    });
  }

  /* ---------------- MOBILE CAROUSELS (auto-scroll every 1s) ----------------
     Only active on mobile widths. Services and Portfolio become horizontal
     carousels that advance one card per second and loop back to the start.
     Auto-advance pauses briefly while the visitor is swiping. */
  function initMobileCarousels() {
    const mq = window.matchMedia("(max-width: 640px)");
    const STEP_MS = 1000;

    const makeAuto = (container, itemSelector) => {
      let timer = null, paused = false, resumeT = null;

      const items = () => $$(itemSelector, container).filter(el => !el.classList.contains("hide"));

      const currentIndex = (list) => {
        const cLeft = container.getBoundingClientRect().left;
        let best = 0, bestDist = Infinity;
        list.forEach((it, k) => {
          const d = Math.abs(it.getBoundingClientRect().left - cLeft);
          if (d < bestDist) { bestDist = d; best = k; }
        });
        return best;
      };

      const step = () => {
        if (paused) return;
        const list = items();
        if (list.length < 2) return;
        const maxScroll = container.scrollWidth - container.clientWidth - 4;
        const next = container.scrollLeft >= maxScroll
          ? 0
          : Math.min(currentIndex(list) + 1, list.length - 1);
        const delta = list[next].getBoundingClientRect().left - container.getBoundingClientRect().left;
        container.scrollTo({ left: container.scrollLeft + delta, behavior: "smooth" });
      };

      const pause = () => {
        paused = true;
        clearTimeout(resumeT);
        resumeT = setTimeout(() => { paused = false; }, 2500);
      };

      const start = () => {
        if (timer) return;
        container.addEventListener("pointerdown", pause);
        container.addEventListener("touchstart", pause, { passive: true });
        container.addEventListener("wheel", pause, { passive: true });
        timer = setInterval(step, STEP_MS);
      };
      const stop = () => {
        clearInterval(timer); timer = null;
        clearTimeout(resumeT); paused = false;
        container.removeEventListener("pointerdown", pause);
        container.removeEventListener("touchstart", pause);
        container.removeEventListener("wheel", pause);
      };
      return { start, stop };
    };

    const controllers = [];
    const svc = $("#svcGrid");  if (svc) controllers.push(makeAuto(svc, ".svc-card"));
    const gal = $("#gallery");  if (gal) controllers.push(makeAuto(gal, ".gallery-item"));

    const sync = () => controllers.forEach(c => mq.matches ? c.start() : c.stop());
    mq.addEventListener("change", sync);
    sync();
  }

  /* ---------------- INIT ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    render();
    initImageFallback();
    initLoader();
    initNav();
    initTheme();
    initFilter();
    initLightbox();
    initCounters();
    initBeforeAfter();
    initPackageLinks();
    initForm();
    initFloating();
    initMobileCarousels();

    $("#year").textContent = new Date().getFullYear();

    if (window.AOS) AOS.init({ duration: 800, once: true, offset: 80, easing: "ease-out-cubic" });
  });
})();
