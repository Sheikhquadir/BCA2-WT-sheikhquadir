# Day 8 — Hyperlinks, Anchors & Navigation

🔬 **Type:** Theory + Practical
🕐 **Duration:** 2 Hours
📚 **Unit:** 2 — HTML Fundamentals
🧪 **Lab Experiments:** 2, 3

---

## Learning Objectives

By the end of this session, students will be able to:
- Create hyperlinks using the `<a>` tag
- Link to external websites, internal pages, and page sections
- Use image links
- Understand absolute vs relative URLs
- Use the `target` attribute

---

## 1. What is a Hyperlink?

> **Analogy:** Think of hyperlinks as **doors** in a building. Each door leads you to a different room (page). Some doors lead to rooms in the same building (internal links), while others take you to a completely different building (external links).

A **hyperlink** is a clickable element that takes the user to another page, file, or location.

### The `<a>` Tag

```html
<a href="URL">Link Text</a>
```

| Attribute | Purpose |
|-----------|---------|
| `href` | The URL/destination (Hypertext REFerence) |
| `target` | Where to open the link |
| `title` | Tooltip text on hover |

---

## 2. Types of Links

### External Links (To Other Websites)

```html
<a href="https://www.google.com">Visit Google</a>
<a href="https://www.mandsauruniversity.edu.in">Mandsaur University</a>
```

### Internal Links (To Other Pages on Your Site)

```html
<!-- Same folder -->
<a href="about.html">About Page</a>

<!-- Subfolder -->
<a href="pages/contact.html">Contact Page</a>

<!-- Parent folder -->
<a href="../index.html">Back to Home</a>
```

### Section Links (Jump to a Part of the Same Page)

```html
<!-- Create an anchor point (target) -->
<h2 id="courses">Our Courses</h2>

<!-- Link that jumps to it -->
<a href="#courses">Jump to Courses Section</a>

<!-- Link to top of page -->
<a href="#top">Back to Top</a>  <!-- #top works automatically -->
```

### Email & Phone Links

```html
<a href="mailto:info@mandsauruniversity.edu.in">Send Email</a>
<a href="tel:+911234567890">Call Us</a>
```

---

## 3. The `target` Attribute

| Value | Behavior |
|-------|----------|
| `_self` | Opens in the same tab (default) |
| `_blank` | Opens in a new tab |
| `_parent` | Opens in parent frame |
| `_top` | Opens in full window (breaks out of frames) |

```html
<!-- Opens in same tab -->
<a href="https://www.google.com">Google (same tab)</a>

<!-- Opens in new tab -->
<a href="https://www.google.com" target="_blank">Google (new tab)</a>
```

> ⚠️ **Security Tip:** When using `target="_blank"`, add `rel="noopener noreferrer"` to prevent the new page from accessing your page's `window` object.

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Safe External Link</a>
```

---

## 4. Absolute vs Relative URLs

| Type | Example | Use When |
|------|---------|----------|
| **Absolute** | `https://www.google.com/images` | Linking to other websites |
| **Relative** | `images/photo.jpg` | Linking within your own site |
| **Root-relative** | `/about/team.html` | From any page on your site |

### File Structure Example

```
my-website/
├── index.html
├── about.html
├── pages/
│   ├── contact.html
│   └── team.html
└── images/
    └── logo.png
```

```html
<!-- From index.html -->
<a href="about.html">About</a>                    <!-- Same folder -->
<a href="pages/contact.html">Contact</a>           <!-- Into subfolder -->

<!-- From pages/contact.html -->
<a href="../index.html">Home</a>                   <!-- Go up one folder -->
<a href="../images/logo.png">Logo</a>              <!-- Up, then into images -->
<a href="team.html">Team</a>                       <!-- Same folder -->
```

---

## 5. Image as a Link

You can wrap an `<img>` tag inside an `<a>` tag to make an image clickable:

```html
<a href="https://www.mandsauruniversity.edu.in">
    <img src="university-logo.png" alt="Mandsaur University Logo" width="200">
</a>
```

---

## Practical Session

### 🧪 Lab Experiment 2: Link Words to Wikipedia

**Objective:** Create links on specific words to link them to their Wikipedia pages.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Networking Terminology</title>
</head>
<body>

    <h1>Networking Basics</h1>
    
    <p>
        Modern computer networks use various technologies to connect devices. 
        <a href="https://en.wikipedia.org/wiki/Wi-Fi" target="_blank" rel="noopener noreferrer">Wi-Fi</a> 
        is a wireless networking technology that allows devices to connect to the 
        internet without physical cables. It uses radio waves and is commonly found 
        in homes, offices, and public places.
    </p>
    
    <p>
        On the other hand, a 
        <a href="https://en.wikipedia.org/wiki/Local_area_network" target="_blank" rel="noopener noreferrer">LAN</a> 
        (Local Area Network) connects computers within a limited area such as a 
        school, office, or building. LANs typically use 
        <a href="https://en.wikipedia.org/wiki/Ethernet" target="_blank" rel="noopener noreferrer">Ethernet</a> 
        cables for wired connections.
    </p>
    
    <p>
        The 
        <a href="https://en.wikipedia.org/wiki/Internet" target="_blank" rel="noopener noreferrer">Internet</a> 
        is a vast 
        <a href="https://en.wikipedia.org/wiki/Wide_area_network" target="_blank" rel="noopener noreferrer">WAN</a> 
        (Wide Area Network) that connects millions of LANs worldwide using the 
        <a href="https://en.wikipedia.org/wiki/Internet_protocol_suite" target="_blank" rel="noopener noreferrer">TCP/IP</a> 
        protocol suite.
    </p>

</body>
</html>
```

---

### 🧪 Lab Experiment 3: Image Link

**Objective:** Insert an image and make it a clickable link to another page.

**File 1: `index.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Link Demo</title>
</head>
<body>

    <h1>Welcome to Mandsaur University</h1>
    
    <p>Click the image below to learn more about our campus:</p>
    
    <!-- Image as a link -->
    <a href="campus.html" title="Click to see campus details">
        <img src="https://via.placeholder.com/400x250?text=University+Campus" 
             alt="Mandsaur University Campus" 
             width="400" height="250">
    </a>
    
    <p>
        <a href="campus.html">View Campus Details &rarr;</a>
    </p>

</body>
</html>
```

**File 2: `campus.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Campus Details</title>
</head>
<body>

    <h1>Campus Details</h1>
    <p>Mandsaur University has a sprawling campus with modern facilities...</p>
    <p><a href="index.html">&larr; Back to Home</a></p>

</body>
</html>
```

---

## Practice Exercise

Create a 3-page mini-website:
1. **`index.html`** — Home page with links to other two pages
2. **`courses.html`** — List of BCA courses with links back to home
3. **`faculty.html`** — Faculty information with links back to home

Each page should:
- Have navigation links to all three pages at the top
- Include at least one external link (to a relevant website)
- Use section links (`#section-id`) within the page
- Include a "Back to Top" link at the bottom

---

## Summary

| Concept | Syntax | Example |
|---------|--------|---------|
| External link | `<a href="https://...">` | Link to Google |
| Internal link | `<a href="page.html">` | Link to another page |
| Section link | `<a href="#id">` | Jump within page |
| New tab | `target="_blank"` | Opens in new tab |
| Image link | `<a href="..."><img ...></a>` | Clickable image |
| Email link | `<a href="mailto:...">` | Opens email client |

---

*Day 8 of 55 | Unit 2 — HTML Fundamentals | Web Technology (25BCA060)*
