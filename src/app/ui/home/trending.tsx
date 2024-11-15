import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardProduct from "../shared/CardProduct";

export default function Trending() {
  return (
    <section className="bg-background py-8">
      <div className="container mx-auto">
        <h1 className="font-bold text-5xl text-center mb-6">TENDENDCIA</h1>
        <div className="px-20 min-w-96">
          <Carousel className="mb-10">
            <CarouselContent>
              <CarouselItem className="lg:basis-1/3">
                <CardProduct />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3">
                <CardProduct />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3">
                <CardProduct />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3">
                <CardProduct />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3">
                <CardProduct />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <Carousel className="">
            <CarouselContent>
              <CarouselItem className="lg:basis-1/3">
                <CardProduct />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3">
                <CardProduct />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3">
                <CardProduct />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3">
                <CardProduct />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3">
                <CardProduct />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
