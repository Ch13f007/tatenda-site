// Opening sequence: plays once per browser session, never with reduced motion.
(function () {
  var root = document.documentElement, seen = false;
  try { seen = sessionStorage.getItem("introSeen") === "1"; } catch (e) {}
  if (seen || matchMedia("(prefers-reduced-motion: reduce)").matches) { root.classList.add("seen"); return; }
  root.classList.add("intro-on");
  try { sessionStorage.setItem("introSeen", "1"); } catch (e) {}
  function done() {
    root.classList.add("intro-done");
    setTimeout(function () { root.classList.remove("intro-on"); root.classList.add("seen"); }, 600);
    removeEventListener("keydown", done); removeEventListener("pointerdown", done); removeEventListener("wheel", done);
  }
  addEventListener("keydown", done); addEventListener("pointerdown", done); addEventListener("wheel", done, { passive: true });
  setTimeout(done, 3300);
})();
