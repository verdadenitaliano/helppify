import React from 'react';
import Home from './pages/Home/Home';
import LoginForm from './pages/Login/LoginForm';
import SignupForm from './pages/Signup/SignupForm';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App () {
    return(
        <Router>
            <div className="App">
                <div className="gradient__bg">
                    {/*<Navbar />*/}
                </div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<LoginForm />} />
                    <Route path='/signup' element={<SignupForm />} />
                </Routes>
                {/*<Possibility />*/}
                {/*<Blog />*/}
                {/*<Footer />*/}
            </div>
        </Router>
    );
}

export default App;
