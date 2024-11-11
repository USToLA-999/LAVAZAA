import { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CiHeart } from "react-icons/ci";
import { MdOutlineArrowRight } from "react-icons/md";

const Coffee = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fake-coffee-api.vercel.app/api")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  
  return (
    <div className=" text-white">
      <div className="container mx-auto px-4 py-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold underline underline-offset-8 decoration-red-800">
            Our Coffee Products
          </h1>
          <hr className="mt-28 border-red-600 "  />
        </div>

        {/* Card Container */}
        <div className=" grid grid-cols- md:grid-cols-2  lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card variant="body2"   sx={{ backgroundColor: 'black', color:'white',borderRadius:5, boxSizing:'border-box' , boxShadow:'0 0 20px red' }}
              key={product._id}
              className=" text-white rounded-xl overflow-hidden shadow-lg"
            >
              <CardActionArea >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image_url}
                  alt={product.name}
                />
                <CardContent className="p-4" >
                  <Typography   gutterBottom  component="div" className="font-bold ">
                    <p className="head text-xl">
                      Name:  {product.name}
                    </p>
                    
                  </Typography>
                  <Typography >
                    <p className="para"> {product.description}</p>
                  </Typography>
                  <Typography className=" text-lg font-semibold">
                    <p className="mt-5 mb-5 para text-xl">Price: <br/>${product.price}</p>
                  </Typography>
                  <Typography className="text-sm">
                    <p className="mt-5 mb-5 para text-xl">Region: <br/>{product.region}</p>
                  </Typography>
                  <Typography className="mt-1 text-sm">
                    <p className="mt-5 mb-5 para text-lg"> Weight: <br/>{product.weight} </p>
                  </Typography>
                  <Typography className="mt-1 text-sm">
                    <p className="mt-5 mb-5 para text-lg"> Roast Level: <br/>{product.roast_level}</p>
                  </Typography>
                  <Typography className="mt-1 text-sm">
                  <p className="mt-5 mb-5 para text-lg">Flavours: <br/>[{product.flavor_profile.join(", ")}] </p>
                  </Typography>
                  <Typography className="mt-1 text-sm">
                    <p className="mt-5 mb-5 para text-lg"> Grind Options: <br/>[{product.grind_option.join(", ")}] </p>
                  </Typography>
                  
                  {/* Add to Cart and Like Section */}
                  <div className="flex justify-between items-center mt-4">
                    <button className="flex items-center gap-1 text-red-500 hover:text-red-600">
                      Add to Cart <MdOutlineArrowRight />
                    </button>
                    <CiHeart className="text-2xl cursor-pointer hover:text-red-600" />
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coffee;
