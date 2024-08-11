import React from 'react';
import AutocompleteInput from './components/SuggestionsList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/body';

const App = () => {
    return (
        <div className='flex justify-between flex-col text-right bg-[#D9D9D9]'>
            <Navbar />
            <Body />
            {/* <h1 className='text-center text-xl'>Intelligent Writing Assistant</h1>
            <AutocompleteInput /> */}
            <Footer />
        </div>
    );
};

export default App;
 
