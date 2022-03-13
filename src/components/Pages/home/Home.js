import React, { useState } from 'react'
import "../style.css"
import { css } from '@emotion/css';

function Home() {
    const [color, setColor] = useState('#000000');
    const [fontColor, setFontColor] = useState('#111111');

    const styling = css`
    width: 550px; 
    padding: 40px;
    background-color: ${color};
    h1 { color: ${fontColor} }
    p { color: ${fontColor} }
    `

    return (
        <div className="container" style={{ textColor: { color } }}>
            <h1 style={{ textDecoration: "none", color: "white", paddingRight: '20px', paddingLeft: '20px' }}>Home Page</h1>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque natus ex. Et, autem rerum quia obcaecati quisquam nemo neque, vel error possimus temporibus nobis alias culpa aperiam amet magni blanditiis excepturi quae aliquid! Atque, illum. Quo fugiat temporibus dolorem!
            </p>

        </div>
    )
}

export default Home;
