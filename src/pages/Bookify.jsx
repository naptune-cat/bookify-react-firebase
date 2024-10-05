import "../index.css";
import { useFirebase } from "../context/firebase";
const Bookify = () => {
  const firebase = useFirebase();
  const userName = firebase.user ? firebase.user.displayName : "Guest";

  return (
    <div className="bookify-container">
      <div className="text-container">
        <h1>
          Hello {userName} ,<br /> Welcome to <b className="yellow">Bookify</b>{" "}
          <br />{" "}
        </h1>
        <p className="mt-5" style={{ fontSize: "1.5rem" }}>
          Discover a world of knowledge and adventure with our vast collection
          of books. Whether you&rsquo;re looking for your next favorite novel or
          a helpful guide, Bookify has something for everyone. Dive in, explore,
          and let your reading journey begin!
        </p>
      </div>
    </div>
  );
};

export default Bookify;
