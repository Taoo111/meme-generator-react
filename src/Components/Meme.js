
import memesData from '../memesData.js'
import React from 'react'
import smileFace from '../Images/smile.jpg'


export default function Meme() {

    const memeContainer = document.querySelector('.meme--img')
    
    // eslint-disable-next-line no-undef
    const [meme, setMeme] = React.useState("");
    
    const getImg = () => {
        const randomIndex = Math.floor(Math.random() * memesData.data.memes.length);
        const url = memesData.data.memes[randomIndex].url;
        setMeme(url);

        memeContainer.attributes.src.value = meme;
    }

    return(
        <main>
            <div className="form">
                <input className="form--input" type='text' placeholder="Top text"></input>
                <input className="form--input" type='text' placeholder="Bottom text"></input>
                <button className="form--button" onClick={getImg}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img className="meme--img" src={smileFace} alt="meme"></img>
            </div>
        </main>
    )
}