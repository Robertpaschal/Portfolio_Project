import React from 'react'
import logo  from '../assets/images/logo-black.png'
import SignUp from '../pages/Signup';
import SignIn from '../pages/SignIn';
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {

  const [isOpen, setIsOpen] = React.useState(false);
  
  const [isSignInOpen, setIsSignInOpen] = React.useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = React.useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

 const handleSingInClick = () => {
  setIsSignInOpen(!isSignInOpen);
  if (isSignUpOpen) {
    setIsSignUpOpen(false);
  }
 };
 
 const handleSignUpClick = () => {
  setIsSignUpOpen(!isSignUpOpen);
  if (isSignInOpen) {
    setIsSignInOpen(false);
  }
 };

 const handleCloseClick = () => {
  setIsSignInOpen(false);
  setIsSignUpOpen(false);
  };

  
  return (
    <>
            <nav className="rounded-lg my-2 flex items-center justify-between px-10 bg-gradient-to-r from-neutral-50 via-transparent to-zinc-800 rounded-m-md z-40 w-full">
        <img src={logo} alt="logo" className="w-20 h-20" />
        <ul className={`py-2 hidden lg:flex gap-4 pr-10`}>
          <li className="hover:text-sky-800">Home</li>
          <li className="hover:text-sky-800">Dashboard</li>
          <li className="hover:text-sky-800">Editor</li>
          <li className="hover:text-sky-800" onClick={handleSingInClick}>Login</li>
          {isSignInOpen && <SignIn closing={handleCloseClick} />}
          <li className="hover:text-sky-800" onClick={handleSignUpClick}>Signup</li>
          {isSignUpOpen && <SignUp closing={handleCloseClick} />}
        </ul>
        <div className="lg:hidden">
          <IoIosMenu className="text-white text-2xl cursor-pointer" onClick={handleMenuClick} />
          {isOpen ? (
            <ul className="absolute top-16 right-0 bg-gradient-to-r from-neutral-50 via-transparent to-zinc-800 rounded-m-md z-40 w-40">
              <li className="hover:text-sky-800">Home</li>
              <li className="hover:text-sky-800">Dashboard</li>
              <li className="hover:text-sky-800">Editor</li>
              <li className="hover:text-sky-800" onClick={handleSingInClick}>Login</li>
              {isSignInOpen && <SignIn closing={handleCloseClick} />}
              <li className="hover:text-sky-800" onClick={handleSignUpClick}>Signup</li>
              {isSignUpOpen && <SignUp closing={handleCloseClick} />}
            </ul>
          ) : ('')}
        </div>
      </nav>
    </>
  )
}

export default Navbar