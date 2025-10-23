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
    title: "Prompt Engineer & Data Specialist",
    company_name: "Micro1",
    iconBg: themeColors.ds_accent, 
    date: "May 2025 - Present",
    points: [
      "Designed and optimized prompts for large language models (LLMs) to improve accuracy and contextual relevance for the OpenAI project at Micro1.",
      "Collaborated with AI researchers and engineers to refine model performance and enhance response quality.",
      "Provided subject matter expertise to guide prompt strategies and support AI project development at Micro1.",
    ],
  },
  {
    title: "Spatial Data Analyst (Volunteer)",
    company_name: "EDA-ETH Environmentalist Development Association, Ethiopia",
    iconBg: themeColors.geo_accent, 
    date: "Sep 2024 - Present",
    points: [
      "Collected, processed, and analyzed geospatial data to support environmental research and projects in Ethiopia.",
      "Generated maps, visualizations, and reports to guide decision-making and project planning.",
      "Collaborated with environmental scientists and project teams to ensure data accuracy and applicability.",
      "Applied GIS and spatial analysis techniques to monitor and evaluate environmental initiatives.",
    ],
  },
  {
    title: "Programming Trainer (Part-time)",
    company_name: "ICOG Labs",
    iconBg: themeColors.dev_accent, 
    date: "Feb 2022 - Nov 2024",
    points: [
      "Delivered hands-on training in Python and JavaScript web development to students and aspiring developers.",
      "Designed curriculum and practical exercises to strengthen coding skills and problem-solving abilities.",
      "Mentored learners through projects, debugging sessions, and coding challenges to ensure practical understanding.",
      "Collaborated with team members to enhance training materials and learning outcomes.",
    ],
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
