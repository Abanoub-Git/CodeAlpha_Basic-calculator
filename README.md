# CodeAlpha_Basic-calculator

# 📟 Basic Calculator

## Overview

A simple, responsive calculator built with **HTML**, **CSS**, and **vanilla JavaScript**.
Supports basic arithmetic operations and provides a clean, keyboard-friendly interface. Ideal for learning DOM manipulation and event handling.

## ✨ Features

* Basic arithmetic: addition (`+`), subtraction (`−`), multiplication (`×`), division (`÷`).
* Clickable buttons and numeric/display screen.
* Real-time expression display and result (updates as user types/clicks).
* Clear (`C`) and all-clear (`AC`) functionality.
* Keyboard support for numbers, operators, Enter (=), Backspace, and Escape.
* Responsive layout that adapts to mobile and desktop.
* Bonus: simple styling improvements and animation for button presses.

## 🛠️ Technologies

* **HTML5** — Structure and semantic elements.
* **CSS3** — Layout (flex/grid), responsive design, and transitions.
* **JavaScript (ES6+)** — Input handling, evaluation, keyboard support, and UI updates.

## 🚀 How to Run

1. Clone or download the repository.
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).
3. Use mouse/touch to press buttons or type using your keyboard.

## 🧭 Usage & Controls

* Click number and operator buttons to build an expression.
* Press `=` button or `Enter` key to evaluate.
* `C` — clear the current entry (or acts as backspace depending on implementation).
* `AC` — clear the entire expression and result.
* `Backspace` — removes the last character.
* `Esc` — clears the calculator (optional mapping).
* Supports decimal point `.` for floating numbers.

## ✅ Keyboard Mapping (recommended)

* `0–9` → digits
* `.` → decimal point
* `+`, `-`, `*`, `/` → arithmetic operators (`*` for × and `/` for ÷)
* `Enter` or `=` → evaluate
* `Backspace` → delete last character
* `Escape` → clear all

> Tip: When showing operators on UI, display × and ÷; map them to `*` and `/` in the JavaScript input parser.

## ⚠️ Safety & Accuracy

* Avoid using `eval()` on untrusted input. If you use `eval` for simplicity, sanitize or validate the expression first (allow only digits, decimal point, parentheses, and operator characters).
* Better approach: parse and evaluate expressions or use a safe expression evaluator.

## ♿ Accessibility

* Ensure buttons are focusable (`<button>`), include `aria-label` attributes for screen readers, and support keyboard navigation (tab order).
* Provide sufficient contrast and visible focus styles.




