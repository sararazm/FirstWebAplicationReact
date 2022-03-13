import React, { useState } from 'react'
import "../style.css"

function Home() {

    const [color, setColor] = useState('#8ba3c9');

    const makeRandomColor = () => {
        const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`
        return random;
    }
    const changeBackgroundColor = () => {
        const randomColor = makeRandomColor()
        setColor(randomColor);
    }

    return (
        <div className="container" style={{ backgroundColor: color }}>
            <h1>Home Page</h1>

            <p>
                For changing the background color of content, press the button below:
            </p>
            <button onClick={changeBackgroundColor}>Change the color</button>

        </div>
    )
}

export default Home;
