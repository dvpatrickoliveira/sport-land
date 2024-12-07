import React from 'react';
import { Music2, Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Music2 className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold">Spotify</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-400 uppercase font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-500">About</a></li>
              <li><a href="#" className="hover:text-green-500">Jobs</a></li>
              <li><a href="#" className="hover:text-green-500">For the Record</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 uppercase font-bold mb-4">Communities</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-500">For Artists</a></li>
              <li><a href="#" className="hover:text-green-500">Developers</a></li>
              <li><a href="#" className="hover:text-green-500">Advertising</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 uppercase font-bold mb-4">Social</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-green-500"><Instagram /></a>
              <a href="#" className="hover:text-green-500"><Twitter /></a>
              <a href="#" className="hover:text-green-500"><Facebook /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-sm text-gray-400">
          <p>&copy; 2024 Spotify Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}