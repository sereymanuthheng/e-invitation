/**
 * engagement-invitation-app: Main JavaScript logic & Configuration
 */

// ==========================================
// 1. CONFIGURATION BLOCK
// You can edit the values below to customize the invitation details.
// To leave a photo or section blank, simply set it to an empty string "".
// ==========================================
const CONFIG = {
  // Couple Names
  groomNameEN: "Heng Sereymanuth",
  groomNameKM: "ហេង សិរីម៉ានុត",
  brideNameEN: "Yun Darachan",
  brideNameKM: "យន់ តារាច័ន្ទ",

  // Countdown Date (Format: YYYY-MM-DDTHH:mm:ss)
  // Set to January 18, 2027, at 5:00 PM (17:00)
  weddingDate: "2027-01-18T17:00:00",

  // Parents Info
  // Set to empty string "" to hide any specific name
  // Uncomment the lines below if you want to display parents' names
  
  groomFatherEN: "Mr. Heng Houth",
  groomFatherKM: "លោក ហេង ហួត",
  groomMotherEN: "Mrs. Vann Malen",
  groomMotherKM: "លោកស្រី វ៉ាន់ ម៉ាឡែន",
  brideFatherEN: "H.E. Yun Narong",
  brideFatherKM: "ឯកឧត្តម ចាន់ សុផល",
  brideMotherEN: "H.E. Seng Narom",
  brideMotherKM: "លោកជំទាវ សេង ណារុំ",
  
  groomFatherEN: "",
  groomFatherKM: "",
  groomMotherEN: "",
  groomMotherKM: "",
  brideFatherEN: "",
  brideFatherKM: "",
  brideMotherEN: "",
  brideMotherKM: "",

  // Section Toggles (true = show, false = hide completely)
  // Change showParents to "true" to display parent information
  showParents: true,
  showCountdown: true,
  showSchedule: true,
  showStory: true,
  showGallery: true,
  showDressCode: true,
  showRegistry: true,
  showRSVP: true,
  showMap: true,

  // Images Config
  // Set to empty string "" to leave blank. The page will automatically adjust or hide containers gracefully.
  mainHeroPhoto: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
  groomPhoto: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400&h=500",
  bridePhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=500",

  // Love Story Moments
  // Array of slides. Leave empty array [] if you don't want a story section.
  // Set "photo: ''" to hide the image on a slide, displaying text only.
  storyMoments: [
    {
      photo: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600",
      captionEN: "It all began with a spark that turned into an inseparable bond.",
      captionKM: "គ្រប់យ៉ាងបានចាប់ផ្តើមពីចំណងនិស្ស័យ ដែលប្រែក្លាយជាការផ្សារភ្ជាប់មិនអាចខ្វះគ្នាបាន។"
    },
    {
      photo: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=600",
      captionEN: "Every challenge faced together only made this love grow deeper.",
      captionKM: "គ្រប់ឧបសគ្គដែលបានពុះពាររួមគ្នា គឺធ្វើឱ្យក្តីស្រលាញ់​កាន់តែជ្រាលជ្រៅ។"
    },
    {
      photo: "https://images.unsplash.com/photo-1519225495810-7517cbd14660?auto=format&fit=crop&q=80&w=600",
      captionEN: "Now, the journey continues as one heart and one soul forever.",
      captionKM: "ចាប់ពីពេលនេះទៅ យើងនឹងនៅក្បែរគ្នា និងស្រលាញ់គ្នាជារៀងរហូត។"
    }
  ],

  // Gallery Photos (Grid)
  // Add image URLs. To hide the gallery, set showGallery to false, or keep this array empty.
  galleryPhotos: [
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1529636798458-92182e65f133?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=600"
  ],

  // Gift Registry QR Code Card Details
  // IMPORTANT: Set giftQrCode to "" to leave the QR code slot blank (it will hide the QR block dynamically).
/*   giftQrCode: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://payme.example.com/manuth-darachan",
  giftBankNameEN: "ACLEDA Bank",
  giftBankNameKM: "ធនាគារ ACLEDA",
  giftAccountNameEN: "SEREYMANUTH HENG / DARACHAN YUN",
  giftAccountNameKM: "ហេង សិរីម៉ានុត / យន់ តារាច័ន្ទ",
  giftAccountNumber: "000 123 456", */

  // Background Music URL (Elegantly playing in background)
  // You can use your own audio file or link.
  musicUrl: "Until I Found You - Stephen Sanchez Piano Cover by Riyandi Kusuma.mp3",

  // Google Map Embed & Links
  mapsLink: "https://maps.app.goo.gl/AERpVffkzPT6iUxm8",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.2327591141753!2d104.92149597585091!3d11.607918143372274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109516a303ee5bb%3A0xe10214c7760773b0!2sOCIC%20Wedding%20Plaza!5e0!3m2!1sen!2skh!4v1718200000000!5m2!1sen!2skh",
  venueEN: "OCIC Wedding Plaza",
  venueKM: "មជ្ឈមណ្ឌលពិព័រណ៍ និងសន្និបាត OCIC",
  addressEN: "Building A,B Chroy Changvar, Phnom Penh",
  addressKM: "អគារ A,B ជ្រោយចង្វារ, ភ្នំពេញ"
};

