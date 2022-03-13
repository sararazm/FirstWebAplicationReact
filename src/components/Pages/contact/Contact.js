import React, { useState } from 'react'
import "../style.css";

function Contact() {
    const [count, setCount] = useState(5);

    function decrementCount() {
        setCount(previousCount => previousCount - 1);
    }
    function incrementCount() {
        setCount(previousCount => previousCount + 1);
    }

    return (
        <div className="container">

            <h1>Contact Me!</h1>
            <button className="minus-bottom" onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button className="plus-bottom" onClick={incrementCount}>+</button>

        </div>
    )
}

export default Contact;