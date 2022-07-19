import React from 'react'

import "./MainPageStyle.css"

function MainPage() {

    return(
        // nav bar
        <>
        <div className='Page'>
                <title>Medic4You</title>
                <nav>
                    <div className="logo">
                        <h4>Navbar</h4>
                    </div>
                    <ul className="nav-links"> 
                        <a href="/">Home</a>
                        <a href="/about">About us</a> 
                        <a href="/contact">Contact</a>
                        <a href="/login">Login</a>
                    </ul>
                </nav>


                <div>

                    <div className='Welcome-message'>
                        <a>Welcome to Medic4You</a>
                        <Text>
                            test1
                        </Text>
                    </div>

                </div>
        
        </div>
        </>
    );
}

export default MainPage;