// ========================================
// BCA Batch 2025-26 — Class Website
// JavaScript Functionality
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ----------------------------------------
  // 1. TOOLTIP INITIALIZATION
  // ----------------------------------------
  const tooltipTriggers = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggers.forEach((el) => new bootstrap.Tooltip(el));

  // ----------------------------------------
  // 2. NAVBAR ACTIVE LINK ON SCROLL
  // ----------------------------------------
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  const updateActiveLink = () => {
    const scrollY = window.scrollY + 100; // offset for fixed navbar

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', updateActiveLink);

  // ----------------------------------------
  // 3. SMOOTH SCROLL FOR NAV LINKS
  // ----------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      const offsetTop = targetEl.offsetTop - 70; // navbar height offset
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });

      // Close mobile navbar after click
      const navbarCollapse = document.querySelector('#navbarContent');
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });

  // ----------------------------------------
  // 4. FACULTY "READ MORE" TOGGLE
  // ----------------------------------------
  const readMoreBtns = document.querySelectorAll('.read-more-btn');
  const expandedCountBadge = document.getElementById('expandedCount');
  let expandedCount = 0;

  readMoreBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const detail = btn.previousElementSibling;
      const isHidden = detail.classList.contains('d-none');

      if (isHidden) {
        detail.classList.remove('d-none');
        btn.textContent = 'Read Less';
        btn.classList.replace('btn-outline-primary', 'btn-outline-secondary');
        expandedCount++;
      } else {
        detail.classList.add('d-none');
        btn.textContent = 'Read More';
        btn.classList.replace('btn-outline-secondary', 'btn-outline-primary');
        expandedCount--;
      }

      expandedCountBadge.textContent = `${expandedCount} expanded`;
    });
  });

  // ----------------------------------------
  // 5. TIMETABLE — HIGHLIGHT TODAY'S ROW
  // ----------------------------------------
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = days[new Date().getDay()];
  const todaySummary = document.getElementById('todaySummary');

  const todayRow = document.querySelector(`tr[data-day="${today}"]`);
  if (todayRow) {
    todayRow.classList.add('highlight-today');

    // Build today's classes summary
    const cells = todayRow.querySelectorAll('td');
    const classes = [];
    cells.forEach((cell, index) => {
      // Skip first cell (day name) and lunch break
      if (index === 0) return;
      const text = cell.textContent.trim();
      if (text !== 'Lunch Break' && !classes.includes(text)) {
        classes.push(text);
      }
    });
    todaySummary.textContent = classes.join(', ');
  } else {
    todaySummary.textContent = 'No classes today (Sunday) 🎉';
  }

  // ----------------------------------------
  // 6. GALLERY LIGHTBOX
  // ----------------------------------------
  const galleryImages = document.querySelectorAll('.gallery-img');
  const galleryModal = document.getElementById('galleryModal');
  const galleryModalImg = document.getElementById('galleryModalImg');
  const galleryCaption = document.getElementById('galleryCaption');

  galleryImages.forEach((img) => {
    img.addEventListener('click', () => {
      // Use a larger version of the image for the lightbox
      galleryModalImg.src = img.src.replace('400/300', '800/600');
      galleryModalImg.alt = img.alt;
      galleryCaption.textContent = img.dataset.caption || img.alt;

      const modal = new bootstrap.Modal(galleryModal);
      modal.show();
    });
  });

  // ----------------------------------------
  // 7. CONTACT FORM VALIDATION & SAVE
  // ----------------------------------------
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  // Real-time validation on blur/input
  const validateField = (field) => {
    if (field.checkValidity()) {
      field.classList.remove('is-invalid');
      field.classList.add('is-valid');
    } else {
      field.classList.remove('is-valid');
      field.classList.add('is-invalid');
    }
  };

  contactForm.querySelectorAll('input, select, textarea').forEach((field) => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('is-invalid') || field.classList.contains('is-valid')) {
        validateField(field);
      }
    });
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate all fields
    let isValid = true;
    contactForm.querySelectorAll('input, select, textarea').forEach((field) => {
      validateField(field);
      if (!field.checkValidity()) isValid = false;
    });

    if (!isValid) {
      contactForm.classList.add('was-validated');
      return;
    }

    // Collect form data
    const interests = [];
    document.querySelectorAll('#contactForm input[type="checkbox"]:not(#formAgree):checked').forEach((cb) => {
      interests.push(cb.value);
    });

    const message = {
      id: Date.now(),
      name: document.getElementById('formName').value.trim(),
      email: document.getElementById('formEmail').value.trim(),
      phone: document.getElementById('formPhone').value.trim(),
      subject: document.getElementById('formSubject').value,
      message: document.getElementById('formMessage').value.trim(),
      gender: document.querySelector('input[name="gender"]:checked')?.value || '',
      interests,
      timestamp: new Date().toLocaleString('en-IN'),
    };

    // Save to localStorage
    const messages = JSON.parse(localStorage.getItem('bcaMessages') || '[]');
    messages.push(message);
    localStorage.setItem('bcaMessages', JSON.stringify(messages));

    // Show success feedback
    formSuccess.classList.remove('d-none');
    contactForm.reset();
    contactForm.classList.remove('was-validated');
    contactForm.querySelectorAll('.is-valid, .is-invalid').forEach((el) => {
      el.classList.remove('is-valid', 'is-invalid');
    });

    // Hide success after 4 seconds
    setTimeout(() => formSuccess.classList.add('d-none'), 4000);

    // Refresh admin messages if visible
    if (!document.getElementById('adminMessages').classList.contains('d-none')) {
      renderAdminMessages();
    }
  });

  // ----------------------------------------
  // 8. LOGIN SYSTEM
  // ----------------------------------------
  const DEFAULT_EMAIL = 'admin@bca.mu';
  const DEFAULT_PASSWORD = 'bca2025';

  const loginForm = document.getElementById('loginForm');
  const loginError = document.getElementById('loginError');
  const loginSuccessAlert = document.getElementById('loginSuccess');
  const loginBtn = document.getElementById('loginBtn');
  const userInfo = document.getElementById('userInfo');
  const userName = document.getElementById('userName');
  const logoutBtn = document.getElementById('logoutBtn');
  const adminSection = document.getElementById('adminMessages');
  const loginModalEl = document.getElementById('loginModal');

  // Handle login
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD) {
      // Success
      loginError.classList.add('d-none');
      loginSuccessAlert.classList.remove('d-none');

      // Store session
      localStorage.setItem('bcaLoggedIn', 'true');
      localStorage.setItem('bcaUser', email);

      setTimeout(() => {
        const modal = bootstrap.Modal.getInstance(loginModalEl);
        if (modal) modal.hide();
        loginSuccessAlert.classList.add('d-none');
        loginForm.reset();
        showLoggedInState(email);
      }, 1000);
    } else {
      // Failure
      loginError.classList.remove('d-none');
      loginSuccessAlert.classList.add('d-none');
    }
  });

  // Show logged-in state
  const showLoggedInState = (email) => {
    loginBtn.classList.add('d-none');
    userInfo.classList.remove('d-none');
    userName.textContent = email;
    adminSection.classList.remove('d-none');
    renderAdminMessages();
  };

  // Logout
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('bcaLoggedIn');
    localStorage.removeItem('bcaUser');
    loginBtn.classList.remove('d-none');
    userInfo.classList.add('d-none');
    adminSection.classList.add('d-none');
  });

  // Check if already logged in on page load
  if (localStorage.getItem('bcaLoggedIn') === 'true') {
    const savedUser = localStorage.getItem('bcaUser') || DEFAULT_EMAIL;
    showLoggedInState(savedUser);
  }

  // ----------------------------------------
  // 9. ADMIN MESSAGES DISPLAY
  // ----------------------------------------
  const messagesList = document.getElementById('messagesList');

  const renderAdminMessages = () => {
    const messages = JSON.parse(localStorage.getItem('bcaMessages') || '[]');

    if (messages.length === 0) {
      messagesList.innerHTML = '<p class="text-muted text-center">No messages yet.</p>';
      return;
    }

    // Render newest first
    messagesList.innerHTML = messages
      .reverse()
      .map(
        (msg) => `
        <div class="list-group-item">
          <div class="d-flex justify-content-between align-items-start">
            <div>
              <h6 class="mb-1 fw-bold">${msg.name}</h6>
              <p class="mb-1 small text-muted">
                <i class="bi bi-envelope me-1"></i>${msg.email}
                <span class="mx-2">|</span>
                <i class="bi bi-telephone me-1"></i>${msg.phone}
              </p>
            </div>
            <small class="text-muted">${msg.timestamp}</small>
          </div>
          <span class="badge bg-primary mb-1">${msg.subject}</span>
          <p class="mb-1">${msg.message}</p>
          ${msg.interests.length > 0 ? `<small class="text-muted">Interests: ${msg.interests.join(', ')}</small>` : ''}
        </div>
      `
      )
      .join('');
  };

  // ----------------------------------------
  // 10. COUNTDOWN TIMER
  // ----------------------------------------
  const examDate = new Date('2026-12-15T09:00:00');
  const cdDays = document.getElementById('cdDays');
  const cdHours = document.getElementById('cdHours');
  const cdMinutes = document.getElementById('cdMinutes');
  const cdSeconds = document.getElementById('cdSeconds');

  const updateCountdown = () => {
    const now = new Date();
    const diff = examDate - now;

    if (diff <= 0) {
      cdDays.textContent = '00';
      cdHours.textContent = '00';
      cdMinutes.textContent = '00';
      cdSeconds.textContent = '00';
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    cdDays.textContent = String(d).padStart(2, '0');
    cdHours.textContent = String(h).padStart(2, '0');
    cdMinutes.textContent = String(m).padStart(2, '0');
    cdSeconds.textContent = String(s).padStart(2, '0');
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ----------------------------------------
  // 11. DARK MODE TOGGLE
  // ----------------------------------------
  const darkModeToggle = document.getElementById('darkModeToggle');
  const darkModeIcon = darkModeToggle.querySelector('i');

  const applyDarkMode = (enabled) => {
    document.body.classList.toggle('dark-mode', enabled);
    darkModeIcon.className = enabled ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
  };

  // Load saved preference
  const savedDarkMode = localStorage.getItem('bcaDarkMode') === 'true';
  applyDarkMode(savedDarkMode);

  darkModeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');
    applyDarkMode(!isDark);
    localStorage.setItem('bcaDarkMode', String(!isDark));
  });

  // ----------------------------------------
  // 12. BACK-TO-TOP BUTTON
  // ----------------------------------------
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ----------------------------------------
  // 13. WELCOME TOAST (first visit only)
  // ----------------------------------------
  if (!sessionStorage.getItem('bcaWelcomeShown')) {
    const welcomeToast = new bootstrap.Toast(document.getElementById('welcomeToast'), {
      delay: 5000,
    });
    welcomeToast.show();
    sessionStorage.setItem('bcaWelcomeShown', 'true');
  }
});
