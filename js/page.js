document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message! Ali will get back to you soon.');
  this.reset();
});
