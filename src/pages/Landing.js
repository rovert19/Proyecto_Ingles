import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
export const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Logo />
      <h1>Landing Page : Welcome to AIL</h1>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
};
