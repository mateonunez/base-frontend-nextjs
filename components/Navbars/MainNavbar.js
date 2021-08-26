import Link from 'next/link';
import MainDropdown from '../DropDowns/MainDropdown';
import { useState } from 'react';

export default function MainNavbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          {/* Title and open navbar button */}
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#mn">
                Base Frontend Next.JS
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
              <i className="fas fa-bars" />
            </button>
          </div>
          {/* Navbar opened */}
          <div
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none' +
              (isNavbarOpen ? ' block' : ' hidden')
            }>
            {/* Left position */}
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/mateonunez/base-frontend-nextjs">
                  <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" /> Docs
                </a>
              </li>
            </ul>
            {/* Right position */}
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <MainDropdown />
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/mateonunez"
                  target="_blank"
                  rel="noreferrer">
                  <i className="text-blueGray-400 fab fa-github text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">GitHub</span>
                </a>
              </li>

              <li className="flex items-center">
                <button
                  className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button">
                  <a href="https://github.com/mateonunez/base-frontend-nextjs/archive/refs/heads/main.zip">
                    <i className="fas fa-arrow-alt-circle-down" /> Download
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
