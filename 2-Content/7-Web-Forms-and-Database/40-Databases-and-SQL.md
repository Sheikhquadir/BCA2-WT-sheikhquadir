# Day 40 — Introduction to Databases & SQL

🔬 **Type:** Theory + Practical
🕐 **Duration:** 2 Hours
📚 **Unit:** 7 — Web Forms & Database
🧪 **Lab Experiment:** 23

---

## Learning Objectives

By the end of this session, students will be able to:
- Understand the role of databases in web applications
- Differentiate between database types (relational vs NoSQL)
- Write basic SQL queries (CREATE, INSERT, SELECT, UPDATE, DELETE)
- Design a simple database schema for a web application

---

## 1. Why Databases Matter in Web Development

> **Analogy:** A website without a database is like a **library without shelves** — you can display information, but you can't store or retrieve it. Databases are the organized shelves where all data lives.

### Web Application Architecture

```
Browser (Client)
    ↓ HTTP Request
Web Server (Apache/Nginx)
    ↓ Script (PHP/Node.js)
Database Server (MySQL/PostgreSQL)
    ↓ SQL Query
Data (Stored in tables)
```

### When Do You Need a Database?

| Scenario | Database Needed? |
|----------|-----------------|
| Static portfolio website | No |
| User login/registration | Yes |
| Blog with posts & comments | Yes |
| E-commerce product catalog | Yes |
| Contact form that saves data | Yes |
| Simple landing page | No |

---

## 2. Types of Databases

### Relational (SQL) Databases

| Database | Key Feature |
|----------|------------|
| MySQL | Most popular, free, used with PHP |
| PostgreSQL | Advanced features, open-source |
| SQLite | File-based, no server needed |
| Microsoft SQL Server | Enterprise, Windows ecosystem |
| Oracle | Enterprise, high performance |

### NoSQL Databases

| Database | Type | Example Use |
|----------|------|-------------|
| MongoDB | Document | Flexible schemas, JSON storage |
| Redis | Key-Value | Caching, sessions |
| Firebase | Document | Real-time apps, mobile |

---

## 3. SQL Basics

### CREATE — Make a Table

```sql
CREATE TABLE students (
    id          INT PRIMARY KEY AUTO_INCREMENT,
    name        VARCHAR(100) NOT NULL,
    roll_no     VARCHAR(20) UNIQUE NOT NULL,
    email       VARCHAR(100) UNIQUE,
    phone       VARCHAR(15),
    course      VARCHAR(50) DEFAULT 'BCA',
    percentage  DECIMAL(5,2),
    dob         DATE,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Data Types

| SQL Type | Description | Example |
|----------|------------|---------|
| `INT` | Integer | 1, 42, 100 |
| `VARCHAR(n)` | Variable string up to n | 'Rahul Kumar' |
| `TEXT` | Long text | Bio, description |
| `DECIMAL(p,s)` | Precise number | 85.50 |
| `DATE` | Date | '2006-05-15' |
| `TIMESTAMP` | Date + Time | '2026-05-09 10:30:00' |
| `BOOLEAN` | True/False | TRUE, FALSE |

### INSERT — Add Records

```sql
INSERT INTO students (name, roll_no, email, phone, percentage, dob)
VALUES ('Rahul Kumar', '25BCA001', 'rahul@example.com', '9876543210', 85.50, '2006-03-15');

INSERT INTO students (name, roll_no, email, phone, percentage, dob)
VALUES ('Priya Sharma', '25BCA002', 'priya@example.com', '9876543211', 92.00, '2006-07-22');

INSERT INTO students (name, roll_no, email, phone, percentage, dob)
VALUES ('Amit Patel', '25BCA003', 'amit@example.com', '9876543212', 65.75, '2005-11-08');
```

### SELECT — Read Data

```sql
-- All records
SELECT * FROM students;

-- Specific columns
SELECT name, roll_no, percentage FROM students;

-- With condition
SELECT * FROM students WHERE percentage > 80;

-- Sorting
SELECT * FROM students ORDER BY percentage DESC;

