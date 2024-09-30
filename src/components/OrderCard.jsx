import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useFirebase } from "../context/firebase";
import { useParams } from "react-router-dom";

const OrderCard = (props) => {
  const firebase = useFirebase();
  const params = useParams;
  const [url, setURL] = useState(null);
  useEffect(() => {
    firebase.getOrders(params.bookId).then;
  }, [firebase]);
  useEffect(() => {
    firebase.getImageUrl(props.imageURL).then((url) => setURL(url));
  }, [firebase, props.imageURL]);

  return (
    <Card
      className="d-flex flex-row align-items-center"
      style={{ margin: "5px" }}
    >
      <Card.Img
        style={{ margin: "10px", width: "100px", height: "auto" }}
        src={url}
        alt="Book cover"
      />
      <Card.Body className="ml-3">
        {" "}
        {/* Use margin-left to add some space */}
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Price: {props.price} <br />
          ISBN number: {props.isbn} <br />
          Quantity: {props.qty}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default OrderCard;
