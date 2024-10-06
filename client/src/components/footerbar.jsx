import React, { useState } from "react";
import { LinkedinIcon, Mail, PhoneCall, X } from "lucide-react";

const FooterBar = () => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");

  const openPopup = (text) => {
    setContent(text);
    setShow(true);
  };

  return (
    <>
      <div className={`w-full h-auto bg-[#A6DCE6] flex items-start justify-evenly text-white p-8 ${show ? 'blur-sm' : ''}`}>
        <div className="flex flex-col space-y-4">
          <h4 className="font-bold text-lg">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="" className="hover:underline">Home</a></li>
            <li><a href="" className="hover:underline">About Us</a></li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="font-bold text-lg">Get Help</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" onClick={() => openPopup(`Welcome to Parenting Blog By using our website, you agree to our Terms and Conditions. 
    The content provided on this site is for informational purposes only and is not a substitute for professional 
    advice or consultation with healthcare professionals. We do not guarantee the accuracy or completeness 
    of the information and are not liable for any errors or omissions. Usage of any advice or tips on this site is at 
    your own discretion. Parenting blog reserves the right to modify or remove content at any time.
  `)} className="hover:underline">Terms and Conditions</a></li>
            <li><a href="#" onClick={() => openPopup(`Our website uses cookies to improve your browsing experience and to analyze our website traffic. By 
    continuing to use this website, you consent to the use of cookies as described in our Cookie Policy. 
    Cookies are small text files that are stored on your device to help us understand how visitors interact with 
    our site, provide personalized content, and improve overall user experience. You can control or delete 
    cookies through your browser settings, but doing so may affect your ability to access some parts of the website.`)} className="hover:underline">Cookie Policy</a></li>
            <li><a href="#" onClick={() => openPopup(`The information provided on Parents Blog is for general informational purposes only. 
    It is not intended as a substitute for professional advice from a healthcare provider or parenting expert. 
    Any reliance you place on such information is strictly at your own risk. Parenting Blogs
    disclaims any liability for decisions you make based on the content of this blog. Always seek the advice 
    of a qualified professional with any questions you may have regarding your child’s health or parenting challenges.`)} className="hover:underline">Disclaimer</a></li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="font-bold text-lg">Contact Us</h4>
          <div className="flex space-x-4">
            <a href="knkavikrishnaa19@gmail.com" className="hover:text-gray-400"><Mail size={24} /></a>
            <a href="https://linkedin.com" className="hover:text-gray-400"><LinkedinIcon size={24} /></a>
            <a href="tel:1234567890" className="hover:text-gray-400"><PhoneCall size={24} /></a>
          </div>
        </div>
      </div>

      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              
              <button onClick={() => setShow(false)} className="hover:bg-gray-200 p-2 rounded-full">
                <X size={24} />
              </button>
            </div>
            <p className="text-sm text-gray-600">{content}</p>
            <div className="mt-4 text-right">
              <button onClick={() => setShow(false)} className="bg-blue-500 text-white py-2 px-4 rounded">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterBar;
