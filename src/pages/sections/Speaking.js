import { Header } from "../../components/Header";
import axios from "axios";
import { useState, useRef } from "react";
import "./css/Speaking.css";

export const Speaking = () => {
  const [transcript, setTranscript] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioUrl, setAudioUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [playButtonText, setPlayButtonText] = useState("Reproducir");
  const animationRef = useRef(null);

  const transcribeAudio = async (audioBlob) => {
    const url = "https://api.openai.com/v1/audio/transcriptions";
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        "Content-Type": "multipart/form-data",
      },
    };
    const formData = new FormData();
    formData.append("model", "whisper-1");
    formData.append("file", audioBlob);
    try {
      const response = await axios.post(url, formData, config);
      setTranscript(response.data.text);
    } catch (error) {
      console.log(error);
    }
  };

  const startRecording = async () => {
    setIsRecording(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const chunks = [];
      const recorder = new MediaRecorder(stream);
      recorder.addEventListener("dataavailable", (event) => {
        chunks.push(event.data);
      });
      recorder.addEventListener("stop", () => {
        const audioBlob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        transcribeAudio(audioBlob);
      });
      recorder.start();
      setMediaStream(stream);
      setMediaRecorder(recorder);
    } catch (error) {
      console.log(error);
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    mediaRecorder.stop();
    mediaStream.getTracks().forEach((track) => track.stop());
    setAudioUrl(URL.createObjectURL(mediaRecorder.toBlob()));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const audioElement = document.createElement("audio");
    audioElement.src = URL.createObjectURL(file);
    audioElement.controls = true;
    document.body.appendChild(audioElement);
    setAudioUrl(URL.createObjectURL(file));
    transcribeAudio(file);
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setPlayButtonText("Reproduciendo...");
    const audioElement = new Audio(audioUrl);
    audioElement.play();
    audioElement.addEventListener("ended", () => {
      setIsPlaying(false);
      setPlayButtonText("Reproducir");
      animationRef.current.stop();
    });
    animationRef.current.play();
  };

  const handleStop = () => {
    setIsPlaying(false);
    setPlayButtonText("Reproducir");
    animationRef.current.stop();
  };
  return (
    <div className="speaking-section">
      <Header text="Speaking" />
      <div className="speaking-content">
        <img src={require("../../img/speak_icon.png")} alt="" />
        <p>
          Aún estamos trabajando en esta característica, para brindarte una
          mejor experiencia. Pronto tendremos novedades
        </p>
        <img src={require("../../img/work_in_progress.png")} alt="" />

        {/* <h1>Speech to Text</h1>
        <button
          className="button button-purple btn-custom"
          disabled={isRecording}
          onClick={startRecording}
        >
          <span className="text">
            {isRecording ? "Grabando..." : "Comenzar grabación"}
            {isRecording && <span className="recording-indicator">.</span>}
            {isRecording && <span className="recording-indicator">.</span>}
            {isRecording && <span className="recording-indicator">.</span>}
          </span>
        </button>

        <button
          className="button button-purple btn-custom"
          disabled={!isRecording}
          onClick={stopRecording}
        >
          <span className="texto">Detener grabación</span>
        </button>

        <button
          className="button button-purple btn-custom"
          disabled={!audioUrl || isPlaying}
          onClick={handlePlay}
        >
          <span className="text">{playButtonText}</span>
        </button>

        <button
          className="button button-purple btn-custom"
          disabled={!audioUrl || !isPlaying}
          onClick={handleStop}
        >
          <span className="text">Detener reproducción</span>
        </button>
        {transcript && (
          <>
            <h2>Transcripción:</h2>
            <p>{transcript}</p>
          </>
        )}
        <div>
          <label htmlFor="audio-file">Seleccione un archivo de audio:</label>
          <input
            type="file"
            id="audio-file"
            accept="audio/*"
            onChange={handleFileChange}
            className="input-audio-file"
          />
        </div> */}
      </div>
    </div>
  );
};
