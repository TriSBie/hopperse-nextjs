/* eslint-disable import/no-unresolved */
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export const Banner = () => {
  return (
    <section className="relative w-screen">
      <Carousel className="w-screen h-[400px]">
        <CarouselContent>
          <CarouselItem className="w-full h-[400px]">
            <Image
              src="/images/banner1.jpg"
              alt="Banner 1"
              layout="fill"
              objectFit="cover"
              priority
            />
          </CarouselItem>
          <CarouselItem className="w-full h-[400px]">
            <Image
              src="/images/banner2.jpg"
              alt="Banner 2"
              layout="fill"
              objectFit="cover"
              priority
            />
          </CarouselItem>
          <CarouselItem className="w-full h-[400px]">
            <Image
              src="/images/banner3.jpg"
              alt="Banner 3"
              layout="fill"
              objectFit="cover"
              priority
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white" />
      </Carousel>
    </section>
  );
};
