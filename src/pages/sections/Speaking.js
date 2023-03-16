import { Header } from "../../components/Header";
import "./css/Speaking.css";
import React, { useState } from 'react';
import Whisper from 'whisper';

export const Speaking = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioChunks, setAudioChunks] = useState([]);
    const recorder = new Whisper();

    const handleStartRecording = () => {
        setIsRecording(true);
        recorder.start();
        recorder.on('data', (chunk) => {
            setAudioChunks((prevAudioChunks) => [...prevAudioChunks, chunk]);
        });
    };

    const handleStopRecording = () => {
        setIsRecording(false);
        recorder.stop();
    };

    const handlePlayRecording = () => {
        const blob = new Blob(audioChunks, { type: 'audio/ogg; codecs=opus' });
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        audio.play();
    };

  return (
    <div className="speaking-section">
      <Header text="My Speaking" />
      <div className="speaking-content">
      <div>
      <audio controls />
      <button onClick={handleStartRecording} disabled={isRecording}>
        Start Recording
      </button>
      <button onClick={handleStopRecording} disabled={!isRecording}>
        Stop Recording
      </button>
      <button onClick={handlePlayRecording} disabled={!audioChunks.length}>
        Play Recording
      </button>
    </div>
      </div>
    </div>
  );
};