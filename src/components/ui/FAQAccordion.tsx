'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.svg
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3 }}
      className="h-5 w-5 flex-shrink-0 text-primary-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </motion.svg>
  );
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl border border-secondary-200 bg-white transition-all duration-300 hover:border-primary-300"
        >
          <button
            onClick={() => toggleItem(index)}
            className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors"
          >
            <span className="font-display text-lg font-semibold text-secondary-900">
              {item.question}
            </span>
            <ChevronIcon isOpen={openIndex === index} />
          </button>
          
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="border-t border-secondary-100 bg-secondary-50/50 px-6 py-5">
                  <p className="text-secondary-600 leading-relaxed">{item.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
