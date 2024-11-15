import { CiHeart } from "react-icons/ci";
import image1 from "../../assets/arival4.jpg";
import { useEffect, useState } from "react";
import { MdOutlineArrowRight } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
//   const allProduct = "47" ;
const Merch = () => {
  const [cloths, setCloths] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [selectedCat, setSelectedCat] = useState("All");
  const [search, setSearch] = useState("");

  //search handle effect filter
  // let search = document.querySelector('#search')

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setCloths(data));
  }, []);
  console.log(cloths);

  //category

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((data) => setCategorys(["All", ...data]));
  }, []);
  console.log(categorys);

  console.log(selectedCat, cloths);

  return (
    <>
      <div className="text-black ">
        <div className="container mx-auto px-4 py-10">
          <div className=" mt-10 mb-10">
            <h1 className="text-3xl text-center head sm:text-4xl font-bold underline underline-offset-8 decoration-red-800 text-white">
              Our Merchendise
            </h1>
            <hr className="mt-28 border-red-600 " />
            <div className="searchbox mt-2 mb-2 flex flex-col justify-between ">
              <div className="search">
                <input
                  type="text"
                  className="text-black para rounded-xl"
                  name="search"
                  id="search"
                  onChange={(event) => setSearch(event.target.value)}
                  value={search}
                  placeholder="Search"/>

                <button type="submit"  ><FaMagnifyingGlass className="text-2xl text-white text-center mx-auto flex items-center justify-center pt-2" /></button>
              </div>
              <div className="filter sm:flex  items-center text-white justify-between w-2/4 mt-5">
                      {categorys.map((catego) => (


                  <ul key={catego}>
                    <li>
                      <button className="button px-5" onClick={() => setSelectedCat(catego)}>{catego}</button>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className=" grid grid-cols md:grid-cols-2  lg:grid-cols-4 gap-8 ">
            {cloths
              .filter(
                (item) =>
                  (item.category == selectedCat || selectedCat == "All") &&
                  item.title.toLowerCase().includes(search)
              )
              .map((merchendise) => (
                <ul key={merchendise.id}>
                  <li>
                    <div className="product-box mt-5 mb-5 bg-white mx-auto flex">
                      <div className="mainbox w-80 mx-auto mt-5 ">
                        <div className="image-conatiner mt-5 mb-5 ">
                          <img src={merchendise.image} alt="" width={500} className="image" />
                        </div>
                        <div className="namebox mt-5 mb-3">
                          <h1 className="head text-3xl">{merchendise.title}</h1>
                        </div>
                        {/* <div className="desc-bopx mt-3 mb-3">
                          <p className="para text-lg">
                            {merchendise.description}
                          </p>
                        </div> */}
                        <div className="priceboc mt-8 mb-5">
                          <h1 className="head text-4xl">
                            $ {merchendise.price}
                          </h1>
                        </div>
                        <div className="priceboc mt-8 mb-5">
                          <p className="para text-lg">
                            Rating:- {merchendise.rating.rate}
                          </p>
                        </div>
                        <div className="flex justify-between items-center mt-4 mb-5 para">
                    <button className="para text-xl  underline  decoration-red-600 flex  hover:mx-2 ease-in duration-75">
                      Add to Cart <MdOutlineArrowRight />
                    </button>
                    <CiHeart className="text-2xl cursor-pointer hover:text-red-600" />
                  </div>
                      </div>
                    </div>
                  </li>
                </ul>
              ))}
          </div>
        </div>

      </div>

      
    </>
  );
};

export default Merch;
