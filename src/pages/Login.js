import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import "./Login.css";
export const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <form action="">
          <h2>Sign In</h2>
          <Logo />
          <div className="input-box">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="youremail@gmail.com"
              required
            />
          </div>

          <div className="input-box">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              required
            />
          </div>

          <div className="forgot-pass">Forgot Password?</div>

          <button type="submit" className="btn-sign-in">
            Sign In
          </button>

          <div className="sign-up-link">
            <p>
              Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
          </div>
          <div className="social-sign-in">
            <p>Or sign in with</p>
            <div className="google-sign-in">
              <img src={require("../img/google.png")} alt="Google icon" />
              <span>Continue with Google</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
