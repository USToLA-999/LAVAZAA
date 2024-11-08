import { useState } from 'react'
import logo from '../assets/Logo.png'

import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5'



const Navbar = () => {

    const [open , setOpen ] = useState("false")

    const [click, setClick]  = useState(false);
  const handleClick = () => {
    setClick(!click);
  }

  return (
   <div className=" maincontainer w-auto   ">
        <div className="container   mx-auto">
                <div className="logobox md:hidden  pt-5 z-20 flex  justify-center items-center">
                        <img src={logo} alt="logo" width={100} />
                </div>
              <div className="text-3xl text-white flex justify-center w-9 mx-auto pt-2 pb-2 items-center md:hidden" onClick={()=> setOpen(!open)}>

                    <button className="block md:hidden sm:hidden transition  ml-auto" onClick={handleClick}>
                        {click ?<IoCloseOutline className="text-3xl" />  : <IoMenuOutline className="text-3xl" />}
                    </button>
                </div>
                
                
                <ul className="text-white sm:text-2xl   md:flex hidden  justify-around pt-10 pb-10 items-center ">
                    <li>Coffee</li>
                    <li>Merch</li>
                    <li className='absolute top-8  rounded-full z-10'><img src={logo} alt="logo" width={120}  /></li>
                    <li>Find us</li>
                    <li>About</li>
                </ul>
                
            
            {/* mobile view */}
            
                
            
                <ul className={`
                    md:hidden gap-10 absolute text-white bg-black   z-20 text-3xl  w-full  top-30 py-5 pl-4 flex flex-col items-center justify-center
                    duration-1000 ${open ? "left-[-100%]" : "left-0"}
                `}>
                    <li>Coffee</li>
                    <li  >Merch</li>
                    
                    <li  >Find us</li>
                    <li  >About</li>
            </ul>
            
            
        </div>
        
   </div>
  )
}

export default Navbar