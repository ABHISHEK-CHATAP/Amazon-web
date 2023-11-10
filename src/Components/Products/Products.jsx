import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "../Product/Product";

const Products = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const getData = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((DAta) => setData(DAta))
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  // console.log("my data :", data)

  return (
    <>
      <div className="body">
        <div className="bodyItems">
          {data.map((item, index) => {
            return <Product key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
