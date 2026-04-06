# Session 9: "Check Your Inputs" — Form Validation + Regex

**BCA Semester II | Mandsaur University | Web Technology (25BCA060)**

> **Session 9 of 15** | ⏱️ Duration: 2 hours  
> **Labs Covered:** Lab 17 (JS form validation with regex), Lab 30 (Bootstrap form validation)  
> **JavaScript Style:** ES6+ introduced — `let`, `const`, `addEventListener`

---

## 🎯 What We'll Build Today

Last session we built a beautiful Bootstrap contact form — but right now, a user can submit a completely **empty form** or type `"abc"` as their phone number and nothing stops them. That's like having a complaint box with no address label — useless!

Today we add a **security guard** (validation) to our form. Every field gets checked before the form is allowed to submit. We'll also learn **Regular Expressions (Regex)** — the most powerful pattern-matching tool in programming.

**By the end of this session, you'll have:**

- ✅ Empty field checks on all required fields
- ✅ Email format validation with regex
- ✅ Indian phone number validation (10 digits, starts with 6-9)
- ✅ Age range check (1–150)
- ✅ Message minimum length (10 characters)
- ✅ "Agree to terms" checkbox enforcement
- ✅ Real-time validation (errors appear as you type)
- ✅ Bootstrap green/red border feedback on every field

**What the validation looks like:**

```
┌──────────────────────────────────────────────┐
│               📬 Contact Us                   │
│  Full Name    [ Rahul Sharma         ] ✅     │
│  Email        [ abc@xyz          ]     ❌     │
│               ⚠ Please enter a valid email   │
│  Phone        [ 98765432         ]     ❌     │
│               ⚠ Enter 10-digit number        │
│  Message      [ Hi               ]     ❌     │
│               ⚠ At least 10 characters       │
│  ☑ I agree to terms                          │
│  [ Submit Form ]                              │
└──────────────────────────────────────────────┘
```

---

## 📌 New Concepts in This Session

| Concept | What It Does | Analogy |
|---------|-------------|---------|
| `let` | Declares a block-scoped variable (can be changed later) | 📝 A whiteboard — you can erase and rewrite |
| `const` | Declares a block-scoped variable (cannot be changed) | 🔒 A name plate — once engraved, it stays |
| `event.preventDefault()` | Stops the form from actually submitting / page from reloading | 🖐️ "RUKO! Let me check everything first" |
| `Regular Expression (Regex)` | A pattern that tests if a string matches a specific format | 🕵️ A bouncer checking your dress code at the door |
| `.test()` | Tests if a string matches a regex pattern — returns `true`/`false` | Bouncer says "Yes, you may enter" or "No, you can't" |
| `.trim()` | Removes spaces from the start and end of a string | ✂️ Cutting extra margin from a printout |
| `.value` | Gets what the user typed in a form field | Reading what someone wrote on a form |
| `addEventListener()` | Attaches a function to an event (click, input, submit) | "When someone rings the bell, open the door" |
| `classList.add()` / `classList.remove()` | Adds or removes CSS classes from an element | Putting on / taking off a uniform |
| `is-valid` / `is-invalid` | Bootstrap classes that show green ✅ or red ❌ borders | Traffic lights for form fields |
| `novalidate` | Tells the browser: "Don't validate — I'll do it myself with JS" | "Security guard says: I'll handle entry, not the gate" |

---

## 📖 Upgrading to Modern JavaScript — `let` and `const`

### The Big Announcement 🎉

Since Session 4, we've been using `var` for all our variables. It works, and you'll see it in tons of code online. But in 2015, JavaScript got a major update (ES6) with two **better** options: `let` and `const`.

> 🏠 **Analogy:** Think of `var` as an **old-style lock** — it works, but sometimes the key opens doors it shouldn't. `let` and `const` are **modern digital locks** — they only work exactly where they should.

### Comparison Table

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| **Can be changed?** | ✅ Yes | ✅ Yes | ❌ No |
| **Scope** | Entire function | Only within `{ }` block | Only within `{ }` block |
| **Can declare twice?** | ✅ Yes (risky!) | ❌ No (error) | ❌ No (error) |
| **Use when?** | Legacy code | Value changes over time | Value stays the same |
| **Modern preference** | Avoid | ✅ Good | ✅✅ Best default |

