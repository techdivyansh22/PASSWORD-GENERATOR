# Password Generator 🔐

A modern and responsive Password Generator built using **HTML, CSS, and JavaScript**. This application allows users to generate strong, secure, and customizable passwords based on selected criteria such as uppercase letters, lowercase letters, numbers, and symbols.

## 🚀 Features

- Generate random secure passwords
- Adjustable password length using a slider
- Include:
  - Uppercase Letters (A-Z)
  - Lowercase Letters (a-z)
  - Numbers (0-9)
  - Symbols (!@#$%^&*)
- Password strength indicator
- One-click password copy to clipboard
- Responsive and attractive UI
- Fisher-Yates password shuffling for improved randomness

---

## 📸 Preview

Add a screenshot of your project here.

```md
![Password Generator Screenshot](screenshot.png)
```

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)

---

## 📂 Project Structure

```text
Password-Generator/
│
├── index.html        # Main HTML file
├── styles.css        # Styling and UI design
├── script.js         # Password generation logic
├── copy.svg          # Copy icon
└── README.md
```

---

## ⚙️ How It Works

### Password Generation Process

1. User selects desired password length.
2. User chooses character types:
   - Uppercase
   - Lowercase
   - Numbers
   - Symbols
3. The application ensures at least one character from every selected category is included.
4. Remaining characters are filled randomly.
5. The generated password is shuffled using the Fisher-Yates algorithm.
6. Password is displayed and can be copied with one click.

---

## 🔒 Password Strength Rules

| Strength | Conditions |
|-----------|------------|
| 🟢 Strong | Uppercase + Lowercase + (Numbers or Symbols) + Length ≥ 8 |
| 🟡 Medium | Letters + (Numbers or Symbols) + Length ≥ 6 |
| 🔴 Weak | All other combinations |

---

## 🧠 Concepts Used

- DOM Manipulation
- Event Handling
- Random Number Generation
- Clipboard API
- Fisher-Yates Shuffle Algorithm
- CSS Variables
- Responsive Design

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/password-generator.git
```

### Navigate to Project Folder

```bash
cd password-generator
```

### Run the Project

Simply open:

```bash
index.html
```

in your browser.

---

## 📋 Future Improvements

- Password history
- Dark/Light mode toggle
- Exclude similar characters (0, O, l, I)
- Password entropy calculation
- Custom symbol selection
- Download generated passwords

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Divyansh Shahi**

GitHub: https://github.com/your-github-username

---

⭐ If you found this project useful, consider giving it a star on GitHub!