// ==========================================
// 2. INITIALIZATION & DATA BINDING
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Determine language (Default is Khmer 'km')
  let currentLang = localStorage.getItem("invitation_lang") || "km";

  // Apply initial CONFIG adjustments
  applyConfig();

  // Initialize Language
  setLanguage(currentLang);

  // Set up language toggle buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentLang = btn.getAttribute("data-lang");
      setLanguage(currentLang);
    });
  });

  // Envelope cover opening logic
  const envelope = document.getElementById("envelope");
  const openBtn = document.getElementById("open-invitation-btn");
  const audio = document.getElementById("bg-music");
  const musicToggle = document.getElementById("music-toggle-btn");

  if (openBtn && envelope) {
    openBtn.addEventListener("click", () => {
      envelope.classList.add("opened");
      document.body.classList.remove("no-scroll");

      // Handle music playing
      if (CONFIG.musicUrl && audio) {
        audio.src = CONFIG.musicUrl;
        audio.play()
          .then(() => {
            musicToggle.classList.add("playing");
          })
          .catch(err => {
            console.log("Autoplay was prevented. Guest can toggle manually.", err);
          });
      }

      // Initialize animations for visible parts
      initScrollAnimations();
    });
  }

  // Audio Play/Pause Button
  if (musicToggle && audio) {
    musicToggle.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        musicToggle.classList.add("playing");
      } else {
        audio.pause();
        musicToggle.classList.remove("playing");
      }
    });
  }

  // Countdown clock initializer
  if (CONFIG.showCountdown) {
    initCountdown();
  }

  // Initialize Gallery Lightbox
  if (CONFIG.showGallery && CONFIG.galleryPhotos.length > 0) {
    initLightbox();
  }

  // Initialize Love Story slide interactions
  if (CONFIG.showStory && CONFIG.storyMoments.length > 0) {
    initStoryCarousel();
  }

  // RSVP Form submission handler
  if (CONFIG.showRSVP) {
    initRSVPForm();
  }

  // Leaf falling / Petal Animation overlay
  initPetalsEffect();
});

