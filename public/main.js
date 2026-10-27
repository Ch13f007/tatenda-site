const S = window.SITE, $ = (id) => document.getElementById(id);
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const linksHtml = (ls) => ls.map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("");
const tblock = (no, title, sub) => `<div class="tblock"><div class="no"><small>Dwg no.</small>${no}</div>
  <div class="ttl">${esc(title)}</div><div><small>Detail</small>${esc(sub)}</div><div><small>Rev</small>A</div></div>`;

// hero
$("eyebrow").textContent = S.roles.join("  /  ");
const w = S.hero.split(" "), last = w.pop();
$("h1").innerHTML = `${esc(w.join(" "))} <em>${esc(last)}</em>`;
$("lead").textContent = S.intro.split(". ").slice(0, 1) + ".";
$("cta").innerHTML = `<a class="btn hi" href="#systems">Systems I build</a>` +
  S.cvs.map((c) => `<a class="btn" href="${c.file}" download>${esc(c.label)}</a>`).join("");

// isometric layered stack illustration
(function () {
  const cx = 230, layers = ["AI GOVERNANCE", "SECURITY", "COMPLIANCE", "DATA"], W = 150, H = 75, T = 16, gap = 62;
  let s = "";
  layers.forEach((name, i) => {
    const y = 110 + i * gap;
    const top = `${cx},${y - H} ${cx + W},${y} ${cx},${y + H} ${cx - W},${y}`;
    const left = `${cx - W},${y} ${cx},${y + H} ${cx},${y + H + T} ${cx - W},${y + T}`;
    const right = `${cx + W},${y} ${cx},${y + H} ${cx},${y + H + T} ${cx + W},${y + T}`;
    const op = i === 0 ? ".22" : ".08";
    s = `<g style="animation-delay:${i * .3}s">
      <polygon class="draw" style="animation-delay:${i * .3}s" points="${left}" fill="rgba(127,219,255,.05)" stroke="var(--line)" stroke-width="1"/>
      <polygon class="draw" style="animation-delay:${i * .3}s" points="${right}" fill="rgba(127,219,255,.1)" stroke="var(--line)" stroke-width="1"/>
      <polygon class="draw" style="animation-delay:${i * .3}s" points="${top}" fill="rgba(255,209,102,${op})" stroke="${i === 0 ? "var(--hi)" : "var(--ink)"}" stroke-width="1.2"/>
      <line x1="${cx + W + 8}" y1="${y + 8}" x2="${cx + W + 40}" y2="${y + 8}" stroke="var(--ink3)" stroke-dasharray="3 3"/>
      <text x="${cx + W + 44}" y="${y + 12}" style="font-size:10px">${String(i + 1).padStart(2, "0")}</text>
      <text x="${cx}" y="${y + 4}" text-anchor="middle">${name}</text></g>` + s;
  });
  // vertical dimension line
  const y0 = 110 - H, y1 = 110 + 3 * gap + H + T;
  s += `<g stroke="var(--ink3)" stroke-width="1"><line x1="40" y1="${y0}" x2="40" y2="${y1}"/>
    <line x1="32" y1="${y0}" x2="48" y2="${y0}"/><line x1="32" y1="${y1}" x2="48" y2="${y1}"/></g>
    <text x="30" y="${(y0 + y1) / 2}" transform="rotate(-90 30 ${(y0 + y1) / 2})" text-anchor="middle" style="font-size:10px">FULL STACK · 4 LAYERS</text>
    <circle cx="${cx}" cy="${110 - H}" r="3" fill="var(--hi)"/>`;
  $("iso").innerHTML = s;
})();

// title blocks
$("tb1").innerHTML = tblock("01", "About", "General arrangement");
$("tb2").innerHTML = tblock("02", "Systems I Build", "System architecture");
$("tb3").innerHTML = tblock("03", "Projects", "Schematics");
$("tb4").innerHTML = tblock("04", "Experience", "Revision history");
$("tb5").innerHTML = tblock("05", "Research & Publications", "References");
$("tb6").innerHTML = tblock("06", "Credentials", "Legend");
$("tb7").innerHTML = tblock("07", "Contact", "Interfaces");

// about
$("intro").textContent = S.intro;
$("loc").textContent = "LOC · " + S.location.toUpperCase();
$("stats").innerHTML = S.stats.map((s) => `<div><span>${esc(s.label)}</span><b>${s.value}</b></div>`).join("");

