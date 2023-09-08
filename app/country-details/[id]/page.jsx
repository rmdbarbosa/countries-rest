import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { CardMedia } from "@mui/material";

import Link from "next/link";

export default async function ProductPage({ params }) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${params.id}`);
  const data = await res.json();
  const country = await data[0];

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
          <h1 className="font-bold my-3">Belgium</h1>

          <div className="flex flex-col gap-8 sm:flex-row">
            <ul>
              <li>
                <span>Native Name:</span> Belgie
              </li>
              <li>
                <span>Population:</span> Belgie
              </li>
              <li>
                <span>Region:</span> Belgie
              </li>
              <li>
                <span>Sub Region:</span> Belgie
              </li>
              <li>
                <span>Capital:</span> Belgie
              </li>
            </ul>

            <ul>
              <li>
                <span>Top Level Domain:</span> Belgie
              </li>
              <li>
                <span>Currencies:</span> Belgie
              </li>
              <li>
                <span>Languages:</span> Belgie
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:relative">
            <span className="mt-6">Border Countries:</span>
            <ul className="flex gap-6 text-center text-sm max-h-[25px] lg:bottom-0 lg:right-16 lg:absolute">
              <li id="theme" className="w-[80px] rounded ">
                Brazil
              </li>
              <li id="theme" className="w-[80px] rounded ">
                EUA
              </li>
              <li id="theme" className="w-[80px] rounded ">
                England
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
