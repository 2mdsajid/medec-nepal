import React from 'react';
import { Video, BookOpen, Target, MessageCircle } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: Video,
      title: 'Daily Video Classes',
      description: 'Interactive live and recorded classes with expert instructors covering all topics systematically.'
    },
    {
      icon: BookOpen,
      title: '10,000+ Notes',
      description: 'Comprehensive study materials and notes prepared by subject matter experts and toppers.'
    },
    {
      icon: Target,
      title: 'Mock Tests & Quizzes',
      description: 'Practice with real exam patterns and get detailed performance analysis and feedback.'
    },
    {
      icon: MessageCircle,
      title: '24x7 Doubt Support',
      description: 'Get instant help from our expert mentors anytime, anywhere through chat and video calls.'
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-orange-500">Medec Nepal?</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-700/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600 hover:border-orange-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;