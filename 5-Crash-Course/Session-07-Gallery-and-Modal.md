# Session 7: "Picture Perfect" — Image Gallery + Modal Lightbox

**BCA Semester II | Mandsaur University | Web Technology (25BCA060)**

> **Session 7 of 15** | ⏱️ 2-hour lab session  
> **Labs Covered:** Lab 29 (Responsive Image Gallery), Lab 3 (Image Links), Lab 9 (Audio & Video)  
> **Previous:** navbar → hero carousel → about section → JS foundations → faculty cards → timetable  

---

## 🎯 What We'll Build Today

We're adding a **Photo Gallery** section to our class website! Think of the photo wall outside your college auditorium — dozens of pictures from events, labs, campus life. That's exactly what we're building, but on the web.

**Today's section will have:**

1. ✅ A responsive image grid — 8–12 photos showing campus, classroom, and events
2. ✅ Click any image → it opens in a **lightbox** (a big popup showing the full photo with a caption)
3. ✅ One video embed alongside the photos
4. ✅ Professional layout that adjusts from 2 columns on mobile to 4 on desktop

**Real-world connection:** Every college website, e-commerce site, and social media platform uses image galleries with lightboxes. Instagram's photo viewer? That's a modal lightbox. Flipkart's product image zoom? Same pattern!

---

## 📸 New HTML Tags You'll Learn

These tags appear **for the first time** in our project:

### 📌 `<figure>` — Semantic Image Container

```html
<figure>
  <img src="photo.jpg" alt="Description">
  <figcaption>Caption text here</figcaption>
</figure>
```

Think of a **photo frame** you buy from a shop. The frame holds the photo AND has a small label underneath. `<figure>` is that frame — it tells the browser "this image and its caption belong together."

> **Without `<figure>`:** You'd use a plain `<div>` with an `<img>` and a `<p>` — it works visually but the browser doesn't know the caption belongs to the image.
> **With `<figure>`:** Screen readers and search engines understand the relationship.

---

### 📌 `<figcaption>` — The Label Under the Photo

This is the **label plate** on the photo frame. It MUST go inside `<figure>`, typically after the `<img>`.

---

### 📌 `alt` Attribute — Deep Dive

You've used `alt` before, but let's understand WHY it matters:

```html
<img src="campus.jpg" alt="Mandsaur University main building with fountain">
```

**Three reasons `alt` is critical:**

| Reason | Explanation |
|--------|-------------|
| **Accessibility** | Blind students use screen readers. When their software reaches your image, it reads the `alt` text aloud. Without it, they hear "image" — useless! |
| **SEO** | Google can't "see" images. It reads `alt` text to understand what the image shows. Better `alt` = better Google ranking. |
| **Broken images** | If the image fails to load (slow internet, wrong path), the browser shows the `alt` text instead. |

**Good vs Bad `alt` text:**

| ❌ Bad | ✅ Good |
|--------|---------|
| `alt="image"` | `alt="BCA students working in the computer lab"` |
| `alt="photo1"` | `alt="Mandsaur University campus aerial view"` |
| `alt=""` (empty) | `alt="Annual day dance performance 2025"` |

> 📌 **Rule of thumb:** Close your eyes and have someone read the `alt` text. Can you picture the image? If yes, it's good `alt` text.

---

### 📌 `data-*` Custom Attributes — Notes on the Back of a Photo

```html
<img src="lab.jpg" alt="Computer lab" data-category="campus" data-year="2025">
```

Imagine you have a stack of photos. You flip each one over and write notes on the back: "Category: Campus", "Year: 2025". That's what `data-*` attributes do — they let you attach **custom information** to any HTML element.

**Rules:**
- Always start with `data-` followed by your custom name
- Use lowercase, hyphens for multi-word: `data-full-image`, `data-photo-id`
- Access in JavaScript: `element.dataset.category` (drops the `data-` prefix)

**We'll use `data-*` in our gallery** to store the full-size image URL and caption for the lightbox.

---

### 📌 `<video>` — Embedding Video

