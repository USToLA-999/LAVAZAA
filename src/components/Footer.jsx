import { BiHome, BiMailSend, BiMaleSign, BiPhoneCall } from 'react-icons/bi';
import logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <div className="mainbox text-white pt-5 pb-5 ">
      <div className="container mx-auto">
        <div className="innerfooterbox w-full flex mt-5 mb-5">
          <div className="divider flex md:flex-row flex-col  mt-10 sm:mt-20 sm:mb-10 gap-2">
            <div className="contentbox text-ceter flex flex-initial sm:w-full w-80 justify-center items-center mx-auto  ">
              <div className="imagebox flex justify-center items-center gap-4">
                <img
                width={150}
                  src={logo}
                  alt=""
                  className="rounded-lg contentbox mt-0.5 mb-0.5  "
                />
                <div className="logosnitch mx-auto ">
                  <h1 className="head text-3xl">LAVAZAA</h1>
                  <p className="para mt-2">Make new memories with Lavazaa ans dhare with your love ones</p>
                </div>
              </div>       
            </div>
            <div className="card-box sm:w-96  flex-col sm:flex-1 justify-center items-center mx-auto mt-5 mb-5 gap-5  ">
              <div className="header head text-center mt-5">
                <h1 className='text-2xl'>Contact us</h1>
              </div>
              <div className="parbox  para mt-6 flex mx-auto  justify-start items-center">
                <BiHome className='text-4xl ' />
                <p className='px-3'>
                623 los valley , USA.
                </p>
              </div>
              <div className="parbox  para mt-6 flex mx-auto justify-start items-center">
                <BiPhoneCall className='text-4xl ' />
                <p className='px-3'>
                415-201-6370
                </p>
              </div>
              <div className="parbox  para mt-6 flex mx-auto  justify-start items-center">
                <BiMailSend className='text-4xl ' />
                <p className='px-3'>
                hello@Lavazaa.com
                </p>
              </div>
            </div>
            <div className="card-box sm:w-96  flex-col sm:flex-1 justify-center items-center mx-auto mt-5 mb-5 gap-5  ">
              <div className="header head text-center mt-5">
                <h1 className='text-2xl'>Account</h1>
              </div>
              <div className="parbox  para mt-6 flex mx-auto text-center justify-center items-center">
                
                <p className='px-3'>
                Create account
                </p>
              </div>
              <div className="parbox  para mt-6 flex mx-auto text-center justify-center items-center">
                
                <p className='px-3'>
                Sign in
                </p>
              </div>
              <div className="parbox  para mt-6 flex mx-auto text-center  justify-center items-center">
                
                <p className='px-3'>
                iOS app
                </p>
              </div>
              <div className="parbox  para mt-6 flex mx-auto  text-center justify-center items-center">
                
                <p className='px-3'>
                Android app
                </p>
              </div>
            </div>
            <div className="card-box sm:w-96  flex-col sm:flex-1 justify-center items-center mx-auto mt-5 mb-5 gap-5  ">
              <div className="header head text-center mt-5">
                <h1 className='text-2xl'>Company</h1>
              </div>
              <div className="parbox  para mt-6 flex mx-auto text-center justify-center items-center">
                
                <p className='px-3'>
                About Omnifood
                </p>
              </div>
              <div className="parbox  para mt-6 flex mx-auto text-center justify-center items-center">
                
                <p className='px-3'>
                For Business
                </p>
              </div>
              <div className="parbox  para mt-6 flex mx-auto text-center  justify-center items-center">
                
                <p className='px-3'>
                Cooking partners
                </p>
              </div>
              <div className="parbox  para mt-6 flex mx-auto  text-center justify-center items-center">
                
                <p className='px-3'>
                Careers
                </p>
              </div>
            </div>
            
          </div>
        </div>
      <hr></hr>
      <div className="rightbox mt-5 mb-5">
        <p className="sm:text-start text-center para">
          All rights is preserved by Sunny Singh 2024©️
        </p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