// ==========================================
// 3. APPLY VARIABLES FROM CONFIG
// ==========================================
function applyConfig() {
  // Bind dynamic text names
  document.querySelectorAll(".val-groom-name").forEach(el => {
    el.setAttribute("data-en", CONFIG.groomNameEN);
    el.setAttribute("data-km", CONFIG.groomNameKM);
  });
  document.querySelectorAll(".val-bride-name").forEach(el => {
    el.setAttribute("data-en", CONFIG.brideNameEN);
    el.setAttribute("data-km", CONFIG.brideNameKM);
  });

  // Bind Main Hero Photo
  const heroBg = document.getElementById("hero-banner");
  if (heroBg) {
    if (CONFIG.mainHeroPhoto) {
      heroBg.style.backgroundImage = `linear-gradient(to bottom, rgba(46, 32, 16, 0.4), rgba(46, 32, 16, 0.7)), url('${CONFIG.mainHeroPhoto}')`;
    } else {
      // Elegant plain gradient with ornament background if hero photo is missing
      heroBg.style.backgroundImage = `linear-gradient(170deg, #F5F0E4 0%, #EDE6D4 100%)`;
      heroBg.classList.add("no-photo");
    }
  }

  // Hide Parents Section if disabled or empty
  const parentsSec = document.getElementById("parents-section");
  if (!CONFIG.showParents) {
    parentsSec?.classList.add("hidden");
  } else {
    // Populate parents info
    populateOrHideText("groom-father", CONFIG.groomFatherEN, CONFIG.groomFatherKM);
    populateOrHideText("groom-mother", CONFIG.groomMotherEN, CONFIG.groomMotherKM);
    populateOrHideText("bride-father", CONFIG.brideFatherEN, CONFIG.brideFatherKM);
    populateOrHideText("bride-mother", CONFIG.brideMotherEN, CONFIG.brideMotherKM);

    // Couple Photos
    const groomImg = document.getElementById("groom-img");
    const groomImgWrapper = document.getElementById("groom-img-wrapper");
    if (CONFIG.groomPhoto === "") {
      groomImgWrapper?.classList.add("hidden");
    } else if (groomImg) {
      groomImg.src = CONFIG.groomPhoto;
    }

    const brideImg = document.getElementById("bride-img");
    const brideImgWrapper = document.getElementById("bride-img-wrapper");
    if (CONFIG.bridePhoto === "") {
      brideImgWrapper?.classList.add("hidden");
    } else if (brideImg) {
      brideImg.src = CONFIG.bridePhoto;
    }
  }

  // Hide Countdown section
  const countdownSec = document.getElementById("countdown-section");
  if (!CONFIG.showCountdown) {
    countdownSec?.classList.add("hidden");
  }

  // Hide Schedule section
  const scheduleSec = document.getElementById("schedule-section");
  if (!CONFIG.showSchedule) {
    scheduleSec?.classList.add("hidden");
  }

  // Love Story Carousel generator
  const storySec = document.getElementById("story-section");
  if (!CONFIG.showStory || CONFIG.storyMoments.length === 0) {
    storySec?.classList.add("hidden");
  } else {
    const track = document.getElementById("story-carousel-track");
    if (track) {
      track.innerHTML = "";
      CONFIG.storyMoments.forEach((moment, idx) => {
        const slide = document.createElement("div");
        slide.className = `story-slide ${idx === 0 ? "active" : ""}`;

        let imgHtml = "";
        let classNoPhoto = "";
        if (moment.photo) {
          imgHtml = `<div class="story-img-container"><img src="${moment.photo}" alt="Story Moment" loading="lazy" /></div>`;
        } else {
          classNoPhoto = "story-no-photo";
          imgHtml = `<div class="story-ornament"><i class="ornament-icon">❀</i></div>`;
        }

        slide.innerHTML = `
          <div class="story-card ${classNoPhoto}">
            ${imgHtml}
            <div class="story-content">
              <p class="story-caption" data-en="${moment.captionEN}" data-km="${moment.captionKM}">${moment.captionKM}</p>
            </div>
          </div>
        `;
        track.appendChild(slide);
      });
    }
  }

  // Gallery Photos Grid generator
  const gallerySec = document.getElementById("gallery-section");
  if (!CONFIG.showGallery || CONFIG.galleryPhotos.length === 0) {
    gallerySec?.classList.add("hidden");
  } else {
    const grid = document.getElementById("gallery-grid");
    if (grid) {
      grid.innerHTML = "";
      CONFIG.galleryPhotos.forEach((photoUrl) => {
        const item = document.createElement("div");
        item.className = "gallery-item reveal-item";
        item.innerHTML = `
          <img src="${photoUrl}" alt="Engagement Gallery Photo" loading="lazy" />
          <div class="gallery-hover-overlay">
            <span>🔍 View</span>
          </div>
        `;
        grid.appendChild(item);
      });
    }
  }

  // Dress Code options
  const dressCodeSec = document.getElementById("dresscode-section");
  if (!CONFIG.showDressCode) {
    dressCodeSec?.classList.add("hidden");
  }

  // Registry Card populator
  const registrySec = document.getElementById("registry-section");
  // Check if user set showRegistry to false OR if the qr code is empty
  if (!CONFIG.showRegistry || CONFIG.giftQrCode === "") {
    registrySec?.classList.add("hidden");
  } else {
    const qrImg = document.getElementById("registry-qr");
    if (qrImg) qrImg.src = CONFIG.giftQrCode;

    populateOrHideText("val-bank-name", CONFIG.giftBankNameEN, CONFIG.giftBankNameKM);
    populateOrHideText("val-account-name", CONFIG.giftAccountNameEN, CONFIG.giftAccountNameKM);

    const accNumEl = document.getElementById("val-account-number");
    if (accNumEl) accNumEl.textContent = CONFIG.giftAccountNumber;
  }

  // RSVP Show/Hide
  const rsvpSec = document.getElementById("rsvp-section");
  if (!CONFIG.showRSVP) {
    rsvpSec?.classList.add("hidden");
  }

  // Maps / Venue populator
  const mapSec = document.getElementById("map-section");
  if (!CONFIG.showMap) {
    mapSec?.classList.add("hidden");
  } else {
    const mapIframe = document.getElementById("map-iframe");
    if (mapIframe && CONFIG.mapEmbedUrl) {
      mapIframe.src = CONFIG.mapEmbedUrl;
    }
    const mapBtn = document.getElementById("map-directions-btn");
    if (mapBtn && CONFIG.mapsLink) {
      mapBtn.href = CONFIG.mapsLink;
    }
    populateOrHideText("val-venue", CONFIG.venueEN, CONFIG.venueKM);
    populateOrHideText("val-address", CONFIG.addressEN, CONFIG.addressKM);
  }
}

