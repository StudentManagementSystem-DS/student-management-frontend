# StudentManagementSystem-Frontend

Welcome to the Student Management System Frontend project!

The Student Management project is a web application that allows users to manage student information. It provides features such as creating, editing, viewing, and deleting student records.

## Functional Requirements

### Entities:
- **Students**: Each student has a unique ID, name, email, and other relevant details.
- **Users**: Users can add, view, edit, and delete student records.

### Features:
- **Add Students**: Users can add new students to the system.
- **View Students**: Users can view a list of all students.
- **Edit Students**: Users can edit existing student information.
- **Delete Students**: Users can delete students from the system.
- **Search Students**: Users can search for students by name or other criteria.

## Components
- **Home**: The landing page of the application.
- **StudentView**: Displays a list of students.
- **StudentProfile**: Shows detailed information about a specific student.
- **Search**: Allows users to search for students.
- **NavBar**: Navigation bar for the application.
- **Edit**: Form to edit student information.
- **Add**: Form to add new students.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **React DOM**: Entry point of the DOM-related rendering paths.
- **React Router DOM**: Library for routing in React applications.
- **Axios**: Promise-based HTTP client for making requests to the backend.
- **Bootstrap**: CSS framework for responsive design and styling.
- **React Icons**: Library for including icons in React projects.
- **React Scripts**: Scripts and configuration used by Create React App.
- **Web Vitals**: Library for measuring performance metrics.

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Installation
To install and run the Student Management Frontend project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/StudentManagementSystem-DS/student-management-frontend.git
    ```

2. Navigate to the project directory:
    ```sh
    cd student-management-frontend
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

4. Start the application:
    ```sh
    npm start
    ```

5. Open your browser and visit `http://localhost:3000` to access the Student Management application.

## Usage
Once the application is up and running, you can perform the following actions:

- **Add Students**: Click on the "Add Student" button to add a new student.
- **View Students**: View the list of students or single student.
- **Edit Students**: Click on a student card and select the "Edit" icon to edit student information.
- **Delete Students**: Click on a student card and select the "Delete" icon to remove a student.
- **Search Students**: Use the search bar to find students by name criteria.
