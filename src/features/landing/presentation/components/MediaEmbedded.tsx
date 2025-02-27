import Image from 'next/image';

export const MediaEmbedded = () => {
  return (
    <section className="container mx-auto py-20 px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/images/vision.jpg"
            alt="Our Vision"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Nội dung Vision */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We strive to be the leading provider of innovative solutions, shaping a sustainable and
            connected future for businesses and communities worldwide.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-16">
        {/* Nội dung Mission */}
        <div className="space-y-4 text-center md:text-left order-2 md:order-1">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our mission is to empower businesses with cutting-edge technologies, fostering growth
            and sustainability through continuous innovation and exceptional service.
          </p>
        </div>

        {/* Hình ảnh bên phải */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] order-1 md:order-2">
          <Image
            src="/images/mission.jpg"
            alt="Our Mission"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