// systems diagram: hub and four modules
(function () {
  const hub = { x: 500, y: 190 };
  const pos = [{ x: 140, y: 80 }, { x: 860, y: 80 }, { x: 140, y: 300 }, { x: 860, y: 300 }];
  let s = `<rect x="${hub.x - 110}" y="${hub.y - 46}" width="220" height="92" fill="rgba(255,209,102,.08)" stroke="var(--hi)" stroke-width="1.5"/>
    <text x="${hub.x}" y="${hub.y - 8}" text-anchor="middle" style="font-size:12px;fill:var(--hi);letter-spacing:.1em">CORE</text>
    <text x="${hub.x}" y="${hub.y + 16}" text-anchor="middle" style="font-size:17px;font-weight:600">GOVERN · SECURE · BUILD</text>`;
  S.systems.forEach((m, i) => {
    const p = pos[i], ex = p.x < hub.x ? hub.x - 110 : hub.x + 110, mx = p.x < hub.x ? p.x + 120 : p.x - 120;
    s += `<path class="flow" d="M${mx} ${p.y} H${(mx + ex) / 2} V${hub.y} H${ex}" fill="none" stroke="var(--cyan)" stroke-width="1.2"/>
      <circle cx="${mx}" cy="${p.y}" r="4" fill="var(--cyan)"/>
      <rect x="${p.x - 120}" y="${p.y - 38}" width="240" height="76" fill="var(--bp-deep)" stroke="var(--ink)" stroke-width="1"/>
      <text x="${p.x - 108}" y="${p.y - 16}" style="font-size:11px;fill:var(--hi)">${m.code}</text>
      <text x="${p.x - 108}" y="${p.y + 6}" style="font-size:14px;font-weight:600">${esc(m.name.toUpperCase())}</text>
      <text x="${p.x - 108}" y="${p.y + 26}" style="font-size:10.5px;fill:var(--ink2)">${esc(m.nodes.slice(0, 3).join(" · "))}</text>`;
  });
  $("sysdiag").innerHTML = s;
})();
$("sys").innerHTML = S.systems.map((m) => `<div class="mod"><div class="c">${m.code}</div><h3>${esc(m.name)}</h3>
  <p>${esc(m.desc)}</p><ul>${m.nodes.map((n) => `<li>${esc(n)}</li>`).join("")}</ul></div>`).join("");

// schematic project cards: stack drawn as a wired component chain
function wires(stack) {
  const n = stack.length, bw = 74, gap = (300 - n * bw) / Math.max(n - 1, 1);
  let s = "";
  stack.forEach((t, i) => {
    const x = i * (bw + gap);
    if (i) s += `<line x1="${x - gap}" y1="22" x2="${x}" y2="22" stroke="var(--cyan)" stroke-width="1"/><circle cx="${x - gap / 2}" cy="22" r="2" fill="var(--cyan)"/>`;
    s += `<rect x="${x}" y="8" width="${bw}" height="28" fill="none" stroke="var(--ink)" stroke-width="1"/>
      <text x="${x + bw / 2}" y="26" text-anchor="middle">${esc(t.length > 11 ? t.slice(0, 10) + "…" : t)}</text>`;
  });
  return `<svg class="wires" viewBox="0 0 300 44" aria-hidden="true">${s}</svg>`;
}
$("proj").innerHTML = S.projects.map((p) => `<div class="sch" id="${p.code.toLowerCase()}">
  <i class="cm tl"></i><i class="cm tr"></i><i class="cm bl"></i><i class="cm br"></i>
  <div class="dim"><span>${p.code}</span></div>
  <div class="hd"><span>${esc(p.type.toUpperCase())}</span><span class="st">● ${esc(p.status.toUpperCase())}</span></div>
  <h3>${esc(p.name)}</h3><p>${esc(p.summary)}</p>${wires(p.stack)}
  ${p.shots && p.shots.length ? `<div class="shots">${p.shots.map((x) => `<figure><a href="${x.src}" target="_blank" rel="noopener"><img src="${x.src}" alt="${esc(x.alt)}" loading="lazy"></a><figcaption>${esc(x.alt)}</figcaption></figure>`).join("")}</div>` : ""}
  ${p.cs ? `<details class="cs"><summary>Case study</summary><dl>
    <dt>Problem</dt><dd>${esc(p.cs.problem)}</dd><dt>Build</dt><dd>${esc(p.cs.build)}</dd><dt>Result</dt><dd>${esc(p.cs.result)}</dd></dl></details>` : ""}
  ${p.links.length ? `<div class="ln">${linksHtml(p.links)}</div>` : ""}</div>`).join("");

