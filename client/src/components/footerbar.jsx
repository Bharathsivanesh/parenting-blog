import React from "react";
import { LinkedinIcon, Mail, PhoneCall } from "lucide-react";

const FooterBar = () => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");

  const openPopup = (text) => {
    setContent(text);
    setShow(true);
  };

  return (
    <>
      <div className="w-full h-auto bg-[#A6DCE6]  flex items-start justify-evenly text-white p-8">

        <div className="flex flex-col space-y-4">
          <h4 className="font-bold text-lg">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="" className="hover:underline">Home</a></li>
            <li><a href="" className="hover:underline">About Us</a></li>
            <li><a href="" className="hover:underline">Contact Us</a></li>
            <li><a href="" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="font-bold text-lg">Get Help</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="" className="hover:underline">Privacy Policy</a></li>
            <li><a href="" className="hover:underline">Terms and Conditions</a></li>
            <li><a href="" className="hover:underline">Cookie Policy</a></li>
            <li><a href="" className="hover:underline">Disclaimer</a></li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="font-bold text-lg">Contact Us</h4>
          <div className="flex space-x-4">
            <a href="" className="hover:text-gray-400"><Mail size={24} /></a>
            <a href="" className="hover:text-gray-400"><LinkedinIcon size={24} /></a>
            <a href="tel:" className="hover:text-gray-400"><PhoneCall size={24} /></a>
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
