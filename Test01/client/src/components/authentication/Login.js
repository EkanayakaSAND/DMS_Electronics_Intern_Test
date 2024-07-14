import React, { useState } from "react";
import useLogin from "../../hooks/useLogin";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, isLoading, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-outer">
      <div className="login-container">
        <h2>LOGIN</h2>
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
        <Button disabled={isLoading} onClick={handleSubmit} type="submit">
          <FaSignInAlt /> Login
        </Button>
        <div className="dont-have-account">
          <p>
            Don't have an account ? <Link to="/signup">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
