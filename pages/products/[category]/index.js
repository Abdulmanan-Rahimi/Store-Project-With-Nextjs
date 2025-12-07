import { useRouter } from "next/router";
import React from "react";
import db from "@/data/db.json";

const ProductsByCategory = () => {
  const { category } = useRouter().query;
  console.log(db[category]);

  return <div>ProductsByCategory - {category}</div>;
};

export default ProductsByCategory;
