'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import siteConfig from '@/data/siteConfig.json';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-50 flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
              <span className="font-display text-xl font-bold text-white">C</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-display text-lg font-bold leading-tight transition-colors duration-300 ${
                isScrolled ? 'text-secondary-900' : 'text-white'
              }`}>
                Core Digital
              </span>
              <span className={`text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-primary-600' : 'text-primary-300'
              }`}>
                Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 lg:flex">
            {siteConfig.navigation.header.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname.startsWith(item.href));
              
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? isScrolled ? 'text-primary-600' : 'text-white'
                        : isScrolled
                          ? 'text-secondary-700 hover:bg-secondary-100 hover:text-secondary-900'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${
                          isScrolled ? 'bg-primary-600' : 'bg-white'
                        }`}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`relative z-50 flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden ${
              isScrolled || isMobileMenuOpen ? 'hover:bg-secondary-100' : 'hover:bg-white/10'
            }`}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="flex h-5 w-6 flex-col items-center justify-center">
              <span
                className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
                  isScrolled || isMobileMenuOpen ? 'bg-secondary-900' : 'bg-white'
                } ${isMobileMenuOpen ? 'translate-y-[3px] rotate-45' : '-translate-y-1'}`}
              />
              <span
                className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
                  isScrolled || isMobileMenuOpen ? 'bg-secondary-900' : 'bg-white'
                } ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
                  isScrolled || isMobileMenuOpen ? 'bg-secondary-900' : 'bg-white'
                } ${isMobileMenuOpen ? '-translate-y-[3px] -rotate-45' : 'translate-y-1'}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex h-full flex-col px-6 pb-8 pt-24">
              <nav className="flex-1">
                <ul className="space-y-1">
                  {siteConfig.navigation.header.map((item, index) => {
                    const isActive = pathname === item.href;
                    
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center rounded-xl px-4 py-4 text-lg font-medium transition-colors ${
                            isActive
                              ? 'bg-primary-50 text-primary-600'
                              : 'text-secondary-700 hover:bg-secondary-50'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center text-center"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
