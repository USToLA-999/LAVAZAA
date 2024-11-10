import React from "react";
import sideimg from '../assets/gettouch.jpg'
const Getintouch = () => {
  return (
    <>
    <div className="main text-white pt-5 pb-5">
        <div className="conatiner mx-auto">
        <div className="headlinerbox mt-5 ">
          <div className="head headbox  flex justify-center items-center">
            <div className="headline text-center">
              <h1 className="sm:text-4xl text-4xl underline underline-offset-8 decoration-red-800">
                Get in Touch
              </h1>
            </div>
          </div>
        </div>
        </div>
    </div>
    <div className="main-box mt-5 text-white">
      <div className="container mainboxer rounded-lg  mx-auto ">
        <div className="headlines-portion  flex md:flex-row flex-col  sm:mt-10 sm:mb-10 gap-2  ">
        <div className="contentbox flex flex-initial sm:w-96 w-80 justify-center items-center mx-auto  ">
                <div className="imagebox">
                    <img src={sideimg} alt=""  className="rounded-lg contentbox mt-0.5 mb-0.5  " />
                </div>
          </div>
          <div className="contentbox flex flex-1 justify-center items-center mx-auto mt-5 ">
            <div className="innerbox max-w-5xl md:w-full  mx-auto ">
              <div className="headerline md:w-full mx-auto sm:py-5 sm:px-5 ">
                <h1 className="head sm:text-4xl text-3xl  bold text-center sm:px-0 leading-normal sm:py-0 px-2 py-2 font-bold sm:text-start">
                  Get your first drink for free!
                </h1>
                <p className="mt-4 para text-lg sm:text-start sm:px-0 sm:py-2 px-2 py-2 text-center">
                  Healthy, tasty and hassle-free Beans are waiting for you.
                  Start Drinking well today. You can cancel or pause anytime.
                  And the first meal is on us!
                </p>

                <form action="#" className="flex flex-wrap sm:w-full mx-auto  w-80 gap-5 ">
                  <div className="sm:w-96 w-80    mt-5 mb-5  text-black">
                    <input
                      id="full-name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className=" w-full pt-2 pb-2  rounded-lg px-2 py-2 text-black para "
                    />
                  </div>
                  <div className=" sm:w-96 w-80  mt-5 mb-5 text-black">
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="John Doe@example.com"
                      className=" w-full pt-2 pb-2  rounded-lg px-2 py-2 text-black para "
                    />
                  </div>
                  <div className="sm:w-96 w-80   mt-5 mb-5  text-black">
                    <select id="select-where" className="w-full  pt-2 pb-2 rounded-lg px-2 py-2 text-black para">
                    <option value="" className="para">Where did you hear from us?</option>
                    <option value="friends">Friends and Family</option>
                    <option value="youtube">Youtube Video</option>
                    <option value="Podcast">Podcast</option>
                    <option value="Ad">Facebook Ad</option>
                    <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="w-96 justify-center flex  mt-5 mb-5 text-black">
                    <button className="w-80 pt-2 pb-2  rounded-lg px-2 py-2 text-white para bg-black">Sign Up Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
};

export default Getintouch;