```html
<video width="100%" controls poster="thumbnail.jpg">
  <source src="campus-tour.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

Key attributes: `controls` (play/pause buttons), `width`, `poster` (thumbnail before play), `autoplay`, `muted`, `loop`. The `<source>` tag inside specifies the file and format — you can list multiple formats (MP4, WebM) and the browser picks the first it supports.

---

### 📌 `<audio>` — Embedding Audio (Brief Mention)

```html
<audio controls>
  <source src="college-anthem.mp3" type="audio/mpeg">
</audio>
```

Works exactly like `<video>` but for sound files. Same attributes: `controls`, `autoplay`, `muted`, `loop`. We won't use it today but know it exists!

---

## 🖼️ Bootstrap Grid for Image Gallery

### The Responsive Grid Plan

We want our gallery to adapt to every screen size:

| Screen | Bootstrap Class | Columns | Why |
|--------|----------------|---------|-----|
| Phone (< 576px) | `col-6` | 2 columns | Small screens — 2 photos side by side is comfortable |
| Tablet (≥ 768px) | `col-md-4` | 3 columns | More space — show 3 photos |
| Desktop (≥ 992px) | `col-lg-3` | 4 columns | Big screen — show 4 photos like a proper gallery wall |

**Combined class on each image column:** `col-6 col-md-4 col-lg-3`

> 📌 **How multiple column classes work:** Bootstrap reads them from smallest to largest. On a phone, `col-6` applies (12 ÷ 6 = 2 columns). On a tablet, `col-md-4` kicks in (12 ÷ 4 = 3 columns). On desktop, `col-lg-3` takes over (12 ÷ 3 = 4 columns). It's like wearing layers — the outer layer for cold weather, inner layer for warm.

### Image Utility Classes

| Class | Effect |
|-------|--------|
| `img-fluid` | Scales down to fit container, never scales up |
| `img-thumbnail` | Adds border + padding (Polaroid look) |
| `rounded` | Rounded corners |

### Gutter (Gap) Utility

```html
<div class="row g-3">
```

The `g-3` class adds **equal spacing** between all grid columns AND rows. Without it, images would be crammed together like passengers in a Jaipur local bus! 🚌 Options range from `g-0` (no gap) to `g-5` (3rem). We use `g-3` (1rem = 16px).

---

## 🪟 Bootstrap Modal — Detailed Guide

### What Is a Modal?

A modal is a **popup window** that appears on top of the current page. While the modal is open, the rest of the page is dimmed and you **cannot interact** with it — you MUST deal with the modal first.

> **Analogy:** Imagine you're at a bank. You walk up to the counter and the clerk opens a small window to talk to you. Until you finish your transaction and the window closes, you can't go anywhere else in the bank. That small window is a **modal**!

**Real-world examples:** Instagram photo viewer, Flipkart "Add to Cart" popup, "Are you sure?" delete dialogs.

### Modal Anatomy (Structure)

A Bootstrap modal has a specific nested structure — like Russian dolls (matryoshka):

```
modal (the dark overlay behind)
  └── modal-dialog (positions the white box)
        └── modal-content (the actual white box)
              ├── modal-header (title bar + close button)
              ├── modal-body (main content area)
              └── modal-footer (action buttons — optional)
```

### Modal HTML Template

```html
<!-- The Modal -->
<div class="modal fade" id="galleryModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">

      <!-- Header -->
      <div class="modal-header">
        <h5 class="modal-title" id="modalCaption">Image Caption</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
      </div>

      <!-- Body -->
      <div class="modal-body text-center">
        <img id="modalImage" src="" alt="" class="img-fluid">
      </div>

      <!-- Footer (optional) -->
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary"
                data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
