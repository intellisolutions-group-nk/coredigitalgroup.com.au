import Link from 'next/link';
import siteConfig from '@/data/siteConfig.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-secondary-300">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                <span className="font-display text-xl font-bold text-white">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold leading-tight text-white">
                  Core Digital
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-primary-400">
                  Group
                </span>
              </div>
            </Link>
            <p className="mt-6 max-w-md text-secondary-400">
              Professional IT services and digital marketing solutions. 
              We help businesses grow their online presence and achieve measurable results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {siteConfig.navigation.header.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-secondary-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-secondary-400 transition-colors hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="text-secondary-400">
                <address className="not-italic">
                  {siteConfig.contact.address.street}
                  <br />
                  {siteConfig.contact.address.suburb} {siteConfig.contact.address.state}{' '}
                  {siteConfig.contact.address.postcode}
                  <br />
                  {siteConfig.contact.address.country}
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="container-custom flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <div className="text-center text-sm text-secondary-500 sm:text-left">
            <p>
              {siteConfig.brand.legalName}
              <span className="mx-2">|</span>
              ACN: {siteConfig.brand.acn}
              <span className="mx-2">|</span>
              {siteConfig.brand.country}
            </p>
            <p className="mt-1">
              &copy; {currentYear} {siteConfig.brand.name}. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-6">
            {siteConfig.navigation.footer.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-secondary-500 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
