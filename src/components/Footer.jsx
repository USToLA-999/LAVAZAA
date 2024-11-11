import { BiHome, BiMailSend, BiPhoneCall } from 'react-icons/bi';
import logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <hr className="mb-10 border-gray-700" />

        {/* Footer Content */}
        <div className="md:flex   justify-around  gap-10">
          
          {/* Logo and Introduction Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/4">
            <img src={logo} alt="Lavazaa Logo" className="w-36 rounded-lg mb-4" />
            <h1 className="text-3xl font-bold">LAVAZAA</h1>
            <p className="mt-2 text-sm">
              Make new memories with Lavazaa and share with your loved ones.
            </p>
          </div>
          
          {/* Contact Us Section */}
          <div className="flex flex-col items-center lg:items-end lg:justify-end  text-center lg:text-left lg:w-1/4">
            <h2 className="text-2xl font-semibold mt-8 lg:mt-0">Contact Us</h2>
            <div className="flex items-center mt-4 gap-3">
              <BiHome className="text-2xl" />
              <p>623 Los Valley, USA</p>
            </div>
            <div className="flex items-center mt-4 gap-3">
              <BiPhoneCall className="text-2xl" />
              <p>415-201-6370</p>
            </div>
            <div className="flex items-center mt-4 gap-3">
              <BiMailSend className="text-2xl" />
              <p>hello@Lavazaa.com</p>
            </div>
          </div>

          {/* Account Section */}
          <div className="flex flex-col items-center lg:items-end lg:justify-end text-center lg:text-left lg:w-1/4">
            <h2 className="text-2xl font-semibold mt-8 lg:mt-0">Account</h2>
            <ul className="mt-4 space-y-2">
              <li>Create account</li>
              <li>Sign in</li>
              <li>iOS app</li>
              <li>Android app</li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="flex flex-col items-center lg:items-end lg:justify-end text-center lg:text-left lg:w-1/4">
            <h2 className="text-2xl font-semibold mt-8 lg:mt-0">Company</h2>
            <ul className="mt-4 space-y-2">
              <li>About Omnifood</li>
              <li>For Business</li>
              <li>Cooking partners</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <hr className="my-8 border-gray-700" />
        <div className="text-center">
          <p className="text-sm">
            All rights reserved by Sunny Singh © 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
