import React, { useState } from 'react';
import quotes from '../quotes.json'
import colors from '../color.json'


const QuoteBox = () => {

    const getRandom = () => Math.floor(Math.random() * quotes.length)
    const getRandomColor = () => Math.floor(Math.random() * colors.length)
    const [ newQuote, setNewQuote] = useState(quotes[getRandom()])

    const changeQuote = () =>{
        setNewQuote(quotes[getRandom()])
    }


    const color = colors[getRandomColor()]
    document.body.style = `background: ${color}`;

    return (
        <div className='card' style={{color : color}}>
            <div> 
                <h1>{newQuote.quote}</h1>
                <h3>{newQuote.author}</h3>
            </div>
            <button className="fa-solid fa-shuffle" onClick={changeQuote}></button>
        </div>
    );

   
};

export default QuoteBox;