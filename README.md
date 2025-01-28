Registration Form
This is a simple registration form that allows users to sign up by providing their Gmail, password, and phone number.

Features:
Email Validation: The form validates the Gmail address using a regex pattern.
Password Field: The password field allows users to enter a secure password, with a limit of 8 characters.
Phone Number Validation: The phone number field ensures the entered phone number follows a specific format (starting with a digit between 6-9, followed by 8 more digits, and ending with a digit between 3-9).
Requirements:
A modern web browser (Chrome, Firefox, Edge, Safari).
No external dependencies (pure HTML and simple form validation using regex).
File Structure:
bash
Copy
- index.html            # Main registration page
- README.md             # Documentation for the project
How to Use:
Clone or download this repository to your local machine.
Open the index.html file in your web browser.
Fill out the form with the required details:
Gmail: Enter a valid email address in the correct format (e.g., user@example.com).
Password: Enter a password with a maximum of 8 characters.
Phone Number: Enter a valid phone number with the specified format (e.g., 9876543213).
Press the "Submit" button to register.
Validation Details:
Email Format:

The Gmail address must follow this pattern: ^[a-zA-Z\d]{3-8}@{1}[a-zA-Z]{8}.[a-z]{3}$
Example valid Gmail format: user1234@gmail.com
Phone Number Format:

The phone number must start with a digit between 6-9, followed by 8 digits, and end with a digit between 3-9.
Example valid phone number format: 9876543213
Password:

Password is required with a maximum length of 8 characters.
Contribution:
Feel free to fork this repository and create pull requests with improvements. If you find any bugs or issues, please open an issue in the Issues section.


