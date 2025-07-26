import React from 'react';
import { useParams } from 'react-router-dom';
import CourseBanner from '../components/course/CourseBanner';
import CourseContent from '../components/course/CourseContent';
import PurchaseCard from '../components/course/PurchaseCard';

const CourseDetailPage = () => {
  const { id } = useParams();
  
  // Mock course data - in a real app, this would come from an API
  const courseData = {
    id: parseInt(id || '1'),
    name: 'Pre-Medical Entrance 2025',
    price: 'NPR 12,999',
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Comprehensive course designed to help students excel in medical entrance examinations including CEE. This course covers all essential topics with expert guidance and extensive practice materials.',
    features: [
      '500+ Hours of Video',
      '24/7 Doubt Support',
      'Full Syllabus Coverage',
      'Mock Tests Included',
      'Expert Instructors',
      'Study Materials'
    ]
  };

  return (
    <div className="min-h-screen">
      <CourseBanner course={courseData} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <CourseContent course={courseData} />
          </div>
          <div className="lg:col-span-1">
            <PurchaseCard course={courseData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;