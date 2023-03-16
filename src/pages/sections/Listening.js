import { Header } from "../../components/Header";
import "./css/Listening.css";

export const Listening = () => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    // Aquí puedes implementar la lógica para buscar en el contenido del listening
    console.log(searchTerm);
  };

  return (
    <div className="listening-section">
      <Header text="My Listening" />
      <div className="search-container">
        <input type="text" placeholder="Search for a song" onChange={handleSearch} />
      </div>
      <div className="listening-content">
        Contenido del listening
      </div>
    </div>
  );
};
