
import user1 from "../assets/customer-1.jpg";
import user2 from "../assets/customer-2.jpg";
import user3 from "../assets/customer-3.jpg";
import user4 from "../assets/customer-4.jpg";
import user5 from "../assets/customer-5.jpg";
import user6 from "../assets/customer-6.jpg";
const Customer = () => {
  return (
    <div className="userbox  mt-5 mb-5 sm:w-full w-80 mx-auto sm:px-5">
      <div className="box w-full pt-5    flex flex-1 justify-center items-center sm:justify-start sm:items-center ">
        <div className="innerbox sm:w-60 w-80  flex">
            <div className="image1 w-full  ">
            <img src={user1} alt="" className="rounded-full  border-4 border-red-600  " />
            </div>
            <div className="image2 w-full -ml-4">
            <img src={user2} alt="" className="rounded-full    border-4 border-red-600" />
            </div>
            <div className="image3 w-full -ml-4 ">
            <img src={user3} alt="" className="rounded-full  border-4 border-red-600" />
            </div>
            <div className="image4 w-full -ml-4 ">
            <img src={user4} alt="" className="rounded-full   border-4 border-red-600" />
            </div>
            <div className="image5 w-full -ml-4 ">
            <img src={user5} alt="" className="rounded-full   border-4 border-red-600" />
            </div>
            <div className="image6 w-full -ml-4 ">
            <img src={user6} alt="" className="rounded-full     border-4 border-red-600" />
            </div>
        </div>
        
        <div className="parabox para ml-5 sm:text-md">
            <p>250+ Customer buy our beans and make memories with their love ones</p>
        </div>
        
      </div>
        
          
    </div>
  );
};

export default Customer;
