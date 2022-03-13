import React, { useState } from 'react'
import "../style.css"

function About() {
    const [count, setCount] = useState(5);
    function decrementCount() {
        setCount(previousCount => previousCount - 1);
    }
    function incrementCount() {
        setCount(previousCount => previousCount + 1);
    }
    function resetCount() {
        setCount(0);
    }

    return (
        <div className="container">
            <h1>About me!</h1>
            <h3>a little bit about me:</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas voluptatum ex, quo maiores reprehenderit, quos perferendis ipsa numquam sunt atque natus necessitatibus libero odit obcaecati. Debitis ratione voluptates ipsum.</p>


            <h3>Give us raiting!</h3>
            <p> By clicking on the buttons below you can rate us!</p>
            <div className="count-button">
                <button className="minus-button" onClick={decrementCount}>-</button>
                <button className="plus-button" onClick={incrementCount}>+</button>
                <button className="reset-button" onClick={resetCount}>Reset</button>
            </div>
            <p>You gave us raiting <b>{count}</b>. Thanks for the raiting!</p>

        </div>
    )
}

export default About;