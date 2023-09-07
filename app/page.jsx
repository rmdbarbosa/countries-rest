import Filter from "./components/Filter";
import FlagCard from "./components/FlagCard";
import Search from "./components/Search";

export default function Home() {
  return (
    <main>
      <Search />
      <Filter />
      <FlagCard />
    </main>
  );
}
