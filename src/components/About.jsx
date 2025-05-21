import React from "react";
import Tilt from "react-parallax-tilt"; // Updated import
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    className="tilt-container xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-ds-accent p-[1px] rounded-[20px] shadow-card' // Updated gradient to bg-ds-accent
    >
      <div
        className='bg-ds-secondary-bg rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' // Updated background
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-ds-text-primary text-[20px] font-bold text-center'> {/* Updated text color */}
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-ds-text-secondary text-[17px] max-w-3xl leading-[30px]' // Updated text color
      >
        I'm a skilled data science student with expertise in Python, R, Power BI, Streamlit, LangChain, and other tools. I have a passion for analyzing data, building predictive models, and creating interactive dashboards. I'm eager to collaborate on projects that leverage data to drive insights and solve real-world problems. Let's work together to turn data into actionable solutions!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
