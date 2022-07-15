import memesData from "../memesData.js";
import React from "react";
import smileFace from "../Images/smile.jpg";

export default function Meme() {
  const [meme, setMeme] = React.useState(smileFace);

  const getImg = () => {
    const randomIndex = Math.floor(Math.random() * memesData.data.memes.length);
    const url = memesData.data.memes[randomIndex].url;
    setMeme(url);
  };
  console.log(meme);

  return (
    <main>
      <div className="form">
        <input
          className="form--input"
          type="text"
          placeholder="Top text"
        ></input>
        <input
          className="form--input"
          type="text"
          placeholder="Bottom text"
        ></input>
        <button className="form--button" onClick={getImg}>
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img className="meme--img" src={meme} alt="meme"></img>
      </div>
    </main>
  );
}
