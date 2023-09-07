import Filter from "./components/Filter";
import FlagCard from "./components/FlagCard";
import Search from "./components/Search";

export default async function Home() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  const countryElements = await data.map((country) => {
    return <FlagCard {...country} />;
  });

  return (
    <main>
      <Search />
      <Filter />
      <div className="flex flex-wrap gap-12 justify-center mb-6">
        {countryElements}
      </div>
    </main>
  );
}
