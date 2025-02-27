import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

const images = [
  'https://s3.envato.com/files/256350868/01%201200%20GG.png',
  'https://s3.envato.com/files/256350868/01%201200%20GG.png',
  'https://s3.envato.com/files/256350868/01%201200%20GG.png',
  'https://s3.envato.com/files/256350868/01%201200%20GG.png',
  'https://s3.envato.com/files/256350868/01%201200%20GG.png',
];

export function Banner() {
  return (
    <section className="mx-auto w-[95%]">
      <Carousel>
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex items-center justify-center">
                  <Image
                    src={src}
                    alt={`Banner ${index + 1}`}
                    width={800}
                    height={400}
                    className="w-full h-[400px] object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </section>
  );
}
