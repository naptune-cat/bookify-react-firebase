# **Bookify - A Book Search and Order App**

## **Project Overview**

**Bookify** is a web application that enables users to search for books, view detailed descriptions, and place orders. It is built using **React** for the frontend and **Firebase** for the backend, incorporating features such as Firebase Authentication, Firestore for database management, and Firebase Storage for handling book images.

---

## **Key Features**
- **Firebase Authentication**: Supports user registration and login via email/password or Google Sign-In.
- **Book Search**: Allows users to search books by name.
- **Book Listings**: Displays books with details such as name, ISBN, and cover image fetched from Firestore.
- **Book Descriptions**: Utilizes dynamic routing for individual book descriptions.
- **Order Management**: Users can place orders for books and view their orders.

---

## **Things I Learned**

### **1. React Hooks**
- **useState**: Used for managing component state such as the search term and list of books.
- **useEffect**: Managed side effects like fetching book data from Firestore and filtering search results.

### **2. Firebase Integration**
- **Firestore**: 
   - Used `getDocs` to fetch book data.
   - Used `addDoc` to add new books and orders to Firestore collections.
- **Firebase Authentication**: 
   - Implemented user authentication with email/password and Google Sign-In.
- **Firebase Storage**:
   - Uploaded book cover images with `uploadBytes`.
   - Fetched image URLs using `getDownloadURL`.

### **3. React Router**
- Utilized `useNavigate` to handle dynamic routing, enabling navigation to book description pages and redirection after login/signup.

### **4. Handling Asynchronous Data**
- Leveraged `async/await` to handle asynchronous Firebase requests.
- Managed different states (loading, errors) to ensure a smooth user experience.

### **5. CSS Styling with Tailwind & Bootstrap**
- Combined custom CSS with **Tailwind CSS** for responsive design and a clean UI.
- Used **Bootstrap** for additional styling, ensuring a mobile-friendly and cross-browser-compatible interface.

### **6. Context API for Firebase**
- Created a `FirebaseProvider` using **React Context** to share Firebase functionality (authentication, Firestore queries) across the application.




