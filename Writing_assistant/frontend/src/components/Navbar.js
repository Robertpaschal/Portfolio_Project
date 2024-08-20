import React from 'react'
import logo from '../assets/images/logo-black.png'
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import SignInPage from '../pages/SignIn';
import usemodal from '../hooks/usemodal';
import { SignOutButton, useUser } from '@clerk/clerk-react';


const Navbar = () => {

  const { isOpen, open, close, toggle } = usemodal();
  const {isSignedIn, user, isLoaded} = useUser();

  return (
    <>
      <nav className="rounded-lg my-2 mx-4 flex items-center justify-between px-10 bg-gradient-to-r from-neutral-50 via-transparent to-zinc-500 rounded-m-md z-40">
        <img src={logo} alt="logo" className="w-20 h-20" />
        <ul className={`py-2 hidden lg:flex gap-4 pr-20`}>
          <li className="hover:text-sky-800"><Link to='/'>Home</Link> </li>
          <li className="hover:text-sky-800"><Link to='/Dashboard'>Dashboard</Link> </li>
          {user ? (
            <div className='text-black flex items-center gap-x-2'>
              <p>{user.firstName}</p>
              {/* <button onClick={() => user.signOut()}>Sign Out</button> */}
              <SignOutButton />
            </div>
            ) : (
              <div className='flex items-center gap-x-2'>
                <li className="hover:text-sky-800" onClick={() => toggle('isSignInOpen')}><Link to='/SignIn'>Login</Link></li>
                  {isOpen.isSignInOpen && <SignIn  />}
                <li className="hover:text-sky-800" onClick={() => toggle('isSignUpOpen')}><Link to='/SignUp'>Signup</Link></li>
                  {isOpen.isSignUpOpen && <SignIn closing={close('isSignUpOpen')} />}
              </div>
            )}
        </ul>
        <div className="lg:hidden">
          <IoIosMenu className="text-white text-2xl cursor-pointer" onClick={() => toggle('isMenu')} />
          {isOpen.isMenu ? (
            <ul className="absolute top-16 right-0 bg-gradient-to-r from-neutral-50 via-transparent to-zinc-500 rounded-m-md z-40 w-40">
              <li className="hover:text-sky-800"><Link to='/'>Home</Link></li>
              <li className="hover:text-sky-800"><Link to='/Dashboard'>Dashboard</Link></li>

              <li className="hover:text-sky-800" onClick={() => toggle('isSignInOpen')}><Link to='/SignIn'>Login</Link></li>
              {isOpen.isSignInOpen && <SignIn closing={close('isSignInOpen')} />}
              {/* <li className="hover:text-sky-800" onClick={handleSignUpClick}><Link to='/SignUp'>Signup</Link></li>
              {isSignUpOpen && <SignUp closing={handleCloseClick} />} */}
            </ul>
          ) : ('')}
        </div>
      </nav>
    </>
  )
}

export default Navbar