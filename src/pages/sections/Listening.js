import { Header } from "../../components/Header";
import "./css/Listening.css";
export const Listening = () => {
  return (
    <div className="listening-section">
      <Header text="Listening" />
      <div className="listening-content">
        <img src={require("../../img/list_icon.png")} alt="" />
        <p>
          Aún estamos trabajando en esta característica, pronto tendremos más
          novedades.
        </p>
        <img src={require("../../img/work_in_progress.png")} alt="" />
      </div>
    </div>
  );
};
