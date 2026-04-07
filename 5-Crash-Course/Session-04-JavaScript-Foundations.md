# Session 04: Your First Script — JavaScript Foundations

🔬 **Type:** Practical Lab  
🕐 **Duration:** 2 Hours  
🎯 **Labs Covered:** Lab 18 (JS alert on page load), Lab 21 (JS hidden div)  
📚 **Keywords:** JavaScript, Variables, Functions, DOM, Events, alert, prompt, console.log  

---

## 🎯 What We'll Build Today

Today is a **landmark day** — you're writing your **first JavaScript code!**

We won't add any new visual sections to our class website. Instead, we'll bring the existing page **to life** by adding **interactivity**:

| # | Feature | What It Does |
|---|---------|--------------|
| 1 | Welcome Alert | A pop-up greets visitors: "Welcome to BCA 2025-26! 🎓" |
| 2 | Console Message | A secret message visible only in DevTools (F12) |
| 3 | Personalized Greeting | A prompt asks "What is your name?" and displays a welcome message |
| 4 | Show/Hide Toggle | A button that shows or hides the info cards section |
| 5 | Click Counter | A button that counts how many times you've clicked it |

> **Why no new section?** Because JavaScript is a **completely new language**. Today we focus 100% on understanding how JavaScript works. The HTML stays the same — we just add **superpowers** to it.

---

## 📌 New Concepts Table

No new HTML tags today! Instead, here are the **JavaScript concepts** you'll learn:

| Concept | What It Does | Example |
|---------|-------------|---------|
| `var` | Declares a variable (a named container for data) | `var name = "Rahul";` |
| `function` | Defines a reusable block of code | `function greet() { }` |
| `alert()` | Shows a pop-up message box | `alert("Hello!");` |
| `console.log()` | Prints a message in the DevTools console | `console.log("debug");` |
| `prompt()` | Asks the user for input via a dialog box | `prompt("Your name?");` |
| `document.getElementById()` | Finds an HTML element by its `id` attribute | `document.getElementById("msg")` |
| `.textContent` | Reads or changes the text inside an element | `el.textContent = "Hi";` |
| `.style.display` | Controls whether an element is visible or hidden | `el.style.display = "none";` |
| `onclick` | Runs a function when an element is clicked | `onclick="doSomething()"` |
| `if / else` | Makes decisions based on conditions | `if (age >= 18) { }` |

While this session focuses on JavaScript, our code also uses a few **new Bootstrap classes** and one key **HTML element**:

| Concept | What It Does | Example |
|---------|-------------|---------|
| `<script>` | HTML tag that contains or links JavaScript code | `<script> ... </script>` |
| `btn-outline-primary` | Outlined (not filled) primary-colored button | `class="btn btn-outline-primary"` |
| `btn-success` | Green filled button for positive/success actions | `class="btn btn-success"` |
| `text-muted` | Light gray text color for secondary information | `class="text-muted"` |
| `text-primary` | Primary blue text color | `class="text-primary"` |
| `fs-1` | Font size level 1 — largest (2.5rem) | `class="fs-1"` |
| `fs-5` | Font size level 5 — slightly larger than default (1.25rem) | `class="fs-5"` |

---

## 📖 What is JavaScript?

### The Three Languages of the Web

Think of building a webpage like building a **human body**:

| Language | Role | Body Analogy |
|----------|------|--------------|
| **HTML** | Structure & Content | 🦴 The **skeleton** — bones, organs, the framework |
| **CSS** | Appearance & Style | 👔 The **clothing** — colors, fonts, layout, beauty |
| **JavaScript** | Behavior & Interaction | 💪🧠 The **muscles and brain** — movement, reactions, thinking |

Without JavaScript, your webpage is like a **beautiful mannequin in a shop window** — it looks good, but it can't move, can't respond, can't think. JavaScript makes it **come alive**.

📌 **Key Insight:** HTML and CSS are **not** programming languages. HTML is a markup language (it marks up content). CSS is a styling language. JavaScript is a **real programming language** — it has variables, functions, loops, and logic.

### A Brief History

