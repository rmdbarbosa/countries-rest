import Filter from "./components/Filter";
import FlagCard from "./components/FlagCard";
import Search from "./components/Search";

export default async function Home({ searchParams }) {
  let search = searchParams.search ?? "";

  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  const countryElements = await data.map((country) => {
    return <FlagCard key={country.name.common} {...country} />;
  });

  return (
    <main>
      <div className="sm:flex justify-between sm:mx-8">
        <Search />
        <Filter />
      </div>

      <div className="flex flex-wrap gap-12 justify-center mb-6">
        {countryElements.filter((country) => {
          return (
            country.props.name.common.toLowerCase().includes(search) ||
            country.props.region.toLowerCase().includes(search)
          );
        })}
      </div>
    </main>
  );
}
