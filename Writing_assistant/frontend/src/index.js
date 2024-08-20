import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//clerk
import { ClerkProvider } from '@clerk/clerk-react';
//Redux
import store from './redux/Store/store'
import { Provider } from 'react-redux';


const PUBLISHABLE_KEY = "pk_test_ZXZvbHZlZC1hbGJhY29yZS00LmNsZXJrLmFjY291bnRzLmRldiQ";

console.log("Clerk Publishable Key:", PUBLISHABLE_KEY);

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing publishable key')
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
                <App />
            </ClerkProvider>

        </Provider>
    </React.StrictMode>
);
