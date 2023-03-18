import { useState, useEffect } from "react";
import { getWords } from "../../firebase-crud";

export const ListWords = () => {
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

  return <div>hafdih</div>;
};
