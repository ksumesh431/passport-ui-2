'use client';
import React from 'react';

function CustomFooter() {
  return (
    <footer className="bg-gradient-to-b from-[#2D2D2D] to-[#1a1a1a] text-gray-200 py-10 mt-auto">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-4 backdrop-blur-sm">
          <h3 className="font-semibold text-xl tracking-wide text-white">
            DocoAid by Star Translation Group
          </h3>
          <div className="space-y-2 font-light">
            <p className="hover:text-white transition-colors">
              <span className="text-gray-400">Email:</span> info@docoaid.com
            </p>
            <p className="hover:text-white transition-colors">
              <span className="text-gray-400">Phone:</span> 437-350-2555
            </p>
          </div>
          <div className="border-t border-gray-700/50 mt-6 pt-6">
            <p className="text-sm text-gray-400">Copyright ©2024 DocoAid. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default CustomFooter;