// Utility to populate or hide text elements depending on config presence
function populateOrHideText(elementId, textEN, textKM) {
  const el = document.getElementById(elementId);
  if (!el) return;
  if (!textEN && !textKM) {
    el.closest(".text-line-wrapper")?.classList.add("hidden");
  } else {
    el.setAttribute("data-en", textEN || "");
    el.setAttribute("data-km", textKM || "");
  }
}

// ==========================================
// 4. LANGUAGE TRANSLATION CONTROL
// ==========================================
function setLanguage(lang) {
  // Update all data-en / data-km text content
  document.querySelectorAll("[data-en]").forEach(el => {
    const text = lang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-km");
    if (text !== null) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = text;
      } else {
        el.innerHTML = text;
      }
    }
  });

  // Apply fonts class rules on body
  document.body.classList.remove("lang-en", "lang-km");
  document.body.classList.add(`lang-${lang}`);

  // Sync active language trigger button
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  localStorage.setItem("invitation_lang", lang);
}

// ==========================================
// 5. COUNTDOWN TIMER
// ==========================================
function initCountdown() {
  const countdownDate = new Date(CONFIG.weddingDate).getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const daysVal = document.getElementById("days");
    const hoursVal = document.getElementById("hours");
    const minsVal = document.getElementById("minutes");
    const secsVal = document.getElementById("seconds");

    // If target date is in the past
    if (distance < 0) {
      if (daysVal) daysVal.innerText = "00";
      if (hoursVal) hoursVal.innerText = "00";
      if (minsVal) minsVal.innerText = "00";
      if (secsVal) secsVal.innerText = "00";
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Format numbers with leading zeroes
    if (daysVal) daysVal.innerText = String(days).padStart(2, "0");
    if (hoursVal) hoursVal.innerText = String(hours).padStart(2, "0");
    if (minsVal) minsVal.innerText = String(minutes).padStart(2, "0");
    if (secsVal) secsVal.innerText = String(seconds).padStart(2, "0");
  }

  // Initial call then interval run
  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
}

// ==========================================
// 6. PHOTO CAROUSEL (LOVE STORY)
// ==========================================
function initStoryCarousel() {
  const slides = document.querySelectorAll(".story-slide");
  if (slides.length <= 1) return;

  let currentIdx = 0;
  const nextBtn = document.getElementById("story-next");
  const prevBtn = document.getElementById("story-prev");

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    currentIdx = (index + slides.length) % slides.length;
    slides[currentIdx].classList.add("active");
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => showSlide(currentIdx + 1));
    prevBtn.addEventListener("click", () => showSlide(currentIdx - 1));
  }

  // Automatic slideshow transitions every 8 seconds
  setInterval(() => {
    showSlide(currentIdx + 1);
  }, 8000);
}

// ==========================================
// 7. PHOTO GALLERY LIGHTBOX VIEW
// ==========================================
function initLightbox() {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");

  if (!lightbox || !lightboxImg) return;

  let activePhotoIndex = 0;

  // Click on single gallery image
  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      activePhotoIndex = index;
      openLightbox();
    });
  });

  function openLightbox() {
    lightboxImg.src = CONFIG.galleryPhotos[activePhotoIndex];
    lightbox.classList.add("show");
    document.body.classList.add("lightbox-open");
  }

  function closeLightbox() {
    lightbox.classList.remove("show");
    document.body.classList.remove("lightbox-open");
  }

  function nextPhoto() {
    activePhotoIndex = (activePhotoIndex + 1) % CONFIG.galleryPhotos.length;
    lightboxImg.src = CONFIG.galleryPhotos[activePhotoIndex];
  }

  function prevPhoto() {
    activePhotoIndex = (activePhotoIndex - 1 + CONFIG.galleryPhotos.length) % CONFIG.galleryPhotos.length;
    lightboxImg.src = CONFIG.galleryPhotos[activePhotoIndex];
  }

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener("click", nextPhoto);
  if (lightboxPrev) lightboxPrev.addEventListener("click", prevPhoto);

  // Close when background screen is clicked
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("lightbox-content-wrapper")) {
      closeLightbox();
    }
  });

  // Keyboard controls
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("show")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextPhoto();
    if (e.key === "ArrowLeft") prevPhoto();
  });
}