```

### Key Modal Attributes

| Attribute/Class | Purpose |
|----------------|---------|
| `modal fade` | Modal with fade animation |
| `tabindex="-1"` + `aria-hidden="true"` | Accessibility — hidden from tab order and screen readers initially |
| `modal-dialog` | Positions the dialog box |
| `modal-lg` | Large width (800px). Also: `modal-xl` (1140px), `modal-fullscreen` |
| `modal-dialog-centered` | Centers vertically on screen |
| `modal-content` → `modal-header` / `modal-body` / `modal-footer` | The actual content box and its sections |
| `data-bs-dismiss="modal"` | Clicking this element closes the modal |

### How to Trigger a Modal

**Method 1 — HTML attributes (what we use):** Add `data-bs-toggle="modal"` and `data-bs-target="#galleryModal"` to the clickable element.

**Method 2 — JavaScript:** `new bootstrap.Modal(document.getElementById('galleryModal')).show();`

---

## ⚡ JavaScript — addEventListener (The Professional Way)

### The Problem with onclick

In Session 5, we used `onclick` in HTML:
```html
<button onclick="doSomething()">Click me</button>
```

This works, but it has serious limitations.

### onclick vs addEventListener

**`onclick` is like taping a note on a door** — you can only tape ONE note at a time. If someone else tapes a new note, your note falls off.

```javascript
// First person adds a handler
button.onclick = function() { alert("Hello!"); };

// Second person adds a handler — OVERWRITES the first one!
button.onclick = function() { alert("Goodbye!"); };

// Only "Goodbye!" will ever show. "Hello!" is GONE.
```

**`addEventListener` is like a notice board** — you can pin MULTIPLE notices and they all stay:

```javascript
// First notice
button.addEventListener('click', function() { alert("Hello!"); });

// Second notice — BOTH work!
button.addEventListener('click', function() { alert("Goodbye!"); });

// Click the button → "Hello!" appears, then "Goodbye!" appears.
```

### addEventListener Syntax

```javascript
element.addEventListener('eventName', function() {
    // code to run when the event happens
});
```

| Part | Meaning |
|------|---------|
| `element` | The HTML element to watch (button, image, div, etc.) |
| `'eventName'` | Which event to listen for: `'click'`, `'mouseover'`, `'keydown'`, etc. |
| `function() { }` | The code to run when the event fires — called a **callback function** |

### Common Events

| Event | When It Fires |
|-------|--------------|
| `'click'` | User clicks the element |
| `'mouseover'` / `'mouseout'` | Mouse enters/leaves the element |
| `'keydown'` | User presses a key |
| `'submit'` | Form is submitted |
| `'load'` | Page finishes loading |

### The `this` Keyword in Event Listeners

This is a **very important concept**:

```javascript
var img = document.getElementById('photo1');
img.addEventListener('click', function() {
    console.log(this.src);  // prints the src of the clicked image
    console.log(this.alt);  // prints the alt text of the clicked image
});
```

> **Inside an event listener function, `this` refers to the element that triggered the event.**

**Analogy:** Imagine you're in a classroom. The teacher says, "Whoever raises their hand, tell me YOUR name." When Rahul raises his hand, `this` is Rahul. When Priya raises her hand, `this` is Priya. `this` always points to whoever triggered the action.

This is incredibly useful in our gallery — when you click an image, `this` IS that image, so we can read `this.src` and `this.alt` to get its URL and description.

---

## 🔄 JavaScript — querySelectorAll + Looping

### The Problem

We have 8–12 gallery images. Do we really want to write `getElementById` and `addEventListener` for each one individually? That would mean 8–12 blocks of nearly identical code!

### querySelectorAll — Select ALL Matching Elements

```javascript
var galleryImages = document.querySelectorAll('.gallery-img');
```

This returns a **NodeList** — a collection (like an array) of ALL elements that have the class `gallery-img`.

| Method | Returns | Example |
|--------|---------|---------|
| `getElementById('id')` | ONE element | The one element with that ID |
| `querySelector('.class')` | ONE element | The FIRST element with that class |
| `querySelectorAll('.class')` | ALL elements | EVERY element with that class |

> **Analogy:** `getElementById` is like calling one student by their roll number. `querySelectorAll` is like saying "Everyone wearing a blue shirt, stand up!" — all matching students respond.

### Looping Through the NodeList

```javascript
var galleryImages = document.querySelectorAll('.gallery-img');

