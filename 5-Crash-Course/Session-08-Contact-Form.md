# Session 8 — "Get in Touch" — Contact Form (All Input Types)

**Crash Course: Bootstrap + JavaScript — BCA Semester II**  
**Mandsaur University | 2025-26**

> **Session Type:** 🔬 Practical Lab  
> **Duration:** 2 hours  
> **Labs Covered:** Lab 12 (Simple Form), Lab 13 (Advanced Form Elements), Lab 26 (Bootstrap Responsive Form)  

---

## 📍 Where We Are

```
Session 1  ✅ Navbar
Session 2  ✅ Hero + Carousel
Session 3  ✅ About Section + Grid
Session 4  ✅ JavaScript Foundations
Session 5  ✅ Faculty Cards + DOM
Session 6  ✅ Timetable + Loops & Arrays
Session 7  ✅ Photo Gallery + Modal Lightbox
Session 8  👈 Contact Form (YOU ARE HERE)
Session 9  ⬜ Form Validation + Regex
Session 10 ⬜ Login System + localStorage
```

Our class website already has a navbar, hero carousel, about section, faculty cards, timetable, and a photo gallery with lightbox. Now we need a way for visitors to **reach out** — a Contact Form!

> **⚠️ No JavaScript in this session.** We focus 100% on HTML form elements and Bootstrap form styling. Validation logic comes in Session 9.

---

## 🎯 What We'll Build

A beautiful "Contact Us / Feedback" section with:

- ✅ Text inputs — Full Name, Email, Phone Number
- ✅ Number input — Age
- ✅ Date input — Date of Birth
- ✅ Select dropdown — Subject (General Inquiry, Feedback, Complaint, etc.)
- ✅ Radio buttons — Gender
- ✅ Checkboxes — Interests (Web Dev, Programming, Data Science, etc.)
- ✅ Password field — Secret Feedback Code (demo)
- ✅ Textarea — Message
- ✅ "Agree to terms" checkbox
- ✅ Submit + Reset buttons
- ✅ Floating labels for a modern look
- ✅ Side-by-side fields using Bootstrap grid

---

## 🏷️ New HTML Tags — Forms Deep Dive

Forms are one of the **biggest** topics in HTML. Think of every time you've filled out something online — college admission form, Aadhaar registration, railway ticket booking, online exam login. That's all `<form>`.

Let's learn every tag and attribute one by one.

---

### 📌 `<form>` — The Form Container

> **Analogy:** A form is like a **paper application form at a government office**. It collects information from you and sends it somewhere for processing.

```html
<form action="#contact" method="POST">
  <!-- all your inputs go here -->
</form>
```

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `action` | Where to send the data (URL) | `action="submit.php"` or `action="#contact"` |
| `method` | How to send the data | `method="GET"` or `method="POST"` |

> **Important:** Every form input must live inside a `<form>` tag. Without it, pressing Submit does nothing — like writing on a loose paper and not putting it in the submission box.

---

### 📮 GET vs POST — The Postcard vs Sealed Envelope

This is one of the most important concepts in web forms. Let's understand with a desi analogy.

#### GET — The Postcard 🏷️

```
Like writing your message on a postcard — everyone can see it.
```

When you use `method="GET"`, the form data appears **in the URL**:

```
page.html?name=Rahul&email=rahul@gmail.com&phone=9876543210
```

- ✅ Good for: search forms, filters (Google uses GET for searches)
- ❌ Bad for: passwords, personal data (visible in browser history!)
- Data limit: ~2000 characters (URL length limit)
- Can be bookmarked (useful for sharing search results)

#### POST — The Sealed Envelope ✉️

```
Like putting your message in a sealed envelope — hidden from view.
```

When you use `method="POST"`, the form data is sent **inside the request body**:

```
The URL stays clean: page.html
Data travels hidden in the HTTP request body.
```

