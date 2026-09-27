🔐 Password & Confirm Password Validation

A simple Angular project that demonstrates Password and Confirm Password validation using Reactive Forms.

The project checks whether the password entered by the user matches the confirm password field and displays appropriate validation messages when the passwords do not match.

🚀 Features
Password input field
Confirm Password input field
Password required validation
Confirm Password required validation
Password and Confirm Password matching validation
Displays validation messages
Form status validation
Submit button validation
Angular Reactive Forms
Clean and simple user interface
🛠️ Technologies Used
Angular
TypeScript
HTML
CSS
Reactive Forms
Angular Validators
📂 Project Structure
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
📝 Project Description

Password validation is an important part of registration and login forms.

In this project, the user enters a password and then enters the same password again in the Confirm Password field.

The application compares both values.

Validation Logic
Password
    ↓
User enters password
    ↓
Confirm Password
    ↓
User enters password again
    ↓
Compare both values
    ↓
 ┌───────────────┐
 │ Are they same?│
 └───────┬───────┘
         │
    ┌────┴────┐
    ↓         ↓
   YES        NO
    ↓         ↓
 Valid    Password
          Mismatch
✅ Validation Conditions
1. Empty Password

If the password field is empty, the application displays a required-field validation message.

2. Empty Confirm Password

If the confirm password field is empty, the application displays a required-field validation message.

3. Matching Passwords

If both fields contain the same password:

Password:         Dhanush@123
Confirm Password: Dhanush@123

The validation is successful.

4. Password Mismatch

If the passwords are different:

Password:         Dhanush@123
Confirm Password: Dhanush@456

The application displays a password mismatch error.

🧩 Angular Concepts Used

This project demonstrates the following Angular concepts:

Components
Reactive Forms
FormGroup
FormControl
Validators
Form validation
Custom validation logic
valueChanges
statusChanges
Data binding
Event handling
Conditional error messages
📋 Example Form
┌─────────────────────────────────┐
│          Login Form             │
│                                 │
│ Password                        │
│ ┌─────────────────────────────┐ │
│ │ •••••••••••                 │ │
│ └─────────────────────────────┘ │
│                                 │
│ Confirm Password                │
│ ┌─────────────────────────────┐ │
│ │ •••••••••••                 │ │
│ └─────────────────────────────┘ │
│                                 │
│        [ Submit ]               │
└─────────────────────────────────┘
💻 Installation

Clone the repository:

git clone https://github.com/DhanushKumar-max/Password-confirm-Password-Validation.git

Navigate to the project:

cd Password-confirm-Password-Validation

Install dependencies:

npm install
▶️ Run the Application

Start the Angular development server:

ng serve

Open your browser and visit:

http://localhost:4200/
🎯 Learning Objective

The main objective of this project is to understand how Angular Reactive Forms can be used to:

Create form controls.
Apply validators.
Validate user input.
Compare two form fields.
Display validation messages.
Check form status before submission.
🔮 Future Improvements

The project can be extended with:

Password strength validation
Show/Hide password functionality
Email validation
Username validation
Confirm email validation
Registration form
Login authentication
API integration
JWT authentication
👨‍💻 Author

Dhanush Kumar

Frontend Developer | Angular | TypeScript | JavaScript | HTML | CSS

📄 License

This project is created for learning and practice purposes.
