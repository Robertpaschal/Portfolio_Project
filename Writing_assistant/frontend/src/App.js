import React from 'react';
import AutocompleteInput from './components/SuggestionsList';

const App = () => {
    return (
        <div className='flex items-center justify-center flex-col'>
            <h1 className='text-center text-xl'>Intelligent Writing Assistant</h1>
            <AutocompleteInput />
        </div>
    );
};

export default App;
 