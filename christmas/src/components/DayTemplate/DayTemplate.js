import { useNavigate } from "react-router-dom";
import "./DayTemplate.css";


export const DayPage = ({ dayNumber, germanWord, audioSrc, facts, imageUrl }) => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate(`/`);
  };
  const audio = process.env.PUBLIC_URL + '/first-page.mp3';

  return (
    <div>
      <div className="header">
        <button className="text-xl" onClick={() => goToHomePage()}>
          Zurück
        </button>
        <div className="number-div absolute w-60 flex items-center justify-center m-6 rounded-full text-center h-60 top-0 right-0 shadow-md p-4 text-white">
          <span className="text-9xl text-black font-bold">{1}</span>{" "}
        </div>
      </div>

      <div className="content w-full">
        <h1 className="word text-center font-sans">
          {"random word-translation"}
        </h1>
      </div>
      <div
        id="info"
        className="absolute w-full flex justify-center items-center top-1/3 h-80"
      >
        <div className="p-10">
          <p className="fact flex p-5">{"random facts"}</p>
          <audio controls>
            <source className="flex" src={audio} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <img
          src="https://thehill.com/wp-content/uploads/sites/2/2022/12/CA_christmas_12152022istock.jpg"
          alt="Christmas"
          className="w-full h-auto rounded-md shadow-md border-2 border-gray-300"
        />
      </div>
    </div>
  );
};
