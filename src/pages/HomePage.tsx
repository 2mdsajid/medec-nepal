import React from 'react';
import HeroSection from '../components/home/HeroSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import StatsSection from '../components/home/StatsSection';
import FeaturedCoursesSection from '../components/home/FeaturedCoursesSection';
import NotesSection from '../components/home/NotesSection';
import FinalCTASection from '../components/home/FinalCTASection';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <WhyChooseSection />
      <StatsSection />
      <FeaturedCoursesSection />
      <NotesSection />
      <FinalCTASection />
    </main>
  );
};

export default HomePage;