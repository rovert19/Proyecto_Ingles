import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import "./Landing.css";
import botImage from "../img/bot.png"; // importa la imagen como un módulo
import leerImage from "../img/leer.png";
import notasImage from "../img/notas.png";
import comunicacionImage from "../img/comunicacion.png";
export const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="landing">
      <div className="landing-container">
        <div className="landing-center center-content">
          <h1>Welcome to!</h1>
          <Logo size="logo-landing" />
          <h1>An opportunity to improve your English</h1>
          <button className="btn-landing" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
        <div className="landing-top-left center-content">
          <img src={botImage} alt="Bot" /> {/* utiliza la variable que contiene la imagen importada */}
        </div>
        <div className="landing-top-right center-content">
          <img src={notasImage} alt="Notas" />
        </div>
        <div className="landing-bottom-left center-content">
          <img src={leerImage} alt="Leer" />
        </div>
        <div className="landing-bottom-right center-content">
          <img src={comunicacionImage} alt="Comunicacion" />
        </div>
      </div>
    </div>
  );
};
