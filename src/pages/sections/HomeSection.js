import { Header } from "../../components/Header";
import { CircleBar } from "../../components/progress/CircleBar";
import { Word } from "../../components/word/Word";
import "./css/HomeSection.css";
import { ModalAdd } from "../../components/Modal/ModalAdd";
import { useState, useEffect } from "react";
import { getWords } from "../../firebase-crud";


export const HomeSection = () => {
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
    <div className="home-section">
      <Header text="My progress" />
      <div className="home-content">
        <div className="progress-container">
          <CircleBar end={80} title="My words" info="20" color="#02a499" />
          <CircleBar
            end={50}
            title="Speaking time"
            info="45min"
            color="#0866c6"
          />
          <CircleBar
            end={30}
            title="Writing time"
            info="20min"
            color="#ec4561"
          />
        </div>
        <div className="lastest-words">
          <h2>Last words learned</h2>
          <ModalAdd />
          {mywords.map((word) => {
            return (
              <div key={word.id}>
                <Word word={word.word} mean={word.mean} wordID={word.id} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
