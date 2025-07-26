import React, { useState } from 'react';
import { CheckCircle, User, HelpCircle, BookOpen } from 'lucide-react';

interface CourseContentProps {
  course: {
    name: string;
    description: string;
  };
}

const CourseContent = ({ course }: CourseContentProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'curriculum', label: 'Curriculum', icon: CheckCircle },
    { id: 'instructors', label: 'Instructors', icon: User },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
  ];

  const curriculum = {
    Physics: [
      'Mechanics and Properties of Matter',
      'Heat and Thermodynamics',
      'Waves and Acoustics',
      'Light and Optics',
      'Electricity and Magnetism',
      'Modern Physics'
    ],
    Chemistry: [
      'General and Physical Chemistry',
      'Inorganic Chemistry',
      'Organic Chemistry',
      'Applied Chemistry',
      'Environmental Chemistry'
    ],
    Zoology: [
      'Cell Biology and Genetics',
      'Evolutionary Biology',
      'Animal Physiology',
      'Ecology and Environment',
      'Applied Biology'
    ],
    Botany: [
      'Plant Structure and Function',
      'Plant Physiology',
      'Plant Ecology',
      'Plant Genetics and Breeding',
      'Economic Botany'
    ]
  };

  const instructors = [
    {
      name: 'Dr. Rajesh Sharma',
      subject: 'Physics',
      qualification: 'Ph.D. in Physics, 15+ years experience',
      bio: 'Expert in medical entrance physics with proven track record of student success.'
    },
    {
      name: 'Dr. Priya Patel',
      subject: 'Chemistry',
      qualification: 'M.Sc. Chemistry, 12+ years experience',
      bio: 'Specialized in organic and inorganic chemistry for competitive exams.'
    },
    {
      name: 'Dr. Amit Kumar',
      subject: 'Biology',
      qualification: 'Ph.D. in Biology, 10+ years experience',
      bio: 'Comprehensive knowledge in both zoology and botany for medical entrance.'
    }
  ];

  const faqs = [
    {
      question: 'What is the duration of this course?',
      answer: 'The course runs for 12 months with comprehensive coverage of all topics.'
    },
    {
      question: 'Are recorded lectures available?',
      answer: 'Yes, all live lectures are recorded and available for playback anytime.'
    },
    {
      question: 'How many mock tests are included?',
      answer: 'The course includes 50+ mock tests with detailed analysis and feedback.'
    },
    {
      question: 'Is doubt support really 24/7?',
      answer: 'Yes, our expert mentors are available round the clock for doubt resolution.'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Course Description</h3>
              <p className="text-gray-300 leading-relaxed">
                {course.description}
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">What You'll Learn</h3>
              <ul className="space-y-3">
                {[
                  'Master Physics, Chemistry, and Biology concepts for CEE',
                  'Develop effective time management and exam-taking strategies',
                  'Gain confidence through regular mock tests and analysis',
                  'Access to comprehensive study materials and notes',
                  'Get personalized feedback and improvement suggestions'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Requirements</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Completed Class 12 Science or equivalent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Basic understanding of Science subjects</span>
                </li>
              </ul>
            </div>
          </div>
        );

      case 'curriculum':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Course Curriculum</h3>
            {Object.entries(curriculum).map(([subject, topics]) => (
              <div key={subject} className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-orange-500 mb-4">{subject}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {topics.map((topic, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'instructors':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Meet Your Instructors</h3>
            <div className="space-y-6">
              {instructors.map((instructor, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white">{instructor.name}</h4>
                      <p className="text-orange-500 font-medium">{instructor.subject}</p>
                      <p className="text-gray-400 text-sm mb-2">{instructor.qualification}</p>
                      <p className="text-gray-300 text-sm">{instructor.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'faq':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-3">{faq.question}</h4>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex flex-wrap border-b border-gray-700 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-orange-500 text-orange-500'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <tab.icon className="w-4 h-4 mr-2" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {renderContent()}
    </div>
  );
};

export default CourseContent;