for (var i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener('click', function() {
        // this code runs when ANY gallery image is clicked
        console.log('You clicked: ' + this.alt);
    });
}
```

**What's happening step by step:**

1. `querySelectorAll('.gallery-img')` finds all images with class `gallery-img` → stored in `galleryImages`
2. `galleryImages.length` tells us how many images were found (e.g., 8)
3. The `for` loop runs 8 times — once for each image
4. Each time, `galleryImages[i].addEventListener(...)` attaches a click listener to that image
5. When any image is clicked later, the function runs and `this` refers to the clicked image

> 📌 **Why not use `galleryImages[i]` inside the function instead of `this`?** Because by the time you click, the loop has already finished and `i` equals `galleryImages.length`. The `this` keyword always correctly refers to the clicked element. This is a classic JavaScript gotcha!

---

## 📦 Functions with Parameters

### Why Parameters?

Instead of repeating the same code, we create a **reusable function** and pass it different values:

```javascript
function openLightbox(imageSrc, caption) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalCaption').textContent = caption;
}
```

**Analogy:** Think of a function like a **chai stall**. You say "ek chai banana" (make one tea) — that's a function call. But sometimes you say "adrak wali chai" or "elaichi wali chai" — those are **parameters**. The stall (function) does the same basic work, but the result changes based on what you pass in.

```javascript
// Same function, different results:
openLightbox('campus.jpg', 'University Campus');
openLightbox('lab.jpg', 'Computer Lab');
openLightbox('event.jpg', 'Annual Day');
```

---

## 🔨 Let's Build! Step by Step

### Step 1: Add the Gallery Section

Add this after the timetable section in your `index.html`:

```html
<!-- ============================================ -->
<!-- GALLERY SECTION                              -->
<!-- ============================================ -->
<section id="gallery" class="py-5 bg-light">
  <div class="container">

    <!-- Section Heading -->
    <div class="text-center mb-4">
      <h2 class="fw-bold">📸 Photo Gallery</h2>
      <p class="text-muted">Moments from our BCA journey at Mandsaur University</p>
    </div>

    <!-- Gallery Grid -->
    <div class="row g-3" id="galleryGrid">

      <!-- Image 1 -->
      <div class="col-6 col-md-4 col-lg-3">
        <figure class="figure m-0">
          <img
            src="https://picsum.photos/400/300?random=1"
            alt="BCA students in computer lab"
            class="img-fluid img-thumbnail gallery-img"
            data-bs-toggle="modal"
            data-bs-target="#galleryModal"
            style="cursor: pointer;"
          >
          <figcaption class="figure-caption text-center">Computer Lab</figcaption>
        </figure>
      </div>

      <!-- Image 2 -->
      <div class="col-6 col-md-4 col-lg-3">
        <figure class="figure m-0">
          <img
            src="https://picsum.photos/400/300?random=2"
            alt="Mandsaur University campus main building"
            class="img-fluid img-thumbnail gallery-img"
            data-bs-toggle="modal"
            data-bs-target="#galleryModal"
            style="cursor: pointer;"
          >
          <figcaption class="figure-caption text-center">Campus View</figcaption>
        </figure>
      </div>

      <!-- Image 3 -->
      <div class="col-6 col-md-4 col-lg-3">
        <figure class="figure m-0">
          <img
            src="https://picsum.photos/400/300?random=3"
            alt="Annual day celebration on stage"
            class="img-fluid img-thumbnail gallery-img"
            data-bs-toggle="modal"
            data-bs-target="#galleryModal"
            style="cursor: pointer;"
          >
          <figcaption class="figure-caption text-center">Annual Day</figcaption>
        </figure>
      </div>

      <!-- Image 4 -->
      <div class="col-6 col-md-4 col-lg-3">
        <figure class="figure m-0">
          <img
            src="https://picsum.photos/400/300?random=4"
            alt="Library reading room with students studying"
            class="img-fluid img-thumbnail gallery-img"
            data-bs-toggle="modal"
            data-bs-target="#galleryModal"
            style="cursor: pointer;"
          >
          <figcaption class="figure-caption text-center">Library</figcaption>
        </figure>
      </div>

      <!-- Images 5-11: Same pattern — copy Image 1 block, change src, alt, caption -->
      <!-- Image 5:  src="...?random=5"  alt="Students playing cricket on university ground"   caption="Sports Ground"  -->
      <!-- Image 6:  src="...?random=6"  alt="Seminar hall during guest lecture"                caption="Seminar Hall"  -->
      <!-- Image 7:  src="...?random=7"  alt="BCA classroom during a lecture"                   caption="Classroom"     -->
      <!-- Image 8:  src="...?random=8"  alt="University canteen during lunch break"            caption="Canteen"       -->
      <!-- Image 9:  src="...?random=9"  alt="Republic Day flag hoisting ceremony"              caption="Republic Day"  -->
      <!-- Image 10: src="...?random=10" alt="Students during coding hackathon event"           caption="Hackathon"     -->
      <!-- Image 11: src="...?random=11" alt="Farewell party group photo of BCA students"       caption="Farewell Party"-->

      <!-- Here is Image 5 as an example — repeat for 6 through 11: -->
      <div class="col-6 col-md-4 col-lg-3">
        <figure class="figure m-0">
          <img
            src="https://picsum.photos/400/300?random=5"
            alt="Students playing cricket on university ground"
            class="img-fluid img-thumbnail gallery-img"
            data-bs-toggle="modal"
            data-bs-target="#galleryModal"
            style="cursor: pointer;"
          >
          <figcaption class="figure-caption text-center">Sports Ground</figcaption>
        </figure>
      </div>

      <!-- ... repeat for images 6, 7, 8, 9, 10, 11 using the values above ... -->

      <!-- Image 12: VIDEO EMBED -->
      <div class="col-6 col-md-4 col-lg-3">
        <figure class="figure m-0">
          <video
            width="100%"
            controls
            class="img-thumbnail rounded"
            poster="https://picsum.photos/400/300?random=12"
          >
            <source src="campus-tour.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <figcaption class="figure-caption text-center">🎬 Campus Tour</figcaption>
        </figure>
      </div>

    </div><!-- /row -->

  </div><!-- /container -->
