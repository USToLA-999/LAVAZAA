import React from "react";
import mixer from "../assets/coffemixer.jpg";
import coffee from "../assets/cofee.jpg";
import mug from "../assets/mug.jpg";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { MdOutlineArrowRight } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
const Recommded = () => {
  return (
    <div className="main-box text-white pt-5 pb-5 w-full">
      <div className="container mx-auto">
        <div className="headlinerbox mt-5 ">
          <div className="head headbox  flex justify-center items-center">
            <div className="headline text-center">
              <h1 className="sm:text-4xl text-4xl underline underline-offset-8 decoration-red-800">
                Weekend Special product
              </h1>
              <p className="para mt-4 mb-4 text-red-700 text-center">
                Check out our daily special product that you can get with +%20
                Off!
              </p>
            </div>
          </div>
        </div>
        <div className="main-cardbox flex md:flex-row flex-col  sm:mt-10 sm:mb-10 gap-5 ">
          <div className="card-box  flex flex-1 justify-center items-center mx-auto mt-5 mb-5   ">
            
              <div className="card-boxer flex justify-center items-center   ">
                <Card sx={{ maxWidth: 345,  borderRadius:5, boxSizing:'border-box' , boxShadow:'0 0 20px white' }} className="card-boxer"  >
                  <CardActionArea className="rounded-lg ">
                    <CardMedia
                      component="img"
                      height="100"
                      image={mixer}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div"   >
                        <p className="para">Lavazaa Coffee Mixer</p>
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", }}
                      >
                        <p className="para text-xl ">$20</p>
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", marginTop:5, display:'flex', justifyContent:'space-between' }}
                      >
                        <p className="para text-xl  underline  decoration-red-600 flex  hover:mx-2 ease-in duration-75 "> Add to Card <MdOutlineArrowRight className="text-xl mt-1  " /></p>
                        <CiHeart className="text-2xl mt-1" />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            
          </div>
          <div className="card-box  flex flex-1 justify-center items-center mx-auto mt-5 mb-5   ">
          <Card sx={{ maxWidth: 345,  borderRadius:5, boxSizing:'border-box' , boxShadow:'0 0 20px white' }} className="card-boxer"  >
                  <CardActionArea className="rounded-lg ">
                    <CardMedia
                      component="img"
                      height="100"
                      image={coffee}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div"   >
                        <p className="para">Cold caramil coffee</p>
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", }}
                      >
                        <p className="para text-xl ">$10</p>
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", marginTop:5, display:'flex', justifyContent:'space-between' }}
                      >
                        <p className="para text-xl  underline  decoration-red-600 flex  hover:mx-2 ease-in duration-75 "> Add to Card <MdOutlineArrowRight className="text-xl mt-1  " /></p>
                        <CiHeart className="text-2xl mt-1" />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
          </div>
          <div className="card-box  flex flex-1 justify-center items-center mx-auto mt-5 mb-5   ">
          <Card sx={{ maxWidth: 345,  borderRadius:5, boxSizing:'border-box' , boxShadow:'0 0 20px white' }} className="card-boxer"  >
                  <CardActionArea className="rounded-lg ">
                    <CardMedia
                      component="img"
                      height="100"
                      image={mug}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div"   >
                        <p className="para">Coffee Mug</p>
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", }}
                      >
                        <p className="para text-xl ">$26</p>
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", marginTop:5, display:'flex', justifyContent:'space-between' }}
                      >
                        <p className="para text-xl  underline  decoration-red-600 flex  hover:mx-2 ease-in duration-75 "> Add to Card <MdOutlineArrowRight className="text-xl mt-1  " /></p>
                        <CiHeart className="text-2xl mt-1" />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommded;
