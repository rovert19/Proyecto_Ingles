import { Header } from "../../components/Header";
import "./css/Speaking.css";

export const Speaking = () => {
  return (
    <div className="speaking-section">
      <Header text="Speaking" />
      <div className="speaking-content">
        <img src={require("../../img/speak_icon.png")} alt="" />
        <p>
          Aún estamos trabajando en esta característica, para brindarte una
          mejor experiencia. Pronto tendremos novedades
        </p>
        <img src={require("../../img/work_in_progress.png")} alt="" />
      </div>
    </div>
  );
};
