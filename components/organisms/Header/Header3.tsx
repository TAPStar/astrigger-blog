import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoFish } from "react-icons/io5";

type Props = {
  sticky: boolean;
  show: boolean;
  id?: string;
};

const Header3 = (props: Props) => {
  const { sticky, show, id } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // sm以下で表示するハンバーガーメニューのトグル動作
  const toggleHumbergerMenu = () => {
    setIsMenuOpen((prevState) => {
      const elementHeaderMenu = document.getElementById("header-humbergermenu")!;
      // オープン時
      if (prevState) {
        elementHeaderMenu.classList.remove("animate-fade-in");
        elementHeaderMenu.classList.add("animate-fade-out-top");
      }
      // クローズ時
      else {
        elementHeaderMenu.classList.remove("animate-fade-out-top", "invisible");
        elementHeaderMenu.classList.add("animate-fade-in");
      }
      return !prevState;
    });
  };

  return (
    <nav
      className={`${
        !show && "hidden"
      } z-10 bg-sky-900 shadow-sm transition duration-300 ${sticky && "sticky top-0"}`}
      id={id}
    >
      <div className={`flex flex-row h-full `}>
        <div className="w-full ml-8">
          <Link href="/blogs/all/1">
            <a className="text-lg font-bold transition-colors transform text-white lg:text-xl hover:text-gray-400">
              <div className="flex flex-row h-full items-center">
                <IoFish />
                <div className="mx-2">Gourami Engineering</div>
              </div>
            </a>
          </Link>
        </div>

        <div className="hidden sm:flex items-center h-full">
          <div className="mx-4 px-2 text-sm transform transition-colors text-gray-200 border-b-2 border-transparent hover:border-sky-500">
            <Link href="/#top-aboutme">
              <a>About</a>
            </Link>
          </div>
          <div className="mx-4 px-2 text-sm transform transition-colors text-gray-200 border-b-2 border-transparent hover:border-sky-500">
            <Link href="/blogs/all/1">
              <a>Blog</a>
            </Link>
          </div>
          <div className="mx-4 px-2 text-sm transform transition-colors text-gray-200 border-b-2 border-transparent hover:border-sky-500">
            <Link href="/works/all/1">
              <a>Works</a>
            </Link>
          </div>
          <div className="mx-4 px-2 text-sm transform transition-colors text-gray-200 border-b-2 border-transparent hover:border-sky-500">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </div>

        <div className="flex items-center sm:hidden mr-3 ml-auto ">
          <button
            type="button"
            className="my-auto text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            aria-label="toggle menu"
            onClick={toggleHumbergerMenu}
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>

        <div
          id="header-humbergermenu"
          className="absolute invisible w-full top-12 z-10 bg-gray-800 "
        >
          <div className="flex flex-col ">
            <Link href="/#top-aboutme">
              <a className="px-8 py-8 text-sm  text-gray-200 border-y border-gray-600 transition-colors transform duration-200  hover:bg-gray-600">
                About
              </a>
            </Link>
            <Link href="/blogs/all/1">
              <a className="px-8 py-8 text-sm  text-gray-200 border-y border-gray-600 transition-colors transform duration-200  hover:bg-gray-600">
                Blog
              </a>
            </Link>
            <Link href="/works/all/1">
              <a className="px-8 py-8 text-sm  text-gray-200 border-y border-gray-600 transition-colors transform duration-200  hover:bg-gray-600">
                Works
              </a>
            </Link>
            <Link href="/contact">
              <a className="px-8 py-8 text-sm  text-gray-200 border-y border-gray-600 transition-colors transform duration-200  hover:bg-gray-600">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header3;
