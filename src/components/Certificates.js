import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">
          {work}
        </p>
      </motion.div>
    </li>
  );
};

const Certificates = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-7xl mb-10 w-full text-center md:text-10xl xs:text-4xl md:mb-10">
          Awards, Certificates & Others
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <ul className="w-full flex flex-col items-start justify-between ml-10 xs:ml-2">
            <li>
              Esri Canada Centres of Excellence Student Associate Award
            </li>
            <li>
              20+  Esri e-Training certificates
            </li>
            <li>
              WHMIS & OH&S certified
            </li>
            <li>
              Vice President of Services, Student Association, AVC-COGS Campus
            </li>
          </ul>
        </div>
        </div>
    );
};

export default Certificates;
