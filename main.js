const loader = document.querySelector('.loader');
for (let i=1; i<=15; i++) {
  let span = document.createElement('span');
  span.style.setProperty('--i', i);
  loader.appendChild(span);
}