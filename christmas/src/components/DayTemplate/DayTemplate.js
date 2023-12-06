import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import "./DayTemplate.css";


export const DayPage = ({params}) => {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const goToHomePage = () => {
    navigate(`/`);
  };

  const handleButtonClick = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  const { dayNumber, germanWord, facts, audioUrl, imageUrl } = params;
  const audio = process.env.PUBLIC_URL + `${audioUrl}`;

  return (
    <div>
      <div className="header">
        <button className="text-xl" onClick={() => goToHomePage()}>
          Zurück
        </button>
        <div className="number-div absolute w-60 flex items-center justify-center m-6 rounded-full text-center h-60 top-0 right-0 shadow-md p-4 text-white">
          <span className="text-9xl text-black font-bold">{dayNumber}</span>{" "}
        </div>
      </div>

      <div className="content w-full">
        <h1 className="word text-center font-sans font-bold">
          {germanWord}
        </h1>
        <div className="flex items-center justify-center">
        <button className="bg-transparent shadow-md text-2xl hover:bg-gray-600" onClick={handleButtonClick}>
        {isPlaying ? '🔊' : '🔈'}
      </button>
      <audio ref={audioRef} src={audio} type="audio/mp3" />
          </div>
      </div>
      <div
        id="info"
        className="absolute w-full flex justify-center items-center top-1/3 h-80"
      >
        <div className="p-10">
          <p className="fact flex p-5 text-xl font-semibold max-w-xl">{facts}</p>
          
        </div>
        <img
          src={imageUrl}
          alt="Christmas"
          className="w-full h-auto rounded-md shadow-md border-2 border-gray-300"
        />
      </div>
    </div>
  );
};
