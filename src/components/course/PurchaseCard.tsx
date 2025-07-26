import React from 'react';
import { ExternalLink, Clock, MessageCircle, BookOpen, Target, Users, Award } from 'lucide-react';

interface PurchaseCardProps {
  course: {
    name: string;
    price: string;
    image: string;
    features: string[];
  };
}

const PurchaseCard = ({ course }: PurchaseCardProps) => {
  const featureIcons = {
    '500+ Hours of Video': Clock,
    '24/7 Doubt Support': MessageCircle,
    'Full Syllabus Coverage': BookOpen,
    'Mock Tests Included': Target,
    'Expert Instructors': Users,
    'Study Materials': Award
  };

  return (
    <div className="sticky top-24">
      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-48 object-cover"
        />
        
        <div className="p-6">
          <div className="text-3xl font-bold text-orange-500 mb-6">{course.price}</div>
          
          <a
            href="https://forms.google.com/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors font-semibold flex items-center justify-center mb-6"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Buy Now
          </a>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Course Features</h3>
            <ul className="space-y-3">
              {course.features.map((feature, index) => {
                const IconComponent = featureIcons[feature as keyof typeof featureIcons] || BookOpen;
                return (
                  <li key={index} className="flex items-center text-sm">
                    <IconComponent className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;