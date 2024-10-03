import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useFirebase } from "../context/firebase";
import { useNavigate } from "react-router-dom";
import "../index.css";

const MyCard = (props) => {
  const firebase = useFirebase();
  const [url, setURL] = useState(null);
  const navigation = useNavigate();
  useEffect(() => {
    firebase.getImageUrl(props.imageURL).then((url) => setURL(url));
  }, [firebase, props.imageURL]);
  return (
    <Card
      className="custom-card"
      style={{
        maxWidth: "300px",
        height: "400px",
        margin: "10px",
      }}
    >
      <Card.Img
        style={{ height: "auto", maxHeight: "150px", objectFit: "cover" }}
        variant="top"
        src={url}
      />
      <Card.Body style={{ flexGrow: 1 }}>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Price : {props.price} <br /> ISBN number: {props.isbn} <br />
          Sold by: {props.displayName}
        </Card.Text>
        <Button
          onClick={(e) => navigation(`/book/description/${props.id}`)}
          variant="primary"
        >
          Description
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
