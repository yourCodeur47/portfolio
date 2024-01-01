import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy;</span>

        <div className="flex items-center lg:py-2">
          Codé avec <span className="text-primary text-2xl px-1 dark:text-primaryDark">&#9825;	</span> par&nbsp;
          <Link
            href="https://www.linkedin.com/in/ange-carmel-yoro-23b88985/"
            target="_blank"
            className="underline underline-offset-2"
          >
            Codeur47
          </Link>
        </div>

        <Link
          href="https://www.linkedin.com/in/ange-carmel-yoro-23b88985/"
          target="_blank"
          className="underline underline-offset-2"
        >
          Faites hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
