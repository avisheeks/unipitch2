import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} Quinova. All rights reserved.</p>
      <div className="mt-2">
        <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
        <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
        <a href="#" className="text-gray-400 hover:text-white mx-2">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
