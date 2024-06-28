import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profileTiefin from "../../public/images/profile/profiletien.jpeg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Certificates from "@/components/Certificates";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <title>Portfolio - Mamadou Tiefin Coulibaly</title>
        <meta name="description" content="Learn more about CodeBucks, a Next.js developer with a passion for 
        creating innovative solutions. Discover tips for building a developer portfolio and insights on 
        full-stack development, front-end development, and back-end development." />
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Meet the Geospatial Enthusiast !"
            className="mb-16 !text-6xl !leading-tight lg:!text-5xl sm:!text-4xl xs:!text-2xl sm:mb-6"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium ">
                I&apos;m <strong>Mamadou Tiefin Coulibaly</strong>, a dedicated GIS professional with a Master’s degree in Remote Sensing and
                GIS and a Bachelor’s degree in Earth Sciences. I also hold a Geographic Information Systems Graduate Certificate from the Centre of Geographic Sciences (COGS).
              </p>
              <p className="my-4 font-medium">
                My skills include advanced proficiency in Esri applications and mobile GIS solutions. I have a strong background in Python, JavaScript (HTML/CSS), SQL, PL/SQL, and ArcGIS Arcade, along with robust database management competencies with PostgreSQL/PostGIS and Oracle Spatial.
                Throughout my career, I&apos;ve integrated GIS data into workflows, reduced processing time, enhanced data accuracy, and conducted comprehensive spatial analyses
              </p>
              <p className="font-medium">
                I&apos;m fluent in English and French, with strong communication, organizational, and problem-solving abilities. My work has been recognized with multiple Esri e-Training certificates and as an Esri Canada Centres of Excellence Student Associate.
                I&apos;m passionate about leveraging geospatial technologies to optimize database performance and create high-quality cartographic products and data visualizations.
              </p>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            ">
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={profileTiefin}
                alt="Codebucks"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
          </div>

          <Education />
          <Skills />
          <Experience />
          <Certificates />
        </Layout>
      </main>
    </>
  );
}
