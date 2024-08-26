import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-8 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Services</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div className="p-6 border rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-gray-400">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI-Powered Suggestions</h2>
            <p className="text-black-700 flex flex-col items-center justify-center px-4">
              Our AI-driven engine provides real-time suggestions for grammar, style, and clarity. Enhance your writing instantly with intelligent insights tailored to your content.
            </p>
          </div>
          
          <div className="p-6 border rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-gray-400">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Real-Time Editing</h2>
            <p className="text-black-700 flex flex-col items-center justify-center px-4">
              Write seamlessly with our real-time editing features. Get instant feedback and corrections as you type, making your writing process smoother and more efficient.
            </p>
          </div>
          
          <div className="p-6 border rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-gray-400">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personalized Reports</h2>
            <p className="text-black-700 flex flex-col items-center justify-center px-4">
              Track your progress with personalized reports and insights. Understand your writing habits and get tips on how to improve over time.
            </p>
          </div>
          
          <div className="p-6 border rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-gray-400">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Offline Capabilities</h2>
            <p className="text-black-700 flex flex-col items-center justify-center px-4">
              Continue your writing without interruption, even when you're offline. Our PWA ensures that you can work on your projects anytime, anywhere.
            </p>
          </div>
          
          <div className="p-6 border rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-gray-400">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">User-Friendly Interface</h2>
            <p className="text-black-700 flex flex-col items-center justify-center px-4">
              Focus on your creativity with our intuitive and distraction-free design. Navigate effortlessly and enjoy a seamless writing experience.
            </p>
          </div>
          
          <div className="p-6 border rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-gray-400">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Community Support</h2>
            <p className="text-black-700 flex flex-col items-center justify-center px-4 ">
              Join our community of writers and get access to exclusive resources, tips, and support. Connect with others to enhance your writing journey.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
