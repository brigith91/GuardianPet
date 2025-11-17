// Simple modal handler for static pages
(function () {
  function qs(sel) { return document.querySelector(sel); }
  function qsa(sel) { return document.querySelectorAll(sel); }

  function openModal(modal) {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.classList.add('open');
  }
  function closeModal(modal) {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    modal.classList.remove('open');
  }

  document.addEventListener('DOMContentLoaded', function () {
    const modal = qs('#modal');
    const openBtn = qs('#openModalBtn');
    if (!modal) return;

    openBtn && openBtn.addEventListener('click', function (e) {
      e.preventDefault();
      openModal(modal);
    });

    // Close triggers
    qsa('[data-modal-close]').forEach(function(btn){
      btn.addEventListener('click', function(e){
        e.preventDefault();
        closeModal(modal);
      });
    });

    // Close on ESC
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') closeModal(modal);
    });

    // Allow clicking overlay to close
    modal.querySelector('.modal-overlay') && modal.querySelector('.modal-overlay').addEventListener('click', function(){ closeModal(modal); });
  });
})();
