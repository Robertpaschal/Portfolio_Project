import React from 'react';
import AutocompleteInput from './components/SuggestionsList';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div className='flex justify-between flex-col text-right'>
            <h1 className='text-center text-xl'>Intelligent Writing Assistant</h1>
            <AutocompleteInput />
            <Navbar />
        </div>
    );
};

export default App;
 