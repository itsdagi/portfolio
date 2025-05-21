import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Theme colors (from tailwind.config.cjs)
const themeColors = {
  ds_primary_bg: '#1A202C',
  ds_secondary_bg: '#2D3748',
  ds_accent: '#3182CE',
  ds_text_primary: '#E2E8F0',
  ds_text_secondary: '#A0AEC0',
  ds_highlight: '#63B3ED',
};

const experienceData = [
  {
    title: "AI Trainer",
    company_name: "Micro1",
    iconBg: themeColors.ds_accent, 
    date: "Jan 2023 - Present", // Placeholder date, user can fill this
    points: [
      "Developed and curated high-quality datasets for training large language models (LLMs).",
      "Performed data annotation, labeling, and validation to ensure data accuracy.",
      "Collaborated with AI researchers and engineers to refine model performance.",
      "Provided subject matter expertise for various AI projects.",
    ],
    // Placeholder for an actual icon for the timeline element.
    // For now, a simple div is used in ExperienceCard.
    // icon: <YourIconComponent /> or '/path/to/your/icon.png' 
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: themeColors.ds_secondary_bg,
        color: themeColors.ds_text_primary,
      }}
      contentArrowStyle={{ borderRight: `7px solid ${themeColors.ds_secondary_bg}` }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, color: '#fff' }} // Ensure icon color is visible
      icon={
        // A simple placeholder div for an icon.
        // Can be replaced with an actual image or SVG icon.
        <div className='flex justify-center items-center w-full h-full'>
          <div className="w-1/2 h-1/2 bg-ds-text-primary rounded-full opacity-70"></div>
        </div>
      }
    >
      <div>
        <h3 className='text-ds-text-primary text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='font-bold text-ds-highlight text-[18px]' // Tailwind classes for Micro1 "logo"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-ds-text-secondary text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-ds-text-secondary`}>
          What I have done
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-ds-text-primary`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
