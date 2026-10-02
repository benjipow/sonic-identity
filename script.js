// Sonic Identity · behaviour for the new sections.
// 1) "Enter the Audio Lab" reveals the existing interactive lab (#atelier) directly below the Meet the Lab section.
// 2) Re-points old in-page anchors to the new section ids.
(function () {
  function init() {
    var lab = document.getElementById('audio-lab');
    var btn = document.getElementById('si-lab-toggle');
    var atelier = document.getElementById('atelier');
    if (lab && atelier) { lab.after(atelier); atelier.hidden = true; }
    if (btn) btn.addEventListener('click', function () {
      var open = !lab.classList.contains('is-open');
      lab.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
      btn.querySelector('.si-lbl').textContent = open ? 'Close the Audio Lab' : 'Enter the Audio Lab';
      btn.querySelector('.si-ico').textContent = open ? '■' : '▶';
      if (atelier) { atelier.hidden = !open; if (open) atelier.scrollIntoView({ behavior: 'smooth' }); }
    });
    var remap = { '#atelier': '#audio-lab', '#architecture': '#services', '#portfolio': '#audio-lab', '#story': '#about' };
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      var h = a.getAttribute('href'); if (remap[h]) a.setAttribute('href', remap[h]);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
