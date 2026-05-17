// const mainLeaf = document.getElementById('mainLeaf');
// let moveCounter = 0; // পার্টিকেলের ঘনত্ব নিয়ন্ত্রণ করার জন্য

// // ১. মুভমেন্ট, হোভার এবং ডেনসিটি লজিক
// document.addEventListener('mousemove', (e) => {
//     // কার্সর প্রথমবার মুভ করলেই শো করবে
//     if (mainLeaf.style.display !== 'block') {
//         mainLeaf.style.display = 'block';
//     }

//     // কার্সর পজিশন আপডেট
//     mainLeaf.style.left = `${e.clientX}px`;
//     mainLeaf.style.top = `${e.clientY}px`;

//     // লিঙ্ক বা বাটনের উপর হোভার চেক (ডিফল্ট কার্সর হাইড করতে CSS-এ cursor: none !important দিবেন)
//     const target = e.target;
//     const isPointer = target.closest('a') || target.closest('button') || window.getComputedStyle(target).cursor === 'pointer';

//     if (isPointer) {
//         mainLeaf.classList.add('cursor-hover');
//     } else {
//         mainLeaf.classList.remove('cursor-hover');
//     }

//     // ঘনত্ব নিয়ন্ত্রণ: প্রতি ৬ বার মাউস মুভমেন্টে ১টি পার্টিকেল তৈরি হবে
//     moveCounter++;
//     if (moveCounter % 4 === 0) {
//         createLeafParticle(e.clientX, e.clientY);
//     }
// });

// // ২. ক্লিক এনিমেশন
// document.addEventListener('mousedown', () => mainLeaf.classList.add('click-animate'));
// document.addEventListener('mouseup', () => mainLeaf.classList.remove('click-animate'));

// // ৩. লিফ ট্রেইল এনিমেশন ফাংশন
// function createLeafParticle(x, y) {
//     const particle = document.createElement('div');
//     particle.classList.add('leaf-particle');
//     document.body.appendChild(particle);

//     // র‍্যান্ডম প্রপার্টিজ
//     const size = Math.random() * 12 + 8; // ৮px থেকে ২০px
//     const initialRotation = Math.random() * 360;
//     const speedX = (Math.random() - 0.5) * 1.5; // ডানে-বামে ড্র্রিফট
//     const speedY = -(Math.random() * 1 + 0.5); // উপরের দিকে ভেসে যাওয়া
//     const rotationSpeed = (Math.random() - 0.5) * 8;

//     let currentX = x;
//     let currentY = y;
//     let currentRotation = initialRotation;
//     let opacity = 1;

//     // প্রাথমিক স্টাইল
//     particle.style.width = `${size}px`;
//     particle.style.height = `${size}px`;
//     particle.style.left = `${currentX}px`;
//     particle.style.top = `${currentY}px`;

//     function animate() {
//         currentX += speedX;
//         currentY += speedY;
//         currentRotation += rotationSpeed;
//         opacity -= 0.015; // ফেড আউট স্পিড

//         particle.style.left = `${currentX}px`;
//         particle.style.top = `${currentY}px`;
//         particle.style.transform = `translate(-50%, -50%) rotate(${currentRotation}deg)`;
//         particle.style.opacity = opacity;

//         // দৃশ্যমান থাকলে এনিমেশন চলবে, নাহলে রিমুভ হবে
//         if (opacity > 0) {
//             requestAnimationFrame(animate);
//         } else {
//             particle.remove();
//         }
//     }

//     animate();
// }


///* // // // // // // // // // // // On-Click-Search-Box \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  */
const searchBox = document.querySelector('.nav-search input');
const searchPanel = document.querySelector('.click-on-search');

// ১. ইনপুট বক্সে ক্লিক করলে প্যানেল দেখাবে
searchBox.onclick = function(e) {
    searchPanel.classList.add('active');
    e.stopPropagation(); // ক্লিকটি যেন উইন্ডো পর্যন্ত না ছড়ায়
};

// ২. পুরো উইন্ডোতে ক্লিক করলে চেক করবে
window.onclick = function(e) {
    // যদি প্যানেলটি খোলা থাকে
    if (searchPanel.classList.contains('active')) {
        const container = searchPanel.querySelector('.container');
        // যদি ক্লিকটি কন্টেইনারের ভেতরে না হয় এবং ইনপুট বক্সেও না হয়
        if (!container.contains(e.target) && e.target !== searchBox) {
            searchPanel.classList.remove('active');
        }
    }
};
///* // // // // // // // // // // // On-Click-Search-Box \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  */





