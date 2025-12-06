import MainMenu from "@/components/header/mainMenu/MainMenu";
import Navbar from "@/components/header/navbar/Navbar";
import ProductCard from "@/components/productCard/ProductCard";
import db from "../data/db.json";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        {db.laptops.slice(0, 4).map((laptop) => (
          <div key={laptop.id} className="col">
            <ProductCard {...laptop} />
          </div>
        ))}
      </div>
    </div>
  );
}
