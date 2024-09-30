import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../context/firebase";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const firebase = useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    if (firebase.isLoggedin) {
      navigate("/");
    }
  }, [firebase, navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("logging in a user");
    const result = await firebase.signin(email, password);
    console.log(result);
  };

  return (
    <div className="container mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPass(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button onClick={handleSubmit} variant="primary" type="submit">
          Sign in
        </Button>
      </Form>
      <h1 className="mt-5 mb-5">or</h1>
      <Button onClick={firebase.signinGoogle} variant="danger">
        Sign in with google
      </Button>
    </div>
  );
};

export default LoginPage;
