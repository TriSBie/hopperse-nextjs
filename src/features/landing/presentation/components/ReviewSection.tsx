import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export const ReviewSection = () => {
  return (
    <section className="container mx-auto py-10">
      <Carousel className="w-full">
        <CarouselContent className="flex gap-4">
          {['Review 1', 'Review 2', 'Review 3', 'Review 4', 'Review 5', 'Review 6'].map(
            (review, index) => (
              <CarouselItem
                key={index}
                className="min-w-[250px] h-[100px] flex items-center justify-center border border-gray-300 rounded-lg bg-white shadow-md snap-start"
              >
                {review}
              </CarouselItem>
            ),
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
