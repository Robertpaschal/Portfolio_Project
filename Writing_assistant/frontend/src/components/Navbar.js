import React from 'react'
import logo  from '../assets/images/logo-black.png'
import SignUp from '../pages/Signup';
import SignIn from '../pages/SignIn';

const Navbar = () => {
  
  const [isSignInOpen, setIsSignInOpen] = React.useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = React.useState(false);

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
      <nav className="mx-3 my-2 flex items-center justify-between px-10 bg-gradient-to-r from-neutral-50 via-transparent to-zinc-800 rounded-m-md z-40 fixed top-0 w-full">
        <img src={logo} alt="logo" className="w-20 h-20" />
        <ul className='py-2 flex gap-4  pr-10'>
          <li className=' hover:text-sky-800'> Home </li>
          <li className=" hover:text-sky-800">Dashboard </li>
          <li className=" hover:text-sky-800">Editor</li>
          <li className="hover:text-sky-800" onClick={handleSingInClick}>Login </li>
          {isSignInOpen && <SignIn closing={handleCloseClick} />}
          {isSignInOpen ? (
            <SignIn closing={handleCloseClick} />
          ): ""}
          <li className="hover:text-sky-800" onClick={handleSignUpClick}>Signup </li>
          {isSignUpOpen && <SignUp closing={handleCloseClick} />}
          {isSignUpOpen? (
            <SignUp closing={handleCloseClick} /> 
          ): ""} 
        </ul>

      </nav>
    </>
  )
}

export default Navbar