// ==========================================
// 8. RSVP FORM SUBMISSION AND MOCK SAVER
// ==========================================
function initRSVPForm() {
  const form = document.getElementById("rsvp-form");
  const modal = document.getElementById("rsvp-success-modal");
  const modalClose = document.getElementById("modal-ok-btn");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Fetch form fields
    const name = document.getElementById("rsvp-name").value.trim();
    const attendance = document.querySelector('input[name="rsvp-attendance"]:checked')?.value;
    const guests = document.getElementById("rsvp-guests").value;
    const message = document.getElementById("rsvp-message").value.trim();

    if (!name || !attendance) {
      alert("Please fill in your name and selection.");
      return;
    }

    // Prepare RSVP payload
    const rsvpData = {
      name,
      attendance,
      guests: guests || 1,
      message,
      timestamp: new Date().toISOString()
    };

    // Save mock data locally to simulate storage
    const allRSVPs = JSON.parse(localStorage.getItem("invitation_rsvps") || "[]");
    allRSVPs.push(rsvpData);
    localStorage.setItem("invitation_rsvps", JSON.stringify(allRSVPs));

    // Display localized success modal details
    const activeLang = localStorage.getItem("invitation_lang") || "km";
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");

    if (attendance === "yes") {
      modalTitle.setAttribute("data-km", "សូមអរគុណ!");
      modalTitle.setAttribute("data-en", "Thank You!");
      modalDesc.setAttribute("data-km", `ការចូលរួមរបស់លោកអ្នកត្រូវបានកត់ត្រាទុក។ យើងរីករាយនឹងជួបអ្នកនៅថ្ងៃពិធី!`);
      modalDesc.setAttribute("data-en", `Your attendance is recorded. We look forward to celebrating with you!`);
    } else {
      modalTitle.setAttribute("data-km", "ទទួលបានការឆ្លើយតប");
      modalTitle.setAttribute("data-en", "Response Received");
      modalDesc.setAttribute("data-km", `សូមអរគុណចំពោះការឆ្លើយតប ទោះជាមិនបានអញ្ជើញមកក្តី ក៏សូមអរគុណសម្រាប់ពាក្យជូនពររបស់អ្នក!`);
      modalDesc.setAttribute("data-en", `Thank you for letting us know. We appreciate your warm wishes!`);
    }

    // Update texts inside modal
    setLanguage(activeLang);

    // Show popup
    modal?.classList.add("show");

    // Reset Form
    form.reset();
  });

  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modal?.classList.remove("show");
    });
  }
}

// ==========================================
// 9. SCROLL REVEAL EFFECT (INTERSECTION OBSERVER)
// ==========================================
function initScrollAnimations() {
  const animatedItems = document.querySelectorAll(".reveal-item");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    }, {
      root: null,
      threshold: 0.12, // Trigger when 12% is visible
      rootMargin: "0px 0px -50px 0px"
    });

    animatedItems.forEach(item => {
      observer.observe(item);
    });
  } else {
    // Fallback if browser is outdated
    animatedItems.forEach(item => item.classList.add("visible"));
  }
}

// ==========================================
// 10. ROSE PETALS FALLING EFFECT
// ==========================================
function initPetalsEffect() {
  const container = document.getElementById("petals-container");
  if (!container) return;

  const petalTypes = ["🌸", "💮", "✨", "❤️"];
  const maxPetals = 20;

  function createPetal() {
    // Limit active elements on screen for performance
    if (container.children.length >= maxPetals) return;

    const petal = document.createElement("span");
    petal.className = "petal";

    // Random emoji petal
    petal.textContent = petalTypes[Math.floor(Math.random() * petalTypes.length)];

    // Random dimensions and start position
    const size = Math.random() * 12 + 10;
    petal.style.fontSize = `${size}px`;
    petal.style.left = `${Math.random() * 100}vw`;

    // Animation durations and delay
    const duration = Math.random() * 10 + 8; // 8 to 18 seconds
    const delay = Math.random() * 5;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${delay}s`;
    petal.style.opacity = Math.random() * 0.7 + 0.3;

    container.appendChild(petal);

    // Clean up petal after animation completion
    setTimeout(() => {
      petal.remove();
    }, (duration + delay) * 1000);
  }

  // Create initial bulk batch then interval
  for (let i = 0; i < 8; i++) {
    createPetal();
  }
  setInterval(createPetal, 1500);
}
