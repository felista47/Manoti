import React from "react";
import background from '../images/backgroundimg.webp';

export default function Blog() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 text-white"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-lg backdrop-blur-md text-center">
        <h1 className="text-4xl font-bold mb-4">Coming Soon 🚀</h1>
        <p className="text-lg">We're working on something awesome! Stay tuned for updates.</p>
      </div>
    </div>
  );
}