- ✅ Good for: login forms, registration, payments, feedback
- ✅ No data limit (can send files, long messages)
- ❌ Cannot be bookmarked
- ❌ Needs a server to process (we won't have one in this course)

#### When to Use Which?

| Scenario | Method | Why |
|----------|--------|-----|
| Google search | GET | You want to share/bookmark the search URL |
| Login form | POST | Password must not appear in URL |
| Contact form | POST | Personal info should be hidden |
| Filter products | GET | User can share filtered results |

**For our class website:** We'll use `method="POST"` and `action="#contact"`. Since we don't have a backend server, the form won't actually submit anywhere — but the HTML structure will be correct.

---

### 📌 `<input>` — The Swiss Army Knife of Forms

> **Analogy:** The `<input>` tag is like a **Swiss Army knife** — one tag, many types. Change the `type` attribute and it becomes a completely different field.

```html
<input type="text" name="fullname" id="fullname">
```

Here are all the types we'll use:

| Type | What It Creates | Example |
|------|----------------|---------|
| `text` | Single-line text box | Full Name |
| `email` | Email field (browser checks for @) | Email Address |
| `tel` | Phone number field | Mobile Number |
| `password` | Hidden text (shows dots ●●●) | Password / Secret Code |
| `number` | Numeric input with up/down arrows | Age |
| `date` | Date picker calendar | Date of Birth |
| `radio` | Round button — pick ONE from a group | Gender |
| `checkbox` | Square box — pick MANY | Interests |
| `submit` | Submit button | Send Form |
| `reset` | Reset button | Clear Form |
| `hidden` | Invisible field (stores data for server) | Form ID, tokens |

```html
<!-- Text -->
<input type="text" name="fullname" placeholder="Enter your name">

<!-- Email (browser auto-checks for @) -->
<input type="email" name="email" placeholder="you@example.com">

<!-- Phone -->
<input type="tel" name="phone" placeholder="9876543210">

<!-- Password (characters are hidden) -->
<input type="password" name="secret_code" placeholder="Enter code">

<!-- Number (with min/max) -->
<input type="number" name="age" min="16" max="100">

<!-- Date (opens calendar picker) -->
<input type="date" name="dob">

<!-- Radio (same name = one group, only one selectable) -->
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female

<!-- Checkbox (each is independent) -->
<input type="checkbox" name="interest" value="webdev"> Web Development
<input type="checkbox" name="interest" value="programming"> Programming

<!-- Submit and Reset -->
<input type="submit" value="Send">
<input type="reset" value="Clear">
```

---

### 📌 `<label>` — The Name Tag for Every Input

> **Analogy:** Every input needs a label, like **every jar in the kitchen needs a label**. Without labels, you can't tell salt from sugar.

```html
<label for="fullname">Full Name</label>
<input type="text" id="fullname" name="fullname">
```

**The `for` attribute must match the `id` of the input.** This does two things:
1. Clicking the label focuses the input (great for accessibility)
2. Screen readers can announce what the field is for

> **Rule:** Never leave an input without a label. It's like a question paper with blank questions — the student won't know what to write!

---

### 📌 `<textarea>` — For Long Messages

> **Analogy:** If `<input type="text">` is like filling a blank in an exam, `<textarea>` is like **writing an essay** — you get a big box with multiple lines.

```html
<label for="message">Your Message</label>
<textarea id="message" name="message" rows="5" cols="40"
          placeholder="Write your message here..."></textarea>
```

| Attribute | Purpose |
|-----------|---------|
| `rows` | Number of visible text lines |
| `cols` | Width in characters |

> **Note:** `<textarea>` is NOT a self-closing tag. It has an opening and closing tag. Any default text goes **between** the tags, not in a `value` attribute.

---

### 📌 `<select>` + `<option>` — The Dropdown Menu

> **Analogy:** A dropdown is like **choosing from a restaurant menu** — you see all options but pick only one (unless it's a buffet with `multiple`).

```html
<label for="subject">Subject</label>
<select id="subject" name="subject">
  <option value="" selected disabled>-- Choose a subject --</option>
  <option value="general">General Inquiry</option>
  <option value="feedback">Feedback</option>
  <option value="complaint">Complaint</option>
  <option value="suggestion">Suggestion</option>
  <option value="other">Other</option>
</select>
```

| Attribute | Purpose |
|-----------|---------|
| `value` | What gets sent to server (not what user sees) |
| `selected` | Pre-selects this option |
| `disabled` | Makes the option unselectable (used for placeholder text) |

---

### 📌 `<optgroup>` — Grouping Dropdown Options

> **Analogy:** Like organizing a restaurant menu into sections — "Starters", "Main Course", "Desserts".

```html
<select name="department">
  <optgroup label="Science">
    <option value="bca">BCA</option>
    <option value="bsc_cs">B.Sc CS</option>
  </optgroup>
  <optgroup label="Commerce">
    <option value="bcom">B.Com</option>
    <option value="mba">MBA</option>
  </optgroup>
</select>
```

The `<optgroup>` label text appears as a **bold, non-selectable heading** in the dropdown.

---

### 📌 `<button>` — The Action Trigger

> **Analogy:** The final step — like pressing the "Submit" bell at a government office counter after filling your form.

```html
<button type="submit">Send Message</button>
<button type="reset">Clear Form</button>
<button type="button">Just a Button (does nothing by default)</button>
```

| Type | Behavior |
|------|----------|
| `submit` | Sends the form data (default if no type specified) |
| `reset` | Clears all form fields back to defaults |
| `button` | Does nothing — used with JavaScript click handlers |

> **Why `<button>` over `<input type="submit">`?** Because `<button>` can contain HTML inside it — icons, bold text, images. `<input>` can only have plain text.

```html
<!-- Button with icon (possible) -->
<button type="submit">📩 Send Message</button>

<!-- Input submit (plain text only) -->
<input type="submit" value="Send Message">
```

---

### 📌 `<fieldset>` + `<legend>` — Grouping Related Fields

> **Analogy:** Like **sections in an exam paper** — "Section A: MCQs", "Section B: Short Answers". A fieldset groups related fields, and the legend is the section title.

```html
<fieldset>
  <legend>Personal Information</legend>
  <label for="name">Name</label>
  <input type="text" id="name" name="name">
  <!-- more personal fields -->
</fieldset>

<fieldset>
  <legend>Academic Details</legend>
  <label for="course">Course</label>
  <input type="text" id="course" name="course">
  <!-- more academic fields -->
</fieldset>
```

The browser draws a **border around the fieldset** with the legend text breaking the top border. Very useful for long forms.

---

### 📌 Important Input Attributes

These attributes control input behavior without any JavaScript.

#### `required` — Mandatory Field

> **Analogy:** Like the **signature field on a government form** — you can't submit without it.

```html
<input type="text" name="fullname" required>
```

The browser will block form submission and show "Please fill out this field" if left empty.

#### `placeholder` — Ghost Text

> **Analogy:** Like the **light grey example text** printed in form fields — "e.g., Rahul Sharma". It disappears when you start typing.

```html
<input type="text" name="phone" placeholder="e.g., 9876543210">
```

> **Warning:** Placeholder is NOT a replacement for `<label>`. Once the user starts typing, the placeholder vanishes and they forget what the field was for!

#### `name` — The Server's Label

> **Analogy:** The `name` is what the **server reads** — like the field label on the back of a form that the office clerk uses to enter data into the computer.

```html
<input type="text" name="full_name">
```

**Every input MUST have a `name` attribute.** Without it, the data won't be sent when the form is submitted. The `id` is for CSS/JS; the `name` is for the server.

#### `value` — Pre-filled or Default Value

```html
<!-- Pre-filled text -->
<input type="text" name="city" value="Mandsaur">

<!-- Radio/checkbox must have value -->
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female
```

For radio buttons and checkboxes, the `value` is what gets sent to the server when that option is selected.

#### `maxlength` and `minlength` — Character Limits

```html
<!-- Phone: exactly 10 digits -->
<input type="tel" name="phone" minlength="10" maxlength="10">

<!-- Name: between 2 and 50 characters -->
<input type="text" name="fullname" minlength="2" maxlength="50">
```

#### `min` and `max` — Number/Date Range

```html
<!-- Age: 16 to 100 -->
<input type="number" name="age" min="16" max="100">

<!-- Date: within year 2000-2010 -->
<input type="date" name="dob" min="2000-01-01" max="2010-12-31">
```

---

## 🎨 Bootstrap 5 Form Classes — The Complete Guide

Bootstrap transforms plain HTML forms into beautiful, responsive layouts. Here's every class we'll use.

### Core Input Styling

| Class | Applied To | Purpose |
|-------|-----------|---------|
| `form-control` | `<input>`, `<textarea>` | Styles text/email/password/number/date/tel inputs |
| `form-select` | `<select>` | Styles dropdown menus |
| `form-label` | `<label>` | Adds proper spacing and font styling to labels |

```html
<!-- Styled text input -->
<div class="mb-3">
  <label for="name" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="name" name="name">
</div>

<!-- Styled dropdown -->
<div class="mb-3">
  <label for="subject" class="form-select">Subject</label>
  <select class="form-select" id="subject" name="subject">
    <option>General Inquiry</option>
  </select>
</div>
```

### Radio Buttons and Checkboxes

| Class | Applied To | Purpose |
|-------|-----------|---------|
| `form-check` | Wrapper `<div>` | Wraps each radio/checkbox pair |
| `form-check-input` | `<input type="radio/checkbox">` | Styles the actual radio/checkbox |
| `form-check-label` | `<label>` | Styles the label next to it |
| `form-check-inline` | Wrapper `<div>` | Places radios/checkboxes in a horizontal row |

```html
<!-- Radio button group -->
<div class="form-check">
  <input class="form-check-input" type="radio" name="gender"
         id="male" value="male">
  <label class="form-check-label" for="male">Male</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="gender"
         id="female" value="female">
  <label class="form-check-label" for="female">Female</label>
</div>
```

### Floating Labels — The Modern Look

| Class | Applied To | Purpose |
|-------|-----------|---------|
| `form-floating` | Wrapper `<div>` | Enables the floating label effect |

The label sits inside the input and **floats up** when the user clicks or types.

```html
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="name"
         name="name" placeholder="Full Name">
  <label for="name">Full Name</label>
</div>
```

> **Important:** For floating labels, the `<input>` must come **before** the `<label>`, and the input **must** have a `placeholder` (even if it's the same as the label text). This is the opposite of normal order!

### Input Groups — Addons

| Class | Applied To | Purpose |
|-------|-----------|---------|
| `input-group` | Wrapper `<div>` | Creates an input with attached prefix/suffix |
| `input-group-text` | `<span>` | The addon text or icon |

```html
<div class="input-group mb-3">
  <span class="input-group-text">📞</span>
  <input type="tel" class="form-control" name="phone"
         placeholder="Phone Number">
</div>

<div class="input-group mb-3">
  <span class="input-group-text">@</span>
  <input type="email" class="form-control" name="email"
         placeholder="Email Address">
</div>
```

### Sizing

| Class | Effect |
|-------|--------|
| `form-control-lg` | Larger input |
| `form-control-sm` | Smaller input |

```html
<input type="text" class="form-control form-control-lg" placeholder="Large">
<input type="text" class="form-control" placeholder="Default">
<input type="text" class="form-control form-control-sm" placeholder="Small">
```

### Layout — Horizontal Fields

Use Bootstrap's grid system to put fields side by side:

```html
<div class="row mb-3">
  <div class="col-md-6">
    <!-- First Name input here -->
  </div>
  <div class="col-md-6">
    <!-- Last Name input here -->
  </div>
</div>
```

On mobile (`col-md-6`), each field takes full width. On medium screens and up, they sit side by side.

### Spacing

| Class | Purpose |
|-------|---------|
| `mb-3` | Margin-bottom between form groups (standard) |
| `mb-4` | Slightly more space |
| `mt-3` | Margin-top |
| `py-5` | Padding top and bottom for the section |
| `gap-2` | Gap between inline buttons |

---

## 🔨 Let's Build — Step by Step

We'll add a Contact Us section to our class website. Follow along carefully.

### Step 1: Create the Section Container

```html
<!-- ===== CONTACT SECTION ===== -->
<section id="contact" class="py-5 bg-light">
  <div class="container">
    <h2 class="text-center mb-2">📬 Get in Touch</h2>
    <p class="text-center text-muted mb-4">
      Have a question or feedback? Fill out the form below and we'll
      get back to you!
    </p>

    <!-- Form will go here -->

  </div>
</section>
```

### Step 2: Start the Form Tag

```html
<form action="#contact" method="POST">
  <!-- All inputs go inside this form -->
</form>
```

We use `action="#contact"` so the page scrolls back to the contact section on submit. `method="POST"` because we're sending personal data.

### Step 3: Full Name + Email (Side by Side with Floating Labels)

```html
<!-- Row: Name + Email side by side -->
<div class="row mb-3">
  <div class="col-md-6">
    <div class="form-floating">
      <input type="text" class="form-control" id="fullname"
             name="fullname" placeholder="Full Name"
             minlength="2" maxlength="50" required>
      <label for="fullname">Full Name</label>
    </div>
  </div>
  <div class="col-md-6">
    <div class="form-floating">
      <input type="email" class="form-control" id="email"
             name="email" placeholder="Email Address" required>
      <label for="email">Email Address</label>
    </div>
  </div>
</div>
```

> **Notice:** In floating labels, `<input>` comes first, then `<label>`. The `placeholder` is required even though it's hidden by the floating label.

### Step 4: Phone Number with Input Group Addon

```html
<!-- Phone with emoji prefix -->
<div class="mb-3">
  <label for="phone" class="form-label">Phone Number</label>
  <div class="input-group">
    <span class="input-group-text">📞 +91</span>
    <input type="tel" class="form-control" id="phone"
           name="phone" placeholder="9876543210"
           minlength="10" maxlength="10">
  </div>
</div>
```

### Step 5: Age + Date of Birth (Side by Side)

```html
<!-- Row: Age + DOB -->
<div class="row mb-3">
  <div class="col-md-6">
    <label for="age" class="form-label">Age</label>
    <input type="number" class="form-control" id="age"
           name="age" min="16" max="100" placeholder="e.g., 19">
  </div>
  <div class="col-md-6">
    <label for="dob" class="form-label">Date of Birth</label>
    <input type="date" class="form-control" id="dob"
           name="dob" min="2000-01-01" max="2010-12-31">
  </div>
</div>
```

### Step 6: Subject Dropdown

```html
<!-- Subject dropdown -->
<div class="mb-3">
  <label for="subject" class="form-label">Subject</label>
  <select class="form-select" id="subject" name="subject" required>
    <option value="" selected disabled>-- Choose a subject --</option>
    <option value="general">General Inquiry</option>
    <option value="feedback">Feedback</option>
    <option value="complaint">Complaint</option>
    <option value="suggestion">Suggestion</option>
    <option value="other">Other</option>
  </select>
</div>
```

### Step 7: Gender Radio Buttons (Inline)

```html
<!-- Gender: Radio Buttons -->
<fieldset class="mb-3">
  <legend class="form-label">Gender</legend>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="gender"
           id="genderMale" value="male">
    <label class="form-check-label" for="genderMale">Male</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="gender"
           id="genderFemale" value="female">
    <label class="form-check-label" for="genderFemale">Female</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="gender"
           id="genderOther" value="prefer_not_to_say">
    <label class="form-check-label" for="genderOther">
      Prefer not to say
    </label>
  </div>
</fieldset>
```

> **Key Point:** All three radio inputs share `name="gender"`. This is how the browser knows they're **one group** — you can only pick one. If you used different names, you could select all three!

### Step 8: Interests Checkboxes

```html
<!-- Interests: Checkboxes -->
<fieldset class="mb-3">
  <legend class="form-label">Interests (select all that apply)</legend>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="interest"
           id="interestWeb" value="web_development">
    <label class="form-check-label" for="interestWeb">
      Web Development
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="interest"
           id="interestProg" value="programming">
    <label class="form-check-label" for="interestProg">
      Programming
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="interest"
           id="interestData" value="data_science">
    <label class="form-check-label" for="interestData">
      Data Science
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="interest"
           id="interestNet" value="networking">
    <label class="form-check-label" for="interestNet">
      Networking
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" name="interest"
           id="interestSec" value="cyber_security">
    <label class="form-check-label" for="interestSec">
      Cyber Security
    </label>
  </div>
</fieldset>
```

> **Unlike radio buttons**, checkboxes let you select **multiple** options. But they still share the same `name` so the server receives an array of values.

### Step 9: Secret Feedback Code (Password Demo)

```html
<!-- Password field (demo) -->
<div class="mb-3">
  <label for="secretCode" class="form-label">
    Secret Feedback Code (for demo only)
  </label>
  <input type="password" class="form-control" id="secretCode"
         name="secret_code" placeholder="Enter a secret code"
         maxlength="20">
  <div class="form-text">
    This is just to demonstrate the password input type.
    Characters appear as dots ●●●.
  </div>
</div>
```

> **`form-text`** is a Bootstrap helper class that adds small, muted text below an input — perfect for hints and descriptions.

### Step 10: Message Textarea

```html
<!-- Message textarea -->
<div class="form-floating mb-3">
  <textarea class="form-control" id="message" name="message"
            placeholder="Write your message here..."
            style="height: 120px" required></textarea>
  <label for="message">Your Message</label>
</div>
```

> **Note:** For floating labels on `<textarea>`, we use `style="height: 120px"` instead of the `rows` attribute, because floating labels need a fixed height to work properly.

### Step 11: Agree to Terms Checkbox

```html
<!-- Terms agreement -->
<div class="form-check mb-4">
  <input class="form-check-input" type="checkbox" id="agreeTerms"
         name="agree_terms" value="yes" required>
  <label class="form-check-label" for="agreeTerms">
    I agree to the <a href="#" class="link-primary">terms and conditions</a>
  </label>
</div>
```

### Step 12: Submit + Reset Buttons

```html
<!-- Buttons -->
<div class="d-flex gap-2">
  <button type="submit" class="btn btn-primary">
    📩 Submit Form
  </button>
  <button type="reset" class="btn btn-outline-secondary">
    🔄 Reset
  </button>
</div>
```

---

## ✅ Complete Contact Section — Full Code

Copy this entire block into your `index.html` after the Gallery section:

```html
<!-- ===== CONTACT SECTION ===== -->
<section id="contact" class="py-5 bg-light">
  <div class="container">
    <h2 class="text-center mb-2">📬 Get in Touch</h2>
    <p class="text-center text-muted mb-4">
      Have a question or feedback? Fill out the form below and
      we'll get back to you!
    </p>

    <div class="row justify-content-center">
      <div class="col-lg-8">

        <form action="#contact" method="POST">

          <!-- Row: Name + Email (floating labels, side by side) -->
          <div class="row mb-3">
            <div class="col-md-6">
              <div class="form-floating">
                <input type="text" class="form-control" id="fullname"
                       name="fullname" placeholder="Full Name"
                       minlength="2" maxlength="50" required>
                <label for="fullname">Full Name</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating">
                <input type="email" class="form-control" id="email"
                       name="email" placeholder="Email Address" required>
                <label for="email">Email Address</label>
              </div>
            </div>
          </div>

          <!-- Phone with input group addon -->
          <div class="mb-3">
            <label for="phone" class="form-label">Phone Number</label>
            <div class="input-group">
              <span class="input-group-text">📞 +91</span>
              <input type="tel" class="form-control" id="phone"
                     name="phone" placeholder="9876543210"
                     minlength="10" maxlength="10">
            </div>
          </div>

          <!-- Row: Age + Date of Birth -->
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="age" class="form-label">Age</label>
              <input type="number" class="form-control" id="age"
                     name="age" min="16" max="100" placeholder="e.g., 19">
            </div>
            <div class="col-md-6">
              <label for="dob" class="form-label">Date of Birth</label>
              <input type="date" class="form-control" id="dob"
                     name="dob" min="2000-01-01" max="2010-12-31">
            </div>
          </div>

          <!-- Subject dropdown -->
          <div class="mb-3">
            <label for="subject" class="form-label">Subject</label>
            <select class="form-select" id="subject" name="subject"
                    required>
              <option value="" selected disabled>
                -- Choose a subject --
              </option>
              <option value="general">General Inquiry</option>
              <option value="feedback">Feedback</option>
              <option value="complaint">Complaint</option>
              <option value="suggestion">Suggestion</option>
              <option value="other">Other</option>
            </select>
          </div>

          <!-- Gender: Radio Buttons (inline) -->
          <fieldset class="mb-3">
            <legend class="form-label">Gender</legend>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio"
                     name="gender" id="genderMale" value="male">
              <label class="form-check-label" for="genderMale">
                Male
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio"
                     name="gender" id="genderFemale" value="female">
              <label class="form-check-label" for="genderFemale">
                Female
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio"
                     name="gender" id="genderOther"
                     value="prefer_not_to_say">
              <label class="form-check-label" for="genderOther">
                Prefer not to say
              </label>
            </div>
          </fieldset>

          <!-- Interests: Checkboxes -->
          <fieldset class="mb-3">
            <legend class="form-label">
              Interests (select all that apply)
            </legend>
            <div class="form-check">
              <input class="form-check-input" type="checkbox"
                     name="interest" id="interestWeb"
                     value="web_development">
              <label class="form-check-label" for="interestWeb">
                Web Development
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox"
                     name="interest" id="interestProg"
                     value="programming">
              <label class="form-check-label" for="interestProg">
                Programming
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox"
                     name="interest" id="interestData"
                     value="data_science">
              <label class="form-check-label" for="interestData">
                Data Science
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox"
                     name="interest" id="interestNet"
                     value="networking">
              <label class="form-check-label" for="interestNet">
                Networking
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox"
                     name="interest" id="interestSec"
                     value="cyber_security">
              <label class="form-check-label" for="interestSec">
                Cyber Security
              </label>
            </div>
          </fieldset>

          <!-- Password field (demo) -->
          <div class="mb-3">
            <label for="secretCode" class="form-label">
              Secret Feedback Code (for demo only)
            </label>
            <input type="password" class="form-control"
                   id="secretCode" name="secret_code"
                   placeholder="Enter a secret code" maxlength="20">
            <div class="form-text">
              This demonstrates the password input type.
              Characters appear as dots ●●●.
            </div>
          </div>

          <!-- Message textarea (floating label) -->
          <div class="form-floating mb-3">
            <textarea class="form-control" id="message"
                      name="message"
                      placeholder="Write your message here..."
                      style="height: 120px" required></textarea>
            <label for="message">Your Message</label>
          </div>

          <!-- Terms agreement -->
          <div class="form-check mb-4">
            <input class="form-check-input" type="checkbox"
                   id="agreeTerms" name="agree_terms"
                   value="yes" required>
            <label class="form-check-label" for="agreeTerms">
              I agree to the
              <a href="#" class="link-primary">
                terms and conditions
              </a>
            </label>
          </div>

          <!-- Buttons -->
          <div class="d-flex gap-2">
            <button type="submit" class="btn btn-primary">
              📩 Submit Form
            </button>
            <button type="reset" class="btn btn-outline-secondary">
              🔄 Reset
            </button>
          </div>

        </form>

      </div>
    </div>
  </div>
</section>
```

---

## ✅ Checkpoint — Verify Your Work

Open your `index.html` in the browser and check:

| # | Check | Expected Result |
|---|-------|-----------------|
| 1 | Scroll to Contact section | See "📬 Get in Touch" heading |
| 2 | Name + Email fields | Side by side on desktop, stacked on mobile |
| 3 | Click on floating label | Label floats up, input gets focus |
| 4 | Phone field | Has 📞 +91 prefix attached to the input |
| 5 | Age field | Shows up/down arrows, won't accept below 16 |
| 6 | Date of Birth | Opens a calendar picker |
| 7 | Subject dropdown | Shows 5 options + placeholder |
| 8 | Gender radios | Can only select ONE (they're grouped) |
| 9 | Interest checkboxes | Can select MULTIPLE |
| 10 | Password field | Characters show as dots ●●● |
| 11 | Message textarea | Floating label, resizable |
| 12 | Terms checkbox | Must check to submit (required) |
| 13 | Submit button | Blue primary style |
| 14 | Reset button | Outline secondary style, clears all fields |
| 15 | Try submitting empty | Browser shows "Please fill out this field" |
| 16 | Resize to mobile | Form stacks vertically, still looks good |

---

## 📋 Quick Reference — Form Tags & Attributes

### Tags

| Tag | Purpose | Self-Closing? |
|-----|---------|---------------|
| `<form>` | Container for all form inputs | No |
| `<input>` | Single-line input (many types) | Yes |
| `<label>` | Text label for an input | No |
| `<textarea>` | Multi-line text input | No |
| `<select>` | Dropdown container | No |
| `<option>` | Single dropdown option | No |
| `<optgroup>` | Group of dropdown options | No |
| `<button>` | Clickable button | No |
| `<fieldset>` | Groups related fields | No |
| `<legend>` | Title for a fieldset | No |

### Input Types

| Type | Creates | Browser Feature |
|------|---------|----------------|
| `text` | Plain text box | Auto-complete suggestions |
| `email` | Email field | Validates @ symbol |
| `tel` | Phone field | Numeric keyboard on mobile |
| `password` | Hidden text | Shows dots, prevents shoulder-surfing |
| `number` | Numeric field | Up/down arrows, min/max |
| `date` | Date picker | Calendar popup |
| `radio` | Single choice | Only one per group (same name) |
| `checkbox` | Multiple choices | Independent toggles |
| `submit` | Submit button | Triggers form submission |
| `reset` | Reset button | Clears all fields |
| `hidden` | Invisible data | Stores server tokens |

### Key Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `name` | Server identifier (required!) | `name="email"` |
| `id` | Page identifier (for label/CSS/JS) | `id="email"` |
| `value` | Pre-filled or option value | `value="male"` |
| `placeholder` | Ghost hint text | `placeholder="Type here"` |
| `required` | Must fill before submit | `required` |
| `minlength` | Minimum characters | `minlength="2"` |
| `maxlength` | Maximum characters | `maxlength="50"` |
| `min` | Minimum value (number/date) | `min="16"` |
| `max` | Maximum value (number/date) | `max="100"` |
| `disabled` | Grey out, can't interact | `disabled` |
| `readonly` | Can see but can't edit | `readonly` |
| `checked` | Pre-select radio/checkbox | `checked` |
| `selected` | Pre-select dropdown option | `selected` |
| `multiple` | Allow multi-select in dropdown | `multiple` |
| `for` | Links label to input's id | `for="email"` |
| `action` | Where form data is sent | `action="submit.php"` |
| `method` | How data is sent (GET/POST) | `method="POST"` |

### Bootstrap Form Classes

| Class | Applied To | Purpose |
|-------|-----------|---------|
| `form-control` | text/email/password/textarea | Styles the input |
| `form-select` | select | Styles the dropdown |
| `form-label` | label | Styles the label |
| `form-check` | wrapper div | Wraps radio/checkbox |
| `form-check-input` | radio/checkbox input | Styles the input |
| `form-check-label` | radio/checkbox label | Styles the label |
| `form-check-inline` | wrapper div | Horizontal layout |
| `form-floating` | wrapper div | Floating label pattern |
| `form-text` | small text div | Helper text below input |
| `form-control-lg` | input | Larger size |
| `form-control-sm` | input | Smaller size |
| `input-group` | wrapper div | Input with addon |
| `input-group-text` | span | Addon text/icon |

---

## 🧠 Key Takeaways

1. **`<form>` is the container** — every input must be inside it, with `action` and `method` set.

2. **GET vs POST** — GET shows data in URL (search forms), POST hides it in request body (login, contact forms).

3. **`<input>` is the Swiss Army knife** — change the `type` attribute and it becomes text, email, password, number, date, radio, checkbox, or button.

4. **Every input needs two things:**
   - A `<label>` (for the user) connected via `for`/`id`
   - A `name` attribute (for the server)

5. **Radio buttons share the same `name`** — that's how the browser makes them a group (pick only one).

6. **Checkboxes are independent** — even with the same name, you can select as many as you want.

7. **Bootstrap `form-control`** is the main class for styling inputs. Use `form-select` for dropdowns and `form-check` for radios/checkboxes.

8. **Floating labels** require input BEFORE label, and a `placeholder` attribute on the input.

9. **`required`, `minlength`, `maxlength`, `min`, `max`** provide basic browser-level validation — no JavaScript needed!

10. **No JavaScript validation yet** — the browser's built-in validation (from `required`, `type="email"`, etc.) is handling things for now. Real validation with custom messages comes in Session 9.

---

## 🏋️ Practice Challenges

Try these on your own to strengthen your forms knowledge:

### Challenge 1: File Upload Input

Add a file upload field where users can attach a document (resume, screenshot, etc.).

**Hints:**
- Use `<input type="file">`
- Bootstrap class: `form-control` (same as text inputs!)
- To accept only images: `accept="image/*"`
- To accept specific types: `accept=".pdf,.doc,.docx"`

```html
<div class="mb-3">
  <label for="attachment" class="form-label">
    Attach a File (optional)
  </label>
  <input type="file" class="form-control" id="attachment"
         name="attachment" accept=".pdf,.jpg,.png">
</div>
```

> **Note:** For file uploads to work, the form needs `enctype="multipart/form-data"` on the `<form>` tag.

### Challenge 2: Horizontal Form Layout

Create a form where labels are on the **left** and inputs are on the **right** (instead of stacked). This is common in settings pages.

**Hints:**
- Use `row` on each form group
- Label gets `col-sm-3 col-form-label`
- Input wrapper gets `col-sm-9`

```html
<div class="row mb-3">
  <label for="hName" class="col-sm-3 col-form-label">Name</label>
  <div class="col-sm-9">
    <input type="text" class="form-control" id="hName" name="name">
  </div>
</div>
<div class="row mb-3">
  <label for="hEmail" class="col-sm-3 col-form-label">Email</label>
  <div class="col-sm-9">
    <input type="email" class="form-control" id="hEmail" name="email">
  </div>
</div>
```

### Challenge 3: Range Slider — "Rate Us" (1-5)

Add a rating slider using `<input type="range">`.

**Hints:**
- Use `type="range"` with `min="1"`, `max="5"`, `step="1"`
- Bootstrap class: `form-range`
- Show the current value next to it using `<output>` or a `<span>`

```html
<div class="mb-3">
  <label for="rating" class="form-label">
    Rate Us: <span id="ratingValue">3</span> / 5
  </label>
  <input type="range" class="form-range" id="rating"
         name="rating" min="1" max="5" step="1" value="3">
</div>
```

> **Bonus:** In Session 9, we'll add JavaScript to update the "3 / 5" text as the slider moves!

---

## 🔬 Labs Covered in This Session

| Lab # | Experiment | How We Covered It |
|-------|-----------|-------------------|
| **12** | Simple form with text, number fields | Contact form with name, email, age, address-like fields |
| **13** | Advanced form: radio, checkbox, password, submit | Gender radios, interest checkboxes, secret code password, submit/reset |
| **26** | Bootstrap responsive form | Full form using `form-control`, `form-select`, `form-check`, floating labels, input groups, responsive grid layout |

---

## 👀 Next Session Preview

**Session 9: Form Validation + Regex** — We'll add **JavaScript validation** to this contact form:
- Custom error messages ("Please enter a valid 10-digit phone number")
- Regex patterns for email, phone, and name
- Bootstrap validation classes: `was-validated`, `is-valid`, `is-invalid`
- Real-time validation as the user types
- The form won't just look good — it'll be **smart**!

---

*Session 8 of 15 — Crash Course: Bootstrap + JavaScript — BCA Semester II, Mandsaur University, 2025-26*
