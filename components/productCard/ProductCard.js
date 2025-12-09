// import React from "react";
// import styles from "./ProductCard.module.css";

// const ProductCard = ({ image, text, price }) => {
//   return (
//     <div className={styles.cardContainer}>
//       <div className={styles.cardHeader}>
//         <img src={image} />
//       </div>
//       <div className={styles.cardMiddle}>
//         <p>{text}</p>
//       </div>
//       <div className={styles.cardFooter}>
//         <button>افزودن به سبد خرید</button>
//         <p>
//           {price(
//             <div className="col">
//               <ProductCard />
//             </div>
//           )}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ image, text, price }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <img src={image} />
      </div>

      <div className={styles.cardMiddle}>
        <p>{text}</p>
      </div>

      <div className={styles.cardFooter}>
        <button>افزودن به سبد خرید</button>

        <p>{price ? Number(price).toLocaleString() : "—"}</p>
      </div>
    </div>
  );
};

export default ProductCard;