</section>
```

> 📌 **Notice:** Each image has `class="gallery-img"` — we'll use this class in JavaScript to select all gallery images at once. Each also has `data-bs-toggle="modal"` and `data-bs-target="#galleryModal"` so Bootstrap knows to open the modal on click.

---

### Step 2: Add the Lightbox Modal

Add this HTML **after** the gallery section (but before the closing `</body>` tag or your next section):

```html
<!-- ============================================ -->
<!-- GALLERY LIGHTBOX MODAL                       -->
<!-- ============================================ -->
<div class="modal fade" id="galleryModal" tabindex="-1"
     aria-labelledby="modalCaption" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content bg-dark text-white">

      <!-- Modal Header -->
      <div class="modal-header border-secondary">
        <h5 class="modal-title" id="modalCaption">Image Caption</h5>
        <button type="button" class="btn-close btn-close-white"
                data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <!-- Modal Body -->
      <div class="modal-body text-center p-0">
        <img id="modalImage" src="" alt=""
             class="img-fluid w-100">
      </div>

      <!-- Modal Footer -->
      <div class="modal-footer border-secondary">
        <small class="text-muted me-auto" id="modalAlt"></small>
        <button type="button" class="btn btn-outline-light"
                data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
```

**Why dark background?** Photos look best on a dark background — just like in a real gallery or a cinema hall. That's why we use `bg-dark text-white` on `modal-content` and `btn-close-white` for the close button.

---

### Step 3: Add the JavaScript

Add this inside `<script>` tags just before `</body>`, or inside your `js/script.js` file:

```javascript
// ============================================
// GALLERY LIGHTBOX — JavaScript
// ============================================

// ----- Function to update the modal content -----
function openLightbox(imageSrc, imageAlt) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalImage').alt = imageAlt;
    document.getElementById('modalCaption').textContent = imageAlt;
    document.getElementById('modalAlt').textContent = imageSrc;
}

// ----- Select ALL gallery images -----
var galleryImages = document.querySelectorAll('.gallery-img');

// ----- Attach click event to EACH image -----
for (var i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener('click', function() {
        // 'this' refers to the image that was clicked
        openLightbox(this.src, this.alt);
    });
}

// Log how many images were found (for debugging)
console.log('Gallery: ' + galleryImages.length + ' images ready for lightbox.');
```

### How It All Flows

When a user clicks a gallery image, here's what happens:

```
User clicks image
    → addEventListener callback fires
    → this = the clicked <img> element
    → openLightbox(this.src, this.alt) is called
    → Modal's image src and caption are updated
    → Bootstrap opens the modal (via data-bs-toggle)
    → User sees the full-size image in the lightbox!
