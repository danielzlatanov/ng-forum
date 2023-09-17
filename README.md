# SoftUni Forum Workshop

Welcome to the SoftUni Forum project, an Angular Single Page Application (SPA). This comprehensive documentation will guide you through all four parts of the project, including key concepts, features, and instructions for each part.

## 🚀 Getting Started

To run the SoftUni Forum application, follow these steps:

### Frontend (Angular)

1. Open a terminal and navigate to the `ng-app` folder, where the frontend code is located.

2. Install the required dependencies by running the following command:

    ```bash
    npm install
    ```

3. Start the Angular development server using the following command:

    ```bash
    ng serve
    ```

4. Open your web browser and go to http://localhost:4200/ to access the frontend of the application.

### Backend (Node.js REST API)

1. Open a separate terminal and navigate to the `rest-api` folder, where the backend code is located.

2. Install the required dependencies by running the following command:

    ```bash
    npm install
    ```

3. Start the Node.js REST API server using the following command:

    ```bash
    npm start
    ```

4. The backend server will start and be accessible at http://localhost:3000/.

**Now, you can interact with the SoftUni Forum app by accessing the frontend in your web browser and making API requests to the backend server.**

## 🌐 Backend API Routes

Here are all of the available API routes for interacting with the backend server:

### Authentication Routes

| Route           | Description              | Method | Headers | Parameters / Request Body |
| --------------- | ------------------------ | ------ | ------- | ------------------------- |
| `/api/register` | Register a new user      | POST   | None    | JSON: {user data}         |
| `/api/login`    | Log in an existing user  | POST   | None    | JSON: {user credentials}  |
| `/api/logout`   | Log out the current user | POST   | None    | None                      |

### User Routes

| Route                | Description                   | Method | Headers                       | Parameters / Request Body |
| -------------------- | ----------------------------- | ------ | ----------------------------- | ------------------------- |
| `/api/users`         | Get all users                 | GET    | None                          | None                      |
| `/api/users/:userId` | Get user by ID                | GET    | None                          | None                      |
| `/api/users/profile` | Get user profile information  | GET    | Authentication token required | None                      |
| `/api/users/profile` | Edit user profile information | PUT    | Authentication token required | JSON: {updated user data} |

### Theme Routes

| Route                  | Description                | Method | Headers                       | Parameters / Request Body |
| ---------------------- | -------------------------- | ------ | ----------------------------- | ------------------------- |
| `/api/themes`          | Get all themes             | GET    | None                          | None                      |
| `/api/themes`          | Create a new theme         | POST   | Authentication token required | JSON: {theme data}        |
| `/api/themes/:themeId` | Get a specific theme by ID | GET    | None                          | None                      |
| `/api/themes/:themeId` | Subscribe to a theme       | PUT    | Authentication token required | None                      |

### Post Routes

| Route                                | Description          | Method | Headers                       | Parameters / Request Body |
| ------------------------------------ | -------------------- | ------ | ----------------------------- | ------------------------- |
| `/api/posts`                         | Get the latest posts | GET    | None                          | None                      |
| `/api/posts/:postId`                 | Like a post          | PUT    | Authentication token required | None                      |
| `/api/themes/:themeId/posts/:postId` | Edit a post          | PUT    | Authentication token required | JSON: {updated post data} |
| `/api/themes/:themeId/posts/:postId` | Delete a post        | DELETE | Authentication token required | None                      |

### Test Route

-   `/api/test`
    -   Description: Test route for REST API
    -   Method: GET
    -   Headers: None
    -   Parameters / Request Body: None

## 📚 Table of Contents

1. [Part 1](./docs/Angular%20-%20Workshop%20-%20Part%201.pdf)

-   Introduction to the SoftUni Forum Workshop
-   Setting up MongoDB and loading initial data
-   Creating and routing pages
-   Implementing user authentication

*   **[Part 1 Documentation (PDF)](./docs/Angular%20-%20Workshop%20-%20Part%201.pdf)**

2. [Part 2](./docs/Angular%20-%20Workshop%20-%20Part%202.pdf)

-   Building user navigation bar
-   Implementing additional pages and routing
-   Handling user authentication and navigation

*   **[Part 2 Documentation (PDF)](./docs/Angular%20-%20Workshop%20-%20Part%202.pdf)**

3. [Part 3](./docs/Angular%20-%20Workshop%20-%20Part%203.pdf)

-   Implementing form validation, notifications, and styling
-   Utilizing both Reactive and Template-driven Forms
-   Creating custom directives for stylization and validation

*   **[Part 3 Documentation (PDF)](./docs/Angular%20-%20Workshop%20-%20Part%203.pdf)**

4. [Part 4](./docs/Angular%20-%20Workshop%20-%20Part%204.pdf)

-   Introducing Auth and Error Interceptors
-   Implementing lazy loading for improved performance
-   Creating custom pipes for data transformation and formatting

*   **[Part 4 Documentation (PDF)](./docs/Angular%20-%20Workshop%20-%20Part%204.pdf)**

## 🚀 Part 1

### 🌟 Introduction

Part 1 of the SoftUni Forum project lays the foundation for the application. Here the basics of building a forum are established, setting up the database, creating pages, and implementing user authentication (hardcoded).

### 📋 Key Features

-   User registration and login system
-   MongoDB setup and initial data loading
-   Page creation and routing for different sections
-   User authentication with Angular Guards

For detailed instructions and code examples, refer to [Part 1 Documentation](./docs/Angular%20-%20Workshop%20-%20Part%201.pdf).

## 🚀 Part 2

### 🌟 Introduction

Part 2 extends the application by adding user navigation, introducing new pages, and enhancing the user experience. Navigation bars are implemented, additional pages, and user authentication for a more interactive forum.

### 📋 Key Features

-   User navigation bar with login/logout functionality
-   Implementation of various pages and routing
-   Enhanced user experience with navigation controls

For detailed instructions and code examples, refer to [Part 2 Documentation](./docs/Angular%20-%20Workshop%20-%20Part%202.pdf).

## 🚀 Part 3

### 🌟 Introduction

Part 3 focuses on form validation, notifications, and styling to improve user interactions. Both Reactive and Template-driven Forms are implemented, ensuring data input is validated and styled correctly.

### 📋 Key Features

-   Form validation and styling for various user inputs
-   Implementation of Reactive and Template-driven Forms
-   Custom directives for stylization and validation

For detailed instructions and code examples, refer to [Part 3 Documentation](./docs/Angular%20-%20Workshop%20-%20Part%203.pdf).

## 🚀 Part 4

### 🌟 Introduction

Part 4 introduces interceptors, lazy loading, and custom pipes to enhance the application's functionality and performance. Auth and Error Interceptors are implemented, lazy loaded `Auth` and `Theme` modules, and custom pipes are created for data transformation.

### 📋 Key Features

-   Auth Interceptor for user authentication with JWT
-   Error Interceptor for handling error cases gracefully
-   Lazy loading for optimized resource usage
-   Custom pipes for data transformation and formatting

For detailed instructions and code examples, refer to [Part 4 Documentation](./docs/Angular%20-%20Workshop%20-%20Part%204.pdf).
