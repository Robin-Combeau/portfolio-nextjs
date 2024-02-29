import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';

interface HtmlSectionProps {
  id: string;
  scrollMt?: string;
  content: React.ReactNode;
}

const MotionSection: React.ForwardRefRenderFunction<Element, HtmlSectionProps> = ({ id, content, scrollMt = "scroll-mt-24" }, ref) => {
  return (
    <motion.section
      id={id}
      className={`flex mb-10 flex-col items-center lg:flex-row lg:justify-center gap-y-4 lg:gap-y-0 ${scrollMt}`}
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      ref={ref as React.MutableRefObject<HTMLElement>}
    >
      {content}
    </motion.section>
  );
};

export default forwardRef(MotionSection);