// Email Protection: the address is assembled from data attributes so it isn't scraped from the HTML
const emailLinks = document.querySelectorAll<HTMLAnchorElement>('.email-protect');
emailLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const user = link.getAttribute('data-user');
    const domain = link.getAttribute('data-domain');
    if (user && domain) {
      window.location.href = `mailto:${user}@${domain}`;
    }
  });
  // Optional: Update href on hover so users see the correct link in status bar
  link.addEventListener('mouseover', () => {
      const user = link.getAttribute('data-user');
      const domain = link.getAttribute('data-domain');
      if (user && domain) {
          link.setAttribute('href', `mailto:${user}@${domain}`);
      }
  });
});
