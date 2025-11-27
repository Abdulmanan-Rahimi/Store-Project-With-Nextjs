import { useRouter } from "next/router";
import React from "react";

const ProductsByCategory = () => {
  const { category } = useRouter().query;

  return <div>ProductsByCategory - {category}</div>;
};

export default ProductsByCategory;
