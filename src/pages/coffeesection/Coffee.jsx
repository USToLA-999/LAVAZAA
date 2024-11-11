import { useEffect, useState } from 'react'
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";

const Coffee = () => {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch("https://fake-coffee-api.vercel.app/api")
    .then((res) => res.json())
    .then((data) => setProduct(data));
    }, [])
    console.log(products);
    
  return (
    <div className='main-container text-white'>
        <div className="container mx-auto pt-5 pb-5">
            <div className="headlinerbox mt-5 ">
                <div className="head headbox  flex justify-center items-center">
                    <div className="headline text-center">
                        <h1 className="sm:text-4xl text-4xl underline underline-offset-8 decoration-red-800">
                            Our all Coffee Products
                        </h1>
                    </div>
                </div>
                <hr className='text-red-600 bg-red-600 mt-10 mb-5'></hr>
            </div>
            <div className="main-cardbox flex md:flex-row flex-col  sm:mt-10 sm:mb-10 gap-5 ">
                <div className="card-box  mx-auto mt-5 mb-5   ">
                    <div className="card-boxer flex justify-center items-center   ">
                        <ul className='sm:flex flex-1 w-64 text-center items-center justify-center gap-5 '>

                            {products.map((product) =><li className='flex flex-1 justify-center items-center mx-auto mt-5 mb-5' key={product._id}>{product.name}</li> )}
                        </ul>
                  
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Coffee