
import brand1 from "../assets/brand/business-insider.png"
import brand2 from "../assets/brand/forbes.png"
import brand3 from "../assets/brand/techcrunch.png"
import brand4 from "../assets/brand/the-new-york-times.png"
import brand5 from "../assets/brand/usa-today.png"


const Branding = () => {
  return (
    <div className="branding-content-box pt-5 pb-5 text-white ">
      <div className="container mx-auto">
        <div className="feature-headline  ">
          <div className="conatinerbox-main flex  justify-center items-center mx-auto mt-5">
                <div className="headliner para mt-5 pb-5">
                    <h1 className="text-2xl underline underline-offset-8 decoration-red-800 "> As Featured in</h1>
                </div>
          </div>
          <div className="brandimagebox  mt-5 mb-5 ">
            <div className="imagebox sm:w-full w-80 mx-auto flex justify-around items-center gap-2 ">
                <div className="img"><img src={brand1} alt="business insider" className=" brandimg "/></div>
                <div className="img"><img src={brand2} alt=" forbes" className=" brandimg "/></div>
                <div className="img"><img src={brand3} alt=" techcrush" className=" brandimg "/></div>
                <div className="img"><img src={brand4} alt="new tork time" className=" brandimg "/></div>
                <div className="img"><img src={brand5} alt="usa-today" className=" brandimg "/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
