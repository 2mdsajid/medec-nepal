import React from 'react';

const NotesSection = () => {
  return (
    <section id="notes" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Chapter <span className="text-orange-500">Notes</span>
          </h2>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-12">
            <p className="text-xl text-gray-300">
              No notes available at the moment. Please check back later!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotesSection;