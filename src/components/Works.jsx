import React from "react";
import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, technologies } from "../constants"; // Imported technologies
import { fadeIn, textVariant } from "../utils/motion";

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  technologies, // Added technologies prop
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="group"> {/* Added group for group-hover effects */}
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-ds-secondary-bg p-5 rounded-2xl sm:w-[360px] w-full 
                   transition-all duration-300 ease-in-out 
                   hover:scale-105 hover:shadow-[0_0_20px_rgba(49,130,206,0.4)] 
                   border border-ds-secondary-bg/60 hover:border-ds-accent/70' // Added transitions, hover effects, border
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='bg-ds-accent w-10 h-10 rounded-full flex justify-center items-center cursor-pointer
                         transition-transform duration-300 ease-in-out group-hover:scale-110' // Added GitHub icon hover effect
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-ds-text-primary font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-ds-text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-3 items-center'> {/* Updated gap and items-center */}
          {tags.map((tag) => {
            const techData = technologies.find(t => t.name.toLowerCase() === tag.name.toLowerCase());
            return (
              <div key={`${name}-${tag.name}`} className='flex items-center gap-1 bg-ds-primary-bg/50 p-1 px-2 rounded-full'> {/* Pill style */}
                {techData && techData.icon ? (
                  <img src={techData.icon} alt={tag.name} className='w-4 h-4 object-contain' />
                ) : null}
                <p className={`text-[12px] ${techData ? 'text-ds-text-secondary' : tag.color}`}>
                  {tag.name}
                </p>
              </div>
            );
          })}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-ds-text-secondary`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-ds-text-primary`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-ds-text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively. {/* Updated description slightly */}
        </motion.p>
      </div>

      {/* Replace the existing mapping div with Swiper */}
      <div className='mt-20'> {/* Added a container for Swiper for potential padding/margin */}
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]} // Add Autoplay
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Default to 1 slide for smaller screens
          navigation // Enable navigation arrows
          pagination={{ clickable: true }} // Enable clickable pagination dots
          autoplay={{ delay: 5000, disableOnInteraction: false }} // Autoplay configuration
          loop={true} // Enable looping
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper" // Optional: for custom global styling if needed
        >
          {projects.map((project, index) => (
            <SwiperSlide key={`project-${index}`} style={{ height: 'auto' }}> {/* Ensure slides accommodate card height */}
              <ProjectCard
                index={index} // Pass index for motion.div variants
                technologies={technologies} // Pass technologies array
                {...project}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects"); // Changed ID to "projects"
