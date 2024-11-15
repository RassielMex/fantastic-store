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
    <section className="bg-background">
      <div className="container mx-auto">
        <h1 className="font-bold text-5xl text-center mb-4">TENDENDCIA</h1>
        <div className="grid gap-y-8 grid-rows-2">
          <Carousel>
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
          <Carousel>
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
