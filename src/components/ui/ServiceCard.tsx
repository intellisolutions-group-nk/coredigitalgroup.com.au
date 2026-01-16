'use client';

import { motion } from 'framer-motion';
import { getServiceIcon, CheckIcon } from './Icons';

interface ServiceCardProps {
  title: string;
  shortDescription: string;
  icon: string;
  features?: string[];
  index?: number;
  showFeatures?: boolean;
}

export default function ServiceCard({
  title,
  shortDescription,
  icon,
  features = [],
  index = 0,
  showFeatures = false,
}: ServiceCardProps) {
  const IconComponent = getServiceIcon(icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="group relative"
    >
      <div className="card-elevated h-full">
        {/* Icon */}
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600 transition-all duration-300 group-hover:bg-primary-600 group-hover:text-white">
          <IconComponent className="h-7 w-7" />
        </div>

        {/* Content */}
        <h3 className="heading-4 mb-3 text-secondary-900">{title}</h3>
        <p className="body-text mb-4">{shortDescription}</p>

        {/* Features List */}
        {showFeatures && features.length > 0 && (
          <ul className="mt-6 space-y-3 border-t border-secondary-100 pt-6">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  <CheckIcon className="h-3 w-3" />
                </span>
                <span className="text-sm text-secondary-600">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Decorative gradient on hover */}
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
}
