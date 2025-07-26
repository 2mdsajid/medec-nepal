import React from 'react';
import { Users, FileText, Play, BookMarked } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: '5000+',
      label: 'Happy Students',
      color: 'text-blue-400'
    },
    {
      icon: FileText,
      number: '1000+',
      label: 'Mock Tests',
      color: 'text-green-400'
    },
    {
      icon: Play,
      number: '500+',
      label: 'Video Lectures',
      color: 'text-purple-400'
    },
    {
      icon: BookMarked,
      number: '10000+',
      label: 'Notes',
      color: 'text-orange-400'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by <span className="text-orange-500">Thousands of Learners</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gray-800 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;