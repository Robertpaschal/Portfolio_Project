import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/body';
import SignUp from './pages/Signup';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

const App = () => {
    return (
        // <div className='flex justify-between flex-col text-right bg-[#D9D9D9] '>
        //     <Navbar />
        //     {/* <Body /> */}
        //     <SignIn />
        //     {/* <h1 className='text-center text-xl'>Intelligent Writing Assistant</h1>
        //     <AutocompleteInput /> */}
        //     <Footer />
        // </div>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </Router>
    );
};

export default App;
 