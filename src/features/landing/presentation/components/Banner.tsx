import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const images = [
  'https://c8.alamy.com/comp/2AMC1Y6/online-distance-education-banner-2AMC1Y6.jpg',
  'https://c8.alamy.com/comp/2AMC1Y6/online-distance-education-banner-2AMC1Y6.jpg',
  'https://c8.alamy.com/comp/2AMC1Y6/online-distance-education-banner-2AMC1Y6.jpg',
  'https://c8.alamy.com/comp/2AMC1Y6/online-distance-education-banner-2AMC1Y6.jpg',
  'https://c8.alamy.com/comp/2AMC1Y6/online-distance-education-banner-2AMC1Y6.jpg',
];

export function Banner() {
  const autoplayPlugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  return (
    <section>
      <Carousel
        plugins={[autoplayPlugin.current]}
        onMouseEnter={autoplayPlugin.current.stop}
        onMouseLeave={autoplayPlugin.current.reset}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="mt-32 flex items-center justify-center">
                  <Image
                    src={src}
                    alt={`Banner ${index + 1}`}
                    width={1280}
                    height={720}
                    className="w-full h-[400px] object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