```

---

## ✅ Checkpoint — Verify Your Work

Open your page in Chrome and check:

| # | Test | Expected Result |
|---|------|-----------------|
| 1 | Gallery section visible | 12-item grid with images and one video |
| 2 | Resize browser to phone width | Images rearrange to 2 columns |
| 3 | Resize to tablet width | Images rearrange to 3 columns |
| 4 | Full desktop width | Images show in 4 columns |
| 5 | Click any image | Modal opens with larger version |
| 6 | Modal shows correct caption | Caption matches the clicked image's alt text |
| 7 | Click Close or X button | Modal closes smoothly |
| 8 | Click the dark backdrop | Modal closes (default Bootstrap behavior) |
| 9 | Press Escape key | Modal closes |
| 10 | Open DevTools Console (F12) | See "Gallery: 11 images ready." message |
| 11 | Video cell has play controls | Video shows poster image and play button |

> **Troubleshooting:** If clicking an image does NOT open the modal, check:
> 1. Is `data-bs-toggle="modal"` on each `<img>`?
> 2. Does `data-bs-target="#galleryModal"` match the modal's `id`?
> 3. Is Bootstrap JS loaded (check `<script>` tag for `bootstrap.bundle.min.js`)?
> 4. Open Console (F12) — any red errors?

---

## 📋 Quick Reference Card

| Category | Item | Purpose |
|----------|------|---------|
| **HTML Tags** | `<figure>` | Semantic image + caption container |
| | `<figcaption>` | Caption for a `<figure>` |
| | `<video controls>` | Embedded video player |
| | `<audio controls>` | Embedded audio player |
| | `<source>` | Media file for `<video>`/`<audio>` |
| **Attributes** | `alt` | Image description for accessibility + SEO |
| | `data-*` | Custom data on any element |
| | `data-bs-toggle` / `data-bs-target` | Bootstrap component triggers |
| | `data-bs-dismiss` | Close Bootstrap component |
| **Bootstrap** | `col-6 col-md-4 col-lg-3` | Responsive columns: 2 → 3 → 4 |
| | `g-3` | Grid gap |
| | `img-fluid` / `img-thumbnail` | Responsive image / bordered image |
| | `modal` → `modal-dialog` → `modal-content` | Modal structure (nested) |
| | `modal-lg` / `modal-dialog-centered` | Large + vertically centered modal |
| **JavaScript** | `el.addEventListener('click', fn)` | Professional event binding |
| | `document.querySelectorAll('.class')` | Select ALL matching elements |
| | `this` inside event listener | The element that fired the event |
| | `function name(param1, param2)` | Reusable function with parameters |
| | `el.textContent = 'text'` | Set text of an element |

---

## 🧠 Key Takeaways

1. **`<figure>` + `<figcaption>`** create a semantic image-caption pair — better than plain `<div>` + `<p>` for accessibility and SEO.
2. **`alt` text is not optional** — it serves blind users (screen readers), search engines (SEO), and users with broken images.
3. **`data-*` attributes** store custom data on elements — like writing notes on the back of a photo.
4. **Bootstrap grid is mobile-first** — start with `col-6`, layer on `col-md-4`, `col-lg-3` for larger screens.
5. **Modals have strict nesting** — `modal` → `modal-dialog` → `modal-content` → header/body/footer. Skip a level and it breaks!
6. **`addEventListener` > `onclick`** — supports multiple listeners, keeps JS out of HTML.
7. **`querySelectorAll` + `for` loop** — the pattern for attaching behavior to many elements at once.
8. **`this` in event listeners** always refers to the element that triggered the event — essential for galleries, menus, forms.
9. **One shared modal, dynamic content** — JavaScript updates the modal before Bootstrap shows it. No need for 11 separate modals!

---

## 🏋️ Practice Challenges

Try these after completing the main lab:

### Challenge 1: Category Filter (⭐⭐ Medium)

Add filter buttons above the gallery:

```html
<div class="text-center mb-3">
  <button class="btn btn-outline-primary btn-sm filter-btn active"
          data-category="all">All</button>
  <button class="btn btn-outline-primary btn-sm filter-btn"
          data-category="campus">Campus</button>
  <button class="btn btn-outline-primary btn-sm filter-btn"
          data-category="events">Events</button>
  <button class="btn btn-outline-primary btn-sm filter-btn"
          data-category="academic">Academic</button>
