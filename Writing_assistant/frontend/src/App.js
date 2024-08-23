import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
// import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import { useUser } from '@clerk/clerk-react';
import SignUpPage from './pages/Signup';
import SignInPage from './pages/SignIn';

// const ProtectedRoute = ({ children }) => {
//     const isSignedIn = useUser();
//     if (!isSignedIn) {
//         return <Navigate to="/SignIn" />;
//     }
//     return children;
// };


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/signin" element={

                    <SignInPage />

                } />
            </Routes>
        </Router>
    );
};

export default App;

