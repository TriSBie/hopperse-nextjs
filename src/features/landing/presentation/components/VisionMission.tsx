import Image from 'next/image';
import React from 'react';
import { MediaEmbedded } from './MediaEmbedded';

const VisionMission = () => {
  return (
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
            Our vision is to create a world where technology empowers businesses and individuals to
            reach new heights.
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

      <MediaEmbedded />
    </section>
  );
};

export default VisionMission;
