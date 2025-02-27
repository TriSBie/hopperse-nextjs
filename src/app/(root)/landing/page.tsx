'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { MediaEmbedded } from '@/features/landing/presentation/components/MediaEmbedded';
import { ScrollToTop } from '@/features/landing/presentation/components/ScrollToTop';
import BlurredShape from '@public/images/blurred-shape.svg';
import Image from 'next/image';
import { Banner } from '../../../features/landing/presentation/components/Banner';

function LandingPage() {
  return (
    <div>
      <Banner />

      <section className="mx-auto w-[90%] my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Story */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full h-64 md:h-72 lg:h-80">
              <Image
                src="https://supereval.com/wp-content/uploads/2022/12/AdobeStock_121069878-scaled.jpeg"
                alt="Our Story"
                layout="fill"
                objectFit="contain"
                className="rounded-lg shadow-lg"
              />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-4">Our Story</h3>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg px-4">
              We started with a mission to revolutionize the industry by bringing innovation and
              passion into our work.
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full h-64 md:h-72 lg:h-80">
              <Image
                src="https://supereval.com/wp-content/uploads/2022/12/AdobeStock_121069878-scaled.jpeg"
                alt="Our Vision"
                layout="fill"
                objectFit="contain"
                className="rounded-lg shadow-lg"
              />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-4">Our Vision</h3>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg px-4">
              Our vision is to create a world where technology empowers businesses and individuals
              to reach new heights.
            </p>
          </div>

          {/* Mission */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full h-64 md:h-72 lg:h-80">
              <Image
                src="https://supereval.com/wp-content/uploads/2022/12/AdobeStock_121069878-scaled.jpeg"
                alt="Our Mission"
                layout="fill"
                objectFit="contain"
                className="rounded-lg shadow-lg"
              />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-4">Our Mission</h3>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg px-4">
              We are committed to delivering high-quality solutions that drive success and foster
              innovation.
            </p>
          </div>
        </div>
      </section>

      <MediaEmbedded />

      <section>
        <div className="flex justify-between items-center min-h-10">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className={`w-full h-60 m-5 rounded-lg shadow-md border flex items-center justify-center relative 
            ${index % 2 === 0 ? 'mt-32' : 'mt-0'}`}
            >
              KPS {index + 1}
            </div>
          ))}
        </div>
      </section>

      <section className="w-[100%] mx-auto flex my-20">
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              >
                <div>
                  <Card className="w-full h-48 shadow-md">
                    <CardContent className="flex items-center justify-center h-full">
                      <span className="text-lg font-semibold">Review {index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </section>

      <ScrollToTop />

      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={BlurredShape}
            width={760}
            height={668}
            alt="Blurred shape"
          />
        </div>
        <div className="max-w6xl mx-auto px-4 sm:px-6">
          <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2
                data-aos="fade-up"
                className="my-5 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl"
              >
                Join the content-first platform
              </h2>

              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <Button className="mb-4 w-full sm:mb-0 sm:w-auto bg-gradient-to-t from-indigo-600 to-indigo-500 text-white shadow-lg hover:bg-indigo-700">
                    <span className="relative inline-flex items-center">
                      Start Building
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </Button>
                </div>

                <div data-aos="fade-up" data-aos-delay={600}>
                  <Button
                    variant="outline"
                    className="w-full sm:ml-4 sm:w-auto border-gray-600 text-gray-300 bg-gradient-to-b from-gray-800 to-gray-700 hover:bg-gray-600"
                  >
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// export default VideoBanner;

export default LandingPage;
