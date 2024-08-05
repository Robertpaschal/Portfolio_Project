import React, { useState } from 'react';
import { getAutoCompletion } from '../services/api';

const AutocompleteInput = () => {
    const [prompt, setPrompt] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = async (event) => {
        const inputValue = event.target.value;
        setPrompt(inputValue);

        if (inputValue.trim() !== '') {
            try {
                const completion = await getAutoCompletion(inputValue);
                if (Array.isArray(completion)) {
                    setSuggestions(completion);
                }else if (typeof completion === 'string') {
                    setSuggestions([completion]);
                } else {
                    setSuggestions(completion);
                }
            }   catch (error) {
                console.error('Error fetching autocomplete suggestions:', error);
                setSuggestions([]);
            }
        } else {
            setSuggestions([]);
        }
    };

    return (
        <div>
            <input 
            type="text"
            placeholder='Enter your prompt...'
            value={prompt}
            onChange={handleInputChange}
            className='border border-gray-300 p-2 w-96 rounded-lg'
            />
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                ))}
            </ul>
        </div>
    );
};

export default AutocompleteInput;
