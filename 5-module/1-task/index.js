function hideSelf() {
  const hideSelfButton = document.querySelector('.hide-self-button');

  hideSelfButton.addEventListener('click', (e) => {
    e.target.setAttribute("hidden", true);
  });
}
