import { useState, useEffect } from "react";
import { useFirebase } from "../context/firebase";
import SearchIcon from "../assets/search.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const SearchBar = () => {
  const firebase = useFirebase();
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const navigate = useNavigate(); // Use navigate for redirection

  // Fetch books from Firestore
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const bookList = await firebase.listAllBooks(); // Call Firebase function to get books
        const booksData = bookList.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBooks(booksData); // Store books in state
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [firebase]);

  // Filter books based on search term
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredBooks([]); // Clear results if no search term
    } else {
      const results = books.filter((book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(results); // Update filtered books based on search term
    }
  }, [searchTerm, books]);

  // Handle click on a book item
  const handleLiClick = (id) => {
    navigate(`book/description/${id}`); // Navigate to the Description page with the book ID
  };

  return (
    <div className="flex items-center justify-center w-full ">
      <input
        className="border px-4 py-2 w-72"
        style={{ borderRadius: "24px" }}
        type="text"
        value={searchTerm} // Bind search term
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term
        placeholder="Search for a book..."
      />
      <img
        src={SearchIcon}
        alt="Search Button"
        width="20"
        onClick={() => console.log("Search clicked!")}
      />

      {/* Display filtered book results only if a search term exists */}
      {searchTerm && (
        <ul className="mt-4">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <li
                onClick={() => handleLiClick(book.id)} // Correctly pass book ID for routing
                key={book.id}
                className="border-b py-2 cursor-pointer"
              >
                {book.name} - {book.isbn}
              </li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
