import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/firebase";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";

const Description = () => {
  const params = useParams();
  const firebase = useFirebase();
  const [data, setData] = useState(null);
  const [url, setURL] = useState(null);
  const [qty, setQty] = useState(1);
  useEffect(() => {
    firebase.bookDescById(params.bookId).then((value) => setData(value.data()));
  }, [firebase, params.bookId]);

  useEffect(() => {
    if (data) {
      const imageURL = data.imageURL;
      firebase.getImageUrl(imageURL).then((url) => {
        setURL(url);
      });
    }
  }, [firebase, data]);
  if (data == null) {
    return <h1>Loading...</h1>;
  }
  const placeOrder = async () => {
    const result = await firebase.placeOrder(params.bookId, qty);
    console.log(result);
  };
  return (
    <div className=" container mt-5  ">
      <h1>
        {data.name}
        <br />
      </h1>

      <img src={url} width="300px" className="rounded" />
      <h2>Description</h2>
      <h4>price: {data.price}</h4>
      <h4>ISBN number: {data.isbn}</h4>
      <h2>Owner Details</h2>
      <h4>Name: {data.displayName}</h4>
      <h4>email: {data.userEmail}</h4>
      <Form.Group className="mb-3">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          onChange={(e) => {
            setQty(e.target.value);
          }}
          value={qty}
          type="number"
          placeholder="1"
        />
      </Form.Group>
      <Button onClick={placeOrder} variant="success">
        Buy now
      </Button>
    </div>
  );
};

export default Description;
