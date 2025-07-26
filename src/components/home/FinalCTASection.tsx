import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Success Journey?
        </h2>
        <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
          Join thousands of students who have achieved their dreams with Medec Nepal. 
          Start your preparation today!
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="#courses"
            className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            View Courses
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a
            href="https://forms.google.com/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
          >
            <PlayCircle className="mr-2 w-5 h-5" />
            Join Free Trial
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;