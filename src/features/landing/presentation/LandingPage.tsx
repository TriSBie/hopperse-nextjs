'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpCircle } from 'lucide-react';
import { Banner } from './components/Banner';
import { FioraSystem } from './components/FioraSystem';
import KPSSection from './components/KPSSection';
import OTS from './components/OTS';
import { ReviewSection } from './components/ReviewSection';
import VisionMission from './components/VisionMission';

const LandingPage = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hàm scroll về đầu trang
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Banner />
      <VisionMission />
      <KPSSection />
      <ReviewSection />
      <FioraSystem />
      <OTS />

      {/* Scroll to Top Button */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-all"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
        >
          <ArrowUpCircle size={30} />
        </motion.button>
      )}
    </div>
  );
};

export default LandingPage;
