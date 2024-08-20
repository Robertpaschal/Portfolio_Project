import React, {useState} from 'react'

const usemodal = () => {
  const [isOpen, setIsOpen] = useState({
    isSignInOpen: false,
    isSignUpOpen: false,
    isMenu: false
  });

  const open = (modalName) => {
    setIsOpen((prev) => ({
      ...prev,
      [modalName]: true
    }));
  }

  const close = (modalName) => {
    console.log('close');
    setIsOpen((prev) => ({
      ...prev,
      [modalName]: false
    }));
  }

  const toggle = (modalName) => {
    setIsOpen((prev) => ({
      ...prev,
      [modalName]: !prev[modalName]
    }));
  }
  return {isOpen, open, close, toggle}
}

export default usemodal;