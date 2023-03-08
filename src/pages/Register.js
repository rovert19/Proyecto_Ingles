import { Logo } from "../components/Logo";
import "./Register.css";
import { useState } from "react";
import { useAuth } from "../context/authContext";

import { useNavigate } from "react-router-dom";
import { Alert } from "../components/Alert";
export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); //antes de enviar lo mantenemos vacio
    try {
      await signUp(user.email, user.password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="register">
      <div className="register-container">
        <form action="" onSubmit={handleSubmit}>
          <h2>Free Register</h2>

          <Logo />

          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="youremail@gmail.com"
              required
            />
          </div>

          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder="********"
              required
            />
          </div>
          {error && <Alert message={error} />}
          <button type="submit" className="btn-register">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
