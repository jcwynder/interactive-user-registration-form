# Interactive User Registration Form

## Overview

For this assignment, I was tasked with building an **Interactive User Registration Form** with the intended goals:

1. Structure an HTML form with appropriate input fields for registration.
2. Implement real-time input validation using JavaScript event listeners (input event).
3. Use HTML5 validation attributes (e.g., required, type, minlength, pattern).
4. Apply the JavaScript Constraint Validation API to check validity and display custom error messages.
5. Dynamically create and display error messages next to input fields.
6. Handle the form submit event, prevent default submission, and perform final validation.
7. Use localStorage to save and retrieve simple form data (e.g., username).

In order to create a responsive and interactive form, I applied a wide range of concepts, including **DOM manipulation**, **event handling**, **HTML5 and JavaScript form validation**, and **localStorage**.

[Click Here to Access Interactive User Registration Form](https://htmlpreview.github.io/?https://github.com/jcwynder/task-management-app/blob/main/index.html)

## App Preview

Task Management App
![Design preview for Task Management App](images/TaskManagementAppPreview.png)

Alert if input fields are left blank upon submission from Add Task button
![Design preview for Task Management App](images/TaskManagementAppPreviewAlertIfInputFieldsLeftBlankUponSubmission.png)

Functionality of task filter by status
![Design preview for Task Management App](images/TaskManagementAppPreviewTaskDataFilteredToStatusInProgress.png)

Functionality of task filter by category
![Design preview for Task Management App](images/TaskManagementAppPreviewTaskDataFilteredByCategory.png)

Update status functionality
![Design preview for Task Management App](images/TaskManagementAppPreviewStatusChangeFunctionality.png)

Delete task data functionality
![Design preview for Task Management App](images/TaskManagementAppPreviewDeleteFunctionalityConfirmationMessage.png)

## Implementation

To begin working on this assignment, I created 3 files:

- `<index.html>` file to create basic HTML structure of the registration form.
- `<styles.css>` file to apply styling to form.
- `<script.js>` file to implement core validation logic.

### HTML Structure

After creating my required files, I proceeded into the `<index.html>` file to build the HTML structure of the form.

This form is nested within a parent container and includes:

- Input fields for: Username, Email, Password, and Confirm Password.
- A submission button
- A `<span>` element to display appropiate error messages to correspond with each input.

### App Styling

After creating my HTML structure, I moved onto the `<styles.css>` file to apply styling to the app.

The styling applied is used to make the form presentable and to style the error messages.

Below is a list of the styles used and description of their functionality:

`body`:

- `font-family: Arial, sans-serif;`: Sets the default font for the entire page to Arial. If Arial is not available, it will fall back to a generic sans-serif font. This ensures readable text.
- `background-color: #f4f4f4;`: Sets a light gray background color for the entire webpage, providing a neutral backdrop for the content.
- `display: flex;`: Turns the `body` element into a flex container. This enables the use of Flexbox properties for easy layout management of its direct children.
- `justify-content: center;`: Horizontally centers the content within the flex container (in this case, the `.container`).
- `align-items: center;`: Vertically centers the content within the flex container.
- `min-height: 100vh;`: Ensures that the body takes up at least the full height of the viewport (the visible area of the browser window). This is often used to make sure the centered content is truly in the middle of the screen, even if the content itself is short.
- `margin: 0;`: Removes any default margin that the browser might apply to the body, ensuring the flex layout works as intended from the edges of the viewport.

`.container`:

- `background-color: #fff;`: Sets the background color of the container to white, making it stand out against the light gray background of the `body`.
- `padding: 20px 30px;`: Adds internal spacing (padding) of 20 pixels on the top and bottom, and 30 pixels on the left and right, creating some space around the content inside the container.
- `border-radius: 8px;`: Rounds the corners of the container by 8 pixels, giving it a softer appearance.
- `box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);`: Adds a subtle shadow around the container.
  The values represent:
  - `0`: Horizontal offset (no offset).
  - `0`: Vertical offset (no offset).
  - `10px`: Blur radius (creates a soft, diffused shadow).
  - `rgba(0, 0, 0, 0.1)`: Color of the shadow (black with 10% opacity).
- `width: 400px;`: Sets a fixed width of 400 pixels for the container. This will likely hold the form elements.

`h1`:

- `text-align: center;`: Centers the text within the `<h1>` element.
- `color`: #333;: Sets the text color of the `<h1>` to a dark gray.

`.form-group`:

- `margin-bottom: 15px;`: Adds a 15-pixel margin below each `.form-group`, creating vertical spacing between form elements.

`.form-group label`:

- `display: block;`: Makes the label a block-level element, causing it to take up the full width available and appear on its own line.
- `margin-bottom: 5px;`: Adds a small 5-pixel margin below the label, separating it from the input field.
- `font-weight: bold;`: Makes the label text bold for better readability.

`.form-group input[type="text"], .form-group input[type="email"], .form-group input[type="password"]`:

- `width: calc(100% - 22px);`: Sets the width of the input fields to be 100% of their parent container's width minus 22 pixels. This subtraction accounts for the default padding and border that browsers apply to input elements, ensuring the input fields don't overflow their container.
- `padding: 10px;`: Adds 10 pixels of internal spacing around the text inside the input fields.
- `border: 1px solid #ddd;`: Sets a thin, light gray border around the input fields.
- `border-radius: 4px;`: Rounds the corners of the input fields slightly.
- `box-sizing: border-box;`: This is crucial for the `width` calculation. It tells the browser to include the padding and border in the element's total width and height. Without this, the padding and border would be added on top of the specified width, potentially causing layout issues.

`.form-group input:invalid`:

- `border-color: #e74c3c;`: Changes the border color of an input field to a light red if the browser determines it's in an invalid state (e.g., an empty required field or an incorrectly formatted email). This provides visual feedback to the user.

`.form-group .error-message`:

- `display: block;`: Makes the error message a block-level element, so it appears on its own line below the input field.
- `color: #e74c3c;`: Sets the text color of the error message to red, making it clearly visible.
- `font-size: 0.9em;`: Makes the error message slightly smaller than the default font size.
- `margin-top: 5px;`: Adds a small 5-pixel margin above the error message, separating it from the input field.
- `min-height: 1em;`: Reserves a minimum height equal to the height of one line of text. This helps prevent layout shifts when an error message appears or disappears.

`.form-group small`:

- `display: block;`: Makes the small text a block-level element.
- `font-size: 0.8em;`: Makes the small text even smaller.
- `color: #777;`: Sets the color of the small text to a medium gray, often used for hints or supplementary information.
- `margin-top: 3px;`: Adds a small margin above the small text.

`button[type="submit"]`:

- `width: 100%;`: Makes the submit button take up the full width of its parent container.
- `padding: 10px;`: Adds internal spacing to the button.
- `background-color: #3498db;`: Sets a blue background color for the button.
- `color: white;`: Sets the text color of the button to white.
- `border: none;`: Removes the default border from the button.
- `border-radius`: 4px;: Rounds the corners of the button.
- `cursor: pointer;`: Changes the mouse cursor to a pointer when hovering over the button, indicating that it's clickable.
- `font-size: 16px;`: Sets the font size of the button text.

`button[type="submit"]:hover`:

- `background-color: #2980b9;`: Changes the background color of the button to a slightly darker shade of blue when the user hovers their mouse over it, providing visual feedback of interactivity.

### Logic Implementation

After applying styles to the form, the final phase of this assignment required me to implement the validation logic of the form to the `<script.js>` file to provide real-time feedback to the user and demonstrate how to handle user input effectively and persist simple data.

Below is a brief overview of the order of JavaScript code implemented:

- Selected necessary DOM elements (input fields and error message elements) using variables.

- Applied form's initial setup by saving username data to user's `localStorage`, then loading saved data into Username `input` field upon form refresh.

- Defined all validation functions for each `input` field.

- Attached event listeners to `input` fields to trigger the validation functions on each `input` event. This sets up the real-time feedback.

- Attached an event listener to the `submit` event of the form. This handles the final validation and form submission logic.

## Reflection

### Challenge(s) Faced

Throughout this assignment, I encountered one major challenge that required me to revisit concepts I thought I had mastered and deepen my understanding of some core JavaScript fundamentals.

While I was already comfortable with implementing functionality for tasks like storing data as objects, rendering, updating, deleting, and saving/loading data from local storage, the biggest hurdle came when I had to get the filter dropdown options to properly filter the task data based on the selected criteria.

### Approach to Solving Challenge(s)

I had to look into how to utilize the given and generated options within the filter dropdown once selected to only render task data whose information matched the selected options.
To solve this, I had to explore how to utilize the selected options from the dropdown to display only the tasks whose properties matched the filter. I began by creating a variable to store the selected filter options. Then, I implemented an array to iterate through the stored values and ensure that the correct options were selected when the dropdown was refreshed.

This approach allowed me to filter the task data efficiently, ensuring that only the tasks matching the selected criteria were rendered on the page.

### What I Would Improve

Looking ahead, if I had more time, I would implement a feature that allows users to update all properties of the rendered task data (task name, category, and deadline) directly, rather than having to create a new task entry to make changes. Additionally, I would enhance the user interface with color and accessibility improvements to make the app more visually appealing and user-friendly.