- **Created in 1995** by **Brendan Eich** at Netscape — in just **10 days!**
- Originally called "Mocha," then "LiveScript," then renamed to "JavaScript" (to ride the popularity of Java — they're NOT related!)
- Today it's the **#1 most popular programming language** in the world
- It runs inside **every web browser** — Chrome, Firefox, Edge, Safari — no installation needed

### Where Does JavaScript Run?

JavaScript runs inside the **browser** (Chrome, Firefox, Edge). When you open a webpage, the browser loads HTML first, then CSS, then runs JavaScript. This is called **"client-side"** JavaScript — it runs on the user's computer, not on a server.

---

## 📖 Adding JavaScript to HTML

There are two ways to add JavaScript to your webpage:

### Method 1: Internal Script (We'll use this today)

Place a `<script>` tag inside your HTML file:

```html
<body>
    <!-- Your HTML content here -->

    <script>
        alert("Hello from JavaScript!");
    </script>
</body>
```

### Method 2: External Script (We'll use this in Session 12)

Create a separate `.js` file and link it: `<script src="js/script.js"></script>`

📌 **Why do we place `<script>` at the END of `<body>`?**

Think of it like a **restaurant**. The HTML is the food being plated. JavaScript is the waiter. If the waiter tries to serve before the food is ready, there's nothing to give! Place `<script>` at the bottom so HTML loads first.

---

## 📖 Variables — Labeled Jars for Your Data

### What is a Variable?

📌 **Analogy: A variable is like a labeled jar in your kitchen.**

Imagine you have jars on your kitchen shelf:
- One jar is labeled **"Sugar"** — inside it, you keep sugar
- Another is labeled **"Tea Leaves"** — inside it, you keep tea leaves
- You can **change** what's inside (refill it), but the label stays

In JavaScript, a **variable** is a named container that stores a value:

```javascript
var studentName = "Rahul";      // Jar labeled "studentName" contains "Rahul"
var age = 20;                   // Jar labeled "age" contains 20
var isPresent = true;           // Jar labeled "isPresent" contains true
```

Breaking down the syntax: `var` (keyword) → `studentName` (label) → `=` (assignment) → `"Rahul"` (the value inside the jar).

### Naming Rules for Variables

| Rule | ✅ Valid | ❌ Invalid |
|------|---------|-----------|
| Use letters, numbers, `_`, `$` | `studentName` | `student-name` |
| Cannot start with a number | `age1` | `1age` |
| No spaces allowed | `firstName` | `first name` |
| Case-sensitive | `Name` ≠ `name` | — |
| Use **camelCase** convention | `totalMarks` | `TotalMarks`, `total_marks` |

📌 **What is camelCase?** It's like a camel's humps 🐫 — the first word is lowercase, and every next word starts with a capital letter: `myFirstVariable`, `studentRollNumber`, `isLoggedIn`.

### You Can Change a Variable's Value

```javascript
var city = "Mandsaur";
city = "Indore";            // No 'var' needed for reassignment
```

---

## 📖 Data Types — What Can Go Inside the Jar?

JavaScript has several data types, but today we'll focus on the **Big Three**:

### 1. String — Text Data

A string is text wrapped in quotes — think of it as a **garland of characters** strung together.

```javascript
var collegeName = "Mandsaur University";    // Double quotes ✅
var city = 'Mandsaur';                      // Single quotes ✅ — either works
```

📌 **Strings must be in quotes.** Without quotes, JavaScript thinks it's a variable name, not text.

### 2. Number — Numeric Data

Numbers are written **without** quotes:

```javascript
var totalStudents = 60;       // Integer (whole number)
var percentage = 85.5;        // Decimal (floating point)
```

📌 **Common Mistake:** `var age = "20";` is a **string** (quotes!). `var age = 20;` is a **number** (no quotes).

### 3. Boolean — True or False

A boolean is like a **light switch** — only `true` or `false`:

```javascript
var isStudent = true;          // Yes, they are a student
var hasSubmitted = false;      // No, they haven't submitted
```

📌 **When do we use booleans?** Whenever you need a yes/no answer: Is the user logged in? Has the form been submitted?

---

## 📖 Output Methods — Talking to the User (and Yourself)

JavaScript gives you several ways to display information:

### 1. `alert("message")` — The Pop-up Box

```javascript
alert("Welcome to BCA Batch 2025-26!");
```

📌 **Analogy:** An alert is like a **loudspeaker announcement** in college — everything stops until the announcement is over. Use sparingly — only for important one-time messages!

### 2. `console.log("message")` — The Developer's Secret Diary

```javascript
console.log("Page loaded successfully!");
console.log("Student count: " + 60);
```

📌 **Analogy:** `console.log` is like writing in your personal diary — **only you can see it**. Messages appear in the browser's **DevTools Console** (press F12). This is the most important tool for finding bugs!

### 3. `prompt("question")` — Asking the User

```javascript
var name = prompt("What is your name?");
```

📌 **Analogy:** A prompt is like a **teacher asking a question in class** — it waits for an answer. Returns what the user typed (as a string), `null` if they click Cancel, or `""` if they click OK without typing.

### 4. `document.write("message")` — Writing on the Page (Avoid!)

📌 **Warning:** `document.write("Hello!")` writes directly on the page but **overwrites everything** if used after the page loads. It's rarely used in practice — you'll see it in textbooks, but always use DOM manipulation instead.

---

## 📖 The DOM — Your Page's Family Tree

### What is the DOM?

**DOM** stands for **Document Object Model**. It's the browser's internal representation of your HTML page as a **tree of objects**.

📌 **Analogy: The DOM is like a family tree.**

```
document (👴 Great-Grandparent)
  └── html (👨 Grandparent)
        ├── head (👩 Parent)
        │     ├── title
        │     └── meta
        └── body (👨 Parent)
              ├── nav
              ├── div (hero)
              ├── section (about)
              └── script
```

Every HTML tag becomes a **node** (a member) in this tree. JavaScript can:
- **Find** any node: "Where is the element with id 'welcomeMessage'?"
- **Read** its content: "What text does it contain?"
- **Change** its content: "Replace that text with something new!"
- **Hide/Show** it: "Make this element invisible!"

### `document.getElementById("id")` — Finding an Element

This is the most important DOM method you'll learn today.

```javascript
var heading = document.getElementById("mainTitle");
```

📌 **Analogy:** Think of `getElementById` as calling someone by their **roll number** in class. Every student (element) has a unique roll number (id). When the teacher (JavaScript) calls "Roll number 15!", exactly one student responds.

**Important:** The `id` must match **exactly** (case-sensitive), and each `id` must be unique on the page.

### `.textContent` — Reading or Changing Text

```javascript
var currentText = document.getElementById("mainTitle").textContent;   // Read
document.getElementById("mainTitle").textContent = "Welcome to BCA!"; // Change
```

### `.style.display` — Hiding and Showing Elements

```javascript
document.getElementById("infoCards").style.display = "none";   // Hide
document.getElementById("infoCards").style.display = "block";  // Show
```

📌 **Analogy:** `.style.display = "none"` is like putting a **blanket over a TV** — the TV is still there, but you can't see it. `.style.display = "block"` removes the blanket.

---

## 📖 Functions — Reusable Recipes

### What is a Function?

📌 **Analogy: A function is like a recipe for making chai.**

You write the recipe once:
```
Recipe: makeChai
  1. Boil water
  2. Add tea leaves
  3. Add milk and sugar
  4. Strain and serve
```

Then whenever someone wants chai, you just say **"makeChai!"** — you don't rewrite the recipe every time.

In JavaScript:

```javascript
function makeChai() {
    console.log("Boil water, add tea leaves, add milk, strain and serve!");
}

makeChai();   // Calling the function (actually making the chai)
```

### Function Syntax

```javascript
function greet() {         // 'function' keyword + name + parentheses
    // Code to run goes inside { curly braces }
}
```

### Functions with Parameters

Parameters are like **ingredients** you pass to the recipe:

```javascript
function greet(studentName) {
    alert("Namaste, " + studentName + "! Welcome to class.");
}

greet("Rahul");    // Namaste, Rahul! Welcome to class.
greet("Priya");    // Namaste, Priya! Welcome to class.
```

📌 **`studentName` is the parameter** — a placeholder replaced with the actual value when you call the function.

---

## 📖 Events — When Things Happen

### What is an Event?

📌 **Analogy: Events are like doorbells.** When someone presses your doorbell (the event), you open the door (the response). In JavaScript, when a user **clicks** a button (the event), a **function runs** (the response).

### The `onclick` Event

```html
<button onclick="sayHello()">Click Me</button>

<script>
function sayHello() {
    alert("Hello! You clicked the button!");
}
</script>
```

User clicks the button → **click event fires** → browser sees `onclick="sayHello()"` → calls the function → alert appears.

---

## 📖 if/else — Making Decisions

### What is if/else?

📌 **Analogy:** `if/else` is like a **traffic signal**:
- **If** the light is green → drive
- **Else** → stop

In JavaScript:

```javascript
var marks = 75;

if (marks >= 40) {
    console.log("Pass! Congratulations! 🎉");
} else {
    console.log("Fail. Better luck next time.");
}
```

### Comparison Operators

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `===` | Strictly equal to | `5 === 5` | `true` |
| `!==` | Not equal to | `5 !== 3` | `true` |
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `3 < 7` | `true` |
| `>=` | Greater than or equal | `5 >= 5` | `true` |
| `<=` | Less than or equal | `3 <= 2` | `false` |

📌 **Why `===` and not `==`?**

`==` (loose equality) does type conversion, which leads to **surprises**:
```javascript
"5" == 5      // true  (JavaScript converts the string to a number — confusing!)
"5" === 5     // false (different types: string vs number — correct!)
```

**Rule: Always use `===` (strict equality).** It checks both the value AND the type. No surprises.

---

## 🔨 Let's Build! Step-by-Step Lab

Time to add JavaScript to our class website! Open the `index.html` you've been building since Session 1.

### Step 1: Review Your Current Page

Your page from Sessions 1-3 should have: a responsive navbar, hero carousel (3 slides), about section (2-column grid), and three info cards. If anything is missing, the complete code below has everything.

### Step 2: Add a Welcome Message Placeholder

Right **after** the hero carousel section and **before** the about section, add this paragraph:

```html
<!-- Welcome Message (Updated by JavaScript) -->
<p id="welcomeMessage" class="text-center text-muted fs-5 my-3">Welcome, visitor! 👋</p>
```

📌 **Why do we add this?** JavaScript will find this element by its `id` and change its text to show the visitor's name.

📌 **Bootstrap classes used:** `text-center` centers text (from Session 2), `text-muted` makes it light gray (new!), `fs-5` sets font size to 1.25rem (new!), and `my-3` adds 1rem vertical margin (spacing pattern from Session 3). The `id="welcomeMessage"` attribute gives JavaScript a handle to find this element.

### Step 3: Wrap Info Cards and Add Toggle Button

Find your three info cards (Vision, Mission, Values). Add a toggle button above them, and wrap the cards row with `id="infoCards"`:

```html
<button id="toggleBtn" class="btn btn-outline-primary mb-3" onclick="toggleCards()">
    Hide Info Cards
</button>

<div id="infoCards" class="row g-4">
    <!-- Your 3 cards (Vision, Mission, Values) go here -->
</div>
```

### Step 4: Add a Click Counter Section

📌 **New class — `btn-outline-primary`:** Unlike `btn-primary` (solid blue fill from Session 2), `btn-outline-primary` creates a button with a blue border and transparent background that fills with blue on hover. The `mb-3` adds 1rem bottom margin (spacing pattern from Session 3). The `row g-4` classes (from Session 3) create a flex grid row with 1.5rem gutters.

Right **after** the about section, add this small section:

```html
<!-- Click Counter Section -->
<div class="container text-center my-4">
    <h5>🖱️ Click Counter Challenge</h5>
    <button class="btn btn-success btn-lg" onclick="countClicks()">Click Me!</button>
    <p id="clickResult" class="mt-2 fs-5 text-primary">You clicked 0 times!</p>
</div>
```

### Step 5: Add the `<script>` Tag

📌 **Bootstrap classes used:** `btn-success` creates a green button (new this session) for positive actions like "Click Me!". `btn-lg` (from Session 2) makes it larger. `mt-2` adds 0.5rem top margin, `fs-5` sets font to 1.25rem, and `text-primary` colors the counter text Bootstrap blue — all new this session.

Add a `<script>` tag just **before** the Bootstrap JS CDN link at the bottom of `<body>`. This is where ALL our JavaScript goes.

### Step 6: Add the Welcome Alert (Lab 18 ✅)

Inside the `<script>` tag, add:

```javascript
// 1. Welcome Alert — shows a popup when the page loads
alert("Welcome to BCA Batch 2025-26! 🎓");
```

📌 **What happens:** As soon as the browser reaches this line, it pauses everything and shows a popup. The page won't finish rendering until the user clicks "OK."

**Save the file and open it in the browser. You should see the alert!**

### Step 7: Add a Console Message

Below the alert, add:

```javascript
// 2. Console Message — only visible in DevTools
console.log("✅ Page loaded successfully!");
console.log("Session 4: JavaScript Foundations");
console.log("Student count: " + 60);
```

📌 **How to see it:** Press **F12** (or right-click → Inspect → Console tab). You'll see your messages there. This is your **debugging tool** — use it constantly!

### Step 8: Add the Name Prompt

Below the console messages, add:

```javascript
// 3. Personalized Welcome — ask for the visitor's name
var visitorName = prompt("What is your name?");

if (visitorName !== null && visitorName !== "") {
    document.getElementById("welcomeMessage").textContent = "Welcome, " + visitorName + "! 👋";
    console.log("Visitor name: " + visitorName);
} else {
    console.log("Visitor skipped the name prompt.");
}
```

📌 **How it works:** `prompt()` asks for the name → stores it in `visitorName` → the `if` checks that the user didn't cancel or leave it blank → `getElementById` finds the welcome paragraph → `.textContent` changes its text → the `+` operator joins strings: `"Welcome, " + "Rahul" + "! 👋"` → `"Welcome, Rahul! 👋"`

### Step 9: Add the Toggle Cards Function (Lab 21 ✅)

Below the prompt code, add:

```javascript
// 4. Toggle Info Cards — show/hide the Vision, Mission, Values cards
function toggleCards() {
    var cards = document.getElementById("infoCards");
    var btn = document.getElementById("toggleBtn");

    if (cards.style.display === "none") {
        cards.style.display = "flex";
        btn.textContent = "Hide Info Cards";
        console.log("Info cards: SHOWN");
    } else {
        cards.style.display = "none";
        btn.textContent = "Show Info Cards";
        console.log("Info cards: HIDDEN");
    }
}
```

📌 **How it works:** We check `cards.style.display` — if `"none"`, we set it to `"flex"` (Bootstrap rows use flexbox) and update the button text. Otherwise, we hide the cards. Console logs help us debug.

### Step 10: Add the Click Counter

Below the toggle function, add:

```javascript
// 5. Click Counter — counts how many times the button is clicked
var clickCount = 0;

function countClicks() {
    clickCount = clickCount + 1;
    document.getElementById("clickResult").textContent = "You clicked " + clickCount + " times!";
    console.log("Click count: " + clickCount);
}
```

📌 **Key detail:** `var clickCount = 0;` is declared **outside** the function — so it persists between clicks. If it were inside, it would reset to 0 every time!

---

## 🔨 Complete Updated Code

Here is the **full `index.html`** with all JavaScript added. Type it carefully!

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BCA Batch 2025-26 — Our Class Website</title>
    <!-- Bootstrap 5.3.2 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" rel="stylesheet">
</head>
<body>

    <!-- ===================== NAVBAR ===================== -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">
                <i class="bi bi-mortarboard-fill"></i> BCA 2025-26
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#mainNav" aria-controls="mainNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mainNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            More
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Faculty</a></li>
                            <li><a class="dropdown-item" href="#">Gallery</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Contact</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- ===================== HERO CAROUSEL ===================== -->
    <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0"
                    class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="bg-primary text-white text-center py-5" style="min-height: 350px;">
                    <div class="d-flex flex-column justify-content-center align-items-center h-100 py-5">
                        <h1 class="display-4 fw-bold">Welcome to BCA 2025-26</h1>
                        <p class="lead">Mandsaur University — Department of Computer Applications</p>
                        <a href="#about" class="btn btn-light btn-lg mt-3">Learn More</a>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="bg-success text-white text-center py-5" style="min-height: 350px;">
                    <div class="d-flex flex-column justify-content-center align-items-center h-100 py-5">
                        <h1 class="display-4 fw-bold">Building Future Tech Leaders</h1>
                        <p class="lead">Learn. Code. Innovate. Succeed.</p>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="bg-dark text-white text-center py-5" style="min-height: 350px;">
                    <div class="d-flex flex-column justify-content-center align-items-center h-100 py-5">
                        <h1 class="display-4 fw-bold">Batch of 2025-26</h1>
                        <p class="lead">60 Students — One Goal — Excellence in Technology</p>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel"
                data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel"
                data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <!-- Welcome Message (Updated by JavaScript) -->
    <p id="welcomeMessage" class="text-center text-muted fs-5 my-3">Welcome, visitor! 👋</p>

    <!-- ===================== ABOUT SECTION ===================== -->
    <section id="about" class="py-5">
        <div class="container">
            <h2 class="text-center mb-4">About Our Department</h2>
            <div class="row align-items-center mb-5">
                <div class="col-md-6">
                    <p class="lead">
                        The Department of Computer Applications at Mandsaur University offers a
                        3-year BCA program designed to build strong foundations in programming,
                        web development, database management, and software engineering.
                    </p>
                    <p>
                        Our students learn by doing — every concept is practiced in the lab.
                        From HTML basics to full-stack JavaScript, we prepare students for the
                        real-world IT industry.
                    </p>
                    <ul>
                        <li>Established: 2020</li>
                        <li>Current Batch: 2025-26</li>
                        <li>Students: 60+</li>
                        <li>Location: Mandsaur, Madhya Pradesh</li>
                    </ul>
                </div>
                <div class="col-md-6 text-center">
                    <img src="https://via.placeholder.com/500x300?text=BCA+Department"
                         class="img-fluid rounded shadow" alt="BCA Department">
                </div>
            </div>

            <div class="text-center">
                <button id="toggleBtn" class="btn btn-outline-primary mb-3"
                        onclick="toggleCards()">Hide Info Cards</button>
            </div>

            <div id="infoCards" class="row g-4">
                <div class="col-md-4">
                    <div class="card h-100 text-center shadow-sm">
                        <div class="card-body">
                            <i class="bi bi-eye-fill text-primary fs-1"></i>
                            <h5 class="card-title mt-3">Our Vision</h5>
                            <p class="card-text">To be a leading department producing skilled IT professionals who contribute to India's digital transformation.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 text-center shadow-sm">
                        <div class="card-body">
                            <i class="bi bi-rocket-takeoff-fill text-success fs-1"></i>
                            <h5 class="card-title mt-3">Our Mission</h5>
                            <p class="card-text">Provide quality education through hands-on projects, industry exposure, and a curriculum aligned with current technologies.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 text-center shadow-sm">
                        <div class="card-body">
                            <i class="bi bi-heart-fill text-danger fs-1"></i>
                            <h5 class="card-title mt-3">Our Values</h5>
                            <p class="card-text">Integrity, Innovation, Teamwork, and a commitment to continuous learning in every student.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ===================== CLICK COUNTER ===================== -->
    <div class="container text-center my-4">
        <h5>🖱️ Click Counter Challenge</h5>
        <button class="btn btn-success btn-lg" onclick="countClicks()">Click Me!</button>
        <p id="clickResult" class="mt-2 fs-5 text-primary">You clicked 0 times!</p>
    </div>

    <!-- ===================== FOOTER ===================== -->
    <footer class="bg-dark text-white text-center py-3 mt-5">
        <p class="mb-0">&copy; 2025 BCA Batch 2025-26 — Mandsaur University</p>
    </footer>

    <!-- ============ OUR JAVASCRIPT ============ -->
    <script>
        // 1. WELCOME ALERT (Lab 18)
        alert("Welcome to BCA Batch 2025-26! 🎓");

        // 2. CONSOLE MESSAGES
        console.log("✅ Page loaded successfully!");
        console.log("Session 4: JavaScript Foundations");
        console.log("Student count: " + 60);

        // 3. PERSONALIZED WELCOME (Prompt)
        var visitorName = prompt("What is your name?");
        if (visitorName !== null && visitorName !== "") {
            document.getElementById("welcomeMessage").textContent = "Welcome, " + visitorName + "! 👋";
            console.log("Visitor name: " + visitorName);
        } else {
            console.log("Visitor skipped the name prompt.");
        }

        // 4. TOGGLE INFO CARDS (Lab 21)
        function toggleCards() {
            var cards = document.getElementById("infoCards");
            var btn = document.getElementById("toggleBtn");
            if (cards.style.display === "none") {
                cards.style.display = "flex";
                btn.textContent = "Hide Info Cards";
                console.log("Info cards: SHOWN");
            } else {
                cards.style.display = "none";
                btn.textContent = "Show Info Cards";
                console.log("Info cards: HIDDEN");
            }
        }

        // 5. CLICK COUNTER
        var clickCount = 0;
        function countClicks() {
            clickCount = clickCount + 1;
            document.getElementById("clickResult").textContent = "You clicked " + clickCount + " times!";
            console.log("Click count: " + clickCount);
        }
    </script>

    <!-- Bootstrap JS Bundle (includes Popper) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

## ✅ Checkpoint — Verify Your Work

Open `index.html` in the browser and check each feature:

| # | Test | Expected Result | ✅ / ❌ |
|---|------|----------------|---------|
| 1 | Page loads | An alert pops up saying "Welcome to BCA Batch 2025-26! 🎓" | |
| 2 | Click OK on alert | A prompt asks "What is your name?" | |
| 3 | Type your name and click OK | The text below the carousel changes to "Welcome, [your name]! 👋" | |
| 4 | Press F12 → Console tab | You see "✅ Page loaded successfully!" and other log messages | |
| 5 | Click "Hide Info Cards" button | The three cards (Vision, Mission, Values) disappear, button says "Show Info Cards" | |
| 6 | Click "Show Info Cards" button | The cards reappear, button says "Hide Info Cards" | |
| 7 | Click the green "Click Me!" button | The counter text updates: "You clicked 1 times!", "You clicked 2 times!", etc. | |
| 8 | Check console while clicking | Each click logs "Click count: X" in the console | |

📌 **Troubleshooting Tips:**
- **Alert not showing?** Make sure your `<script>` tag is inside `<body>`, not `<head>`
- **Welcome message not changing?** Check that you have `id="welcomeMessage"` on the `<p>` tag (case-sensitive!)
- **Toggle not working?** Make sure the cards wrapper has `id="infoCards"` and the button has `onclick="toggleCards()"`
- **Console empty?** Press F12 and make sure you're on the **Console** tab, not Elements

---

## 🔍 JavaScript Quick Reference

### Output Methods

| Method | Shows Where | Pauses Page? | Use For |
|--------|------------|--------------|---------|
| `alert("msg")` | Pop-up box | ✅ Yes | Important one-time messages |
| `console.log("msg")` | DevTools Console (F12) | ❌ No | Debugging, logging values |
| `prompt("question")` | Input dialog box | ✅ Yes | Getting user input |
| `document.write("msg")` | Directly on page | ❌ No | Rarely used (avoid!) |

### Variable Declaration

| Syntax | Example | Notes |
|--------|---------|-------|
| `var name = value;` | `var age = 20;` | Use `var` in this course (ES5 style) |
| Reassign | `age = 21;` | No `var` needed for reassignment |
| String | `var x = "text";` | Always use quotes for text |
| Number | `var x = 42;` | No quotes for numbers |
| Boolean | `var x = true;` | Only `true` or `false` |

### DOM Manipulation

| Method | What It Does | Example |
|--------|-------------|---------|
| `document.getElementById("id")` | Finds element by id | `var el = document.getElementById("msg");` |
| `.textContent` | Get/set text content | `el.textContent = "Hello!";` |
| `.style.display = "none"` | Hide element | Makes element invisible |
| `.style.display = "block"` | Show element | Makes element visible |
| `.style.display = "flex"` | Show as flex container | For Bootstrap rows |

### Function & Event Syntax

```javascript
function name(param) { /* code */ }   // Declare
name(value);                           // Call
```
```html
<button onclick="name()">Click</button>  <!-- Event binding -->
```

---

### Bootstrap Classes Used in Code

> 📌 The full code recap includes all classes from Sessions 1–3. New classes for **this session** are marked with ⭐.

**⭐ New in This Session:**

| Class | Purpose |
|-------|---------|
| `btn-outline-primary` | Outlined primary button — blue border, transparent background, fills on hover |
| `btn-success` | Green filled button for positive/success actions |
| `text-muted` | Light gray text color for secondary, de-emphasized information |
| `text-primary` | Primary blue text color |
| `fs-1` | Font size level 1 (2.5rem) — the largest Bootstrap font size |
| `fs-5` | Font size level 5 (1.25rem) — slightly larger than default body text |

**Spacing Utilities (pattern from Session 3, new values used here):**

| Pattern | Values Used in Code | Meaning |
|---------|-------------------|---------|
| `mt-{n}` | `mt-2`, `mt-3`, `mt-5` | Margin-top: 0.5rem, 1rem, 3rem |
| `mb-{n}` | `mb-0`, `mb-3`, `mb-4`, `mb-5` | Margin-bottom: 0, 1rem, 1.5rem, 3rem |
| `my-{n}` | `my-3`, `my-4` | Margin top + bottom: 1rem, 1.5rem |
| `py-{n}` | `py-3`, `py-5` | Padding top + bottom: 1rem, 3rem |

**From Previous Sessions (in full code recap):**

| Category | Classes | Session |
|----------|---------|---------|
| Navbar | `navbar`, `navbar-expand-lg`, `navbar-dark`, `navbar-brand`, `navbar-toggler`, `navbar-toggler-icon`, `navbar-collapse`, `navbar-nav`, `nav-item`, `nav-link`, `active`, `sticky-top`, `collapse` | 1 |
| Dropdown | `dropdown`, `dropdown-toggle`, `dropdown-menu`, `dropdown-item`, `dropdown-divider` | 1 |
| Carousel | `carousel`, `slide`, `carousel-indicators`, `carousel-inner`, `carousel-item`, `carousel-control-prev`, `carousel-control-next`, `carousel-control-prev-icon`, `carousel-control-next-icon`, `visually-hidden` | 2 |
| Layout | `container`, `ms-auto`, `d-flex`, `flex-column`, `justify-content-center`, `align-items-center`, `h-100` | 1–2 |
| Grid | `row`, `col-md-4`, `col-md-6`, `g-4`, `align-items-center` | 3 |
| Text | `text-center`, `text-white`, `text-success`, `text-danger`, `fw-bold`, `lead`, `display-4` | 1–3 |
| Buttons | `btn`, `btn-light`, `btn-lg` | 2 |
| Backgrounds | `bg-dark`, `bg-primary`, `bg-success` | 1–2 |
| Cards | `card`, `card-body`, `card-title`, `card-text`, `h-100`, `shadow`, `shadow-sm` | 3 |
| Images | `img-fluid`, `rounded` | 3 |
| Icons | `bi`, `bi-mortarboard-fill`, `bi-eye-fill`, `bi-rocket-takeoff-fill`, `bi-heart-fill` | 1–3 |

### HTML Elements in Code

| Tag | Purpose | Session |
|-----|---------|---------|
| `<script>` | Contains or links JavaScript code — **new this session** | **4** |
| `<button>` | Clickable element, used with `onclick` for JS events | 1 |
| `<!DOCTYPE html>` | Declares the document as HTML5 | 1 |
| `<html>` | Root element of the page | 1 |
| `<head>`, `<meta>`, `<title>`, `<link>` | Document metadata, charset, page title, stylesheets | 1 |
| `<body>` | Contains all visible page content | 1 |
| `<nav>` | Semantic navigation container | 1 |
| `<div>` | Generic container for layout | 1 |
| `<a>` | Hyperlink / anchor element | 1 |
| `<span>` | Inline container | 1 |
| `<ul>`, `<li>` | Unordered list and list items | 1 |
| `<hr>` | Horizontal rule / divider | 1 |
| `<section>` | Semantic section of content | 3 |
| `<h1>`, `<h2>`, `<h5>` | Heading levels | 1 |
| `<p>` | Paragraph | 1 |
| `<img>` | Image element | 3 |
| `<i>` | Used for Bootstrap Icons | 1 |
| `<footer>` | Semantic page footer | 3 |

### HTML Attributes in Code

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `id` | Unique identifier — required for `getElementById()` | `id="welcomeMessage"` |
| `class` | Assigns CSS / Bootstrap classes to an element | `class="btn btn-success"` |
| `onclick` | Runs a JavaScript function on click | `onclick="toggleCards()"` |
| `src` | Source URL for scripts or images | `<script src="...">`, `<img src="...">` |
| `href` | Hyperlink destination or stylesheet URL | `<a href="#about">`, `<link href="...">` |
| `rel` | Relationship between document and linked resource | `rel="stylesheet"` |
| `alt` | Alternative text for images (accessibility) | `alt="BCA Department"` |
| `type` | Specifies the type of a `<button>` or `<input>` | `type="button"` |
| `style` | Applies inline CSS directly to an element | `style="min-height: 350px;"` |
| `lang` | Specifies the language of the document | `lang="en"` |
| `charset` | Character encoding of the document | `charset="UTF-8"` |
| `name` / `content` | Used in `<meta>` tags for metadata | `name="viewport" content="..."` |
| `role` | ARIA role for accessibility | `role="button"` |

### Data & ARIA Attributes (from Sessions 1–2)

| Attribute | Purpose |
|-----------|---------|
| `data-bs-toggle` | Triggers Bootstrap behavior (`"collapse"`, `"dropdown"`) |
| `data-bs-target` | Specifies which element to toggle (e.g., `"#mainNav"`) |
| `data-bs-ride` | Auto-starts component behavior (`"carousel"`) |
| `data-bs-slide-to` | Jumps to specific carousel slide number |
| `data-bs-slide` | Navigates carousel (`"prev"` / `"next"`) |
| `aria-controls` | Identifies the element this control targets |
| `aria-expanded` | Indicates whether a collapsible is currently open |
| `aria-label` | Provides an accessible text label |
| `aria-current` | Marks the current item (e.g., active carousel indicator) |
| `aria-hidden` | Hides decorative elements from screen readers |

### CSS Properties in Code

| Property | Value(s) Used | Context |
|----------|--------------|---------|
| `min-height` | `350px` | Inline style on carousel slides (from Session 2) |
| `display` | `none`, `block`, `flex` | Set via JS `.style.display` to show/hide elements |
| `background-color` | Any CSS color | Set via JS `.style.backgroundColor` (Challenge 2) |

---

## 📝 Key Takeaways

1. **JavaScript is the programming language of the web** — it adds behavior and interactivity.
2. **Place `<script>` at the end of `<body>`** — so HTML loads before JavaScript runs.
3. **Variables (`var`) are labeled containers** — they store strings, numbers, and booleans.
4. **`console.log()` is your best debugging friend** — use it constantly to check your code.
5. **The DOM is the browser's tree of your HTML** — use `document.getElementById()` to find and modify elements.
6. **Functions are reusable recipes** — write once, call many times.
7. **Events (`onclick`) connect user actions to functions** — click triggers code.
8. **`if/else` lets your code make decisions** — different conditions, different actions.
9. **Always use `===` (strict equality)** — avoids unexpected type conversion bugs.
10. **String concatenation uses `+`** — `"Hello, " + name + "!"` joins text and variables.

---

## 🏋️ Practice Challenges

Try these on your own to strengthen your JavaScript skills:

### Challenge 1: Age Display (Easy)
Add a **second prompt** after the name prompt that asks `"What is your age?"`. Display both the name and age in the welcome message:
```
"Welcome, Rahul (Age: 20)! 👋"
```

**Hint:** Use another `var` and string concatenation with `+`.

### Challenge 2: Navbar Color Changer (Medium)
Add a button below the click counter that says **"Change Navbar Color"**. When clicked, it should change the navbar's background color to a different color.

**Hint:** You'll need to:
1. Add an `id` to the `<nav>` tag
2. Use `document.getElementById("navId").style.backgroundColor = "blue";`
3. Create a function and connect it with `onclick`

📌 **New DOM property — `.style.backgroundColor`:** This is the JavaScript way to set the CSS property `background-color`. In JavaScript, CSS properties with hyphens use camelCase instead: `background-color` → `backgroundColor`, `font-size` → `fontSize`, `margin-top` → `marginTop`.

### Challenge 3: Auto-Reset Counter (Medium)
Modify the click counter so that it **resets back to 0 after reaching 10 clicks**. When it resets, show an alert: `"Counter reset! You clicked 10 times!"`.

**Hint:** Add an `if` check inside `countClicks()`:
```javascript
if (clickCount > 10) {
    clickCount = 0;
    alert("Counter reset! You clicked 10 times!");
}
```

---

## 🔗 Labs Covered in This Session

| Lab # | Experiment | Status | Where in Code |
|-------|-----------|--------|---------------|
| **18** | JavaScript alert on page load | ✅ Done | `alert("Welcome to BCA Batch 2025-26! 🎓");` |
| **21** | JavaScript to display hidden div | ✅ Done | `toggleCards()` function with `style.display` |

---

## ⏭️ Next Session Preview

### Session 05: Faculty Cards + DOM Manipulation

In the next session, we'll:
- Add a **Faculty Section** with Bootstrap cards showing teacher profiles
- Learn **DOM manipulation** — dynamically creating and modifying HTML elements with JavaScript
- Use `<div>` and `<span>` for layouts (Lab 7)
- Build an interactive card grid (Lab 14)
- Apply dynamic bold/italic/underline styling with JS (Lab 20)

**You'll be creating elements from JavaScript!** No more just changing existing ones — you'll learn to build new HTML with code. 🚀

---

*Session 04 — Crash Course: Bootstrap + JavaScript | BCA Semester II, Mandsaur University, 2025-26*
