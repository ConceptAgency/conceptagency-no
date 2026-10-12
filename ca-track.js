/* Concept Agency — cookieless analytics (Umami Cloud, EU).
   One place to change: UMAMI_ID. No cookies, no personal data, no banner needed. */
(function () {
  var UMAMI_ID = 'db481489-9031-4801-878d-cfd23639f975';
  if (!/conceptagency\.no$/.test(location.hostname) || /^PASTE/.test(UMAMI_ID)) return;

  var s = document.createElement('script');
  s.defer = true;
  s.src = 'https://cloud.umami.is/script.js';
  s.setAttribute('data-website-id', UMAMI_ID);
  s.setAttribute('data-domains', 'conceptagency.no,www.conceptagency.no');
  document.head.appendChild(s);

  function track(name, data) {
    try { if (window.umami) window.umami.track(name, data); } catch (e) {}
  }
  var page = location.pathname.replace(/\.html$/, '') || '/';

  // 1. Leads — every form submit that isn't caught by the honeypots
  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (!f || f.tagName !== 'FORM') return;
    var hp = f.querySelector('[name="ca_confirm"],[name="company-website"]');
    if (hp && hp.value) return;
    track('Lead', { form: f.getAttribute('name') || f.id || 'form', page: page });
  }, true);

  // 2. Contact clicks, downloads, outbound links
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (/^tel:/.test(href)) return track('Call click', { page: page });
    if (/^mailto:/.test(href)) return track('Email click', { page: page });
    if (/\.pdf($|\?)/i.test(href)) return track('Download', { file: href.split('/').pop(), page: page });
    if (a.hostname && a.hostname !== location.hostname && /^https?:/.test(a.protocol)) {
      track('Outbound', { to: a.hostname.replace(/^www\./, ''), url: a.href.slice(0, 200), page: page });
    }
  }, true);

  // 3. Engagement — read depth (once per page) and time on page buckets
  var marks = [50, 90], hit = {};
  addEventListener('scroll', function () {
    var h = document.documentElement, pct = (h.scrollTop + innerHeight) / h.scrollHeight * 100;
    marks.forEach(function (m) {
      if (pct >= m && !hit[m]) { hit[m] = 1; track('Read ' + m + '%', { page: page }); }
    });
  }, { passive: true });
  setTimeout(function () { track('Engaged 60s', { page: page }); }, 60000);
})();
