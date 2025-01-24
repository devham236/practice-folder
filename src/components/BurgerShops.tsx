import { useState } from "react";
import useDataContext from "../context/useDataContext";
import Shop from "./Shop";

const BurgerShops = () => {
  const { allRestaurants } = useDataContext();
  const [limit, setLimit] = useState(5);

  const toggleLimit = (): void => {
    setLimit(limit == 5 ? 10 : 5);
  };

  return (
    <div className="flex flex-col items-start pb-8">
      <p className="mt-4 mb-8">Vergleiche deine Burgerläden</p>
      {allRestaurants.slice(0, limit).map((restaurant, index) => (
        <Shop key={index} data={restaurant} />
      ))}
      <button
        onClick={toggleLimit}
        className="w-full text-center bg-red-300 text-white p-3 rounded-lg"
      >
        {limit == 5 ? "Mehr anzeigen" : "Weniger anzeigen"}
      </button>
    </div>
  );
};

export default BurgerShops;
