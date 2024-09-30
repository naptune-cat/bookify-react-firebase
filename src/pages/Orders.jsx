import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/firebase";
import MyCard from "../components/Card";
import OrderCard from "../components/OrderCard";
import { useParams } from "react-router-dom";

const Orders = () => {
  const params = useParams();
  const [orders, setOrders] = useState([]);
  const firebase = useFirebase();

  useEffect(() => {
    firebase
      .getOrders(params.bookId)
      .then((orders) => setOrders(orders), [firebase, params.bookId]);
  });

  if (!firebase.isLoggedin) {
    return <h1>Please log in</h1>;
  }

  return (
    <div>
      <h1 className="w-full text-center">Cart</h1>
      {orders.map((orders) => (
        <OrderCard key={orders.id} id={orders.id} {...orders.data()} />
      ))}
    </div>
  );
};

export default Orders;
