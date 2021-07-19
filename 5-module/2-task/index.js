function toggleText() {
  const toggleTextButton = document.querySelector('.toggle-text-button');
  const text = document.getElementById('text');

  toggleTextButton.addEventListener('click', () => {
    text.toggleAttribute("hidden");
  });
}
