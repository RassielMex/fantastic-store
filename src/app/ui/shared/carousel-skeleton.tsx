import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardSkeleton from "./card-skeleton";

export default function CarouselSkeleton() {
  return (
    <>
      <Carousel className="mb-10" key={"carousel 1"}>
        <CarouselContent>
          {Array.from({ length: 4 }, (v, i) => i + 100).map((v, i) => {
            return (
              <CarouselItem className="lg:basis-1/4" key={v + i}>
                <CardSkeleton />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Carousel className="" key={"carouse 2"}>
        <CarouselContent>
          {Array.from({ length: 4 }, (v, i) => i + 200).map((v, i) => {
            return (
              <CarouselItem className="lg:basis-1/4" key={v + i}>
                <CardSkeleton />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
