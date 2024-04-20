import Search from "../components/Doctors/Search";
import Card from "../components/Ui/Card";
import Filters from "../components/Doctors/Filters";
import CurrentFilter from "../components/Doctors/CurrentFilters";

export default function Doctors({}) {
  return (
    <section className="space-y-10 mb-20">
      <div>
        <Search />
        <Filters />
      </div>

      <CurrentFilter />

      <div className="flex justify-center w-full">
        <div className="items-center justify-center grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[1220px] px-4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}
