import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";

export default async function ProductPage({ params }) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${params.id}`);
  const data = await res.json();

  return (
    <>
      <Link href={"/"}>
        <button
          id="theme"
          className="p-1 pr-3 text-sm max-w-[6rem] shadow-lg flex justify-center items-center gap-3 m-6"
        >
          <KeyboardBackspaceIcon className="w-4" /> Back
        </button>
      </Link>
      <Box className="bg-black m-6">
        <Image
          src={data[0].flags.png}
          width={330}
          height={300}
          alt={data[0].name.common}
        />
      </Box>
    </>
  );
}
