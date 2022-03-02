import React from 'react'
import NavBar from 'NavBar/NavBar'

function Header() {
    return (

        <section className="header">
            <section className="header-top">
                <section className="header-top-logo">
                    <a href="/" className="header-logo">LOGO</a>
                </section>
                <section className="header-top-navbar">
                    <NavBar />
                </section>
            </section>
            <section className="header-bottom">

                <section className="header-bottom-phone">
                    08-222 222 2
                </section>
                <section className="header-bottom-mail">
                    blabla@gmail.com
                </section>
            </section>
        </section>

    )
}

export default Header;