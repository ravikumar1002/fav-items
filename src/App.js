import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [listItem, setListItem] = useState(1);
  const [activeBtn, setActiveBtn] = useState(0);

  function listOne(list) {
    setListItem(list);
  }

  return (
    <div className="App">
      <h1> My favorite Songs</h1>
      <h3>Checkout my different type of songs.It can be help your enjoyment</h3>
      <div className="center-box">
        <div className="content-box">
          <div className="left-side-part">
            <button
              className={listItem === 1 ? "activeBtn" : "btn"}
              onClick={() => listOne(1)}
            >
              {" "}
              Party{" "}
            </button>
            <button
              className={listItem === 2 ? "activeBtn" : "btn"}
              onClick={() => listOne(2)}
            >
              {" "}
              Retro
            </button>
            <button
              className={listItem === 3 ? "activeBtn" : "btn"}
              onClick={() => listOne(3)}
            >
              {" "}
              Indie{" "}
            </button>
            <button
              className={listItem === 4 ? "activeBtn" : "btn"}
              onClick={() => listOne(4)}
            >
              {" "}
              EDM{" "}
            </button>
            <button
              className={listItem === 5 ? "activeBtn" : "btn"}
              onClick={() => listOne(5)}
            >
              {" "}
              90s & Early 2000s{" "}
            </button>
          </div>
          <div className="right-side-part">
            <div
              className="items-list"
              style={{ display: listItem === 1 ? "block" : "none" }}
            >
              <div>
                <p>‘Hey Ya’ – Outkast</p>
                <p>⭐ 8/10</p>
              </div>
              <div>
                <p>‘Don't Stop ’Til You Get Enough’ – Michael Jackson</p>
                <p>⭐ 7.3/10</p>
              </div>
              <div>
                <p>‘Get Lucky’ – Daft Punk featuring Pharrell Williams </p>
                <p>⭐ 7/10</p>
              </div>{" "}
              <div>
                <p> ‘Push It’ – Salt-N-Pepa </p>
                <p>⭐ 8.3/10</p>
              </div>{" "}
              <div>
                <p> ‘Let’s Dance’ – David Bowie </p>
                <p>⭐ 7.8/10</p>
              </div>{" "}
              <div>
                <p> ‘Twist and Shout’ – The Beatles</p>
                <p>⭐ 8.1/10</p>
              </div>
            </div>
            <div
              className="items-list"
              style={{ display: listItem === 2 ? "block" : "none" }}
            >
              <div>
                <p>Wake Me Up Before You Go-Go</p>
                <p>⭐ 9/10</p>
              </div>
              <div>
                <p>Girls Just Wanna Have Fun</p>
                <p>⭐ 8.5/10</p>
              </div>
              <div>
                <p>I Love Rock and Roll – Joan Jet</p>
                <p>⭐ 7.5/10</p>
              </div>
              <div>
                <p>Boom Boom Pow – Black Eyed Peas </p>
                <p>⭐ 8/10</p>
              </div>
              <div>
                <p> Love Story – Taylor Swift</p>
                <p>⭐ 7/10</p>
              </div>
              <div>
                <p>Drop It Like It’s Hot – Snoop Dogg with Pharrell</p>
                <p>⭐ 7.6/10</p>
              </div>
            </div>
            <div
              className="items-list"
              style={{ display: listItem === 3 ? "block" : "none" }}
            >
              <div>
                <p> Jessica Pratt – Back Baby</p>
                <p>⭐ 8.5/10</p>
              </div>
              <div>
                <p> Bon Iver – Holocene</p>
                <p> ⭐ 8/10</p>
              </div>
              <div>
                <p>Vampire Weekend – Hannah Hunt</p>
                <p>⭐ 8/10</p>
              </div>
              <div>
                <p>St. Vincent – Prince Johnny</p>
                <p>⭐ 7.6/10</p>
              </div>
              <div>
                <p>Perfume Genius – Queen</p>
                <p>⭐ 7/10</p>
              </div>
              <div>
                <p>Future Island – Seasons</p>
                <p> ⭐ 9/10</p>
              </div>
            </div>
            <div
              className="items-list"
              style={{ display: listItem === 4 ? "block" : "none" }}
            >
              <div>
                <p>DJ Snake feat. Justin Bieber – “Let Me Love You” (</p>
                <p>⭐ 8/10</p>
              </div>
              <div>
                <p> Disclosure – “When a Fire Starts to Burn” </p>
                <p>⭐ 9.5/10</p>
              </div>
              <div>
                <p> Calvin Harris – “Feel So Close” (2011)</p>
                <p>⭐ 7/10</p>
              </div>
              <div>
                <p> Avicii – “Levels” </p>
                <p>⭐ 8.2/10</p>
              </div>
              <div>
                <p> DJ Snake feat. Lil Jon – “Turn Down for What”</p>
                <p>⭐ 8.8/10</p>
              </div>
              <div>
                <p>Major Lazer & DJ Snake feat. MØ – “Lean On</p>
                <p>⭐ 8.3/10</p>
              </div>
            </div>
            <div
              className="items-list"
              style={{ display: listItem === 5 ? "block" : "none" }}
            >
              <div>
                <p>Sitaron Ki Mehfil</p>
                <p>⭐ 8.5/10</p>
              </div>
              <div>
                <p>Ek Pal Ka Jeena</p>
                <p>⭐ 8/10</p>
              </div>
              <div>
                <p>Aankhein Khuli Ho Ya Ho Band</p>
                <p>⭐ 7.5/10</p>
              </div>
              <div>
                <p>Que Sera Sera</p>
                <p>⭐ 7.6/10</p>
              </div>
              <div>
                <p>Koi Kahe</p>
                <p>⭐ 9/10</p>
              </div>
              <div>
                <p>You are my Soniya</p>
                <p>⭐ 8.7/10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
