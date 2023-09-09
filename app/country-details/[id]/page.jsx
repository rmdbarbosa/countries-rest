import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { CardMedia } from "@mui/material";

import Link from "next/link";

export default async function ProductPage({ params }) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${params.id}`);
  const data = await res.json();
  const country = await data[0];

  const url = "https://restcountries.com/v3.1/alpha?codes=";

  const native = Object.values(country.name.nativeName);
  const currency = Object.values(country.currencies);
  const languages = Object.values(country.languages);

  const borderArray = Object.values(country.borders || {});

  let borderFinal = [];

  try {
    const borderFetch = await fetch(url + borderArray);

    if (!borderFetch.ok) {
      throw new Error(`Failed to fetch data. Status: ${borderFetch.status}`);
    }

    const borderData = await borderFetch.json();

    borderFinal = borderData.slice(0, 3).map((bor) => {
      return (
        <li
          key={bor.name.common}
          id="theme"
          className="rounded w-[67px] h-[22px]"
        >
          {bor.name.common}
        </li>
      );
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }

  return (
    <div>
      <div>
        <Link href={"/"}>
          <button
            id="theme"
            className="p-1 pr-3 text-sm max-w-[6rem] shadow-lg flex justify-center items-center gap-3 m-6"
          >
            <KeyboardBackspaceIcon className="w-4" /> Back
          </button>
        </Link>
      </div>

      <div className="m-6 w-[320px] lg:w-[500px] flex flex-col md:flex-row">
        <CardMedia
          component="img"
          className="h-[200px] lg:h-[320px]"
          image={country.flags.png}
          loading="lazy"
        />
        <div className="min-w-full sm:flex sm:flex-col sm:justify-center md:ml-3 xl:ml-16">
          <h1 className="font-bold my-3">{country.name.common}</h1>

          <div className="flex flex-col gap-8 sm:flex-row">
            <ul>
              <li>
                <span>Native Name:</span> {native[0].common}
              </li>
              <li>
                <span>Population:</span> {country.population.toLocaleString()}
              </li>
              <li>
                <span>Region:</span> {country.region}
              </li>
              <li>
                <span>Sub Region:</span> {country.subregion}
              </li>
              <li>
                <span>Capital:</span> {country.capital}
              </li>
            </ul>

            <ul>
              <li>
                <span>Top Level Domain:</span> {country.tld}
              </li>
              <li>
                <span>Currencies:</span> {currency[0].name}
              </li>
              <li>
                <span>Languages:</span>
                {languages.join(", ").replace(/, ([^,]*)$/, " and $1")}
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:relative lg:items-end">
            <span className="mt-6">Border Countries:</span>
            <ul className="flex gap-6 text-center text-sm max-h-[25px] lg:bottom-0 lg:right-16">
              {borderFinal.length > 0 ? borderFinal : "not found"}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
