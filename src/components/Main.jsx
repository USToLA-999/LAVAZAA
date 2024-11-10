
import image1 from "../assets/herophoto.png";
import Customer from "./Customer";

const Main = () => {
  return (
    <div className="main-box relative text-white w-full pt-5 pb-5 ">
      <div className="container md:container  mx-auto">
        <div className="headlines-portion  flex md:flex-row flex-col  sm:mt-20 sm:mb-10 gap-5  ">
          <div className="contentbox flex flex-1 justify-center items-center mx-auto mt-5 ">
            <div className="innerbox max-w-5xl md:w-full  mx-auto ">
              <div className="headerline md:w-full mx-auto sm:py-5 sm:px-5 ">
                    <h1 className=" head sm:text-5xl text-3xl  bold text-center sm:px-0 leading-normal sm:py-0 px-2 py-2 font-bold sm:text-start ">
                    Crafted for Coffee Lovers, by Coffee Lovers.
                    </h1>
                    <p className="mt-4 para text-lg sm:text-start sm:px-0 sm:py-2 px-2 py-2 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, eligendi fugiat soluta velit maiores officia.
                    Eveniet totam quasi tempore pariatur odit nisi et adipisci
                    aliquam natus, enim ipsum deserunt consequatur! Quasi modi
                    optio voluptate? Totam eaque odit amet vero, sed aut ducimus.
                    Vel possimus commodi, soluta ad fugit laudantium quam?
                    </p>
              </div>
              <div className="buttonbox mt-5 mb-5 w-full sm:px-5 sm:py-5  gap-5 sm:flex sm:justify-start sm:items-center text-center  ">
                <div className="firstbox">

                    <button className="button w-56 mt-5 sm:text-2xl text-md">Lets share beans</button>
                </div>
                <div className="secondbox">
                   <button  color="error" className="button-outline  w-48 mt-5 sm:text-2xl text-md">More Info</button>  
                </div>
                   
              </div>
              <Customer/>
            </div>
            
          </div>
          <div className="paraline flex flex-1 mx-auto">
            <div className="imagebox mx-auto text-center ">
              <img
                src={image1}
                width={100}
                className=" imagecl imagerbox rounded-3xl sm:w-full w-80 mt-10 flex justify-center items-center text-center border-x-slate-600 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
