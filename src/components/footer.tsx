import {
  Facebook,
  Github,
  Instagram,
  Twitter,
} from '@/components/shared/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React from 'react';

let Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(() => {
  return (
    <center>
      <div className="relative max-md:px-4 md:px-12 lg:px-24">
        <div className="w-full">
          <div className="flex items-center justify-center rounded-3xl bg-black py-8 max-md:flex-wrap max-md:gap-8 lg:px-10">
            <div className="w-full px-4 text-start font-bold text-white max-md:px-4 max-md:text-2xl lg:px-12 lg:text-4xl">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </div>
            <div className="flex w-full flex-col gap-4 px-12 max-md:items-center max-md:px-4 lg:w-auto">
              <Input
                type="email"
                placeholder="Email"
                className="w-full rounded-3xl max-md:w-full"
              />
              <Button
                variant={'outline'}
                className="w-full rounded-3xl bg-white text-center max-md:w-full"
              >
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-between bg-primary-foreground max-lg:flex-wrap">
          <div className="text-start">
            <div className="text-3xl font-bold text-black">SHOP.CO</div>
            <div className="md:max-w-full lg:w-40">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </div>
            <div className="flex gap-1">
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
          <div className="text-start">
            <div className="text-3xl font-bold text-black">COMPANY</div>
            <Link href={'#'}>
              <div className="text-base font-normal bg-blend-darken">About</div>
            </Link>
            <Link href={'#'}>
              <div className="text-base font-normal bg-blend-darken">
                Features
              </div>
            </Link>
            <Link href={'#'}>
              <div className="text-base font-normal bg-blend-darken">Works</div>
            </Link>
            <Link href={'#'}>
              <div className="text-base font-normal bg-blend-darken">
                Career
              </div>
            </Link>
          </div>
          <div className="text-start">
            <div className="text-3xl font-bold text-black">HELP</div>

            <Link href={'#'}>
              <div className="text-base font-normal bg-blend-darken">
                Customer Support
              </div>
            </Link>
            <Link href={'#'}>
              <div className="text-base font-normal bg-blend-darken">
                Delivery Details
              </div>
            </Link>
            <Link href={'#'}>
              <div className="text-base font-normal bg-blend-darken">
                Terms & Conditions
              </div>
            </Link>
            <Link href={'#'}>
              <div className="text-base font-normal bg-blend-darken">
                Privacy Policy
              </div>
            </Link>
          </div>
          <div className="text-start">
            <div className="text-3xl font-bold text-black">FAQ</div>

            <Link href={'#'}>
              <div className="text-base font-normal bg-blend-darken">
                Account
              </div>
            </Link>
            <Link href={'#'}>
              <div className="text-base font-normal bg-blend-darken">
                Manage Deliveries
              </div>
            </Link>
            <Link href={'#'}>
              <div className="text-base font-normal bg-blend-darken">
                Orders
              </div>
            </Link>
            <Link href={'#'}>
              <div className="text-base font-normal bg-blend-darken">
                Payments
              </div>
            </Link>
          </div>
          <div className="text-start">
            <div className="text-3xl font-bold text-black">Resources</div>
            <Link href={'#'}>
              <div className="text-base font-normal bg-blend-darken">
                Free eBooks
              </div>
            </Link>
            <Link href={'#'}>
              <div className="text-base font-normal bg-blend-darken">
                Development Tutorial
              </div>
            </Link>
            <Link href={'#'}>
              <div className="text-base font-normal bg-blend-darken">
                How to - Blog
              </div>
            </Link>
            <Link href={'#'}>
              <div className="text-base font-normal bg-blend-darken">
                Youtube Playlist
              </div>
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-gray-300 pt-4 text-sm">
            <div>Shop.co © 2000-2023, All Rights Reserved</div>
            <div className="flex space-x-4">
              {/* <img src="/visa.svg" alt="Visa" className="h-6" />
              <img src="/paypal.svg" alt="PayPal" className="h-6" />
              <img src="/mastercard.svg" alt="MasterCard" className="h-6" />
              <img src="/apple-pay.svg" alt="Apple Pay" className="h-6" />
              <img src="/google-pay.svg" alt="Google Pay" className="h-6" /> */}
            </div>
          </div>
        </div>
      </div>
    </center>
  );
});

Footer.displayName = 'Footer';

export default Footer;
