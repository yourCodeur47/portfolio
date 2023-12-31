import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <AboutIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor of Science in Computer Science"
            time="Sep 2023 - Mars 2024"
            place="NSCC Nova Scotia Community College"
            info="Compétences : PostgreSQL · ArcGIS Arcade · Thematic Mapping · ArcGIS Pro · Satellite Image Atmospheric Correction
            · Satellite Image Enhancement · ArcGIS Notebooks · CATALYST Professional · ArcGIS Online · ArcPy · Analytical Skills
            · Python (Programming Language) · Quantum GIS · Relational Databases · R (Programming Language) · SQL
            · Problem Solving · Satellite image Classification · Machine Learning · HTML5 / Cascading Style Sheets (CSS)
            · PyQGIS · Satellite Image Analysis & Interpretation"
          />

          <Details
            type="Master, Télédétection et Systèmes d'Informations Géographiques"
            time="2016-2019"
            place="Centre Universitaire de Recherche et d'Application en TélédétectionCentre Universitaire de Recherche et d'Application en Télédétection"
            info="Compétences : ENVI & SNAP toolbox · Thematic Mapping · Satellite Image Atmospheric Correction · Analytical Skills ·
            Quantum GIS · Relational Databases · Problem Solving · Satellite image Classification · Satellite Image Analysis & Interpretation"
          />

          <Details
            type="
                License, GéologieLicense, Géologie
                "
            time="2012-2015"
            place="Université Félix Houphouët-BoignyUniversité Félix Houphouët-Boigny"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