### See the Difference

```javascript
// --- var: leaks out of blocks ---
if (true) {
    var city = "Mandsaur";
}
console.log(city); // "Mandsaur" — it leaked out of the if block! 😱

// --- let: stays inside its block ---
if (true) {
    let district = "Mandsaur";
}
console.log(district); // ❌ ERROR: district is not defined (good!)

// --- const: can't be changed ---
const collegeName = "Mandsaur University";
collegeName = "Some Other Place"; // ❌ ERROR: Assignment to constant variable
```

### The Rule of Thumb 👍

> 📌 **From now on:**
> 1. **Use `const` by default** — most variables don't need to change
> 2. **Switch to `let`** only when you need to reassign the value
> 3. **Avoid `var`** — it still works, but `let`/`const` are safer
>
> You'll still see `var` in older tutorials, Stack Overflow answers, and legacy code. That's fine — just know that modern code prefers `let` and `const`.

### Quick Examples for This Session

```javascript
// Things that DON'T change — use const
const contactForm = document.getElementById('contactForm');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[6-9]\d{9}$/;

// Things that DO change — use let
let isValid = true;     // will become false if validation fails
let errorCount = 0;     // will increase as we find errors
```

---

## 📖 `event.preventDefault()` — Stop the Page from Reloading

### The Problem

When you click a Submit button inside a `<form>`, the browser's **default behavior** is to:
1. Collect all form data
2. Send it to the URL in the `action` attribute (or reload the current page)
3. The page refreshes, and everything resets

But we don't want that! We want to **check the data first** using JavaScript. If there are errors, we want to show messages — not reload the page and lose everything.

### The Solution

```javascript
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();  // STOP! Don't reload the page!
    
    // Now we can safely check all the fields...
});
```

> 🏠 **Analogy:** Imagine you're at a post office. You hand your letter to the clerk (click Submit). `preventDefault()` is like the clerk saying: "Ruko! Let me check if you've written the address correctly, put the right stamp, and sealed the envelope. Tab tak main isko send nahi karunga." (I won't send it until then.)

📌 **`addEventListener('submit', function(event) {...})`** — This says: "When the form is submitted, run this function." The `event` parameter contains information about what happened, and `event.preventDefault()` cancels the default action.

---

## 📖 Accessing Form Values

To validate a field, we first need to **read** what the user typed:

```javascript
const nameField = document.getElementById('fullName');
const cleanName = nameField.value.trim();  // "Rahul Sharma" (spaces removed)
```

📌 **`.value`** — Every form element (`<input>`, `<textarea>`, `<select>`) has a `.value` property that returns what the user typed, as a **string**.

📌 **`.trim()`** — Removes whitespace from both ends. `"  hello  ".trim()` → `"hello"`.

### Different Field Types

