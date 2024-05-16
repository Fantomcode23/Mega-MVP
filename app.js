/* Created by Tivotal */

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let themeToggler = document.querySelector(".theme-toggler");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.onclick = () => {
  themeToggler.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  themeToggler.classList.remove("active");
};

document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--theme-color", color);
  };
});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

/* sign in */
// Get sign in and sign out boxes
const signInBox = document.querySelector('.signin-box:first-child');
const signOutBox = document.querySelector('.signin-box:last-child');

// Get sign in form and sign out button
const signInForm = signInBox.querySelector('form');
const signOutBtn = signOutBox.querySelector('.btn');

// Add event listener to sign in form
signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signInForm.querySelector('input[type="email"]').value;
  const password = signInForm.querySelector('input[type="password"]').value;

  // Perform sign in logic here (e.g., send data to server, check credentials, etc.)
  console.log('Sign in attempt:', email, password);

  // Show sign out box and hide sign in box on successful sign in
  signInBox.style.display = 'none';
  signOutBox.style.display = 'block';
});

// Add event listener to sign out button
signOutBtn.addEventListener('click', () => {
  // Perform sign out logic here (e.g., invalidate session, clear data, etc.)
  console.log('Sign out');

  // Show sign in box and hide sign out box
  signInBox.style.display = 'block';
  signOutBox.style.display = 'none';
});
