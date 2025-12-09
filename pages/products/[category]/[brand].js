import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import db from "@/data/db.json";
import ProductCard from "@/components/productCard/ProductCard";

const ProductsByBrand = () => {
  const { brand } = useRouter().query;
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    setLaptops(getLaptops(brand));
  }, [brand]);
  const getLaptops = (brand) => {
    return db.laptops.filter((laptop) => laptop.brand == brand);
  };

  console.log(getLaptops("hp"));

  return (
    <div className="container">
      <div className="section">
        <h1>   لپ تاپ({brand})</h1>
        <div className="row">
          {laptops.map((laptop) => (
            <div className="col" key={laptop.id}>
              <ProductCard  {...laptop} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsByBrand;