| Field Type | How to Read Value | Returns |
|-----------|-------------------|---------|
| Text input | `element.value` | `"Rahul Sharma"` (string) |
| Number input | `element.value` | `"21"` (string! use `Number()` to convert) |
| Textarea | `element.value` | `"This is my message..."` |
| Checkbox | `element.checked` | `true` or `false` |
| Select dropdown | `element.value` | `"bca"` (selected option's value) |

> ⚠️ **Common Mistake:** `document.getElementById('age').value` returns `"21"` (a string), not `21` (a number). Use `Number(element.value)` to convert it for number comparisons!

---

## 📖 Regular Expressions (Regex) — The Bouncer of Your Form

### What Is a Regex?

A **Regular Expression** (regex or regexp) is a special pattern that describes what a valid string looks like. JavaScript uses regex to test whether an input matches a specific format.

> 🕵️ **Analogy:** Imagine a bouncer at a college fest. The rule is: "Only students with valid college ID cards can enter." The bouncer doesn't check every single detail — he checks a **pattern**: Is it a card? Does it have a photo? Does it have the college name? A regex works the same way — it checks if the input **matches a pattern**.

### Regex Syntax

A regex is written between two forward slashes `/pattern/`. The `.test()` method checks if a string matches — it returns `true` or `false`:

```javascript
const phoneRegex = /^[6-9]\d{9}$/;

phoneRegex.test("9876543210");  // true  ✅
phoneRegex.test("1234567890");  // false ❌ (starts with 1)
phoneRegex.test("98765");       // false ❌ (only 5 digits)
```

### Email Regex — Character by Character Breakdown

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

Let's break this down piece by piece:

| Part | Meaning | Example Match |
|------|---------|---------------|
| `/` | Start of regex | — |
| `^` | "String must START here" (no junk before) | — |
| `[^\s@]` | Any character EXCEPT whitespace (`\s`) or `@` | `r`, `a`, `h`, `u`, `l` |
| `+` | "One or more" of the previous character set | `rahul`, `priya.sharma` |
| `@` | Literal `@` symbol (must appear exactly once) | `@` |
| `[^\s@]+` | One or more chars that aren't spaces or `@` | `gmail`, `university` |
| `\.` | Literal dot `.` (backslash escapes the special meaning of `.`) | `.` |
| `[^\s@]+` | One or more chars that aren't spaces or `@` | `com`, `ac.in` |
| `$` | "String must END here" (no junk after) | — |
| `/` | End of regex | — |

**Test results:**

```javascript
emailRegex.test("rahul@gmail.com");       // true  ✅
emailRegex.test("priya.sharma@mu.ac.in"); // true  ✅
emailRegex.test("@gmail.com");            // false ❌ (nothing before @)
emailRegex.test("rahul sharma@gmail.com");// false ❌ (space in name)
```

### Indian Phone Number Regex — Character by Character Breakdown

```javascript
const phoneRegex = /^[6-9]\d{9}$/;
```

| Part | Meaning | Example |
|------|---------|---------|
| `^` | Start of string | — |
| `[6-9]` | First digit must be 6, 7, 8, or 9 | `9`, `8`, `7`, `6` |
| `\d` | Any digit (0–9) | `0`, `1`, ..., `9` |
| `{9}` | Exactly 9 of the previous (`\d`) | 9 more digits after the first |
| `$` | End of string | — |

**Why `[6-9]`?** In India, all mobile numbers start with 6, 7, 8, or 9. Numbers starting with 0-5 are either landlines or invalid for mobile.

**Test results:**

```javascript
phoneRegex.test("9876543210");  // true  ✅ (starts with 9, 10 digits total)
phoneRegex.test("6000000000");  // true  ✅ (starts with 6)
phoneRegex.test("5876543210");  // false ❌ (starts with 5)
phoneRegex.test("987654321");   // false ❌ (only 9 digits)
```

### Regex Quick Reference

| Symbol | Meaning | Example |
|--------|---------|---------|
| `^` / `$` | Start / End of string | `^Hello` matches "Hello World" |
| `.` | Any single character | `c.t` matches "cat", "cut" |
| `\d` | Any digit (0-9) | `\d\d` matches "42" |
| `\s` | Any whitespace | space, tab, newline |
| `[abc]` | Any one of a, b, or c | `[aeiou]` matches any vowel |
| `[a-z]` | Any lowercase letter | `[A-Z]` = uppercase |
| `[^abc]` | NOT a, b, or c | `[^0-9]` = any non-digit |
| `+` | One or more | `\d+` matches "1", "42", "12345" |
| `*` | Zero or more | `\d*` matches "", "1", "42" |
| `{n}` | Exactly n times | `\d{4}` matches "2025" |
| `{n,m}` | Between n and m times | `\d{1,3}` matches "1", "42", "150" |
| `\.` | Literal dot (escaped) | `\.com` matches ".com" |

---

## 📖 Bootstrap Validation Classes

Bootstrap 5 gives us beautiful validation feedback with just a few CSS classes. No custom CSS needed!

### How It Works

Add `novalidate` to your `<form>`, use `is-valid`/`is-invalid` classes on inputs via JavaScript, and add feedback `<div>`s after each input.

### The Classes

| Class | Applied To | What It Does |
|-------|-----------|-------------|
| `novalidate` | `<form>` | Disables browser's built-in validation (we use JS instead) |
| `is-valid` | `<input>`, `<textarea>`, `<select>` | Green border + shows `valid-feedback` div |
| `is-invalid` | `<input>`, `<textarea>`, `<select>` | Red border + shows `invalid-feedback` div |
| `valid-feedback` | `<div>` after input | Green success message (shown when sibling has `is-valid`) |
| `invalid-feedback` | `<div>` after input | Red error message (shown when sibling has `is-invalid`) |

### The Pattern for Each Field

```html
<!-- Each input follows this pattern -->
<div class="col-md-6">
    <label for="email" class="form-label">Email Address</label>
    <input type="email" class="form-control" id="email" name="email" required>
    <div class="valid-feedback">Looks good! ✅</div>
    <div class="invalid-feedback">Please enter a valid email address.</div>
</div>
```

> 💡 **How does Bootstrap know which message to show?** It's all based on CSS! When an input has the class `is-valid`, Bootstrap uses CSS to **show** the `valid-feedback` sibling and **hide** the `invalid-feedback` sibling. When it has `is-invalid`, the opposite happens. Both divs are always in the HTML — CSS controls which one is visible.

---

## 📖 Real-Time Validation — Checking As You Type

Nobody likes filling out an entire form, clicking Submit, and THEN seeing errors. Modern forms validate **in real time**.

### Two Key Events

| Event | When It Fires | Best For |
|-------|--------------|----------|
| `input` | Every keystroke / every character change | Phone number, email (instant feedback) |
| `blur` | When the user clicks/tabs away from the field | Name, message (don't annoy while they're still typing) |

### Adding Real-Time Validation

```javascript
// Method 1: addEventListener (recommended — keeps JS separate from HTML)
document.getElementById('phone').addEventListener('input', function() {
    validatePhone();
});

// Method 2: Inline event in HTML (works, but mixes JS into HTML)
// <input type="tel" id="phone" oninput="validatePhone()">
```

> 📌 **`addEventListener` vs `oninput`:** Both work, but `addEventListener` is the modern approach. It keeps your JavaScript in `.js` files, separate from your HTML. This is called **separation of concerns** — like keeping your notes in a notebook, not scribbled on your textbook.

---

## 🔨 Let's Build! — Step by Step

### Step 1: Update the Contact Form HTML

We need to add `novalidate`, feedback `<div>`s, and IDs to our existing contact form. **Replace** the contact section's form with this updated version:

```html
<!-- ==================== CONTACT SECTION ==================== -->
<section id="contact" class="py-5 bg-light">
    <div class="container">
        <h2 class="text-center mb-4">📬 Contact Us</h2>
        <p class="text-center text-muted mb-4">
            Have a question? Fill out the form below and we'll get back to you!
        </p>

        <div class="row justify-content-center">
            <div class="col-lg-8">
                <form id="contactForm" class="needs-validation" novalidate>
                    <div class="row g-3">

                        <!-- Full Name -->
                        <div class="col-md-6">
                            <label for="fullName" class="form-label">Full Name *</label>
                            <input type="text" class="form-control" id="fullName"
                                   name="fullName" placeholder="e.g. Rahul Sharma" required>
                            <div class="valid-feedback">Looks good! ✅</div>
                            <div class="invalid-feedback">Please enter your full name.</div>
                        </div>

                        <!-- Email -->
                        <div class="col-md-6">
                            <label for="email" class="form-label">Email Address *</label>
                            <input type="email" class="form-control" id="email"
                                   name="email" placeholder="e.g. rahul@gmail.com" required>
                            <div class="valid-feedback">Valid email! ✅</div>
                            <div class="invalid-feedback">
                                Please enter a valid email (e.g. name@example.com).
                            </div>
                        </div>

                        <!-- Phone -->
                        <div class="col-md-6">
                            <label for="phone" class="form-label">Phone Number *</label>
                            <input type="tel" class="form-control" id="phone"
                                   name="phone" placeholder="e.g. 9876543210" required>
                            <div class="valid-feedback">Valid Indian mobile number! ✅</div>
                            <div class="invalid-feedback">
                                Enter a 10-digit Indian mobile number (starts with 6-9).
                            </div>
                        </div>

                        <!-- Age -->
                        <div class="col-md-6">
                            <label for="age" class="form-label">Age *</label>
                            <input type="number" class="form-control" id="age"
                                   name="age" placeholder="e.g. 20" min="1" max="150" required>
                            <div class="valid-feedback">Valid age! ✅</div>
                            <div class="invalid-feedback">
                                Age must be between 1 and 150.
                            </div>
                        </div>

                        <!-- Subject (Dropdown) -->
                        <div class="col-md-6">
                            <label for="subject" class="form-label">Subject</label>
                            <select class="form-select" id="subject" name="subject">
                                <option value="" selected>Choose a subject...</option>
                                <option value="admission">Admission Inquiry</option>
                                <option value="feedback">Feedback</option>
                                <option value="complaint">Complaint</option>
                                <option value="other">Other</option>
                            </select>
                            <div class="valid-feedback">Selected! ✅</div>
                            <div class="invalid-feedback">Please select a subject.</div>
                        </div>

                        <!-- Message -->
                        <div class="col-12">
                            <label for="message" class="form-label">Message *</label>
                            <textarea class="form-control" id="message" name="message"
                                      rows="4" placeholder="Write your message here (at least 10 characters)..."
                                      required></textarea>
                            <div class="valid-feedback">Message looks good! ✅</div>
                            <div class="invalid-feedback">
                                Message must be at least 10 characters long.
                            </div>
                            <small class="text-muted">
                                <span id="charCount">0</span> / 10 minimum characters
                            </small>
                        </div>

                        <!-- Agree to Terms -->
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox"
                                       id="agreeTerms" name="agreeTerms" required>
                                <label class="form-check-label" for="agreeTerms">
                                    I agree to the terms and conditions *
                                </label>
                                <div class="invalid-feedback">
                                    You must agree to the terms before submitting.
                                </div>
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <div class="col-12 text-center">
                            <button type="submit" class="btn btn-primary btn-lg px-5"
                                    id="submitBtn">
                                📩 Submit Form
                            </button>
                        </div>

                    </div><!-- end row -->
                </form>

                <!-- Success message (hidden by default) -->
                <div id="successMessage" class="alert alert-success mt-4 text-center d-none">
                    <h4>🎉 Thank You!</h4>
                    <p>Your message has been submitted successfully. We'll get back to you soon!</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

📌 **`novalidate`** — This attribute on the `<form>` tag tells the browser: "Don't show your built-in validation popups. I have my own JavaScript validation that will handle everything." Without this, you'd see both the browser's AND your custom error messages.

📌 **`valid-feedback` / `invalid-feedback`** — These `<div>` elements are **hidden by default**. They only become visible when Bootstrap detects `is-valid` or `is-invalid` on the sibling input. It's all controlled by CSS — no extra JavaScript needed for showing/hiding these divs!

---

### Step 2: Write the Complete Validation JavaScript

Add this to your `<script>` tag (or `js/script.js` file), **after** the closing `</form>` tag:

```javascript
// ============================================================
// FORM VALIDATION — Session 9
// Using const and let (ES6+) from now on!
// ============================================================

// --- Constants (these never change) ---
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

// Regex patterns
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[6-9]\d{9}$/;

// --- Helper function: mark a field as VALID ---
function setValid(field) {
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
}

// --- Helper function: mark a field as INVALID ---
function setInvalid(field) {
    field.classList.remove('is-valid');
    field.classList.add('is-invalid');
}

// --- Helper function: reset a field (no valid/invalid state) ---
function resetField(field) {
    field.classList.remove('is-valid');
    field.classList.remove('is-invalid');
}

// ============================================================
// INDIVIDUAL FIELD VALIDATION FUNCTIONS
// ============================================================

// 1. Validate Full Name (non-empty)
function validateName() {
    const field = document.getElementById('fullName');
    const value = field.value.trim();

    if (value === '') {
        setInvalid(field);
        return false;
    }
    setValid(field);
    return true;
}

// 2. Validate Email (regex pattern)
function validateEmail() {
    const field = document.getElementById('email');
    const value = field.value.trim();

    if (!emailRegex.test(value)) {
        setInvalid(field);
        return false;
    }
    setValid(field);
    return true;
}

// 3. Validate Phone (Indian mobile: 10 digits, starts with 6-9)
function validatePhone() {
    const field = document.getElementById('phone');
    const value = field.value.trim();

    if (!phoneRegex.test(value)) {
        setInvalid(field);
        return false;
    }
    setValid(field);
    return true;
}

// 4. Validate Age (between 1 and 150)
function validateAge() {
    const field = document.getElementById('age');
    const value = field.value.trim();
    const age = Number(value);

    if (value === '' || isNaN(age) || age < 1 || age > 150) {
        setInvalid(field);
        return false;
    }
    setValid(field);
    return true;
}

// 5. Validate Message (minimum 10 characters)
function validateMessage() {
    const field = document.getElementById('message');
    const value = field.value.trim();

    // Update character counter
    const charCount = document.getElementById('charCount');
    charCount.textContent = value.length;

    // Change counter color based on length
    if (value.length >= 10) {
        charCount.className = 'text-success fw-bold';
    } else {
        charCount.className = 'text-danger';
    }

    if (value.length < 10) {
        setInvalid(field);
        return false;
    }
    setValid(field);
    return true;
}

// 6. Validate Agree to Terms (must be checked)
function validateTerms() {
    const field = document.getElementById('agreeTerms');

    if (!field.checked) {
        setInvalid(field);
        return false;
    }
    setValid(field);
    return true;
}

// ============================================================
// REAL-TIME VALIDATION (fires as user types or leaves field)
// ============================================================

document.getElementById('fullName').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('input', validatePhone);
document.getElementById('age').addEventListener('blur', validateAge);
document.getElementById('message').addEventListener('input', validateMessage);
document.getElementById('agreeTerms').addEventListener('change', validateTerms);

// ============================================================
// FORM SUBMIT — Check everything at once
// ============================================================

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop page reload!

    // Run ALL validations — use let because isValid will change
    let isValid = true;

    if (!validateName())    { isValid = false; }
    if (!validateEmail())   { isValid = false; }
    if (!validatePhone())   { isValid = false; }
    if (!validateAge())     { isValid = false; }
    if (!validateMessage()) { isValid = false; }
    if (!validateTerms())   { isValid = false; }

    // If ALL fields are valid, show success message
    if (isValid) {
        successMessage.classList.remove('d-none');
        contactForm.reset();

        // Remove all valid/invalid classes after reset
        const allFields = contactForm.querySelectorAll('.is-valid, .is-invalid');
        allFields.forEach(function(field) {
            resetField(field);
        });

        // Hide success message after 5 seconds
        setTimeout(function() {
            successMessage.classList.add('d-none');
        }, 5000);
    } else {
        successMessage.classList.add('d-none');
    }
});
```

Let's walk through the key parts:

📌 **Helper functions (`setValid`, `setInvalid`, `resetField`):** Instead of writing `classList.add` and `classList.remove` everywhere, we created helper functions. This follows the DRY principle — **D**on't **R**epeat **Y**ourself. If we need to change how validation looks, we change it in ONE place.

📌 **Each validation function returns `true` or `false`:** This is important! In the submit handler, we use these return values to decide if the entire form is valid. Even if one function returns `false`, we set `isValid = false` and stop the form from submitting.

📌 **`let isValid = true`:** Notice we use `let` here, not `const`. Why? Because `isValid` starts as `true` but gets changed to `false` if any validation fails. Since the value changes, we need `let`.

📌 **`querySelectorAll('.is-valid, .is-invalid')`:** This finds ALL elements that have either the `is-valid` or `is-invalid` class. We use it to clean up after a successful submission.

📌 **`forEach(function(field) {...})`:** This loops through each element found by `querySelectorAll` and runs the function for each one. We'll learn more about `forEach` in a later session.

---

### Step 3: Test Your Validation

Open the page and try these test cases:

| Test | Try This | Expected |
|------|----------|----------|
| Empty submit | Click Submit with all fields empty | All required fields turn RED |
| Bad email | Type `rahul` in email, click away | RED: "Please enter a valid email" |
| Good email | Type `rahul@gmail.com` | GREEN: "Valid email! ✅" |
| Bad phone | Type `12345` | RED (doesn't start with 6-9) |
| Good phone | Type `9876543210` | GREEN ✅ |
| Bad age | Type `0` or `200` | RED (out of range) |
| Short message | Type `Hi` | RED + counter shows "2 / 10" |
| Valid message | Type 10+ characters | GREEN + counter turns green |
| No checkbox | Submit without checking terms | RED error on checkbox |
| All valid | Fill everything correctly, submit | Success alert, form resets |

---

## ✅ Checkpoint

Before moving on, verify that everything works:

| # | Check | Expected Result |
|---|-------|----------------|
| 1 | Click Submit with empty form | All required fields show red borders + error messages |
| 2 | Type invalid email, click away | Red border with "Please enter a valid email" |
| 3 | Type `9876543210` in phone | Green border — valid Indian number |
| 4 | Type age `0` or `200` | Red border — out of range |
| 5 | Type short message (`hi`) | Red border + character counter shows "2 / 10" in red |
| 6 | Fill everything correctly, submit | Success alert appears, form resets to blank |

---

## 🔍 Quick Reference

### Validation Checks Summary

| Field | Check | Code |
|-------|-------|------|
| Name | Not empty | `value.trim() === ''` |
| Email | Matches email format | `emailRegex.test(value)` |
| Phone | 10-digit Indian number | `phoneRegex.test(value)` |
| Age | Between 1 and 150 | `age < 1 \|\| age > 150` |
| Message | At least 10 characters | `value.length < 10` |
| Checkbox | Must be checked | `!checkbox.checked` |

### Regex Patterns Used

| Purpose | Pattern | What It Matches |
|---------|---------|----------------|
| Email | `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` | `user@domain.com` |
| Indian Phone | `/^[6-9]\d{9}$/` | `9876543210` |
| PIN Code | `/^\d{6}$/` | `458001` (6 digits) |
| Password (strong) | `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/` | `Pass1234` (8+ chars, upper, lower, digit) |

### Bootstrap Validation Classes

| Class | Applied To | Effect |
|-------|-----------|--------|
| `novalidate` | `<form>` | Disable browser validation |
| `needs-validation` | `<form>` | Mark form for custom validation |
| `is-valid` | `<input>` | Green border |
| `is-invalid` | `<input>` | Red border |
| `valid-feedback` | `<div>` | Green message (shown when sibling has `is-valid`) |
| `invalid-feedback` | `<div>` | Red message (shown when sibling has `is-invalid`) |

### `var` vs `let` vs `const`

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| Scope | Function | Block `{ }` | Block `{ }` |
| Reassign | ✅ | ✅ | ❌ |
| Redeclare | ✅ | ❌ | ❌ |
| Best for | Legacy code | Values that change | Values that don't change |

---

## 📝 Key Takeaways

1. **`let` and `const` are modern JavaScript** — use `const` by default, `let` when the value changes, avoid `var`.
2. **`event.preventDefault()`** stops the form from reloading the page, giving us time to validate.
3. **Regular Expressions (Regex)** are patterns that test if a string matches a specific format.
4. **`.test()` returns `true` or `false`** — the simplest way to validate input against a regex.
5. **Real-time validation** using `input` and `blur` events makes forms feel professional.
6. **Bootstrap's `is-valid`/`is-invalid` classes** give instant green/red feedback without writing CSS.
7. **Helper functions reduce repetition** — write `setValid()` once, use it everywhere (DRY principle).
8. **Always validate on BOTH submit AND in real-time** — the submit handler catches anything the user skipped.
9. **`novalidate` on the form** is essential — without it, the browser's built-in validation competes with your JS.

---

## 🏋️ Practice Challenges

### Challenge 1: Character Counter for Message (⭐ Easy)

We already have the counter showing `0 / 10 minimum characters`. Enhance it:
- Add a **maximum limit** of 500 characters
- Display `"23 / 500 characters"` format
- When the user reaches 450+, change counter to **orange** (`text-warning`)
- At 500, change to **red** (`text-danger`) and use `maxlength="500"` on the `<textarea>`

```javascript
// In validateMessage(), update the counter:
const maxChars = 500;
charCount.textContent = value.length + ' / ' + maxChars + ' characters';

