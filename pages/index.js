/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';

export default function Home() {
  const variants = {
    hidden: { opacity: 0, x: 2500, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 }
  };

  return (
    <>
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px overflow-x-hidden">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">Base Frontend Next.JS</h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="mt-12">
                <a
                  href="https://mateonunez.dev"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  rel="noreferrer">
                  Get started
                </a>
                <a
                  href="https://github.com/mateonunez"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                  rel="noreferrer">
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="enter"
          transition={{ duration: 1 }}
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px">
          <img
            src="/images/homepage_section_header.png"
            alt="Base Frontend Next.JS"
            layout="fill"
          />
        </motion.div>
      </section>
    </>
  );
}
