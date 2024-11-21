import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardProduct from "../shared/CardProduct";
import { Clothing } from "@/app/models/clothing";

export default async function Trending() {
  const data = await fetch("http://localhost:8080/clothes/?trending=true");

  const trendingProducts = (await data.json()) as Clothing[];
  const middleIndex = Math.round(trendingProducts.length / 2);

  return (
    <section className="bg-background py-8">
      <div className="container mx-auto">
        <h1 className="font-bold text-5xl text-center mb-6">TENDENCIA</h1>
        <div className="px-20 min-w-96">
          <Carousel className="mb-10">
            <CarouselContent>
              {trendingProducts.slice(0, middleIndex).map((product) => {
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
              {trendingProducts.slice(middleIndex + 1).map((product) => {
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
        </div>
      </div>
    </section>
  );
}
