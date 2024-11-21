import { ClothingCategory } from "@/app/models/models";
import { FilterOptions } from "@/app/ui/products/filter-options";
import ProductsContainer from "@/app/ui/products/products-container";
import SearchBar from "@/app/ui/products/search-bar";
import ProductsGridSkeleton from "@/app/ui/shared/products-grid-skeleton";
import { getClothing } from "@/lib/data";
import { Storefront } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Suspense } from "react";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const filterOptions = [
    "ALL",
    ClothingCategory.ACCESORIOS,
    ClothingCategory.CASUAL,
    ClothingCategory.DEPORTIVO,
    ClothingCategory.FORMAL,
    ClothingCategory.JEANS,
  ];

  const { search = "", category = "" } = await searchParams;
  const products = getClothing(false, search, category);

  return (
    <div className="container mx-auto pt-20 ">
      <section className="p-8 relative">
        <div className="w-full md:w-3/4 lg:w-1/2">
          <Link
            href={"/"}
            className="font-normal text-sm mb-4 border w-fit px-2 py-1 rounded-xl"
          >
            <Storefront size={20} className="inline mr-2" />
            <span>Tu tienda en línea</span>
          </Link>
          <h2 className="font-bold text-3xl mb-4">
            CONOCE TUS NUEVAS PRENDAS, TODO TAN CERCA
          </h2>
          <p className="font-normal text-sm mb-4">
            ENCUENTRA LA EXCLUSIVIDAD HECHA MODA
          </p>
          <SearchBar />
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
      <Suspense fallback={<ProductsGridSkeleton itemsCount={8} />}>
        <ProductsContainer productsPromise={products} />
      </Suspense>
    </div>
  );
}
