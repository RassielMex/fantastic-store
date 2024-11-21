import { Clothing } from "@/app/models/clothing";
import Image from "next/image";

export default function CardProduct({ product }: { product: Clothing }) {
  return (
    <div className="">
      <div className="relative h-[378px]">
        {product?.availability === 0 && (
          <p className="absolute right-0 top-0 z-10 m-4 bg-background opacity-75 p-1">
            Out of stock
          </p>
        )}
        <Image
          alt="Card image"
          src={product?.imgUrl || "/images/image-not-found.jpg"}
          fill
        />
      </div>
      <h5 className="mt-2 font-bold text-lg">{product?.name}</h5>
      <h6>${product?.price}</h6>
      <p>Disponible: {product?.availability}</p>
    </div>
  );
}
