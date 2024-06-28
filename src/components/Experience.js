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

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Professional Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Research Assistant"
              company="Applied Geomatics Research Group (AGRG), NSCC"
              time="Feb 2024 - May 2024"
              address="Middleton, NS, Canada"
              work="
              During my tenure, I processed and analyzed time series radar and optical satellite imagery to monitor the evolution and reconstruct the impact of the Tantallon and Shelburne wildfires in Nova Scotia. Additionally, I conducted comprehensive wildfire simulations
               using Prometheus and 3D Wave models to evaluate their accuracy in replicating the fires under identical weather conditions. My efforts provided critical insights that enhanced the accuracy and reliability of the 3D Wave model.
              "
            />
            <Details
              position="Geographic Information Systems and Digital Solutions Assistant"
              company="The City Hall of Bouake"
              time="nov. 2021 - juil. 2023"
              address="Bouake, Côte d'Ivoire"
              work="
              While at this position, I significantly improved the accuracy of urban planning decisions by 20%, leading to more effective sustainability initiatives through the
              development and maintenance of a comprehensive and up-to-date geospatial database. I spearheaded the integration of GIS data into project workflows and databases by developing
              GIS applications that automated processes, reduced processing time by 30%, and enhanced data accuracy and integrity. Furthermore, I reduced decision-making time
              "
            />
            <Details
              position="Geomatics Engineer"
              company="Institut National de la Statistique"
              time="nov. 2019 - janv. 2020"
              address="Abidjan, Côte d'Ivoire"
              work="I developed detailed enumeration area maps for the 2020 Ivorian Population Census, enabling strategic demarcation and efficient data collection, which facilitated a systematic and precise national census process, achieving an average coverage rate of 90% and ensuring accurate demographic insights. Additionally,
               I assisted in the analysis and dissemination of geographic data to various provincial departments, ensuring the accuracy and relevancy of the information."
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;
