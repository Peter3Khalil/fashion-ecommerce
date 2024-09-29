import {
  FaApplePay,
  FaCcMastercard,
  FaCcVisa,
  Facebook,
  FaGooglePay,
  FaPaypal,
  Github,
  Instagram,
  Twitter,
} from '@/components/shared/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React from 'react';

const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(() => {
  return (
    <footer className="relative mt-28 bg-gray-100">
      {/* Newsletter Section */}
      <div className="absolute left-1/2 top-0 m-auto w-10/12 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-black py-8 text-white">
        <div className="container flex flex-row items-center max-md:flex-col max-sm:flex-col lg:justify-between lg:px-24">
          <h2 className="text-center text-3xl font-bold lg:text-left lg:text-4xl">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="flex-col gap-4 lg:mt-0 lg:flex lg:items-center">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="ml-0 w-full rounded-3xl bg-white text-black lg:ml-4 lg:w-auto"
            />
            <Button
              variant={'outline'}
              className="ml-0 w-full rounded-3xl bg-white text-black lg:ml-4 lg:w-auto"
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="container mx-auto px-4 py-12 pt-32 md:px-[18px] lg:px-[108px]">
        <div className="grid gap-8 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-5 lg:gap-16">
          {/* Shop Info */}
          <div className="text-start max-md:col-span-2">
            <h3 className="mb-4 text-3xl font-bold text-black">SHOP.CO</h3>
            <p className="mb-4 max-w-xs text-gray-600">
              We have clothes that suit your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="flex space-x-2">
              <Link href={'#'} className="rounded-full border border-black p-2">
                <Twitter />
              </Link>
              <Link href={'#'} className="rounded-full border border-black p-2">
                <Facebook />
              </Link>
              <Link href={'#'} className="rounded-full border border-black p-2">
                <Instagram />
              </Link>
              <Link href={'#'} className="rounded-full border border-black p-2">
                <Github />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="text-start">
            <h4 className="mb-4 text-xl font-bold text-black">COMPANY</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Works</Link>
              </li>
              <li>
                <Link href="#">Career</Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="text-start">
            <h4 className="mb-4 text-xl font-bold text-black">HELP</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#">Customer Support</Link>
              </li>
              <li>
                <Link href="#">Delivery Details</Link>
              </li>
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* FAQ Links */}
          <div className="text-start">
            <h4 className="mb-4 text-xl font-bold text-black">FAQ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#">Account</Link>
              </li>
              <li>
                <Link href="#">Manage Deliveries</Link>
              </li>
              <li>
                <Link href="#">Orders</Link>
              </li>
              <li>
                <Link href="#">Payments</Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="text-start">
            <h4 className="mb-4 text-xl font-bold text-black">RESOURCES</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#">Free eBooks</Link>
              </li>
              <li>
                <Link href="#">Development Tutorial</Link>
              </li>
              <li>
                <Link href="#">How to - Blog</Link>
              </li>
              <li>
                <Link href="#">Youtube Playlist</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-300 pt-4 text-sm lg:flex-row">
          <div className="mb-4 lg:mb-0">
            Shop.co © 2000-2023, All Rights Reserved
          </div>
          <div className="flex space-x-4">
            <FaCcVisa className="h-6 w-6" />
            <FaPaypal className="h-6 w-6" />
            <FaCcMastercard className="h-6 w-6" />
            <FaApplePay className="h-6 w-6" />
            <FaGooglePay className="h-6 w-6" />
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