if (value.length >= maxChars) {
    charCount.className = 'text-danger fw-bold';
} else if (value.length >= 450) {
    charCount.className = 'text-warning';
} else if (value.length >= 10) {
    charCount.className = 'text-success';
} else {
    charCount.className = 'text-danger';
}
```

### Challenge 2: Indian PIN Code Validation (⭐⭐ Medium)

Add a "PIN Code" field to the contact form and validate it:

**Requirements:**
- Must be exactly 6 digits
- Must not start with 0
- Show the city/state based on the first digit (just for fun!)

**Regex:** `/^[1-9]\d{5}$/`

**Breakdown:**
| Part | Meaning |
|------|---------|
| `^` | Start of string |
| `[1-9]` | First digit is 1-9 (no PIN starts with 0) |
| `\d{5}` | Followed by exactly 5 more digits |
| `$` | End of string |

**Add this HTML:**
```html
<div class="col-md-6">
    <label for="pincode" class="form-label">PIN Code</label>
    <input type="text" class="form-control" id="pincode"
           name="pincode" placeholder="e.g. 458001" maxlength="6">
    <div class="valid-feedback">Valid PIN code! ✅</div>
    <div class="invalid-feedback">Enter a valid 6-digit Indian PIN code.</div>
</div>
```

**Add this JavaScript:**
```javascript
const pinRegex = /^[1-9]\d{5}$/;

