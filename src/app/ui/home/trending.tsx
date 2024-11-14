import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Trending() {
  return (
    <section className="bg-background">
      <div className="container mx-auto">
        <h1 className="font-bold text-5xl text-center mb-4">TRENDING</h1>
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

const CardProduct = () => {
  return (
    <div className="">
      <div className="relative h-[378px]">
        <Image alt="Card image" src={"/images/welcome1.jpg"} fill />
      </div>
      <h5>Name</h5>
      <h6>$0.0</h6>
      <p>10 availables</p>
    </div>
  );
};
