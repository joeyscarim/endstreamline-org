import Link from 'next/link';
import { useState } from 'react';
import { clsx } from 'clsx';
import { BeakerIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <div className="bg-blue-900 text-white ">
        <div className="container mx-auto px-4 py-2 text-sm flex items-center">
          <EnvelopeIcon className="h-4 w-4 mr-1" />
          endstreamline@gmail.com
        </div>
      </div>

      <div className="  flex container mx-auto p-4 py-6 justify-between items-center text-gray-600">
        <Link href="/">
          <a className="text-3xl text-gray-500">
            {/* <BeakerIcon className="h-6 w-6 text-blue-500" /> */}
            <span className="font-bold">End</span>Streamline
          </a>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gray-500"
        >
          TOGGLE
        </button>

        <nav
          className={clsx(
            'overflow-hidden lg:h-auto absolute lg:relative bg-white top-32 lg:top-auto z-50 lg:right-auto lg:left-auto left-10 right-10   transition-[height] ease-in-out delay-150 duration-300',
            menuOpen ? ' h-[260px] ' : ' h-0 '
          )}
        >
          <div className="p-10 flex flex-col lg:flex-row gap-5 lg:p-0  ">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/what-is-operation-streamline">
              <a>What is Operation Streamline?</a>
            </Link>
            <Link href="/asylum">
              <a>Asylum</a>
            </Link>
            <Link href="/resources">
              <a>Resources</a>
            </Link>
            <Link href="/what-you-can-do">
              <a>What You Can Do</a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
