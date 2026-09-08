document.addEventListener('DOMContentLoaded', () => {
  const concepts = [
    'LIGHT',
    'PEACE',
    'FAITH',
    'LOVE',
    'HOPE',
    'TRUTH',
    'PURPOSE',
    'JUSTICE',
    'KINDNESS',
    'GRATITUDE'
  ];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const wordSizeClass = (word) => {
    if (word.length <= 5) return '';
    if (word.length <= 7) return 'word-medium';
    if (word.length <= 9) return 'word-long';
    return 'word-longest';
  };

  document.querySelectorAll('.concept-rotator').forEach((rotator) => {
    const conceptWord = rotator.querySelector('.concept-word');
    let conceptIndex = 0;
    if (!conceptWord || reducedMotion) return;
    window.setInterval(() => {
      conceptWord.classList.add('is-fading');
      window.setTimeout(() => {
        conceptIndex = (conceptIndex + 1) % concepts.length;
        conceptWord.textContent = concepts[conceptIndex];
        conceptWord.className = `concept-word ${wordSizeClass(concepts[conceptIndex])}`;
      }, 600);
      window.setTimeout(() => conceptWord.classList.remove('is-fading'), 700);
    }, 5200);
  });

  const forms = document.querySelectorAll('form[data-preview-form]');

  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = form.querySelector('.status');
      if (status) {
        status.textContent = 'Preview mode: form is wired for a later GHL configuration. No live submission is happening yet.';
        status.classList.add('show');
      }
      form.reset();
    });
  });
});
