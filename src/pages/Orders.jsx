import { useEffect, useState } from "react";
import { useFirebase } from "../context/firebase";
import OrderCard from "../components/OrderCard";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const firebase = useFirebase();

  useEffect(() => {
    const user = firebase.user; // Get the currently logged-in user

    if (user) {
      console.log("Current user:", user.email); // Log current user email

      // Fetch the orders
      firebase
        .getOrders()
        .then((querySnapshot) => {
          const ordersArray = querySnapshot.docs
            .map((doc) => {
              const orderData = { id: doc.id, ...doc.data() };
              console.log("Fetched order:", orderData); // Log each fetched order
              return orderData;
            })
            .filter((order) => order.userEmail === user.email); // Filter orders by logged-in user's email

          setOrders(ordersArray);
          setLoading(false); // Stop loading when orders are fetched
        })
        .catch((error) => {
          console.error("Error fetching orders:", error); // Log any errors
          setLoading(false);
        });
    } else {
      setLoading(false); // Stop loading if no user is logged in
    }
  }, [firebase]);

  if (!firebase.isLoggedin) {
    return <h1>Please log in</h1>;
  }

  if (loading) {
    return <h1>Loading orders...</h1>;
  }

  return (
    <div>
      <h1 className="w-full text-center">Cart</h1>
      {orders.length > 0 ? (
        orders.map((order) => (
          <OrderCard key={order.id} id={order.id} {...order} />
        ))
      ) : (
        <h2>No orders found</h2>
      )}
    </div>
  );
};

export default Orders;
