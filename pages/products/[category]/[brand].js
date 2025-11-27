import { useRouter } from "next/router";
import React from "react";

const ProductsByBrand = () => {
  const { category, brand } = useRouter().query;

  return (
    <div>
      ProductsByBrand - {category} - {brand}
    </div>
  );
};

export default ProductsByBrand;
