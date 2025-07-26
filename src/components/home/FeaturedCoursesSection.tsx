import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Eye } from 'lucide-react';

const FeaturedCoursesSection = () => {
  const courses = [
    {
      id: 1,
      name: 'Pre-Medical Entrance 2025',
      price: 'NPR 12,999',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400',
      tag: 'ONLINE'
    },
    {
      id: 2,
      name: 'CEE Physics Mastery',
      price: 'NPR 8,999',
      image: 'https://images.pexels.com/photos/8197497/pexels-photo-8197497.jpeg?auto=compress&cs=tinysrgb&w=400',
      tag: 'ONLINE'
    },
    {
      id: 3,
      name: 'Chemistry Complete Course',
      price: 'NPR 9,999',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400',
      tag: 'ONLINE'
    },
    {
      id: 4,
      name: 'Biology Comprehensive',
      price: 'NPR 10,999',
      image: 'https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg?auto=compress&cs=tinysrgb&w=400',
      tag: 'ONLINE'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-orange-500">Courses</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-700 rounded-xl overflow-hidden border border-gray-600 hover:border-orange-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {course.tag}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{course.name}</h3>
                <div className="text-2xl font-bold text-orange-500 mb-4">{course.price}</div>
                
                <div className="flex space-x-3">
                  <Link
                    to={`/course/${course.id}`}
                    className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition-colors text-center text-sm font-medium flex items-center justify-center"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Explore
                  </Link>
                  <a
                    href="https://forms.google.com/placeholder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors text-center text-sm font-medium flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;