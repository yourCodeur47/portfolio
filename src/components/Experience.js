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
        <p className="font-medium w-full md:text-sm"> {work}</p>
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
          Experiences
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Geomaticien - Assistant Solutions Numeriques"
              company="Mairie de Bouaké"
              time="nov. 2021 - juil. 2023"
              address="Mairie de Bouaké · Temps plein"
              work="
              En m'appuyant sur les technologies numériques, j'ai joué un rôle central dans l'avancement des objectifs du projet en créant des formulaires numériques pour l'acquisition de données et la géolocalisation des infrastructures urbaines.
              Mon expertise a facilité le suivi efficace des initiatives de reboisement.
              J'ai contribué à l'élaboration de diverses cartes thématiques, y compris, mais sans s'y limiter, les suivantes.
              "
            />
            <Details
              position="Télépilote Professionel"
              company="African Techno Lab"
              time="janv. 2021 - mars 2021"
              address="Abidjan, Côte d'Ivoire."
              work="Dans ce rôle, j'ai dirigé plusieurs missions de terrain impliquant l'utilisation de divers drones,
              notamment le Mavic 2 Pro et le Matrice 210 RTK, afin de réaliser des études environnementales et des inspections techniques complètes.
              Cette initiative a été entreprise pour le compte de la Compagnie ivoirienne d'électricité (CIE), en se concentrant principalement sur l'évaluation et la maintenance des pylônes électriques.
              Mes responsabilités consistaient non seulement à piloter les drones, mais aussi à assurer la précision et l'efficacité du processus de collecte des données"
            />
            <Details
              position="Géomaticien"
              company="nstitut National de Statistique"
              time="nov. 2019 - janv. 2020"
              address="Abidjan, Côte d'Ivoire"
              work="J'étais responsable de l'élaboration de cartes détaillées des zones de dénombrement pour le recensement
              de la population ivoirienne de 2019. Cela impliquait la délimitation stratégique et la visualisation des zones
              pour les activités de recensement, garantissant une collecte de données précise et efficace dans diverses régions.
              Mon rôle a été essentiel pour faciliter une approche organisée et systématique du processus de recensement national."
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;
