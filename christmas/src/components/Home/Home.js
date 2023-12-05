import { useNavigate, useHref } from "react-router-dom";
import "./Home.css";

export const Home = () => {
const navigate = useNavigate();
const redirectToPage = (input) => {
    navigate(`/${input}`);
    const dynamicParams = {
      firstPage: {
        dayNumber: 1,
        germanWord: "Das Kletzenbrot - Плодов Хляб",
        facts: "Das Kletzenbrot ist ein saftiges, dunkelbraunes, würzig-süßes"+
        "Brot, bei dem Kletzen oder Hutzeln, und gewürz mit dem Brotteig vermischt werden",
        audioUrl: "/first-page.mp3",
        imageUrl: "https://thehill.com/wp-content/uploads/sites/2/2022/12/CA_christmas_12152022istock.jpg"
      }

    }
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
              <div onClick={() => redirectToPage('first')} class="front">1</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-2">
          <label>
            <div class="door">
              <div onClick={() => redirectToPage('second')} class="front">2</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-3">
          <label>
            <div class="door">
              <div onClick={() => redirectToPage('third')} class="front">3</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-4">
          <label>
            <div class="door">
              <div onClick={() => redirectToPage('fourth')} class="front">4</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-5">
          <label>
            <div onClick={() => redirectToPage('fifth')} class="door">
              <div class="front">5</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-6">
          <label>
            <div class="door">
              <div class="front">6</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-7">
          <label>
            <div class="door">
              <div class="front">7</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-8">
          <label>
            <div class="door">
              <div class="front">8</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-9">
          <label>
            <div class="door">
              <div class="front">9</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-10">
          <label>
            <div class="door">
              <div class="front">10</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-11">
          <label>
            <div class="door">
              <div class="front">11</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-12">
          <label>
            <div class="door">
              <div class="front">12</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-13">
          <label>
            <div class="door">
              <div class="front">13</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-14">
          <label>
            <div class="door">
              <div class="front">14</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-15">
          <label>
            <div class="door">
              <div class="front">15</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-16">
          <label>
            <div class="door">
              <div class="front">16</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-17">
          <label>
            <div class="door">
              <div class="front">17</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-18">
          <label>
            <div class="door">
              <div class="front">18</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-19">
          <label>
            <div class="door">
              <div class="front">19</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-20">
          <label>
            <div class="door">
              <div class="front">20</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-21">
          <label>
            <div class="door">
              <div class="front">21</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-22">
          <label>
            <div class="door">
              <div class="front">22</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-23">
          <label>
            <div class="door">
              <div class="front">23</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
        <div class="day-24">
          <label>
            <div class="door">
              <div class="front">24</div>
              <div class="back"></div>
            </div>
          </label>
        </div>
      </section>
    </div>
  );
};
