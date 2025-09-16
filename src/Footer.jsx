import React from 'react';
import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="py-10 text-center bg-black/30 fade-in" style={{ animationDelay: '0.8s' }}>
      <div className="flex justify-center gap-8">
        <a
          href="https://x.com/rJha_0700"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-200 hover:scale-125 transition-all duration-300"
        >
          <FaTwitter size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/rajeev-ranjan-jha-2730b0365/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-200 hover:scale-125 transition-all duration-300"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="mailto:rajeevranjanjha0001@gmail.com"
          className="text-cyan-400 hover:text-cyan-200 hover:scale-125 transition-all duration-300"
        >
          <FaEnvelope size={28} />
        </a>
      </div>
      <p className="mt-4 text-gray-400 text-sm">&copy; 2025 RJha. All rights reserved.</p>
    </footer>
  );
}

export default Footer;