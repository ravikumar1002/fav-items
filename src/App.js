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
                <p>‘Hey Ya’ </p>
                <p className="description"> "Hey Ya!" is a song performed by the American hip-hop duo Outkast, specifically group member André 3000, who also wrote and produced the song. </p>
                <p>⭐ 8/10</p>
              </div>
              <div>
                <p>‘Don't Stop ’Til You Get Enough’ </p>
                <p className="description">"Don't Stop 'Til You Get Enough" is a single written and recorded by American singer Michael Jackson. Released under Epic Records on July 10, 1979,[1] the song is the first track on Jackson's fifth studio album Off the Wall (1979). It was the first solo recording over which Jackson had creative control. </p>
                <p>⭐ 7.3/10</p>
              </div>
              <div>
                <p>‘Get Lucky’ – Daft Punk featuring Pharrell Williams </p>
                <p className="description">"Get Lucky" is a song by French electronic music duo Daft Punk, featuring American singer Pharrell Williams and American guitarist Nile Rodgers. It was co-written by all of them. Daft Punk released the song as the lead single from their fourth and final studio album, Random Access Memories, on 19 April 2013</p>
                <p>⭐ 7/10</p>
              </div>{" "}
             
            </div>
            <div
              className="items-list"
              style={{ display: listItem === 2 ? "block" : "none" }}
            >
              <div>
                <p>'Wake Me Up Before You Go-Go'</p>
                <p className="description">"Wake Me Up Before You Go-Go" is a song by the English duo Wham!, first released as a single in the UK on 14 May 1984.[5] It became their first UK and US number one hit. It was written and produced by George Michael.</p>
                <p>⭐ 9/10</p>
              </div>
              <div>
                <p>'Girls Just Wanna Have Fun'</p>
                <p className="description">"Girls Just Want to Have Fun" is a song written and performed by American musician Robert Hazard who released the single in 1979. It is known as a single by American singer Cyndi Lauper, whose version was released in 1983.</p>
                <p>⭐ 8.5/10</p>
              </div>
              <div>
                <p>'I Love Rock and Roll'</p>
                <p className="description">"I Love Rock 'n' Roll" is a rock song written by Alan Merrill and Jake Hooker and first recorded by the Arrows, a British rock band, in 1975. The song is best known for its 1981 cover version by Joan Jett & the Blackhearts, which was released as the first single from her album of the same name.</p>
                <p>⭐ 7.5/10</p>
              </div>
             
            </div>
            <div
              className="items-list"
              style={{ display: listItem === 3 ? "block" : "none" }}
            >
              <div>
                <p>'Back Baby'</p>
                <p className="description">It was 2007 when Jessica Pratt recorded a bunch of songs that would eventually appear on her self-titled 2012 album.</p>
                <p>⭐ 8.5/10</p>
              </div>
              <div>
                <p>'Holocene'</p>
                <p className="description">"Holocene" is a song by American indie folk band Bon Iver. It was released as the second single from their album Bon Iver, Bon Iver on September 5, 2011. The single is backed with a cover of Peter Gabriel's song "Come Talk to Me" as a B-side, which was previously released as a limited edition song for Record Store Day</p>
                <p> ⭐ 8/10</p>
              </div>
            
              <div>
                <p>'Seasons (Waiting on You)'</p>
                <p className="description">"Seasons (Waiting on You)" is a song by American synthpop band Future Islands. It is the opening track on their fourth studio album Singles, and was released as the album's lead single on February 4, 2014.</p>
                <p> ⭐ 9/10</p>
              </div>
            </div>
            <div
              className="items-list"
              style={{ display: listItem === 4 ? "block" : "none" }}
            >
              <div>
                <p>'Let Me Love You'</p>
                <p className="description">"Let Me Love You" is a song recorded by French DJ and electronic music producer DJ Snake featuring vocals from Canadian singer Justin Bieber. The song was released through Interscope Records on 5 August 2016 as the third single from his debut studio album, Encore (2016).</p>
                <p>⭐ 8/10</p>
              </div>
              <div>
                <p>'Feel So Close'</p>
                <p className="description">"Feel So Close" is a song by the Scottish DJ Calvin Harris, released as the second single from his third studio album, 18 Months (2012). In order to have lyrics and be standalone, Harris had to return to singing on this song, after previously stating he had quit singing in concerts.</p>
                <p>⭐ 8/10</p>
              </div>
              <div>
                <p>'Lean On'</p>
                <p className="description">"Lean On" is a song recorded by Jamaican-American electronic dance music group Major Lazer and French DJ and record producer DJ Snake featuring vocals from Danish singer MØ. It was released on March 2, 2015, as the lead single from Major Lazer's third studio album, Peace Is the Mission (2015).</p>
                <p>⭐ 8.3/10</p>
              </div>
            </div>
            <div
              className="items-list"
              style={{ display: listItem === 5 ? "block" : "none" }}
            >
              <div>
                <p>Aankhein Khuli</p>
                <p className="description" >Aankhein Khuli Ho Ya Ho Band Lyrics from Mohabbatein (2000): This is a lovely song from Mohabbatein starring Amitabh Bachchan, Shahrukh Khan, Aishwarya Rai and Uday Chopra. It is sung by Lata Mangeshkar, Udit Narayan, Sonali, Manohar, Priya, Udbhav, Ishaan and Shweta and composed by Jatin and Lalit.</p>
                <p>⭐ 9.5/10</p>
              </div>
             
              <div>
                <p>Koi Kahe</p>
                <p className="description" >Koi Kahe Kehta Rahe is a hindi song from the 2001 movie Dil Chahta Hai. Koi Kahe Kehta Rahe singers are Krishnakumar Kunnath (K.K), Shaan, Shankar Mahadevan.  The audio of Koi Kahe Kehta Rahe song was released on 10th August, 2001 by T-Series. </p>
                <p>⭐ 9/10</p>
              </div>
              <div>
                <p>You are my Soniya</p>
                <p className="description" >You Are My Soniya is a hindi song from the 2001 movie Kabhi Khushi Kabhie Gham.... You Are My Soniya singers are Alka Yagnik, Sonu Nigam. You Are My Soniya composer is Sandesh Shandilya and You Are My Soniya lyricist or song writer is Sameer.  The audio of You Are My Soniya song was released on 14th December, 2001 by Sony Music. </p>
                <p>⭐ 8.7/10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
