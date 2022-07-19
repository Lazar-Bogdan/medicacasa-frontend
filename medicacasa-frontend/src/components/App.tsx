import React from 'react'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import MainPage from './MainPage'
import Login from './Login'
import AboutUs from './AboutUs'
import Contact from './Contact'

function App() {
    return(
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/mainpage" element={<MainPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<AboutUs />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;