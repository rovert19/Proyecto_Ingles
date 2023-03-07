import { Logo } from "../components/Logo";
import './Register.css'
export const Register = () => {
  return (

    <div className="register">
      <div className="register-container">
        <form action="">
          <h2>Free Register</h2>

          <Logo/>
          
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
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
              placeholder="********"
              required
              
            />
          </div>
          <button type="submit" className="btn-register">Register</button>
        </form>
      </div>
    </div>
  );
}
