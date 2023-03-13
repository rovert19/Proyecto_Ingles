import "../css/Word.css";
export const Word = () => {
  return (
  <div className="word-box">
    <div className="word-container">
      <span className="word-new">through</span>
      <span>|</span>
      <span className="word-mean">mediante</span>
      <div className="word-actions">
        <img src={require('../../img/voice.png')} alt="Voice word option" />
        <img src={require('../../img/edit.png')} alt="Edit word option" />
      </div>
    </div>
  </div>);
};
