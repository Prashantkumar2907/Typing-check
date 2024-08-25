import React, { useState } from 'react';
import './typing.css'
import TypingColor from './typingcolor';
const Typing = () => {
    const paragraph = ["Sunlight whispers gently across the vibrant tapestry, where melodies of emerald dreams dance alongside fleeting shadows. The mosaic of colors pirouettes gracefully, embracing the warmth of a thousand forgotten tales. Raindrops, like crystal beads, scatter across the horizon, weaving a symphony of ethereal echoes. Beneath the canopy of ancient oaks, whispers of the past intertwine with the heartbeat of the earth, creating a serene rhythm that lulls the soul into a timeless reverie. Amidst this delicate balance, the world breathes in harmony, where every moment is a fleeting brushstroke on the canvas of existence."];

    const [generatedText, setGeneratedText] = useState('');
    const [userInput, setUserInput] = useState('');
    const [wordCount, setWordCount] = useState(20);

    const handleInputArea = () => {
        const wordsArray = paragraph[0].split(' ');
        let selectedWords = '';

        if(wordCount>100){
            setWordCount(Number(100))
        }

        for (let i = 0; i < wordCount; i++) {
            const index = Math.floor(Math.random() * wordsArray.length);
            selectedWords += wordsArray[index] + ' ';
        }

        setGeneratedText(selectedWords.trim());
        setUserInput('');  
    };

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    const mistakescount = () =>{
           let mistakes = 0
           generatedText.split('').forEach((char,index)=>{
            if(index<userInput.length){
                if(char!==userInput[index])mistakes++
            }
           })

           return mistakes
    }


    return (
        <div>
            <div className="container">
                <div className="sizeInput">
                    <label id="first">Enter the number of words:-</label>
                    <input
                        type="number"
                        className="inputSize"
                        min={20}
                        max={70}
                        value={wordCount}
                        onChange={(e) => setWordCount(Number(e.target.value))}
                    />
                </div>
                <button className='buttonf' onClick={handleInputArea}>Generate Text</button>
                <div className="generated-text" style={{ whiteSpace: 'pre-wrap' }}>
                    <TypingColor generatedText={generatedText} userInput={userInput}/>
                </div>
                <textarea
                    rows={5}
                    className="inputField"
                    value={userInput}
                    onChange={handleUserInput}
                    placeholder="Start typing..."
                />
                <ul className='list'>
                    <li>
                        <p>Mistakes:</p>
                        <span>{mistakescount()}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Typing;
