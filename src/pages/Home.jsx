import { useFirebase } from "../context/firebase";
import { useState, useEffect } from "react";
import MyCard from "../components/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const firebase = useFirebase();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    firebase.listAllBooks().then((books) => setBooks(books.docs));
  }, [firebase]);

  return (
    <div className="search-box">
      <SearchBar />

      <div className="container m-5 p-10">
        <Row>
          {books.map((book) => (
            <Col md={3} key={book.id} className="mb-4">
              <MyCard {...book.data()} id={book.id} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
