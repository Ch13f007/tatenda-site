// Concept animations for the project cards. Each scene is a 320x150 line drawing
// that tells the project's story left to right in about 4 seconds, then loops.
(function () {
  // Line icons on a 24 unit grid. Each " M" starts a separate stroke so it draws on its own.
  const P = {
    crane: "M3 22h12 M6 22V3 M6 3h15 M6 7l4-4 M18 3v7 M16.5 10h3v2.5h-3z",
    plant: "M2 20h12a2 2 0 0 0 0-4H2a2 2 0 0 0 0 4z M4 16v-4h6v4 M10 12l5-6 5 3 M20 9v4l-3 1",
    coin: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M12 7v10 M15 9.5c0-1.4-1.3-2-3-2s-3 .7-3 2 1.3 1.8 3 2.2 3 .9 3 2.3-1.3 2-3 2-3-.7-3-2",
    doc: "M6 3h9l4 4v14H6z M15 3v4h4 M9 11h7 M9 14h7 M9 17h4",
    shield: "M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z",
    check: "M7 12.5l3.2 3.2L17 9",
    chip: "M7 7h10v10H7z M9.5 3v4 M14.5 3v4 M9.5 17v4 M14.5 17v4 M3 9.5h4 M3 14.5h4 M17 9.5h4 M17 14.5h4",
    envelope: "M3 6h18v12H3z M3 6l9 7 9-7",
    hook: "M15 3v9a4 4 0 0 1-8 0v-1 M7 11l-2.5 2.5",
    user: "M12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z M5 20c0-3.5 3.2-5.5 7-5.5s7 2 7 5.5",
    magnifier: "M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14z M15 15l6 6",
    monitor: "M3 4h18v12H3z M8 20h8 M12 16v4",
    pin: "M12 21s-6-5.5-6-10.5a6 6 0 0 1 12 0C18 15.5 12 21 12 21z M12 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z",
    bottle: "M10 2h4v4l2 3v13H8V9l2-3z M8 13h8",
    sparkle: "M12 3c.6 4.8 1.2 5.4 6 6-4.8.6-5.4 1.2-6 6-.6-4.8-1.2-5.4-6-6 4.8-.6 5.4-1.2 6-6z",
    calendar: "M4 6h16v14H4z M4 10h16 M8 3v5 M16 3v5",
    bubble: "M4 5h16v10H10l-5 4v-4H4z",
    alert: "M12 3 2 20h20z M12 10v4 M12 17v.5",
    hardhat: "M2 18h20 M4.5 18v-2.5a7.5 7.5 0 0 1 15 0V18 M10 8.5V6h4v2.5 M12 11v4",
  };
  const st = (d, extra = "") => `style="--d:${d}s${extra ? ";" + extra : ""}"`;
  const ico = (n, x, y, s, a, d, c = "") =>
    `<g transform="translate(${x} ${y}) scale(${s})" style="stroke-width:${(1.5 / s).toFixed(2)}"><g class="${a} ${c}" ${st(d)}>` +
    P[n].split(" M").map((seg, i) => `<path pathLength="1" d="${i ? "M" + seg : seg}"/>`).join("") + "</g></g>";
  const ln = (x1, y1, x2, y2, a, d, c = "") => `<line pathLength="1" class="${a} ${c}" ${st(d)} x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
  const flow = (x1, y, x2, d) => `<line class="fi flow" ${st(d)} x1="${x1}" y1="${y}" x2="${x2}" y2="${y}"/><path class="fi" ${st(d)} d="M${x2 - 4} ${y - 3}l4 3-4 3"/>`;
  const tx = (x, y, s, a, d, c = "") => `<text x="${x}" y="${y}" class="${a} ${c}" ${st(d)}>${s}</text>`;
  const box = (x, y, w, h, a, d, c = "") => `<rect pathLength="1" class="${a} ${c}" ${st(d)} x="${x}" y="${y}" width="${w}" height="${h}"/>`;
  const browser = (x, y, w, h, d) =>
    box(x, y, w, h, "dr", d) + ln(x, y + 14, x + w, y + 14, "dr", d + 0.3) +
    [0, 1, 2].map((i) => `<circle class="po" ${st(d + 0.4 + i * 0.08)} cx="${x + 7 + i * 7}" cy="${y + 7}" r="1.8"/>`).join("");

  const S = {};

  // SHEQ Sentinel: site, plant and money -> the law, checked -> compliance proven
  S["PRJ-01"] =
    ln(8, 128, 112, 128, "dr", 0) + ico("crane", 10, 46, 3.4, "dr", 0.1) + ico("plant", 58, 87, 1.7, "dr", 0.5) +
    ico("hardhat", 84, 60, 1.35, "po", 0.8, "hi") + ico("coin", 90, 36, 0.9, "po", 1.0, "hi") +
    flow(116, 84, 140, 1.2) + ico("doc", 136, 26, 3, "dr", 1.3) +
    ico("check", 176, 46, 0.62, "po", 2.0, "ok") + ico("check", 176, 55, 0.62, "po", 2.25, "ok") + ico("check", 166, 64, 0.62, "po", 2.5, "ok") +
    tx(140, 118, "OHS ACT · COIDA", "fi", 1.8) +
    flow(216, 84, 238, 2.7) + ico("shield", 238, 26, 2.9, "dr", 2.8, "hi") + ico("check", 238, 26, 2.9, "dr", 3.3, "ok") +
    tx(240, 118, "75% COMPLIANT", "fi", 3.5, "hi");

  // Sentinel PM: build -> six stage programme -> budget held
  S["PRJ-02"] =
    ln(8, 128, 92, 128, "dr", 0) + ico("crane", 10, 46, 3.4, "dr", 0.1) + flow(96, 84, 116, 0.7) +
    [0, 1, 2, 3, 4, 5].map((i) => box(120 + i * 15, 24 + i * 16, 40, 9, "gr", 0.9 + i * 0.25, "bar" + (i < 3 ? " barok" : ""))).join("") +
    ln(192, 18, 192, 124, "dr", 2.5, "hi dash") + tx(184, 136, "TODAY", "fi", 2.6, "hi") +
    ico("coin", 252, 22, 2, "po", 2.9, "hi") + box(246, 82, 64, 9, "fi", 3.1) + box(246, 82, 46, 9, "gr", 3.3, "bar barhi") +
    tx(246, 108, "ON BUDGET", "fi", 3.7);

  // SentraCore OS & AI governance: AI systems -> risk tiered register -> model card
  S["PRJ-03"] =
    ico("chip", 12, 38, 2.8, "dr", 0) + tx(14, 124, "AI SYSTEMS", "fi", 0.6) + flow(88, 75, 108, 0.9) +
    [["CV SCREENING", "HIGH", "bad"], ["CHATBOT", "LTD", "hi"], ["COPILOT", "MIN", "ok"]].map(([n, t, c], i) =>
      box(110, 30 + i * 30, 112, 22, "dr", 1.0 + i * 0.3) + tx(116, 45 + i * 30, n, "fi", 1.2 + i * 0.3) +
      `<g class="po ${i === 0 ? "pu" : ""}" ${st(1.8 + i * 0.3)}><rect class="tag ${c}" x="188" y="${34 + i * 30}" width="30" height="14"/><text class="${c}" x="192" y="${44 + i * 30}">${t}</text></g>`).join("") +
    flow(226, 75, 244, 2.7) + ico("doc", 244, 30, 2.6, "dr", 2.8) + ico("check", 262, 66, 1, "po", 3.4, "ok") +
    tx(244, 124, "MODEL CARD", "fi", 3.5, "hi");

  // Integrated management system: four standards converge into one
  const rings = [["ISO 27001", -70, -30, 96, 62, 40, 30], ["ISO 42001", 70, -30, 124, 62, 128, 30], ["NIST AI RMF", -70, 30, 96, 88, 28, 128], ["POPIA", 70, 30, 124, 88, 146, 128]];
  S["PRJ-04"] =
    rings.map(([l, fx, fy, cx, cy, lx, ly], i) =>
      `<circle class="mv" ${st(0.2 + i * 0.2, `--fx:${fx}px;--fy:${fy}px`)} cx="${cx}" cy="${cy}" r="26"/>` + tx(lx, ly, l, "fi", 1.2 + i * 0.15)).join("") +
    `<circle class="po hi" ${st(1.9)} cx="110" cy="75" r="5"/>` +
    flow(178, 75, 220, 2.2) + ico("shield", 226, 22, 3.2, "dr", 2.4, "hi") + ico("check", 226, 22, 3.2, "dr", 3.0, "ok") +
    tx(226, 120, "ONE SYSTEM", "fi", 3.3, "hi") + tx(226, 134, "1 SoA · 1 AUDIT", "fi", 3.5);

  // Security operations: patrol, checkpoints, alert reaches the control room
  const patrol = "M30 112 L30 42 L104 42 L104 92 L172 92 L172 34";
  S["PRJ-05"] =
    box(12, 18, 182, 116, "fi", 0, "faint") + `<path pathLength="1" class="dr dash" ${st(0.3)} d="${patrol}"/>` +
    [[30, 112], [30, 42], [104, 42], [104, 92], [172, 92]].map(([x, y], i) => `<circle class="po ok" ${st(0.9 + i * 0.4)} cx="${x}" cy="${y}" r="4"/>`).join("") +
    `<circle class="walk hi solid" ${st(0.6, `offset-path:path('${patrol}')`)} r="3.5"/>` +
    ico("alert", 160, 20, 1, "po pu", 2.7, "bad") +
    flow(198, 75, 222, 2.9) + ico("monitor", 224, 30, 3.5, "dr", 2.2) + ico("alert", 254, 46, 1.1, "po pu", 3.2, "bad") +
    tx(226, 124, "CONTROL ROOM", "fi", 3.4);

  // PhishMind AI: a simulated phish -> staff learn -> risk falls
  S["PRJ-06"] =
    ico("envelope", 12, 40, 2.6, "po", 0) + ico("hook", 50, 70, 1.5, "dr", 0.5, "bad") + tx(14, 124, "SIMULATION", "fi", 0.8) +
    flow(84, 70, 104, 1.0) +
    [0, 1, 2].map((i) => ico("user", 108 + i * 44, 34, 1.6, "dr", 1.1 + i * 0.2) + ico("shield", 132 + i * 44, 56, 0.75, "po", 2.0 + i * 0.3, "ok")).join("") +
    box(110, 102, 120, 8, "fi", 1.6) + box(110, 102, 120, 8, "sh", 2.2, "bar barbad") + tx(110, 124, "CLICK RISK FALLS", "fi", 3.0) +
    ico("shield", 250, 36, 2.4, "dr", 3.0, "hi") + ico("check", 250, 36, 2.4, "dr", 3.4, "ok");

  // PhishMind Eval: same request in four languages -> model -> refusal rates compared
  const langs = ["EN", "SN", "ND", "ZU"], rates = [112, 58, 44, 52];
  S["PRJ-07"] =
    langs.map((l, i) => ico("bubble", 10, 10 + i * 30, 1.2, "po", i * 0.18) + tx(19, 26 + i * 30, l, "fi", 0.2 + i * 0.18)).join("") +
    langs.map((_, i) => `<path pathLength="1" class="dr faint" ${st(0.9)} d="M40 ${22 + i * 30} C 70 ${22 + i * 30}, 80 75, 104 75"/>`).join("") +
    box(104, 52, 56, 46, "dr", 1.2) + tx(120, 79, "LLM", "fi", 1.5, "hi") +
    langs.map((l, i) => box(176, 18 + i * 30, rates[i], 10, "gr", 2.0 + i * 0.2, "bar " + (i ? "barbad" : "barok")) + tx(176 + rates[i] + 4, 27 + i * 30, l, "fi", 2.3 + i * 0.2)).join("") +
    tx(176, 140, "REFUSAL RATE BY LANGUAGE", "fi", 3.2);

  // Phishcheck Analyzer: raw email -> scanned -> red flags
  S["PRJ-08"] =
    ico("envelope", 12, 40, 2.6, "dr", 0) + tx(30, 124, ".EML", "fi", 0.5, "hi") + flow(84, 70, 102, 0.8) +
    [0, 1, 2, 3, 4].map((i) => ln(108, 34 + i * 16, 108 + [84, 64, 90, 56, 76][i], 34 + i * 16, "dr", 0.9 + i * 0.12, "faint")).join("") +
    `<g class="scan" ${st(1.3)}>${ico("magnifier", 104, 26, 1.8, "fi", 1.3, "hi")}</g>` +
    [["REPLY-TO ≠ FROM", 2.3], ["SHORT URL", 2.7], ["ZIP ATTACHED", 3.1]].map(([t, d], i) =>
      ico("alert", 204, 26 + i * 32, 0.9, "po", d, "bad") + tx(230, 42 + i * 32, t, "fi", d + 0.1)).join("");

  // SentraCore website: a page assembles
  S["PRJ-09"] =
    browser(60, 10, 200, 128, 0) + ico("shield", 76, 36, 1.6, "po", 1.0, "hi") +
    box(122, 40, 110, 8, "gr", 1.2, "bar") + box(122, 54, 76, 6, "gr", 1.4, "bar faintbar") + box(122, 68, 42, 11, "po", 1.7, "bar barhi") +
    [0, 1, 2].map((i) => box(76 + i * 60, 94, 50, 32, "po", 2.0 + i * 0.2)).join("") +
    tx(70, 148, "SENTRACORELLC.COM", "fi", 2.8);

  // SentraCore Cleaning website: page -> sparkle -> booking confirmed
  S["PRJ-10"] =
    browser(12, 14, 170, 120, 0) + box(28, 44, 90, 8, "gr", 1.0, "bar") + box(28, 58, 60, 6, "gr", 1.2, "bar faintbar") +
    box(28, 72, 46, 12, "po", 1.5, "bar barhi") +
    ico("sparkle", 126, 70, 1.4, "po pu", 1.6, "hi") + ico("sparkle", 150, 96, 0.9, "po pu", 1.9, "hi") + ico("sparkle", 104, 98, 0.8, "po pu", 2.1, "hi") +
    flow(188, 74, 212, 2.2) + ico("calendar", 218, 30, 3, "dr", 2.3) + ico("check", 230, 52, 1.5, "po", 3.0, "ok") +
    tx(222, 124, "BOOKED", "fi", 3.2, "hi");

  // Retail concept: ranges online -> four stores on the map
  S["PRJ-11"] =
    browser(12, 14, 170, 120, 0) + [0, 1, 2].map((i) => box(24 + i * 52, 42, 44, 70, "po", 0.9 + i * 0.2) + ico("bottle", 34 + i * 52, 52, 1.0, "dr", 1.2 + i * 0.2, "hi")).join("") +
    flow(188, 74, 208, 2.0) + box(212, 22, 98, 98, "dr", 2.1, "faint") + `<path pathLength="1" class="dr faint" ${st(2.3)} d="M212 70 Q 260 40 310 80 M250 22 L 270 120"/>` +
    [[226, 34], [270, 30], [236, 80], [282, 76]].map(([x, y], i) => ico("pin", x, y, 1.1, "po", 2.6 + i * 0.2, "hi")).join("") +
    tx(214, 140, "FOUR STORES", "fi", 3.5);

  window.SCENES = S;

  // Play each scene while it is on screen, looping every few seconds.
  window.startScenes = function () {
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const svgs = document.querySelectorAll("svg.scene");
    if (still || !("IntersectionObserver" in window)) { svgs.forEach((s) => s.classList.add("still")); return; }
    const timers = new Map();
    const replay = (s) => { s.classList.remove("play"); void s.getBoundingClientRect(); s.classList.add("play"); };
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      const s = e.target;
      if (e.isIntersecting && !timers.has(s)) { replay(s); timers.set(s, setInterval(() => replay(s), 5600)); }
      else if (!e.isIntersecting && timers.has(s)) { clearInterval(timers.get(s)); timers.delete(s); }
    }), { threshold: 0.35 });
    svgs.forEach((s) => io.observe(s));
  };
})();
