import React from 'react';
import { PlayCircle } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-b from-green-900 to-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Music for everyone.
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Millions of songs. No credit card needed.
          </p>
          <button className="bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-8 rounded-full flex items-center gap-2 mx-auto">
            <PlayCircle className="h-6 w-6" />
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
}