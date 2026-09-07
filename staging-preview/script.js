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
  const conceptWord = document.querySelector('.concept-word');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let conceptIndex = 0;

  const wordSizeClass = (word) => {
    if (word.length <= 5) return '';
    if (word.length <= 7) return 'word-medium';
    if (word.length <= 9) return 'word-long';
    return 'word-longest';
  };

  const showConcept = () => {
    conceptWord.textContent = concepts[conceptIndex];
    conceptWord.className = `concept-word ${wordSizeClass(concepts[conceptIndex])}`;
  };

  if (conceptWord && !reducedMotion) {
    window.setInterval(() => {
      conceptWord.classList.add('is-fading');
      window.setTimeout(() => {
        conceptIndex = (conceptIndex + 1) % concepts.length;
        showConcept();
        conceptWord.classList.remove('is-fading');
      }, 600);
    }, 5200);
  }

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
