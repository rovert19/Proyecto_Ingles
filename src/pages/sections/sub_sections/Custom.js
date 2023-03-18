import "./Custom.css";
import { useState } from "react";
export const Custom = ({ wordx, wordxMean }) => {
  const [word, setWord] = useState(wordx);
  const handleMean = () => {
    if (word !== wordxMean) {
      setWord(wordxMean);
    }else{
      setWord(wordx);
    }
  };
  return (
    <div className="custom-container">
      <h2 onClick={handleMean}>{word}</h2>
      <div className="review-words-option">
        <img src={require("../../../img/Vocabulario/voc_check.png")} alt="" />
        <img src={require("../../../img/Vocabulario/voc_worlin.png")} alt="" />
        <img src={require("../../../img/Vocabulario/voc_x.png")} alt="" />
      </div>
    </div>
  );
};
