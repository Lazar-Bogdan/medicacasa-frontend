import React from 'react'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import MainPage from './MainPage'

function App() {
    return(
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/MainPage" element={<MainPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;