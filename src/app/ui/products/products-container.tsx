import React, { use } from "react";
import CardProduct from "../shared/card-product";
import { Clothing } from "@/app/models/models";

export default function ProductsContainer({
  productsPromise,
}: {
  productsPromise: Promise<Clothing[] | null>;
}) {
  const products = use(productsPromise);
  return (
    <section className="p-8 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {products?.map((product) => {
        return <CardProduct product={product} key={product?.id} />;
      })}
      {!products ||
        (products.length === 0 && <p>Ups no se encontraron los productos</p>)}
    </section>
  );
}
