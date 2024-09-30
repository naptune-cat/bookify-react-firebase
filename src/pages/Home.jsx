import { useFirebase } from "../context/firebase";
import { useState, useEffect } from "react";
import MyCard from "../components/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Home = () => {
  const firebase = useFirebase();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    firebase.listAllBooks().then((books) => setBooks(books.docs));
  }, [firebase]);
  return (
    <div className="container mt-5 ">
      <CardGroup>
        {books.map((book) => (
          <MyCard {...book.data()} id={book.id} key={book.id} />
        ))}
      </CardGroup>
    </div>
  );
};

export default Home;
