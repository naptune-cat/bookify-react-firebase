Bookify - A Book Search and Order App
Project Overview
This project, Bookify, is a web application where users can search for books, view detailed descriptions, and place orders. The application is built with React for the frontend and Firebase for the backend. It incorporates features such as Firebase Authentication, Firestore for data management, and Firebase Storage for handling book images.

Key Features
Firebase Authentication: Users can register and log in using email/password or Google Sign-In.
Book Search: Allows users to search for books by name.
Book Listings: Books are displayed with their details (name, ISBN, and image) fetched from Firestore.
Book Descriptions: Dynamic routing for individual book descriptions.
Order Management: Users can place orders for books and view their orders.
Things I Learned
1. React Hooks
useState: Managed component state, such as the search term and list of books.
useEffect: Performed side effects like fetching book data from Firestore and filtering search results.
2. Firebase Integration
Firestore:
Fetched data using getDocs for listing books.
Added data using addDoc to store book listings and orders.
Firebase Authentication:
Implemented user authentication with email/password and Google Sign-In.
Firebase Storage:
Uploaded book cover images using uploadBytes.
Retrieved image URLs using getDownloadURL.
3. React Router
Used useNavigate for dynamic routing to book description pages and redirecting after login/signup.
4. Handling Asynchronous Data
Used async/await to handle asynchronous calls to Firebase for fetching and displaying books.
Managed different states (loading, errors) effectively to ensure a smooth user experience.
5. CSS Styling with Tailwind & Bootstrap
Combined custom CSS with utility-first CSS using Tailwind for a responsive and clean UI.
Used Bootstrap for additional styling, ensuring cross-browser compatibility and mobile responsiveness.
6. Building a Context API
Created a FirebaseProvider to share Firebase functionality (authentication, Firestore queries) across the application.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
