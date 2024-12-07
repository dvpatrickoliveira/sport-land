import React from 'react';
import { Music2, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-black px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Music2 className="h-8 w-8 text-green-500" />
          <span className="text-xl font-bold text-white">Spotify</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-white hover:text-green-500">Premium</a>
          <a href="#" className="text-white hover:text-green-500">Support</a>
          <a href="#" className="text-white hover:text-green-500">Download</a>
          <div className="h-6 w-px bg-white/20"></div>
          <a href="#" className="text-white/70 hover:text-white">Sign up</a>
          <a href="#" className="text-white/70 hover:text-white">Log in</a>
        </div>
        <button className="md:hidden text-white">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
}