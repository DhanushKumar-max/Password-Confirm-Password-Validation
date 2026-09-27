# 🔐 Password & Confirm Password Validation

A simple Angular project demonstrating **Password and Confirm Password validation** using **Reactive Forms**.

The application checks whether the password entered by the user matches the confirm password and displays validation messages when the passwords are different.

---

## 🚀 Features

* Password input field
* Confirm Password input field
* Required field validation
* Password and Confirm Password matching validation
* Password mismatch error message
* Form validation
* Submit button validation
* Angular Reactive Forms
* Simple and clean UI

---

## 🛠️ Technologies Used

* Angular
* TypeScript
* HTML
* CSS
* Reactive Forms
* Angular Validators

---

## 📋 Project Description

Password and Confirm Password validation is commonly used in registration forms.

In this project, the user enters a password and then enters the same password again in the **Confirm Password** field.

The application compares both values.

### Validation Flow

**Password**

↓

**User enters password**

↓

**Confirm Password**

↓

**User enters password again**

↓

**Compare both passwords**

↓

**If both passwords are the same → Valid**

**If passwords are different → Password Mismatch**

---

## ✅ Validation Conditions

### 1. Password Required

If the password field is empty, a required validation message is displayed.

### 2. Confirm Password Required

If the Confirm Password field is empty, a required validation message is displayed.

### 3. Passwords Match

Example:

```text
Password:         Dhanush@123
Confirm Password: Dhanush@123
```

Result:

```text
Valid
```

### 4. Passwords Do Not Match

Example:

```text
Password:         Dhanush@123
Confirm Password: Dhanush@456
```

Result:

```text
Password Mismatch
```

---

## 🧩 Angular Concepts Used

This project demonstrates:

* Components
* Reactive Forms
* FormGroup
* FormControl
* Validators
* Form validation
* Custom validation logic
* `valueChanges`
* `statusChanges`
* Data binding
* Event handling
* Conditional validation messages

---

## 📂 Project Structure

```text
My-Practice/
│
├── src/
│   └── app/
│       ├── nav-bar/
│       │   ├── nav-bar.html
│       │   ├── nav-bar.ts
│       │   └── nav-bar.spec.ts
│       │
│       └── reactive-form-login/
│           ├── reactive-form-login.html
│           ├── reactive-form-login.ts
│           └── reactive-form-login.spec.ts
│
├── public/
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## 💻 Installation

### Clone the Repository

```bash
git clone https://github.com/DhanushKumar-max/Password-confirm-Password-Validation.git
```

### Navigate to the Project

```bash
cd Password-confirm-Password-Validation
```

### Install Dependencies

```bash
npm install
```

---

## ▶️ Run the Application

Start the Angular development server:

```bash
ng serve
```

Open the application in your browser:

```text
http://localhost:4200/
```

---

## 🎯 Learning Objective

The main objective of this project is to understand how **Angular Reactive Forms** are used for form validation.

Through this project, I learned how to:

1. Create Reactive Forms.
2. Create FormControls and FormGroups.
3. Apply Angular validators.
4. Validate user input.
5. Compare Password and Confirm Password fields.
6. Display validation error messages.
7. Check form validity before submission.
8. Work with `valueChanges` and `statusChanges`.

---

## 🔮 Future Improvements

The project can be extended with:

* Password strength validation
* Show/Hide password functionality
* Email validation
* Username validation
* Confirm Email validation
* Complete Registration Form
* Login Authentication
* API Integration
* JWT Authentication

---

## 👨‍💻 Author

**Dhanush Kumar**

Frontend Developer

**Skills:** HTML | CSS | JavaScript | Angular | TypeScript

---

## 📄 License

This project is created for **learning and practice purposes**.
