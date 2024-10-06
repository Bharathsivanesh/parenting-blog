import { LinkedinIcon, Mail, PhoneCall } from "lucide-react";

const FooterBar = () => {
  return (
    <>
      <div className="w-full bg-[#A6DCE6] h-24 flex items-center justify-center flex-col shadow-lg">
        <div>
          <h2 className="text-2xl text-white font-black">Contact Us</h2>
        </div>
        <div className="flex flex-row mt-4 text-white justify-evenly w-full mt-8">
          <div className="flex flex-col items-center">
            <LinkedinIcon className="w-8 h-8 hover:text-[#0056b3] transition-colors duration-300" />
            <span className="text-sm mt-1">LinkedIn</span>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 hover:text-[#f39c12] transition-colors duration-300" />
            <span className="text-sm mt-1">Email</span>
          </div>
          <div className="flex flex-col items-center">
            <PhoneCall className="w-8 h-8 hover:text-[#e74c3c] transition-colors duration-300" />
            <span className="text-sm mt-1">Phone</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBar;
