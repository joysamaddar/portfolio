"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const liHoverAnim = {
    color: "#fff",
    transition: { ease: "easeIn", duration: 0.3 },
  };
  const ulAnim = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const liAnim = {
    hidden: { opacity: 0, x: "1.5rem" },
    show: { opacity: 1, x: "0", transition: { type: "spring", bounce: 0.3 } },
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex flex-row items-start justify-between pl-[3%] pr-[2%] pt-8 md:pt-12 text-xs select-none z-[997]">
        <motion.svg
          initial={{ opacity: 0, x: "-1.5rem" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", bounce: 0.3 }}
          className="w-6"
          width="45"
          height="47"
          viewBox="0 0 45 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.214 8.9203C18.0488 8.9203 14.1151 8.39387 10.4128 7.34102C6.71047 6.28817 3.23954 4.77832 0 2.81146V0C1.36523 0.844594 2.9098 1.61398 4.6337 2.30817C6.35759 3.01393 8.19719 3.62134 10.1525 4.13041C12.1078 4.63948 14.1093 5.03285 16.1572 5.31053C18.205 5.5882 20.224 5.72704 22.214 5.72704C24.8866 5.72704 27.5823 5.48407 30.3012 4.99814C33.0201 4.51221 35.6002 3.83538 38.0414 2.96765C40.4826 2.11148 42.6115 1.12227 44.4279 0V2.81146C41.1768 4.77832 37.7001 6.28817 33.9978 7.34102C30.2955 8.39387 26.3675 8.9203 22.214 8.9203Z"
            fill="white"
          />
          <path
            d="M14.8035 17.9705C14.8035 16.7672 15.0986 15.6681 15.6886 14.6731C16.2902 13.6781 17.0886 12.8856 18.0836 12.2955C19.0786 11.7055 20.1777 11.4046 21.3809 11.3931C22.5958 11.3931 23.6949 11.6881 24.6783 12.2782C25.6733 12.8682 26.4659 13.6608 27.0559 14.6558C27.6575 15.6623 27.9584 16.7672 27.9584 17.9705C27.9584 19.1853 27.6575 20.2845 27.0559 21.2679C26.4659 22.2629 25.6733 23.0554 24.6783 23.6455C23.6949 24.2471 22.5958 24.5479 21.3809 24.5479C20.1777 24.5479 19.0786 24.2471 18.0836 23.6455C17.0886 23.0554 16.2902 22.2629 15.6886 21.2679C15.0986 20.2845 14.8035 19.1853 14.8035 17.9705Z"
            fill="white"
          />
          <path
            d="M22.214 33.2293C18.0488 33.2293 14.1151 32.7029 10.4128 31.6501C6.71047 30.5972 3.23954 29.0873 0 27.1205V24.309C1.36523 25.1536 2.9098 25.923 4.6337 26.6172C6.35759 27.323 8.19719 27.9304 10.1525 28.4394C12.1078 28.9485 14.1093 29.3419 16.1572 29.6196C18.205 29.8972 20.224 30.0361 22.214 30.0361C24.8866 30.0361 27.5823 29.7931 30.3012 29.3072C33.0201 28.8212 35.6002 28.1444 38.0414 27.2767C40.4826 26.4205 42.6115 25.4313 44.4279 24.309V27.1205C41.1768 29.0873 37.7001 30.5972 33.9978 31.6501C30.2955 32.7029 26.3675 33.2293 22.214 33.2293Z"
            fill="white"
          />
          <path d="M23.9147 47H20.9991V32.2138H23.9147V47Z" fill="white" />
        </motion.svg>
        <motion.ul
          variants={ulAnim}
          initial="hidden"
          animate="show"
          className="flex flex-col items-end justify-center text-graytransparent uppercase"
        >
          <motion.li
            variants={liAnim}
            className="pb-1"
            whileHover={liHoverAnim}
          >
            ABOUT
          </motion.li>
          <motion.li
            variants={liAnim}
            className="py-1"
            whileHover={liHoverAnim}
          >
            Experience
          </motion.li>
          <motion.li
            variants={liAnim}
            className="py-1"
            whileHover={liHoverAnim}
          >
            Skills
          </motion.li>
          <motion.li
            variants={liAnim}
            className="py-1"
            whileHover={liHoverAnim}
          >
            Work
          </motion.li>
          <motion.li
            variants={liAnim}
            className="pt-1"
            whileHover={liHoverAnim}
          >
            Contact
          </motion.li>
        </motion.ul>
      </nav>
    </div>
  );
}
