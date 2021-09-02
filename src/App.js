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
      <h1> My favorite items</h1>
      <h3>
        Checkout my different type of favorite things.It can be help your
        enjoyment
      </h3>
      <div className="center-box">
        <div className="content-box">
          <div className="left-side-part">
            <button
              className={listItem === 1 ? "activeBtn" : "btn"}
              onClick={() => listOne(1)}
            >
              {" "}
              Movies{" "}
            </button>
            <button
              className={listItem === 2 ? "activeBtn" : "btn"}
              onClick={() => listOne(2)}
            >
              {" "}
              Sports
            </button>
            <button
              className={listItem === 3 ? "activeBtn" : "btn"}
              onClick={() => listOne(3)}
            >
              {" "}
              Food{" "}
            </button>
            <button
              className={listItem === 4 ? "activeBtn" : "btn"}
              onClick={() => listOne(4)}
            >
              {" "}
              Travel Place{" "}
            </button>
            <button
              className={listItem === 5 ? "activeBtn" : "btn"}
              onClick={() => listOne(5)}
            >
              {" "}
              Music{" "}
            </button>
          </div>
          <div className="right-side-part">
            <div
              className="items-list"
              style={{ display: listItem === 1 ? "block" : "none" }}
            >
              <div>
                <p>Iron Man 3 </p>
                <p>⭐ 8/10</p>
              </div>
              <div>
                <p> Avengers: Age of Ultron </p>
                <p>⭐ 7.3/10</p>
              </div>
              <div>
                <p>Ant-Man and the Wasp </p>
                <p>⭐ 7/10</p>
              </div>{" "}
              <div>
                <p> Avengers: Infinity War </p>
                <p>⭐ 8.3/10</p>
              </div>{" "}
              <div>
                <p> Phir Hera Pheri </p>
                <p>⭐ 7.8/10</p>
              </div>{" "}
              <div>
                <p> Munna Bhai M.B.B.S. </p>
                <p>⭐ 8.1/10</p>
              </div>
            </div>
            <div
              className="items-list"
              style={{ display: listItem === 2 ? "block" : "none" }}
            >
              <div>
                <p>Football (Soccer)</p>
                <p>⭐ 9/10</p>
              </div>
              <div>
                <p>Cricket </p>
                <p>⭐ 8.5/10</p>
              </div>
              <div>
                <p>Hockey (Ice and Field)</p>
                <p>⭐ 7.5/10</p>
              </div>
              <div>
                <p>Tennis </p>
                <p>⭐ 8/10</p>
              </div>
              <div>
                <p>Volleyball</p>
                <p>⭐ 7/10</p>
              </div>
              <div>
                <p>Basketball </p>
                <p>⭐ 7.6/10</p>
              </div>
            </div>
            <div
              className="items-list"
              style={{ display: listItem === 3 ? "block" : "none" }}
            >
              <div>
                <p>Butter Chicken</p>
                <p>⭐ 8.5/10</p>
              </div>
              <div>
                <p>Chaat</p>
                <p> ⭐ 8/10</p>
              </div>
              <div>
                <p>Kulfi</p>
                <p>⭐ 8/10</p>
              </div>
              <div>
                <p>Dosa </p>
                <p>⭐ 7.6/10</p>
              </div>
              <div>
                <p>Samosa</p>
                <p>⭐ 7/10</p>
              </div>
              <div>
                <p>Vada Pav</p>
                <p> ⭐ 9/10</p>
              </div>
            </div>
            <div
              className="items-list"
              style={{ display: listItem === 4 ? "block" : "none" }}
            >
              <div>
                <p>The Taj Mahal, Agra</p>
                <p>⭐ 8/10</p>
              </div>
              <div>
                <p>Harmandir Sahib: The Golden Temple of Amritsar</p>
                <p>⭐ 9.5/10</p>
              </div>
              <div>
                <p>The Red Fort, New Delhi</p>
                <p>⭐ 7/10</p>
              </div>
              <div>
                <p> The Beaches of Goa</p>
                <p>⭐ 8.2/10</p>
              </div>
              <div>
                <p> Periyar National Park and Wildlife Sanctuary, Madurai</p>
                <p>⭐ 8.8/10</p>
              </div>
              <div>
                <p>Munnar, Kerala</p>
                <p>⭐ 8.3/10</p>
              </div>
            </div>
            <div
              className="items-list"
              style={{ display: listItem === 5 ? "block" : "none" }}
            >
              <div>
                <p>Shape of You</p>
                <p>⭐ 8.5/10</p>
              </div>
              <div>
                <p>Dance Monkey</p>
                <p>⭐ 8/10</p>
              </div>
              <div>
                <p>Bad Guy</p>
                <p>⭐ 7.5/10</p>
              </div>
              <div>
                <p>Believer</p>
                <p>⭐ 7.6/10</p>
              </div>
              <div>
                <p>Closer</p>
                <p>⭐ 9/10</p>
              </div>
              <div>
                <p>Despacito</p>
                <p>⭐ 8.7/10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
