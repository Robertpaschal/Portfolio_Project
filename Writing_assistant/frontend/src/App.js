import React from 'react';
import AutocompleteInput from './components/SuggestionsList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className='flex justify-between flex-col text-right'>
            <h1 className='text-center text-xl'>Intelligent Writing Assistant</h1>
            <AutocompleteInput />
            <Navbar />
            <Footer />
        </div>
    );
};

export default App;
 