</div>
```

Add `data-category="campus"` (or `"events"`, `"academic"`) to each image's `<div>` column. Then write JavaScript:

```javascript
var filterButtons = document.querySelectorAll('.filter-btn');
var galleryItems = document.querySelectorAll('#galleryGrid .col-6');

for (var i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener('click', function() {
        var category = this.dataset.category;

        for (var j = 0; j < galleryItems.length; j++) {
            if (category === 'all' || galleryItems[j].dataset.category === category) {
                galleryItems[j].style.display = 'block';
            } else {
                galleryItems[j].style.display = 'none';
            }
        }
    });
}
```

**Hint:** `this.dataset.category` reads the `data-category` attribute.

---

### Challenge 2: Hover Zoom Effect (⭐ Easy)

Add a CSS hover effect that slightly zooms the image when you mouse over it:

```html
<style>
  .gallery-img {
      transition: transform 0.3s ease;
  }
  .gallery-img:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }
</style>
```

This is pure CSS — no JavaScript needed! The `transition` makes the zoom smooth, and `transform: scale(1.05)` enlarges the image by 5%.

---

### Challenge 3: Previous/Next Navigation in Modal (⭐⭐⭐ Hard)

Add "Previous" and "Next" buttons in the modal footer to navigate between images:

```html
<!-- Add to modal footer -->
<button type="button" class="btn btn-outline-light" id="prevBtn">⬅ Previous</button>
<button type="button" class="btn btn-outline-light" id="nextBtn">Next ➡</button>
```

```javascript
var currentIndex = 0;

// Update the click listener to track index
for (var i = 0; i < galleryImages.length; i++) {
    (function(index) {
        galleryImages[index].addEventListener('click', function() {
            currentIndex = index;
            openLightbox(this.src, this.alt);
        });
    })(i);
}

// Previous button
document.getElementById('prevBtn').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    var img = galleryImages[currentIndex];
    openLightbox(img.src, img.alt);
});

// Next button
document.getElementById('nextBtn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    var img = galleryImages[currentIndex];
    openLightbox(img.src, img.alt);
});
```

> 📌 **Why `(function(index) { ... })(i);`?** This is called an IIFE (Immediately Invoked Function Expression). It solves the classic JavaScript closure problem — without it, all click handlers would share the same `i` variable, which would equal `galleryImages.length` by the time any image is clicked. The IIFE creates a new scope that "captures" the current value of `i`. You'll understand this better as we progress!

---

## 📚 Labs Covered in This Session

| Lab # | Experiment | How We Covered It |
|-------|-----------|-------------------|
| **Lab 29** | Responsive image gallery | ✅ Full responsive grid with `col-6 col-md-4 col-lg-3`, `img-fluid`, `img-thumbnail` |
| **Lab 3** | Image links to another page | ✅ Gallery images act as clickable links — they open in a modal lightbox (link-like interactive behavior) |
| **Lab 9** | Audio and video embedding | ✅ `<video>` tag with `controls`, `poster`, and `<source>`. `<audio>` tag introduced in reference. |

---

## 👀 Next Session Preview

### Session 8: "Get in Touch" — Contact Form (All Input Types)

We'll add a **Contact Form** section to our website with:

- 📝 Text inputs, email, phone number, textarea
- 🔘 Radio buttons, checkboxes, dropdown `<select>`
- 🏷️ Bootstrap floating labels — modern form styling
- 📱 Fully responsive form layout with Bootstrap's grid
- **Labs 12, 13, 26** covered

**New tags:** `<form>`, `<input>`, `<textarea>`, `<select>`, `<option>`, `<label>`, `<fieldset>`, `<legend>`

Get ready to build the most interactive section yet! 🚀

---

*Session 7 of 15 — Crash Course: Bootstrap + JavaScript — BCA Semester II, Mandsaur University, 2025-26*
