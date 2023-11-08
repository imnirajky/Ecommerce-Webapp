import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { ShimmerPostList } from "react-shimmer-effects";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    async function fetchProducts(){
      const data = await fetch('https://fakestoreapi.com/products?limit=20');
      const productList = await data.json();
      setProducts(productList);
    }

    fetchProducts();
  }, []);

  return (products.length === 0)?(<ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={30} />):(
    <>
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
        {products.map((item) => {
          return <Product key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default Home;
