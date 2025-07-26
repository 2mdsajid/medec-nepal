import React from 'react';

interface CourseBannerProps {
  course: {
    name: string;
    image: string;
  };
}

const CourseBanner = ({ course }: CourseBannerProps) => {
  return (
    <div className="relative h-96 overflow-hidden">
      <img
        src={course.image}
        alt={course.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {course.name}
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;