import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BsPersonCircle } from "react-icons/bs";

const AboutMe = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Intelligent Writing Assistant</h1>
        <section className="mb-12">
          <p className="text-lg text-gray-700 mb-6 px-10 items-center">
            Welcome to Intelligent Writing Assistant a cutting-edge Progressive Web Application designed to enhance your writing experience. Our goal is to empower writers of all levels with advanced tools and intelligent features that make crafting well-written content easier and more efficient.
          </p>
          <h2 className="text-2xl font-semibold text-black-800 mb-4 px-20">What We Offer:</h2>
          <ul className="list-disc list-inside text-black-700 space-y-2 mb-8 px-20 items-center">
            <li>Smart Suggestions: Our AI-driven engine provides context-aware suggestions to help you improve grammar, style, and clarity.</li>
            <li>Real-Time Editing: Enjoy seamless writing with real-time feedback, offering instant corrections and suggestions.</li>
            <li>Personalized Insights: Gain valuable insights into your writing habits with personalized reports and tips.</li>
            <li>Offline Capabilities: Continue writing and editing even when you're not connected to the internet.</li>
            <li>User-Friendly Interface: Focus on your writing with our intuitive and distraction-free design.</li>
          </ul>
          <p className="text-lg text-black-700 px-14">
            Intelligent Writing Assistant is more than just a tool; it's your writing companion. We combine the power of AI with a user-centric approach to deliver a writing assistant that adapts to your unique needs. Our commitment to innovation and excellence ensures that you always have the best support at your fingertips.
          </p>
        </section>

        <section className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Join the Community</h2>
          <p className="text-lg text-black-700 text-center mb-8">
            Join the community of writers who trust Intelligent Writing Assistant to elevate their writing. Start creating with confidence and efficiency today!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="text-center flex flex-col items-center justify-center">
              <BsPersonCircle className='size-32'/>
              <h3 className="text-xl font-bold text-gray-800">Ikilai Doreen</h3>
              <p className="text-gray-600">Senior Frontend Software Engineer</p>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <BsPersonCircle className='size-32' />
              <h3 className="text-xl font-bold text-gray-800">Odinaka Robert</h3>
              <p className="text-gray-600">Senior Backend Developer</p>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <BsPersonCircle className='size-32'/>
              <h3 className="text-xl font-bold text-gray-800">Garret Akpale</h3>
              <p className="text-gray-600">Backend Developer</p>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <BsPersonCircle  className='size-32'/>
              <h3 className="text-xl font-bold text-gray-800">Chisom Daniel</h3>
              <p className="text-gray-600">Backend Developer</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMe;
