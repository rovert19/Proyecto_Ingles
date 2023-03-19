
const { SpeechSynthesisUtterance } = window;

export const TextToSpeech = ({text}) => {

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <button onClick={handleSpeak}>Speak</button>
    </div>
  );
};