function validatePincode() {
    const field = document.getElementById('pincode');
    const value = field.value.trim();

    if (value === '') {
        resetField(field);
        return true; // PIN is optional
    }

    if (!pinRegex.test(value)) {
        setInvalid(field);
        return false;
    }
    setValid(field);
    return true;
}

document.getElementById('pincode').addEventListener('input', validatePincode);
```

### Challenge 3: Password Strength Meter (⭐⭐⭐ Hard)

Add a password field with a **visual strength meter** that updates as the user types:

**Strength levels:**
- **Weak** (red) — Less than 8 characters
- **Strong** (green) — 8+ characters with uppercase, lowercase, and digit

**Regex patterns:**
```javascript
const hasLowercase = /[a-z]/;
const hasUppercase = /[A-Z]/;
const hasDigit = /\d/;
const hasMinLength = /.{8,}/;
```

**Add this HTML after the password input:**
```html
<div class="col-md-6">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password"
           name="password" placeholder="Create a strong password">
    <div class="progress mt-2" style="height: 6px;">
        <div class="progress-bar" id="strengthBar"
             role="progressbar" style="width: 0%"></div>
    </div>
    <small id="strengthText" class="text-muted">Enter a password</small>
</div>
```

**Write the JavaScript yourself!** Use a `let score = 0;` variable. For each regex that `.test()` returns `true`, increment the score. Then use `if/else if` to set the bar width and color based on the score.

---

## 🔗 Labs Covered in This Session

| Lab # | Experiment Description | How We Covered It |
|-------|----------------------|-------------------|
| **Lab 17** | JavaScript form validation using regex — validate age, email, and phone number | ✅ Complete form validation with regex patterns for email (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`), Indian phone (`/^[6-9]\d{9}$/`), age range (1–150), message length (10+ chars), and checkbox enforcement. Each field validated individually and on form submit. |
| **Lab 30** | Bootstrap form validation with `was-validated`, `is-valid`, `is-invalid` classes and JavaScript | ✅ Used `novalidate` + `needs-validation` on form, `is-valid`/`is-invalid` classes toggled via JS, `valid-feedback`/`invalid-feedback` divs for custom error messages, real-time validation with `input`/`blur`/`change` events. |

---

## ⏭️ Next Session Preview

### Session 10: Login System + localStorage

In the next session, we'll build a **Login Modal** for our class website. You'll learn:

- 📖 **Bootstrap Modals** — popup dialogs that overlay the page (for login/signup forms)
- 📖 **`localStorage`** — save data in the browser that persists even after closing the tab
- 📖 **Template Literals** — `` `Hello ${name}!` `` instead of `"Hello " + name + "!"` (more ES6 goodness!)
- 📖 **JSON** — `JSON.stringify()` and `JSON.parse()` for storing objects in localStorage
- 📖 **Conditional rendering** — show "Welcome, Rahul!" if logged in, "Login" button if not

> 💡 **Fun preview:** Your website will remember who's logged in — even after closing the browser! Just like how Flipkart or Amazon remembers your name when you come back.

**Labs covered next time:** Lab 24 (Login + database using localStorage) ✅

---

*Session 9 of 15 — Crash Course: Bootstrap + JavaScript — BCA Semester II, Mandsaur University, 2025-26*
