import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { CardMedia } from "@mui/material";

import Link from "next/link";

export default async function ProductPage({ params }) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${params.id}`);
  const data = await res.json();
  const country = await data[0];

  return (
    <div className="sm:m-12">
      <Link href={"/"}>
        <button
          id="theme"
          className="p-1 pr-3 text-sm max-w-[6rem] shadow-lg flex justify-center items-center gap-3 m-6"
        >
          <KeyboardBackspaceIcon className="w-4" /> Back
        </button>
      </Link>
      <div className="m-6 w-[320px] lg:w-[500px]">
        <CardMedia
          component="img"
          className="h-[160px] lg:h-[320px]"
          image={country.flags.png}
          loading="lazy"
        />
      </div>
    </div>
  );
}
