import { Header } from "../../components/Header";
import "./css/MyWords.css";

import { MyVocabulary } from "./sub_sections/MyVocabulary";
import { Review } from "./sub_sections/Review";
import { useState } from "react";
import { BtnBack } from "../../components/button/BtnBack";

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

  return (
    <div className="words-section">
      <Header text="My Words" />

      <div className="words-content">
        <div className="study-option">
          {!option2 ||
            (option1 && (
              <div className="vocabulary-option" onClick={hadleOption1}>
                <h2>My vocabulary</h2>
                <img src={require("../../img/vocabulary.png")} alt="" />
              </div>
            )) || (
              <>
              <MyVocabulary />
                <div onClick={handleBack}>
                  <BtnBack />
                </div>
              </>
            )}

          {!option1 ||
            (option2 && (
              <div className="review-option" onClick={hadleOption2}>
                <h2>It's time to review</h2>
                <img src={require("../../img/review.png")} alt="" />
              </div>
            )) || (
              <>
                <Review />
                <div onClick={handleBack}>
                  <BtnBack />
                </div>
              </>
            )}
        </div>
        {option1 && option2 && <p>"The future depends on what you do today"</p>}
      </div>
    </div>
  );
};
