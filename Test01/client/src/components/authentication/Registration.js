import React from "react";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaUserPlus } from "react-icons/fa";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { signUp, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(email, password, firstName, lastName);
  };

  return (
    <div className="register-outer">
      <div className="register-container">
        <h2>REGISTER</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p>{error}</p>}
          <Button className="w-100" type="submit" disabled={isLoading}>
            <FaUserPlus className="mr-5" />
              Register
          </Button>
        </form>
        {isLoading && <p>Loading...</p>}
        <div className="have-account">
          <p>
            Have an account ? <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
