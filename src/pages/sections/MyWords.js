import { Header } from "../../components/Header";
import "./css/MyWords.css";

import { MyVocabulary } from "./sub_sections/MyVocabulary";
import { Review } from "./sub_sections/Review";
import { useState } from "react";
import { BtnBack } from "../../components/button/BtnBack";

import { ModalAdd } from "../../components/Modal/ModalAdd";
import { ModalInfo } from "../../components/Modal/ModalInfo";

import { useEffect } from "react";
import { getWords } from "../../firebase-crud";

export const MyWords = () => {
  const [option1, setOption1] = useState(true);
  const [option2, setOption2] = useState(true);

  const hadleOption1 = () => {
    setOption1(false);
  };

  const hadleOption2 = () => {
    setOption2(false);
  };

  const handleBack = () => {
    setOption1(true);
    setOption2(true);
  };
  //Obtencion de la lista de palabras:
  const [mywords, setMyWords] = useState([]);
  const getWordList = async () => {
    const data = await getWords();
    setMyWords(
      data.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      })
    );
  };

  useEffect(() => {
    getWordList();
  }, [mywords]);

  return (
    <div className="words-section">
      {option1 && option2 && <Header text="My words" />}
      {!option1 && option2 && <Header text="My vocabulary" />}
      {!option2 && option1 && <Header text="It's time to review" />}
      <div className="words-content">
        <div className="study-option">
          {!option2 ||
            (option1 && (
              <div className="vocabulary-option" onClick={hadleOption1}>
                <h2>My vocabulary</h2>
                <img src={require("../../img/vocabulary.png")} alt="" />
              </div>
            )) || (
              <div className="vocabulary-open">
                <div className="modal-add-position">
                  <ModalAdd />
                </div>

                <MyVocabulary ListWords={mywords} />
                <div onClick={handleBack} className="btn-back-container">
                  <BtnBack />
                </div>
              </div>
            )}

          {!option1 ||
            (option2 && (
              <div className="review-option" onClick={hadleOption2}>
                <h2>It's time to review</h2>
                <img src={require("../../img/review.png")} alt="" />
              </div>
            )) || (
              <div className="review-open">
                <Review ListWords={mywords} />
                <div className="info-container">
                  <ModalInfo />
                </div>

                <p>"Education is the key to success"</p>
                <div onClick={handleBack} className="btn-back-container">
                  <BtnBack />
                </div>
              </div>
            )}
        </div>
        {option1 && option2 && <p>"The future depends on what you do today"</p>}
      </div>
    </div>
  );
};
