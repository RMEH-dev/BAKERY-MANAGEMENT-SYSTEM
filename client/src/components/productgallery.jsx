import "../index.css";
import { Link } from "react-router-dom";
import { ProductList } from "./primary/productlist";
import { Typography } from "@material-tailwind/react";
import { ProductCard } from "./primary/productcard";



export function DefaultGallery() {

  const products = [1, 2, 3, 4,5 ,6,7]; 
  // Replace with actual product IDs or fetch from backend 

  return (
    <div className="bg-white bg-opacity-30">
      <Typography>
        <div className="flex font-bold font-[Montserrat] text-2xl pl-10 pt-10">
          <Link to="/products">All Products&nbsp;/</Link>
          <Link to="/products/Breads&Buns">&nbsp;Breads & Buns</Link>
        </div>
      </Typography>

      <div className="pt-10">
        <div className="grid lg:grid-cols-3 mr-[50px] grid-rows-1 lg:grid-rows-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <div className="z-50">
            <ProductList />
          </div>
          {/* <div className="pl-10 pr-10 pb-20 grid grid-cols-1 gap-20 lg:grid-cols-2 lg:grid-rows-1 grid-rows-1"> {/* Changed grid-cols-3 to grid-cols-4 */}
          {/* <div>
                <ProductCard
                  className="h-40 w-full max-w-screen shadow-md shadow-deep-orange-900 outline-deep-orange-800 outline-offset-8 rounded-lg object-cover object-center"
                  alt="gallery-photo"
                />
              </div> */}
          {/* </div> */}
          <div>
            <div className="w-[300px] mx-20 2xl:mx-1 2xl:-ml-[130px] pt-10 sm:pt-10 md:pt-0 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-x-[280px] 2xl:gap-x-[300px] gap-y-[80px] pb-36">
              {products.map((productId) => (
                <ProductCard className="grid grid-cols-3 xl:grid-cols-4" key={productId} productId={productId} />
              ))}
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}