-- Limit results
SELECT * FROM students ORDER BY name LIMIT 5;

-- Count
SELECT COUNT(*) AS total_students FROM students;

-- Average
SELECT AVG(percentage) AS avg_marks FROM students;

-- Pattern matching
SELECT * FROM students WHERE name LIKE 'R%';   -- Starts with R
SELECT * FROM students WHERE email LIKE '%@example.com';
```

### UPDATE — Modify Records

```sql
UPDATE students SET phone = '9999999999' WHERE roll_no = '25BCA001';

UPDATE students SET percentage = 88.00 WHERE id = 1;
```

### DELETE — Remove Records

```sql
DELETE FROM students WHERE id = 3;

-- Delete all (careful!)
-- DELETE FROM students;
```

---

## 4. Database Design for a Web App

### Example: University Website Database

```sql
-- Departments table
CREATE TABLE departments (
    id      INT PRIMARY KEY AUTO_INCREMENT,
    name    VARCHAR(100) NOT NULL,
    code    VARCHAR(10) UNIQUE NOT NULL
);

-- Courses table
CREATE TABLE courses (
    id              INT PRIMARY KEY AUTO_INCREMENT,
    name            VARCHAR(100) NOT NULL,
    code            VARCHAR(20) UNIQUE NOT NULL,
    department_id   INT,
    credits         INT DEFAULT 4,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

-- Students table with foreign key
CREATE TABLE students (
    id          INT PRIMARY KEY AUTO_INCREMENT,
    name        VARCHAR(100) NOT NULL,
    roll_no     VARCHAR(20) UNIQUE NOT NULL,
    email       VARCHAR(100) UNIQUE,
    course_id   INT,
    FOREIGN KEY (course_id) REFERENCES courses(id)
);
```

### Entity-Relationship Concept

```
departments (1) ──── (M) courses (1) ──── (M) students
  One department has many courses.
  One course has many students.
```

---

## 5. Joins — Combining Tables

```sql
-- Get student name with their course name
SELECT students.name, students.roll_no, courses.name AS course
FROM students
INNER JOIN courses ON students.course_id = courses.id;

-- Get course details with department name
SELECT courses.name AS course, departments.name AS department
FROM courses
INNER JOIN departments ON courses.department_id = departments.id;
```

---

## Practical Session

### 🧪 Lab Experiment 23: Student Database Webpage

Since we don't have a live database server in the browser, we'll simulate database operations using JavaScript arrays and localStorage — demonstrating the concept of CRUD operations.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Database — CRUD Operations</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

    <nav class="navbar navbar-dark bg-dark">
        <div class="container">
            <span class="navbar-brand">🗄️ Student Database System</span>
        </div>
    </nav>

    <div class="container my-4">
        <div class="row g-4">

            <!-- Add Form -->
            <div class="col-lg-4">
                <div class="card shadow">
                    <div class="card-header bg-primary text-white">
                        <h5 class="mb-0" id="formTitle">Add Student</h5>
                    </div>
                    <div class="card-body">
                        <form id="studentForm">
                            <input type="hidden" id="editId">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="name" placeholder="Name" required>
                                <label for="name">Full Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="roll" placeholder="Roll" required>
                                <label for="roll">Roll Number</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="email" placeholder="Email" required>
                                <label for="email">Email</label>
                            </div>
                            <div class="form-floating mb-3">
                                <select class="form-select" id="course" required>
                                    <option value="" disabled selected></option>
                                    <option>BCA</option>
                                    <option>BBA</option>
                                    <option>B.Tech</option>
                                </select>
                                <label for="course">Course</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="number" class="form-control" id="marks" placeholder="%" 
                                       min="0" max="100" step="0.01" required>
                                <label for="marks">Percentage</label>
                            </div>
                            <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-primary" id="submitBtn">Add Student</button>
                                <button type="button" class="btn btn-outline-secondary d-none" id="cancelBtn">Cancel Edit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Stats -->
                <div class="card shadow mt-3">
                    <div class="card-body">
                        <h6 class="text-primary">Statistics</h6>
                        <p class="mb-1">Total: <strong id="statTotal">0</strong></p>
                        <p class="mb-1">Average: <strong id="statAvg">0</strong>%</p>
                        <p class="mb-0">Highest: <strong id="statMax">0</strong>%</p>
                    </div>
                </div>
            </div>

            <!-- Student Table -->
            <div class="col-lg-8">
                <div class="card shadow">
                    <div class="card-header bg-dark text-white d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Student Records</h5>
                        <div>
                            <input type="text" class="form-control form-control-sm d-inline-block" 
                                   id="searchInput" placeholder="Search..." style="width: 200px;">
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-striped table-hover mb-0">
                                <thead class="table-primary">
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Roll No</th>
                                        <th>Email</th>
                                        <th>Course</th>
                                        <th>%</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="studentTable">
                                    <tr><td colspan="7" class="text-center text-muted py-4">No records found</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- SQL Reference -->
                <div class="card shadow mt-3">
                    <div class="card-header bg-secondary text-white">
                        <h6 class="mb-0">📝 Equivalent SQL Commands</h6>
                    </div>
                    <div class="card-body">
                        <pre id="sqlOutput" class="mb-0 bg-dark text-success p-3 rounded" 
                             style="font-size: 0.85em;">-- Perform an operation to see the SQL equivalent here</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script>
    (function() {
        'use strict';

        // Load from localStorage or use sample data
        let students = JSON.parse(localStorage.getItem('students') || '[]');
        if (students.length === 0) {
            students = [
                { id: 1, name: 'Rahul Kumar', roll: '25BCA001', email: 'rahul@example.com', course: 'BCA', marks: 85.5 },
                { id: 2, name: 'Priya Sharma', roll: '25BCA002', email: 'priya@example.com', course: 'BCA', marks: 92.0 },
                { id: 3, name: 'Amit Patel', roll: '25BCA003', email: 'amit@example.com', course: 'BCA', marks: 65.75 }
            ];
            save();
        }

        let nextId = Math.max(0, ...students.map(function(s) { return s.id; })) + 1;

        function save() {
            localStorage.setItem('students', JSON.stringify(students));
        }

        function showSQL(sql) {
            document.getElementById('sqlOutput').textContent = sql;
        }

        function updateStats() {
            const total = students.length;
            const avg = total > 0 ? (students.reduce(function(s, st) { return s + st.marks; }, 0) / total).toFixed(2) : 0;
            const max = total > 0 ? Math.max(...students.map(function(s) { return s.marks; })).toFixed(2) : 0;
            document.getElementById('statTotal').textContent = total;
            document.getElementById('statAvg').textContent = avg;
            document.getElementById('statMax').textContent = max;
        }

        function render(data) {
            const tbody = document.getElementById('studentTable');
            if (!data) data = students;
            if (data.length === 0) {
                tbody.innerHTML = '<tr><td colspan="7" class="text-center text-muted py-4">No records found</td></tr>';
            } else {
                tbody.innerHTML = data.map(function(s, i) {
                    const grade = s.marks >= 90 ? 'bg-primary' : s.marks >= 75 ? 'bg-success' : 
                                  s.marks >= 60 ? 'bg-warning text-dark' : 'bg-danger';
                    return '<tr>' +
                        '<td>' + (i + 1) + '</td>' +
                        '<td>' + escapeHtml(s.name) + '</td>' +
                        '<td><code>' + escapeHtml(s.roll) + '</code></td>' +
                        '<td>' + escapeHtml(s.email) + '</td>' +
                        '<td><span class="badge bg-secondary">' + escapeHtml(s.course) + '</span></td>' +
                        '<td><span class="badge ' + grade + '">' + s.marks + '%</span></td>' +
                        '<td>' +
                            '<button class="btn btn-sm btn-outline-primary me-1" onclick="editStudent(' + s.id + ')">Edit</button>' +
                            '<button class="btn btn-sm btn-outline-danger" onclick="deleteStudent(' + s.id + ')">Delete</button>' +
                        '</td>' +
                    '</tr>';
                }).join('');
            }
            updateStats();
        }

        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        // CREATE
        document.getElementById('studentForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const editId = document.getElementById('editId').value;
            const name = document.getElementById('name').value.trim();
            const roll = document.getElementById('roll').value.trim();
            const email = document.getElementById('email').value.trim();
            const course = document.getElementById('course').value;
            const marks = parseFloat(document.getElementById('marks').value);

            if (editId) {
                // UPDATE
                const student = students.find(function(s) { return s.id === parseInt(editId); });
                if (student) {
                    student.name = name;
                    student.roll = roll;
                    student.email = email;
                    student.course = course;
                    student.marks = marks;
                    showSQL("UPDATE students SET name='" + name + "', roll_no='" + roll + 
                            "', email='" + email + "', course='" + course + 
                            "', percentage=" + marks + " WHERE id=" + editId + ";");
                }
                cancelEdit();
            } else {
                // INSERT
                students.push({ id: nextId++, name: name, roll: roll, email: email, course: course, marks: marks });
                showSQL("INSERT INTO students (name, roll_no, email, course, percentage)\n" +
                        "VALUES ('" + name + "', '" + roll + "', '" + email + "', '" + course + "', " + marks + ");");
            }
            save();
            render();
            this.reset();
        });

        // READ / SEARCH
        document.getElementById('searchInput').addEventListener('input', function() {
            const q = this.value.toLowerCase();
            if (q === '') {
                render();
                showSQL("SELECT * FROM students;");
            } else {
                var filtered = students.filter(function(s) {
                    return s.name.toLowerCase().includes(q) || 
                           s.roll.toLowerCase().includes(q) || 
                           s.email.toLowerCase().includes(q);
                });
                render(filtered);
                showSQL("SELECT * FROM students\nWHERE name LIKE '%" + q + "%'\n   OR roll_no LIKE '%" + q + "%'\n   OR email LIKE '%" + q + "%';");
            }
        });

        // EDIT (populate form)
        window.editStudent = function(id) {
            var student = students.find(function(s) { return s.id === id; });
            if (!student) return;
            document.getElementById('editId').value = student.id;
            document.getElementById('name').value = student.name;
            document.getElementById('roll').value = student.roll;
            document.getElementById('email').value = student.email;
            document.getElementById('course').value = student.course;
            document.getElementById('marks').value = student.marks;
            document.getElementById('formTitle').textContent = 'Edit Student';
            document.getElementById('submitBtn').textContent = 'Update Student';
            document.getElementById('submitBtn').classList.replace('btn-primary', 'btn-warning');
            document.getElementById('cancelBtn').classList.remove('d-none');
            showSQL("SELECT * FROM students WHERE id = " + id + ";");
        };

        // DELETE
        window.deleteStudent = function(id) {
            if (confirm('Are you sure you want to delete this record?')) {
                students = students.filter(function(s) { return s.id !== id; });
                save();
                render();
                showSQL("DELETE FROM students WHERE id = " + id + ";");
            }
        };

        function cancelEdit() {
            document.getElementById('editId').value = '';
            document.getElementById('formTitle').textContent = 'Add Student';
            document.getElementById('submitBtn').textContent = 'Add Student';
            document.getElementById('submitBtn').classList.replace('btn-warning', 'btn-primary');
            document.getElementById('cancelBtn').classList.add('d-none');
        }
        document.getElementById('cancelBtn').addEventListener('click', cancelEdit);

        // Initial render
        render();
        showSQL("SELECT * FROM students;");
    })();
    </script>

</body>
</html>
```

---

## Summary

| SQL Operation | Syntax |
|--------------|--------|
| Create Table | `CREATE TABLE name (columns...)` |
| Insert | `INSERT INTO table (cols) VALUES (vals)` |
| Select | `SELECT cols FROM table WHERE condition` |
| Update | `UPDATE table SET col=val WHERE condition` |
| Delete | `DELETE FROM table WHERE condition` |
| Join | `SELECT ... FROM t1 INNER JOIN t2 ON ...` |

---

*Day 40 of 55 | Unit 7 — Web Forms & Database | Web Technology (25BCA060)*
