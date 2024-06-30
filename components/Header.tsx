import Link from "next/link";
import { useState } from "react";
import { clsx } from "clsx";
import { Bars3Icon, BeakerIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const currentPath = router.pathname;
  console.log(currentPath);
  // useRouter
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
          {/* TOGGLE */}
          <Bars3Icon className="h-6 w-6" />
        </button>

        <nav
          className={clsx(
            "overflow-hidden lg:h-auto absolute lg:relative bg-white top-32 lg:top-auto z-50 lg:right-auto lg:left-auto left-10 right-10   transition-[height] ease-in-out delay-150 duration-300",
            menuOpen ? " h-[260px] " : " h-0 "
          )}
        >
          <div className="p-10 flex flex-col lg:flex-row gap-5 lg:p-0  ">
            <Link href="/">
              <a className={clsx(currentPath == "/" && "text-blue-500")}>
                Home
              </a>
            </Link>
            <Link href="/what-is-operation-streamline">
              <a
                className={clsx(
                  currentPath == "/what-is-operation-streamline" &&
                    "text-blue-500"
                )}
              >
                What is Operation Streamline?
              </a>
            </Link>
            <Link href="/asylum">
              <a className={clsx(currentPath == "/asylum" && "text-blue-500")}>
                Asylum
              </a>
            </Link>
            <Link href="/resources">
              <a
                className={clsx(currentPath == "/resources" && "text-blue-500")}
              >
                Resources
              </a>
            </Link>
            <Link href="/what-you-can-do">
              <a
                className={clsx(
                  currentPath == "/what-you-can-do" && "text-blue-500"
                )}
              >
                What You Can Do
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
