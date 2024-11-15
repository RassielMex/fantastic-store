import CardProduct from "@/app/ui/shared/CardProduct";
import { Storefront } from "@phosphor-icons/react/dist/ssr";

export default function ProductsPage() {
  const filterOptions = ["ALL", "JEANS", "SHIRTS", "TRENDING"];
  return (
    <div className="container mx-auto pt-20 ">
      <section className="p-8 relative">
        <div className="w-full md:w-3/4 lg:w-1/2">
          <div className="font-normal text-sm mb-4 border w-fit px-2 py-1 rounded-xl">
            <Storefront size={20} className="inline mr-2" />
            <span>Tu tienda en línea</span>
          </div>
          <h2 className="font-bold text-3xl mb-4">
            CONOCE TUS NUEVAS PRENDAS, TODO TAN CERCA
          </h2>
          <p className="font-normal text-sm mb-4">
            ENCUENTRA LA EXCLUSIVIDAD HECHA MODA
          </p>
          <input placeholder="Búscar..." className="px-2 py-3 mb-4 w-full" />
          <FilterOptions options={filterOptions} />
        </div>
        <video
          autoPlay
          muted
          loop
          preload="auto"
          className="absolute top-0 right-0 -z-10 opacity-10 object-cover w-full h-full"
        >
          <source src="/videos/shop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className="p-8 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </section>
    </div>
  );
}

const FilterOptions = ({ options }: { options: string[] }) => {
  return (
    <ul className="flex gap-2 flex-wrap">
      {options.map((option, index) => {
        return (
          <li key={index}>
            <input
              name="filter"
              value={option}
              id={option}
              type="radio"
              className="hidden peer"
            />
            <label
              htmlFor={option}
              className="peer-checked:bg-gray-700 rounded p-1"
            >
              radio1
            </label>
          </li>
        );
      })}
    </ul>
  );
};
