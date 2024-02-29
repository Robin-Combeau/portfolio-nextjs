import { motion } from 'framer-motion';
import React from 'react';

interface HtmlSectionProps {
  id: string;
  scrollMt?: string;
  content: React.ReactNode;
}

const MotionSection: React.FC<HtmlSectionProps> = ({ id, content, scrollMt = 28 }) => {
  return (
    <motion.section
      id={`${id}`}
      className={`flex mb-10 flex-col items-center lg:flex-row lg:justify-center gap-y-4 lg:gap-y-0 scroll-mt-${scrollMt}`}
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {content}
    </motion.section>
  );
};

export default MotionSection;