// ============================
//  Custom Categories Dropdown
// ============================

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("categoriesBtn");
  const dropdown = document.getElementById("categoriesDropdown");

  if (!btn || !dropdown) return;

  // Toggle on button click
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    const isOpen = dropdown.classList.contains("open");
    closeCategories();
    if (!isOpen) openCategories();
  });

  // Close when clicking outside
  document.addEventListener("click", function (e) {
    if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
      closeCategories();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeCategories();
  });

  function openCategories() {
    dropdown.classList.add("open");
    btn.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
  }

  function closeCategories() {
    dropdown.classList.remove("open");
    btn.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  }

  // -----------------------------------------------
  // Active nav link highlight on click
  // -----------------------------------------------
  const navLinks = document.querySelectorAll(".main-nav-links .nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

// +++++++++++++++++++++++++++++++++++SLICK SLIDER JS++++++++++++++++++++++++++++++++++++++++++

$(document).ready(function () {
  $(".hero-banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots: true,
    speed: 300,
  });
});

// +++++++++++++++++++++++++++++++++++Our product filter JS++++++++++++++++++++++++++++++++++++++++++
/**
 * Product Filter — Introducing Our Products Section
 * Filters product cards by category without page reload.
 */

document.addEventListener("DOMContentLoaded", () => {
  const filterTabs = document.getElementById("filterTabs");
  const productItems = document.querySelectorAll(".product-item");
  const emptyState = document.getElementById("emptyState");

  // Handle tab clicks via event delegation
  filterTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;

    // Update active tab
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    filterProducts(filter);
  });

  /**
   * Shows/hides products based on the selected category filter.
   * @param {string} filter - Category key: "all", "vegetable", "fruit", "meat-fish"
   */
  function filterProducts(filter) {
    let visibleCount = 0;

    productItems.forEach((item) => {
      const category = item.dataset.category;
      const shouldShow = filter === "all" || category === filter;

      if (shouldShow) {
        // Remove hide, trigger fade-in animation
        item.classList.remove("hide");
        // Restart animation by removing and re-adding the class
        item.classList.remove("fade-in");
        // Use a tiny timeout to allow the class removal to be painted first
        void item.offsetWidth; // reflow trick
        item.classList.add("fade-in");
        visibleCount++;
      } else {
        item.classList.add("hide");
        item.classList.remove("fade-in");
      }
    });

    // Show/hide empty state
    if (visibleCount === 0) {
      emptyState.classList.remove("d-none");
    } else {
      emptyState.classList.add("d-none");
    }
  }

  // ===== Cart Button Click =====
  document.querySelectorAll(".cart-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      // Toggle active state
      btn.classList.toggle("active-cart");

      // Micro-interaction: bounce
      btn.style.transform = "scale(1.2)";
      setTimeout(() => {
        btn.style.transform = "";
      }, 180);
    });
  });
});

/* // // // // // // // // // // // Deal Countdown \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  */
$(".flip-demo").on("done", function () {
  console.log("doooooonnnnnee!");
});

$(".flip-demo").on('before<a href="https://www.jqueryscript.net/tags.php?/Flip/">Flip</a>ping', function (e, data) {
  console.log("beforeFlipping:", data);
});

$(".flip-demo").on("afterFlipping", function (e, data) {
  console.log("afterFlipping:", data);
});


/* // // // // // // // // // // // Client feedback slider \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  */
$(document).ready(function () {
  $(" .client-feedback-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    dots: false,
    speed: 500,
    arrows: false,
  });
});
$(document).ready(function () {
  $(" .latest-news-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    dots: false,
    speed: 500,
    arrows: false,
  });
});

/* // // // // // // // // // // // Account Sign-in Sign-up \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  */  
const log_reg_form = document.querySelector('.log_reg_form');
const loginBtn = document.querySelector('.login-btn');
const registerBtn = document.querySelector('.register-btn');

registerBtn.addEventListener('click', () => {
    log_reg_form.classList.add('active');
      });
      
loginBtn.addEventListener('click', () => {
    log_reg_form.classList.remove('active');
    });
// Password Toggler
const inputBoxes = document.querySelectorAll('.input-box');

inputBoxes.forEach((box) => {

  const icon = box.querySelector('.fa-eye-slash');
    const input = box.querySelector('input');

    if (icon) {
        icon.addEventListener('click', () => {
            if (input.getAttribute('type') === 'password') {
                input.setAttribute('type', 'text');
                
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            } else {
                input.setAttribute('type', 'password');
                
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            }
        });
    }
});