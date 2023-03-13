import "./Logo.css";

export const Logo = ({size="logo"}) => {
  return (
    <div className="logo-container">
      <div className={`${size}`}>

        <span>A</span>
        <img src={require("../img/logo-icon2.png")} alt="Logo" />
        <span>L</span>
      </div>
    </div>
  );
};
