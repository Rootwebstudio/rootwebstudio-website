// Automatically fix ALL mailto links on desktop
function fixEmailLinks() {
  const isMobile = /iPhone|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (!isMobile) {
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
      const email = link.getAttribute('href').replace('mailto:', '');
      link.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    });
  }
}

document.addEventListener('DOMContentLoaded', fixEmailLinks);