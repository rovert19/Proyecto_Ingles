import { Header } from "../../components/Header";
import "./css/Reading.css";
import { uploadBooks } from "../../firebase-config";
import { useState } from "react";

export const Reading = () => {
  const [file, setfile] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultado = await uploadBooks(file.filex, file.name);
      console.log(resultado);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="reading-section">
      <Header text="My Readings" />
      <div className="reading-content">
        <h2>
          <span>
            <img src={require("../../img/Reading/book2.png")} alt="" />
          </span>
          "A reader lives a thousand lives before he dies"
        </h2>
        <p>
          Aún no has agregado ningún libro o documento. Empieza agregando uno
          aquí.
        </p>
        <form onSubmit={handleSubmit} className="form-add-file">
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) =>
              setfile({
                filex: e.target.files[0],
                name: e.target.files[0].name,
              })
            }
            required
            className="input-file"
          />
          

          <div className="arrow-btn-container">
            <div className="arrow-container">
              <img src={require("../../img/Reading/arrow.png")} alt="" />
            </div>

            <div className="add-file-container">
              <button className="btn-addFile">
                <span>Add File</span>
              </button>
            </div>
          </div>
        </form>

        <img src={require("../../img/Reading/reading-book.png")} alt="" />
      </div>
    </div>
  );
};
