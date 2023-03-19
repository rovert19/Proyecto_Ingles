import { Header } from "../../components/Header";
import "./css/Reading.css";
import { uploadBooks, resFile } from "../../firebase-config";
import { useState, useEffect } from "react";
import { MyPDFViewer } from "../../components/PDF/MyPDFViewer";

export const Reading = () => {
  const [file, setfile] = useState(null);
  const [respfiles, setRespFiles] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultado = await uploadBooks(file.filex, file.name);
      console.log(resultado);
      myFunction();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    myFunction();
  }, [respfiles]);

  async function myFunction() {
    try {
      const res = await resFile();
      // console.log(res);
      // Utiliza la constante "res" aquí
      setRespFiles(res.items.length);
    } catch (error) {
      console.log("Ocurrió un error al obtener la constante 'res':", error);
    }
  }

  console.log(`Cantidad de archivos en el repo: ${respfiles}`);

  // try {
  //   const res = await listAll(folderRef);
  //   console.log(`La carpeta contiene ${res.items.length} elementos`);
  //   console.log(res);
  // } catch (error) {
  //   console.log(
  //     "Ocurrió un error al verificar cuántos elementos hay en la carpeta:",
  //     error
  //   );
  // }

  return (
    <div className="reading-section">
      <Header text="My Readings" />
      <div className="reading-content">
        {/* <h1>{resFile.items.length}</h1> */}
        {((respfiles === 0) && (
          <>
            <h2>
              <span>
                <img src={require("../../img/Reading/book2.png")} alt="" />
              </span>
              "A reader lives a thousand lives before he dies"
            </h2>
            <p>
              Aún no has agregado ningún libro o documento. Empieza agregando
              uno aquí.
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
          </>
        ))|| 
        (<>
        <h1>Aqui van los pdf agregados</h1>
        {/* <MyPDFViewer pdfUrl={require("../../prueba.pdf")}/> */}
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
                {/* <div className="arrow-container">
                  <img src={require("../../img/Reading/arrow.png")} alt="" />
                </div> */}
                
                <div className="add-file-container">
                  <button className="btn-addFile">
                    <span>Add File</span>
                  </button>
                </div>
              </div>
            </form>
        
        </>)}
      </div>
    </div>
  );
};
