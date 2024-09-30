import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../context/firebase";

const ListingPage = () => {
  const firebase = useFirebase();
  const [name, setName] = useState("");
  const [IsbnNo, setIsbnNo] = useState("");
  const [price, setprice] = useState("");
  const [coverPic, setCoverPic] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    firebase.handleCreateBookListing(name, IsbnNo, price, coverPic);
  };
  return (
    <div className="container mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Book Name</Form.Label>
          <Form.Control
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type="text"
            placeholder="Book Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ISBN Number:</Form.Label>
          <Form.Control
            onChange={(e) => {
              setIsbnNo(e.target.value);
            }}
            value={IsbnNo}
            type="text"
            placeholder="ISBN "
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control
            onChange={(e) => {
              setprice(e.target.value);
            }}
            value={price}
            type="text"
            placeholder="Enter Price"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Cover picture</Form.Label>
          <Form.Control
            onChange={(e) => {
              setCoverPic(e.target.files[0]);
            }}
            type="file"
          />
        </Form.Group>

        <Button onClick={handleClick} variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default ListingPage;
