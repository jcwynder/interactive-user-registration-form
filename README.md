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

In order to create a responsive and interactive form, I had to apply my knowledge of **DOM manipulation**, **event handling**, **HTML5 and JavaScript form validation**, and **localStorage**.

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
- `<script.js>` file to implement fcore validation logic.

### HTML Structure

After creating my required files, I proceeded into the `<index.html>` file to build the HTML structure of the form.

This form is nested within a parent `<div>` and includes:

- Input fields for: Username, Email, Password, and Confirm Password.
- A submission button
- A `<span>` element for error messages to correspond with each input.

### App Styling

After creating my HTML structure, I moved onto the `<styles.css>` file to apply styling to the app.

The styling applied is used to make the form presentable and to style the error messages.

Here's a list of the applied styles I used and their intended purpose:

- ```
    body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
  }
  ```

  - Used to set the default font for the entire page to Arial, set a light gray background color for the entire webpage, turn the `body` element into a flex container, horizontally center content within flex container, vertically center the content within the flex container, ensure that the body takes up at least the full height of the viewport, and remove any default margin that the browser might apply to the body.

- ```
    .container {
    background-color: #fff;
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 400px;
  }
  ```

  - Used to set the background color of the container to white, add internal spacing (padding) of 20 pixels on the top and bottom, and 30 pixels on the left and right, round the corners of the container by 8 pixels, add a subtle shadow around the container, and set a fixed width of 400 pixels for the container.

- ```
  h1 {
    text-align: center;
    color: #333;
  }
  ```

  - Used to center the text within the `<h1>` element and set text color of the `<h1>` to a dark gray.

- ```
   .form-group {
    margin-bottom: 15px;
  }
  ```

  - Used to add a 15-pixel margin below each `.form-group`.

- ```
  .overdue {
  color: red;
  font-weight: bold;
  }
  ```

  - Used to visually highlight overdue tasks by applying the color red and bold styling to the overdue text entries.

### Logic Implementation

After applying styles to the app, the final phase of this assignment required me to implement the logic of the app to the `<app.js>` file in order to ultilize the functions I need to include.

Below is a brief overview of the order of JavaScript code implemented:

- Created empty array to store task data as an object.

- Created function to save user task data to their loacl storage.

- Created function to render user task data.

- Created function to update user task data

- Created function to delete user task data.

- Created function to add user task data.

- Created function to implement functionality for user to load task data from their local storage whenever app page is refreshed.

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