// exploded axonometric view of the flagship projects
(function () {
  const items = S.projects.filter((p) => p.cs), n = items.length, small = matchMedia("(max-width:820px)").matches;
  const gap = small ? 40 : 46, max = small ? 18 : 24;
  $("axo").innerHTML = items.map((p, i) => `<div class="plane" data-i="${i}" style="--z:${((n - 1) / 2 - i) * gap}px">
    <i>L${i + 1}</i><b>${esc(p.name.length > max ? p.name.slice(0, max - 1) + "…" : p.name)}</b></div>`).join("");
  $("axoKey").innerHTML = items.map((p, i) => `<li data-i="${i}"><span>L${i + 1}</span><span>${p.code}</span><span>${esc(p.name)}</span></li>`).join("");
  const planes = [...document.querySelectorAll(".plane")], keys = [...document.querySelectorAll("#axoKey li")];
  const mark = (i) => { planes.forEach((el, k) => el.classList.toggle("on", k === i)); keys.forEach((el, k) => el.classList.toggle("on", k === i)); };
  const go = (i) => { const card = $(items[i].code.toLowerCase()); card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.classList.add("flash"); setTimeout(() => card.classList.remove("flash"), 1600); };
  [...planes, ...keys].forEach((el) => {
    el.addEventListener("mouseenter", () => mark(+el.dataset.i));
    el.addEventListener("mouseleave", () => mark(-1));
    el.addEventListener("click", () => go(+el.dataset.i));
  });
  // idle sway plus pointer parallax
  const axo = $("axo"), stage = $("axoStage"), still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let px = 0, py = 0, t0 = performance.now();
  stage.addEventListener("pointermove", (e) => { const r = stage.getBoundingClientRect();
    px = (e.clientX - r.left) / r.width - 0.5; py = (e.clientY - r.top) / r.height - 0.5; });
  stage.addEventListener("pointerleave", () => { px = 0; py = 0; });
  const draw = (t) => {
    const sway = still ? 0 : Math.sin((t - t0) / 2600) * 7;
    axo.style.transform = `rotateX(${58 - py * 12}deg) rotateZ(${-42 + sway + px * 24}deg)`;
    if (!still) requestAnimationFrame(draw);
  };
  still ? draw(t0) : requestAnimationFrame(draw);
})();

// subtle 3D tilt on schematic cards (mouse only)
if (matchMedia("(pointer:fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll(".sch").forEach((card) => {
    card.addEventListener("pointermove", (e) => { const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`; });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}

// experience
$("exp").innerHTML = S.experience.map((j, i) => `<tr><td class="rev">R${S.experience.length - i}</td><td class="when">${esc(j.when)}<br>${esc(j.where)}</td>
  <td><h3>${esc(j.role)}</h3><div class="org">${esc(j.org)}</div><ul>${j.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></td></tr>`).join("");

// research
$("pubs").innerHTML = S.publications.map((p, i) => `<li><span class="ref">REF ${String(i + 1).padStart(2, "0")}</span>
  <span><a href="${p.url}" target="_blank" rel="noopener">${esc(p.title)}</a><small>${esc(p.venue)}</small></span><span class="yr">${p.year}</span></li>`).join("");
$("books").innerHTML = S.books.map((b, i) => `<div class="sch"><i class="cm tl"></i><i class="cm tr"></i><i class="cm bl"></i><i class="cm br"></i>
  <div class="dim"><span>BOOK ${String(i + 1).padStart(2, "0")}</span></div><div class="hd"><span>PUBLISHED</span></div>
  <h3>${esc(b.title)}</h3><p>${esc(b.blurb)}</p><div class="ln">${linksHtml(b.links)}</div></div>`).join("");

// credentials
$("edu").innerHTML = S.education.map((e) => `<li><b>${esc(e.what)}</b><br><span style="color:var(--ink3);font-size:13px">${esc(e.where)}${e.note ? " · " + esc(e.note) : ""}</span></li>`).join("");
$("certs").innerHTML = S.certifications.map((c) => `<li>${esc(c)}</li>`).join("");
$("skills").innerHTML = Object.entries(S.skills).map(([k, v]) => `<div class="sk">${esc(k)}</div><div class="tags">${v.map((t) => `<span>${esc(t)}</span>`).join("")}</div>`).join("");

// contact
$("cta2").innerHTML = `<a class="btn hi" href="mailto:${S.email}">${S.email}</a>
  <a class="btn" href="${S.links.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
  <a class="btn" href="${S.links.github}" target="_blank" rel="noopener">GitHub</a>
  <a class="btn" href="${S.links.company}" target="_blank" rel="noopener">SentraCore</a>`;
$("yr").textContent = new Date().getFullYear();
