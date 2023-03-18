import "./MyVocabulary.css";
// import { ModalAdd } from "../../../components/Modal/ModalAdd";
// import { useState, useEffect } from "react";
// import { getWords } from "../../../firebase-crud";
import { Word } from "../../../components/word/Word";
// import { ListWords } from "../../../components/word/ListWords";

export const MyVocabulary = ({ListWords}) => {
  // const [mywords, setMyWords] = useState([]);
  // const getWordList = async () => {
  //   const data = await getWords();
  //   setMyWords(
  //     data.docs.map((doc) => {
  //       return { ...doc.data(), id: doc.id };
  //     })
  //   );
  // };

  // useEffect(() => {
  //   getWordList();
  // }, [mywords]);

  return (
    <div className="myVocabulary-container">
      {/* <ModalAdd /> */}
      <div className="my-vocabulary-words-container">
      {ListWords.map((word) => {
        return (
          <div key={word.id}>
            <Word word={word.word} mean={word.mean} wordID={word.id} />
          </div>
        );
      })}
      </div> 
    </div>
  );
};
