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

const educationData = [
  {
    degree: "MSc in Data Science",
    institution: "Addis Ababa University",
    iconBg: themeColors.ds_accent, 
    date: "Sept 2024 - June 2026 (Expected)",
    points: [
      "Statistical computing with R, Python and Pandas",
      "Machine Learning principles and applications",
      "Data Engineering and big data technologies",
      "Advanced statistical modeling",
      "Research methodologies in data science",
    ],
    // Placeholder for an icon. A simple div is used below.
    // An actual academic icon (e.g., graduation cap) could be imported and used here.
  },
];

const EducationCard = ({ educationItem }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: themeColors.ds_secondary_bg,
        color: themeColors.ds_text_primary,
      }}
      contentArrowStyle={{ borderRight: `7px solid ${themeColors.ds_secondary_bg}` }}
      date={educationItem.date}
      iconStyle={{ background: educationItem.iconBg, color: '#fff' }} // Ensure icon color is visible
      icon={
        // A simple placeholder div for an icon (e.g., graduation cap).
        // Can be replaced with an actual image or SVG icon.
        <div className='flex justify-center items-center w-full h-full'>
          {/* Placeholder for a graduation cap icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2/3 h-2/3 text-ds-text-primary opacity-80">
            <path d="M12 3L1 9l5 2.18V18h12V11.18L23 9 12 3zm0 3.69L17.6 9 12 11.31 6.4 9 12 6.69zM19 16H5v-3.07l7-3.11 7 3.11V16z"/>
          </svg>
        </div>
      }
    >
      <div>
        <h3 className='text-ds-text-primary text-[24px] font-bold'>{educationItem.degree}</h3>
        <p
          className='font-semibold text-ds-highlight text-[18px]'
          style={{ margin: 0 }}
        >
          {educationItem.institution}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {educationItem.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className='text-ds-text-secondary text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-ds-text-secondary`}>
          My Learning Journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-ds-text-primary`}>
          Education.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {educationData.map((item, index) => (
            <EducationCard
              key={`education-${index}`}
              educationItem={item}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
