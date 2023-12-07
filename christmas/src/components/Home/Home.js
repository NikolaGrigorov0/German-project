import { useNavigate, useHref } from "react-router-dom";
import "./Home.css";

export const Home = () => {
const navigate = useNavigate();
const redirectToPage = (input) => {
    navigate(`/${input}`);
  };
  return (
    <div id="container">
      <div class="support-grid"></div>
      <section class="grid-1">
        <div class="title">
          <h1>
            Frohe
            <br />
            Weihnachten
          </h1>
        </div>

        <div class="day-1">
          <label>
            <div class="door">
              <div onClick={() => redirectToPage('firstPage')} class="front">1</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-2">
          <label>
            <div class="door">
              <div onClick={() => redirectToPage('secondPage')} class="front">2</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-3">
          <label>
            <div class="door">
              <div onClick={() => redirectToPage('thirdPage')} class="front">3</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-4">
          <label>
            <div class="door">
              <div onClick={() => redirectToPage('fourthPage')} class="front">4</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-5">
          <label>
            <div onClick={() => redirectToPage('fifthPage')} class="door">
              <div class="front">5</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-6">
          <label>
            <div onClick={() => redirectToPage('sixthPage')} class="door">
              <div class="front">6</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-7">
          <label>
            <div onClick={() => redirectToPage('seventhPage')} class="door">
              <div class="front">7</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-8">
          <label>
            <div onClick={() => redirectToPage('eighthPage')} class="door">
              <div class="front">8</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-9">
          <label>
            <div onClick={() => redirectToPage('ninthPage')} class="door">
              <div class="front">9</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-10">
          <label>
            <div onClick={() => redirectToPage('tenthPage')} class="door">
              <div class="front">10</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-11">
          <label>
            <div onClick={() => redirectToPage('eleventhPage')} class="door">
              <div class="front">11</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-12">
          <label>
            <div onClick={() => redirectToPage('twelfthPage')} class="door">
              <div class="front">12</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-13">
          <label>
            <div onClick={() => redirectToPage('thirteenthPage')} class="door">
              <div class="front">13</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-14">
          <label>
            <div onClick={() => redirectToPage('fourteenthPage')} class="door">
              <div class="front">14</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-15">
          <label>
            <div onClick={() => redirectToPage('fifteenthPage')} class="door">
              <div class="front">15</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-16">
          <label>
            <div onClick={() => redirectToPage('sixteenthPage')} class="door">
              <div class="front">16</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-17">
          <label>
            <div onClick={() => redirectToPage('seventeenthPage')} class="door">
              <div class="front">17</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-18">
          <label>
            <div onClick={() => redirectToPage('eighteenthPage')} class="door">
              <div class="front">18</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-19">
          <label>
            <div onClick={() => redirectToPage('nineteenthPage')} class="door">
              <div class="front">19</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-20">
          <label>
            <div onClick={() => redirectToPage('twentiethPage')} class="door">
              <div class="front">20</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-21">
          <label>
            <div onClick={() => redirectToPage('twentyfirstPage')} class="door">
              <div class="front">21</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-22">
          <label>
            <div onClick={() => redirectToPage('twentysecondPage')} class="door">
              <div class="front">22</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-23">
          <label>
            <div onClick={() => redirectToPage('twentythirdPage')} class="door">
              <div class="front">23</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-24">
          <label>
            <div onClick={() => redirectToPage('twentyfourthPage')} class="door">
              <div class="front">24</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
      </section>
    </div>
  );
};
