import { useState } from "react";
import type { CountryType } from "../../type";
import "./Country.css";

export interface CountryProps {
  country: CountryType;
}

export default function Country({ country }: CountryProps) {
  const [visited, setVisited] = useState<Boolean>(false);
  const handleVisited = () => {
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    setVisited(!visited)
  };

  return (
    <div className="country">
      <h3>{country.name.common}</h3>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <p>Capital: {country.capital.capital}</p>
      <p>Population: {country.population.population}</p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Mark as Visited"}
      </button>
    </div>
  );
}
