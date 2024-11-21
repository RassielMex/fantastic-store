import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardProduct from "../shared/card-product";
import { getClothing } from "@/lib/data";
import { Suspense } from "react";
import CarouselSkeleton from "../shared/carousel-skeleton";

export default async function Trending() {
  return (
    <section className="bg-background py-8">
      <div className="container mx-auto">
        <h1 className="font-bold text-5xl text-center mb-6">TENDENCIA</h1>
        <div className="px-20 min-w-96">
          <Suspense fallback={<CarouselSkeleton />}>
            <Carousels />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

const Carousels = async () => {
  const trendingProducts = await getClothing(true);

  const middleIndex = trendingProducts
    ? Math.round(trendingProducts.length / 2)
    : 0;

  return (
    <>
      <Carousel className="mb-10">
        <CarouselContent>
          {trendingProducts?.slice(0, middleIndex).map((product) => {
            return (
              <CarouselItem className="lg:basis-1/4" key={product?.id}>
                <CardProduct product={product} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Carousel className="">
        <CarouselContent>
          {trendingProducts?.slice(middleIndex + 1).map((product) => {
            return (
              <CarouselItem className="lg:basis-1/4" key={product?.id}>
                <CardProduct product={product} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};
