import "./Logo.css";

export const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo">
        <span>A</span>
        <span>
          <img src={require("../img/logo-icon2.png")} alt="Logo" />
        </span>
        <span>L</span>
      </div>
    </div>
  );
};
