// Toggle sidebar visibility based on current path.
// This script runs on every page load and also watches for navigation
// via MkDocs Material's instant (SPA) navigation. It keeps the
// `no-sidebar` class on `<html>` only when the user is on the root
// (home) page.

(function () {
  function updateSidebar() {
    try {
      var p = location.pathname.replace(/index\.html$/, '');
      if (p === '/' || p === '') {
        document.documentElement.classList.add('no-sidebar');
      } else {
        document.documentElement.classList.remove('no-sidebar');
      }
    } catch (e) {
      /* silently ignore */
    }
  }

  // run once immediately
  updateSidebar();

  // the home page script previously relied on DOMContentLoaded, but
  // MkDocs Material performs navigation without a full reload. A
  // MutationObserver will catch when the page content changes and we
  // can re-check the path.
  new MutationObserver(updateSidebar).observe(document.body, {
    childList: true,
    subtree: true
  });

  // also listen for history changes (back/forward)
  window.addEventListener('popstate', updateSidebar);
})();
