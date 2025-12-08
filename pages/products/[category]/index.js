import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import db from "@/data/db.json";
import ProductCard from "@/components/productCard/ProductCard";
import styles from "@/styles/ProductsByCategory.module.css";

const ProductsByCategory = () => {
  const { category } = useRouter().query;
  const [products, setProducts] = useState(db[category]);

  useEffect(() => {
    setProducts(db[category]);
  }, [category]);

  return (
    <div className="container">
      <div className={`section ${styles.searchContainer}`}>
        <input
          type="text"
          placeholder="دنبال چی میگردی؟"
          className={styles.search}
        ></input>
      </div>

      <div className="section">
        <h1>محصولات ({category})</h1>
        <div className="row">
          {products?.map((product) => (
            <div className="col" key={product.id}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsByCategory;
