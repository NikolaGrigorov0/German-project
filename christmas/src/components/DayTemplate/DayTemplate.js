import {useNavigate } from "react-router-dom";


export const DayPage = ({ dayNumber, germanWord, audioSrc, facts }) => {
    const navigate = useNavigate()
    const goToHomePage = () => {
    navigate(`/`);
  }

  return (
    <div>
      <div className="header">
        <button onClick={() => goToHomePage()}>Home</button>
        <div className="day-number ">Day {1}</div>
      </div>

      <div className="content">
        <h1 className="word">{"random word"}</h1>
        <audio controls>
          <source src={audioSrc} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <p className="fact">{"random facts"}</p>
      </div>
    </div>
  );
};

