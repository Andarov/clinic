const elHamburgerBtn = document.querySelector(".js-hamburger-btn");
const elOverlay = document.querySelector(".js-overlay");
const elNavbar = document.querySelector(".js-responsive-nav");
const elMenu = document.querySelector(".js-menu-icon");
const elCross = document.querySelector(".js-cross-icon");

// open menu
const openNavbar = () => {
  window.scrollTo(0, 0);
  document.body.classList.toggle("overflow-y-hidden");

  elCross.classList.toggle("hidden");
  elMenu.classList.toggle("hidden");

  elOverlay.classList.toggle("hidden");
  elNavbar.classList.toggle("-translate-x-full");
};

// close menu
const closeNavbar = () => {
  document.body.classList.remove("overflow-y-hidden");
  elCross.classList.add("hidden");
  elMenu.classList.remove("hidden");

  elOverlay.classList.add("hidden");
  elNavbar.classList.add("-translate-x-full");
};

// open
elHamburgerBtn.addEventListener("click", openNavbar);
// close
elOverlay.addEventListener("click", closeNavbar);
// escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeNavbar();
  }
});

const elVideoUrls = document.querySelectorAll('[data-video-url]');
const elVideoModal = document.querySelector('.js-video-modal');
const elVideoModalOverlay = document.querySelector('.js-video-modal--overlay');
const elVideoModalCloseBtn = document.querySelector('.js-video-modal--close-btn');
const elVideoModalVideo = document.querySelector('.js-video-modal--video');

// set video url
elVideoUrls.forEach((video) => {
  const url = video.getAttribute('data-video-url');
  video.addEventListener('click', () => {
    elVideoModalVideo.setAttribute('src', url);
    elVideoModal.style.display = 'flex';
  });
});
const closeVideoModal = () => {
  elVideoModal.style.display = 'none';
};

// close modal
elVideoModalCloseBtn.addEventListener('click', closeVideoModal);
elVideoModalOverlay.addEventListener('click', closeVideoModal);
// escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeVideoModal();
  }
});